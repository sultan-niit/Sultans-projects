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

export default function Dashboard() {
    const [patientCount, setPatientCount] = useState(() => getStoredPatients().length);
    const [doctorCount, setDoctorCount] = useState(() => getStoredDoctors().length);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadCounts = async () => {
            try {
                const [patientsResult, doctorsResult] = await Promise.allSettled([
                    fetchAllPatients(),
                    fetchAllDoctors(),
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
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        const refreshCounts = () => loadCounts();
        loadCounts();
        window.addEventListener("clincore:patient-changed", refreshCounts);
        window.addEventListener("clincore:doctor-changed", refreshCounts);

        return () => {
            isMounted = false;
            window.removeEventListener("clincore:patient-changed", refreshCounts);
            window.removeEventListener("clincore:doctor-changed", refreshCounts);
        };
    }, []);

    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="content-wrapper">
                <TopHeader />
                <div className="main-content">
                    {isLoading ? (
                        <div className="doctors-loading-card" aria-label="Loading dashboard">
                            <div
                                className="rolling-circle-spinner"
                                role="status"
                                aria-label="Loading dashboard data"
                            ></div>
                        </div>
                    ) : (
                    <>
                    <div className="stats-grid">
                        {/* StatCard Component — Total Doctors */}
                        <StatCard
                            icon="bi bi-heart-pulse"
                            title="Total Doctors"
                            value={doctorCount.toLocaleString()}
                            desc="Registered doctors"
                        />

                        {/* StatCard Component — Total Patients */}
                        <StatCard
                            icon="bi bi-person"
                            title="Total Patients"
                            value={patientCount.toLocaleString()}
                            desc="Registered patients"
                        />

                        {/* StatCard Component — Appointments */}
                        <StatCard
                            icon="bi bi-calendar-check"
                            title="Appointments"
                            value="128"
                            trend="-1.56%"
                            desc="18 less than yesterday"
                            trendDown
                        />

                        {/* StatCard Component — Bedroom */}
                        <StatCard
                            icon="bi bi-person-wheelchair"
                            title="Bedroom"
                            value="315"
                            trend="+1.64%"
                            desc="56 more than yesterday"
                        />
                    </div>

                    <div className="details-grid">
                        <DashboardSchedule />
                        <DashboardReports />
                    </div>

                    <div className="bottom-grid">
                        {/* ============================================================ */}
                        {/* TABLE CARD: Patient Appointment Table                         */}
                        {/* ============================================================ */}
                        <DashboardAppointments />

                        {/* ============================================================ */}
                        {/* ACTIVITY CARD: Recent Activity Feed                           */}
                        {/* ============================================================ */}
                        <DashboardActivity />
                    </div>

                    {/* ============================================================ */}
                    {/* FOOTER SECTION: Copyright & Social Links (PageFooter)        */}
                    {/* ============================================================ */}
                    <PageFooter variant="dashboard" />
                    </>
                    )}
                </div>
            </div>
        </div>

    );
}
