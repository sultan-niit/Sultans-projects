import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import ButtonComponents from "../components/ButtonComponents";
import DoctorsTable from "../components/DoctorsTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { getStoredDoctors, removeStoredDoctor, deleteDoctorProfile, fetchAllDoctors, syncAllDoctorsWithApi } from "../api/doctor";
import { DEPARTMENT_NAMES } from "../js/sessionData";
export default function Doctors() {
  const {
    openAddDrawer,
    showToast
  } = useModalState();
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(typeof navigator !== "undefined" ? !navigator.onLine : false);
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [specialistFilter, setSpecialistFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const fetchDoctorsData = async (showLoadingSpinner = true) => {
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOffline(true);
      setIsLoading(false);
      return;
    }
    if (showLoadingSpinner) {
      setIsLoading(true);
    }
    try {
      const fetched = await fetchAllDoctors();
      if (fetched && fetched.length > 0) {
        setDoctors(fetched);
        setIsOffline(false);
      } else {
        setDoctors(getStoredDoctors());
        setIsOffline(false);
      }
    } catch (err) {
      console.warn("Error fetching all doctors on tab click:", err?.message || err);
      const isNetErr = typeof navigator !== "undefined" && !navigator.onLine || err?.code === "ERR_NETWORK" || err?.message?.toLowerCase().includes("network error") || err?.isNetworkError;
      if (isNetErr) {
        setIsOffline(true);
      } else {
        setDoctors(getStoredDoctors());
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
    fetchDoctorsData(true);
    const handleOnline = () => {
      setIsOffline(false);
      fetchDoctorsData(true);
    };
    const handleOffline = () => {
      setIsOffline(true);
    };
    const refreshDoctors = async e => {
      if (e?.detail?.isEdit && e?.detail?.record) {
        const updated = e.detail.record;
        setDoctors(prev => prev.map(d => d.doctorId && d.doctorId === updated.doctorId || d.doctor_id && d.doctor_id === updated.doctorId || d.doctorId && d.doctorId === updated.doctor_id ? {
          ...d,
          ...updated
        } : d));
        return;
      }
      try {
        const fetched = await fetchAllDoctors();
        if (fetched && fetched.length > 0) {
          setDoctors(fetched);
          setIsOffline(false);
        } else {
          setDoctors(getStoredDoctors());
        }
      } catch {
        setDoctors(getStoredDoctors());
      }
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("clincore:doctor-changed", refreshDoctors);
    window.addEventListener("storage", () => setDoctors(getStoredDoctors()));
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("clincore:doctor-changed", refreshDoctors);
      window.removeEventListener("storage", () => setDoctors(getStoredDoctors()));
    };
  }, []);
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = (doc.name || doc.fullName || doc.doctor_name || doc.doctorName || "").toLowerCase().includes(query);
        const idMatch = (doc.doctorId || doc.doctor_id || "").toLowerCase().includes(query);
        const emailMatch = (doc.emailAddress || doc.email || doc.email_address || "").toLowerCase().includes(query);
        const specMatch = (doc.specialist || "").toLowerCase().includes(query);
        const deptMatch = (doc.department || doc.departmentName || "").toLowerCase().includes(query);
        if (!nameMatch && !idMatch && !emailMatch && !specMatch && !deptMatch) {
          return false;
        }
      }
      if (departmentFilter && (doc.department || doc.departmentName || "").toLowerCase() !== departmentFilter.toLowerCase()) {
        return false;
      }
      if (specialistFilter && (doc.specialist || "").toLowerCase() !== specialistFilter.toLowerCase()) {
        return false;
      }
      if (statusFilter) {
        const isAvail = doc.status === "Available" || doc.status === "Active" || doc.statusId === "A" || doc.status_id === "A";
        if (statusFilter === "Available" && !isAvail) return false;
        if (statusFilter === "Unavailable" && isAvail) return false;
      }
      return true;
    });
  }, [doctors, searchQuery, departmentFilter, specialistFilter, statusFilter]);
  const handleDeleteDoctor = async doctorId => {
    if (window.confirm("Are you sure you want to delete this doctor profile?")) {
      const res = await deleteDoctorProfile(doctorId);
      if (res?.doctors) {
        setDoctors(res.doctors);
      } else {
        const updated = removeStoredDoctor(doctorId);
        setDoctors(updated);
      }
      showToast("Doctor profile deleted successfully.");
    }
  };
  const handleClearFilters = () => {
    setSearchQuery("");
    setDepartmentFilter("");
    setSpecialistFilter("");
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
                  <input type="text" id="doctorSearchInput" placeholder="Search name, ID, specialist, etc" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                  {searchQuery && <button type="button" style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted-color)",
                  cursor: "pointer",
                  padding: "0 4px"
                }} onClick={() => setSearchQuery("")}>
                      <i className="bi bi-x-circle-fill"></i>
                    </button>}
                </div>

                <select id="departmentFilter" className="filter-dropdown-btn" value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)}>
                  <option value="">Department</option>
                  {DEPARTMENT_NAMES.map((department) => <option key={department} value={department}>{department}</option>)}
                </select>

                <select id="specialistFilter" className="filter-dropdown-btn" value={specialistFilter} onChange={e => setSpecialistFilter(e.target.value)}>
                  <option value="">Specialist</option>
                  <option value="heart specialist">Heart Specialist</option>
                  <option value="Routine Check-Ups">Routine Check-Ups</option>
                  <option value="Child Health">Child Health</option>
                  <option value="Skin Specialist">Skin Specialist</option>
                  <option value="Internal Health">Internal Health</option>
                  <option value="Bone Specialist">Bone Specialist</option>
                  <option value="Brain Specialist">Brain Specialist</option>
                </select>

                <select id="statusFilter" className="filter-dropdown-btn" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                  <option value="">Status</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>

                {(departmentFilter || specialistFilter || statusFilter || searchQuery) && <button type="button" className="btn-clear-filters-pill" onClick={handleClearFilters} title="Clear all active filters">
                    <svg className="filter-reset-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3.5 4.5a5 5 0 1 1-1 4.5M2 2.5v3h3" />
                    </svg>
                    <span>Reset</span>
                  </button>}
              </div>

              
              <div className="doctors-toolbar-actions">
                <ButtonComponents id="openAddDoctorModal" className="btn-add-doctor-action" icon="bi-plus-lg" title="Add Doctor" onClick={() => openAddDrawer("doctor")} />
              </div>
            </div>

            
            
            
            <DoctorsTable doctors={filteredDoctors} totalCount={doctors.length} searchTerm={searchQuery} isLoading={isLoading} isOffline={isOffline} onRetry={() => fetchDoctorsData(true)} onAddDoctor={() => openAddDrawer("doctor")} onDeleteDoctor={handleDeleteDoctor} onClearFilters={handleClearFilters} />
          </div>

          
          
          
          <PageFooter className="doctors-footer-row" leftClass="doctors-footer-left" socialsClass="doctors-footer-socials" />
        </div>
      </div>
    </div>;
}
