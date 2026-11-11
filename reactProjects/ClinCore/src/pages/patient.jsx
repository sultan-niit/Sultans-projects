import { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import ButtonComponents from "../components/ButtonComponents";
import PatientsTable from "../components/PatientsTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";
import { getStoredPatients, removeStoredPatient, deletePatientProfile, fetchAllPatients } from "../api/patient";
import { fetchAllDoctors, getStoredDoctors } from "../api/doctor";
import { fetchAllRooms, getStoredRooms } from "../api/room";

async function addAssignmentNames(patients) {
  const [doctorsResult, roomsResult] = await Promise.allSettled([
    fetchAllDoctors(),
    fetchAllRooms(),
  ]);
  const doctors = doctorsResult.status === "fulfilled" &&
    Array.isArray(doctorsResult.value) &&
    doctorsResult.value.length > 0
    ? doctorsResult.value
    : getStoredDoctors();
  const rooms = roomsResult.status === "fulfilled" &&
    Array.isArray(roomsResult.value) &&
    roomsResult.value.length > 0
    ? roomsResult.value
    : getStoredRooms();
  const doctorNames = new Map(
    doctors.map((doctor) => [
      String(doctor.doctorId || doctor.doctor_id || doctor.id).toLowerCase(),
      doctor.name || doctor.fullName || doctor.doctor_name,
    ])
  );
  const roomNames = new Map(
    rooms.map((room) => [
      String(room.roomId || room.room_id || room.id).toLowerCase(),
      room.roomName || room.room_name || room.name,
    ])
  );

  return patients.map((patient) => ({
    ...patient,
    doctorName:
      patient.doctorName ||
      patient.doctor_name ||
      doctorNames.get(String(patient.doctorId || patient.doctor_id || "").toLowerCase()) ||
      patient.doctor,
    roomName:
      patient.roomName ||
      patient.room_name ||
      roomNames.get(String(patient.roomId || patient.room_id || "").toLowerCase()) ||
      patient.room,
  }));
}

export default function Patients() {
  const {
    openAddDrawer,
    showToast
  } = useModalState();
  const filters = FILTER_CONFIGS.patient;
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(typeof navigator !== "undefined" ? !navigator.onLine : false);
  const [searchQuery, setSearchQuery] = useState("");
  const [treatmentFilter, setTreatmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const fetchPatientsData = async (showLoadingSpinner = true) => {
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOffline(true);
      setIsLoading(false);
      return;
    }
    if (showLoadingSpinner) {
      setIsLoading(true);
    }
    try {
      const fetched = await addAssignmentNames(await fetchAllPatients());
      if (fetched && fetched.length > 0) {
        setPatients(fetched);
        setIsOffline(false);
      } else {
        setPatients(await addAssignmentNames(getStoredPatients()));
        setIsOffline(false);
      }
    } catch (err) {
      console.warn("Error fetching all patients on tab load:", err?.message || err);
      const isNetErr = typeof navigator !== "undefined" && !navigator.onLine || err?.code === "ERR_NETWORK" || err?.message?.toLowerCase().includes("network error") || err?.isNetworkError;
      if (isNetErr) {
        setIsOffline(true);
      } else {
        setPatients(await addAssignmentNames(getStoredPatients()));
      }
    } finally {
      if (showLoadingSpinner) {
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      } else {
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    const initialFetch = window.setTimeout(() => fetchPatientsData(true), 0);
    const handleOnline = () => {
      setIsOffline(false);
      fetchPatientsData(true);
    };
    const handleOffline = () => {
      setIsOffline(true);
    };
    const handleStorage = () => setPatients(getStoredPatients());
    const refreshPatients = async e => {
      if (e?.detail?.isEdit && e?.detail?.record) {
        const updated = e.detail.record;
        setPatients(prev => prev.map(p => String(p.patientId) === String(updated.patientId) ? {
          ...p,
          ...updated
        } : p));
        return;
      }
      try {
        const fetched = await addAssignmentNames(await fetchAllPatients());
        if (fetched && fetched.length > 0) {
          setPatients(fetched);
          setIsOffline(false);
        } else {
          setPatients(await addAssignmentNames(getStoredPatients()));
        }
      } catch {
        setPatients(await addAssignmentNames(getStoredPatients()));
      }
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("clincore:patient-changed", refreshPatients);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.clearTimeout(initialFetch);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("clincore:patient-changed", refreshPatients);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
  const filteredPatients = useMemo(() => {
    return patients.filter(patient => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = (patient.name || patient.fullName || "").toLowerCase().includes(query);
        const idMatch = String(patient.patientId || "").toLowerCase().includes(query);
        const emailMatch = (patient.email || patient.emailAddress || "").toLowerCase().includes(query);
        const treatmentMatch = (patient.treatment || "").toLowerCase().includes(query);
        const doctorMatch = (patient.doctor || "").toLowerCase().includes(query);
        const roomMatch = (patient.room || "").toLowerCase().includes(query);
        if (!nameMatch && !idMatch && !emailMatch && !treatmentMatch && !doctorMatch && !roomMatch) {
          return false;
        }
      }
      if (treatmentFilter && treatmentFilter !== "All Treatment") {
        if ((patient.treatment || "").toLowerCase() !== treatmentFilter.toLowerCase()) {
          return false;
        }
      }
      if (statusFilter && statusFilter !== "All Status") {
        if ((patient.status || "").toLowerCase() !== statusFilter.toLowerCase()) {
          return false;
        }
      }
      return true;
    });
  }, [patients, searchQuery, treatmentFilter, statusFilter]);
  const handleDeletePatient = async patientId => {
    if (window.confirm("Are you sure you want to delete this patient profile?")) {
      try {
        const res = await deletePatientProfile(patientId);
        if (res?.patients) {
          setPatients(res.patients);
        } else {
          const updated = removeStoredPatient(patientId);
          setPatients(updated);
        }
        showToast("Patient record deleted successfully.");
      } catch (error) {
        console.error("Unable to delete patient:", error);
        showToast(error.message || "Unable to delete patient.", "error");
      }
    }
  };
  const handleClearFilters = () => {
    setSearchQuery("");
    setTreatmentFilter("");
    setStatusFilter("");
  };
  return <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
          <div className="doctors-main-card">
            <div className="doctors-toolbar">
              <div className="doctors-filters-group">
                <div className="table-search-pill">
                  <i className="bi bi-search"></i>
                  <input type="text" id="patientSearchInput" placeholder="Search name, ID, treatment, etc" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                  {searchQuery && <button type="button" aria-label="Clear patient search" onClick={() => setSearchQuery("")}>
                      <i className="bi bi-x-circle-fill"></i>
                    </button>}
                </div>

                <select id="treatmentFilter" className="filter-dropdown-btn" value={treatmentFilter} onChange={e => setTreatmentFilter(e.target.value)}>
                  <option value="">Treatment</option>
                  {filters.treatment.options.filter(option => option !== "All Treatment").map(option => <option key={option} value={option}>
                        {option}
                      </option>)}
                </select>

                <select id="statusFilter" className="filter-dropdown-btn" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                  <option value="">Status</option>
                  {filters.status.options.filter(option => option !== "All Status").map(option => <option key={option} value={option}>
                        {option}
                      </option>)}
                </select>

                {(treatmentFilter || statusFilter || searchQuery) && <button type="button" className="btn-clear-filters-pill" onClick={handleClearFilters} title="Clear all active filters">
                    <i className="bi bi-arrow-counterclockwise"></i>
                    <span>Reset</span>
                  </button>}
              </div>

              <div className="doctors-toolbar-actions">
                <ButtonComponents className="btn-add-doctor-action" icon="bi-plus-lg" title="Add Patient" onClick={() => openAddDrawer("patient")} />
              </div>
            </div>

            <PatientsTable patients={filteredPatients} totalCount={patients.length} searchTerm={searchQuery} isLoading={isLoading} isOffline={isOffline} onRetry={() => fetchPatientsData(true)} onAddPatient={() => openAddDrawer("patient")} onDeletePatient={handleDeletePatient} onClearFilters={handleClearFilters} />
          </div>

          
          
          
          <PageFooter className="patients-page-footer" leftClass="patients-footer-left" socialsClass="patients-footer-socials" />
        </div>
      </div>
    </div>;
}
