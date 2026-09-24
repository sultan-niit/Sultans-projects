import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import StatCard from "../components/StatCard";
import DashboardSchedule from "../components/DashboardSchedule";
import DashboardReports from "../components/DashboardReports";
import DashboardActivity from "../components/DashboardActivity";
import DashboardAppointments from "../components/DashboardAppointments";
import PageFooter from "../components/PageFooter";

export default function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="content-wrapper">
                <TopHeader />
                <div className="main-content">

                    <div className="stats-grid">
                        {/* StatCard Component — Total Invoice */}
                        <StatCard
                            icon="bi bi-people"
                            title="Total Invoice"
                            value="1,287"
                            trend="+2.14%"
                            desc="56 more than yesterday"
                        />

                        {/* StatCard Component — Total Patients */}
                        <StatCard
                            icon="bi bi-person"
                            title="Total Patients"
                            value="965"
                            trend="+3.78%"
                            desc="45 more than yesterday"
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
                </div>
            </div>
        </div>

    );
}
