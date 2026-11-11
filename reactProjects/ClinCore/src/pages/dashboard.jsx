import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import StatCard from "../components/StatCard";
import DashboardSchedule from "../components/DashboardSchedule";
import DashboardReports from "../components/DashboardReports";
import DashboardActivity from "../components/DashboardActivity";
import DashboardAppointments from "../components/DashboardAppointments";
import PageFooter from "../components/PageFooter";
import { fetchAllPatients, getStoredPatients } from "../api/patient";
import { fetchAllDoctors, getStoredDoctors } from "../api/doctor";
import { fetchAllRooms, getStoredRooms } from "../api/room";
export default function Dashboard() {
  const [patientCount, setPatientCount] = useState(() => getStoredPatients().length);
  const [doctorCount, setDoctorCount] = useState(() => getStoredDoctors().length);
  const [roomCount, setRoomCount] = useState(() => getStoredRooms().length);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    let roomChangedDuringLoad = false;
    const loadCounts = async () => {
      try {
        const [patientsResult, doctorsResult, roomsResult] = await Promise.allSettled([
          fetchAllPatients(),
          fetchAllDoctors(),
          fetchAllRooms(),
        ]);
        if (!isMounted) return;
        if (patientsResult.status === "fulfilled") {
          setPatientCount(patientsResult.value.length);
        } else {
          console.warn("Unable to load dashboard patient count:", patientsResult.reason);
        }
        if (doctorsResult.status === "fulfilled" && doctorsResult.value) {
          setDoctorCount(doctorsResult.value.length);
        } else if (doctorsResult.status === "rejected") {
          console.warn("Unable to load dashboard doctor count:", doctorsResult.reason);
        }
        if (roomsResult.status === "fulfilled" && !roomChangedDuringLoad) {
          setRoomCount(roomsResult.value.length);
        } else if (roomsResult.status === "rejected") {
          console.warn("Unable to load dashboard room count:", roomsResult.reason);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    const refreshCounts = () => loadCounts();
    const refreshRoomCount = () => {
      roomChangedDuringLoad = true;
      setRoomCount(getStoredRooms().length);
    };
    loadCounts();
    window.addEventListener("clincore:patient-changed", refreshCounts);
    window.addEventListener("clincore:doctor-changed", refreshCounts);
    window.addEventListener("clincore:room-changed", refreshRoomCount);
    return () => {
      isMounted = false;
      window.removeEventListener("clincore:patient-changed", refreshCounts);
      window.removeEventListener("clincore:doctor-changed", refreshCounts);
      window.removeEventListener("clincore:room-changed", refreshRoomCount);
    };
  }, []);
  return <div className="dashboard-wrapper">
            <Sidebar />
            <div className="content-wrapper">
                <TopHeader />
                <div className="main-content">
                    {isLoading ? <div className="doctors-loading-card" aria-label="Loading dashboard">
                            <div className="rolling-circle-spinner" role="status" aria-label="Loading dashboard data"></div>
                        </div> : <>
                    <div className="stats-grid">
                        
                        <StatCard icon="bi bi-heart-pulse" title="Total Doctors" value={doctorCount.toLocaleString()} desc="Registered doctors" />

                        
                        <StatCard icon="bi bi-person" title="Total Patients" value={patientCount.toLocaleString()} desc="Registered patients" />

                        
                        <StatCard icon="bi bi-calendar-check" title="Appointments" value="0" trend="0%" desc="Total appointments" />

                        
                        <StatCard icon="bi bi-hospital-bed" title="Rooms" value={roomCount.toLocaleString()} trend="0%" desc="Registered rooms" />
                    </div>

                    <div className="details-grid">
                        <DashboardSchedule />
                        <DashboardReports />
                    </div>

                    <div className="bottom-grid">
                        
                        
                        
                        <DashboardAppointments />

                        
                        
                        
                        <DashboardActivity />
                    </div>

                    
                    
                    
                    <PageFooter variant="dashboard" />
                    </>}
                </div>
            </div>
        </div>;
}
