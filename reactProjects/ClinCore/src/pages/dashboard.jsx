import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import StatCard from "../components/StatCard";
import PageFooter from "../components/PageFooter";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
        {/* ============================================================ */}
        {/* MAIN BODY: Dashboard Stats & Analytics Cards                  */}
        {/* ============================================================ */}
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

        <div class="details-grid">
            {/* ============================================================ */}
            {/* DETAILS CARD LEFT: Doctors' Schedule List                     */}
            {/* ============================================================ */}
            <div class="details-card">
                <div class="card-header">
                    <h2>Doctors' Schedule</h2>
                    <button type="button" class="card-menu">
                        <i class="bi bi-three-dots"></i>
                    </button>
                </div>
                <div class="doctor-list">
                    <div class="doctor-item">
                        <div class="doctor-info">
                            <div class="doctor-avatar">
                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Petra Winsburry" />
                            </div>
                            <div class="doctor-detail">
                                <span class="doctor-name">Dr. Petra Winsburry</span>
                                <span class="doctor-spec">General Medicine</span>
                            </div>
                        </div>
                        <div class="doctor-status">
                            <span class="status-badge status-available">Available</span>
                            <span class="doctor-time">09:00 AM - 12:00 PM</span>
                        </div>
                    </div>

                    <div class="doctor-item">
                        <div class="doctor-info">
                            <div class="doctor-avatar">
                                <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Ameena Karim" />
                            </div>
                            <div class="doctor-detail">
                                <span class="doctor-name">Dr. Ameena Karim</span>
                                <span class="doctor-spec">Orthopedics</span>
                            </div>
                        </div>
                        <div class="doctor-status">
                            <span class="status-badge status-unavailable">Unavailable</span>
                        </div>
                    </div>

                    <div class="doctor-item">
                        <div class="doctor-info">
                            <div class="doctor-avatar">
                                <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Olivia Martinez" />
                            </div>
                            <div class="doctor-detail">
                                <span class="doctor-name">Dr. Olivia Martinez</span>
                                <span class="doctor-spec">Cardiology</span>
                            </div>
                        </div>
                        <div class="doctor-status">
                            <span class="status-badge status-available">Available</span>
                            <span class="doctor-time">10:00 AM - 01:00 PM</span>
                        </div>
                    </div>

                    <div class="doctor-item">
                        <div class="doctor-info">
                            <div class="doctor-avatar">
                                <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Damian Sanchez" />
                            </div>
                            <div class="doctor-detail">
                                <span class="doctor-name">Dr. Damian Sanchez</span>
                                <span class="doctor-spec">Pediatrics</span>
                            </div>
                        </div>
                        <div class="doctor-status">
                            <span class="status-badge status-available">Available</span>
                            <span class="doctor-time">11:00 AM - 02:00 PM</span>
                        </div>
                    </div>

                    <div class="doctor-item">
                        <div class="doctor-info">
                            <div class="doctor-avatar">
                                <img src="all-images/body-images/doctor-5.jpg" alt="Dr. Chloe Harrington" />
                            </div>
                            <div class="doctor-detail">
                                <span class="doctor-name">Dr. Chloe Harrington</span>
                                <span class="doctor-spec">Dermatology</span>
                            </div>
                        </div>
                        <div class="doctor-status">
                            <span class="status-badge status-unavailable">Unavailable</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================ */}
            {/* DETAILS CARD RIGHT: Report List                               */}
            {/* ============================================================ */}
            <div class="details-card">
                <div class="card-header">
                    <h2>Report</h2>
                    <button type="button" class="card-menu">
                        <i class="bi bi-three-dots"></i>
                    </button>
                </div>
                <div class="report-list">
                    <a href="#" class="report-item">
                        <div class="report-left">
                            <div class="report-icon">
                                <i class="bi bi-brush"></i>
                            </div>
                            <div class="report-info">
                                <span class="report-name">Room Cleaning Needed</span>
                                <span class="report-time">1 minutes ago</span>
                            </div>
                        </div>
                        <span class="report-arrow">
                            <i class="bi bi-arrow-right"></i>
                        </span>
                    </a>

                    <a href="#" class="report-item">
                        <div class="report-left">
                            <div class="report-icon">
                                <i class="bi bi-wrench"></i>
                            </div>
                            <div class="report-info">
                                <span class="report-name">Equipment Maintenance</span>
                                <span class="report-time">3 minutes ago</span>
                            </div>
                        </div>
                        <span class="report-arrow">
                            <i class="bi bi-arrow-right"></i>
                        </span>
                    </a>

                    <a href="#" class="report-item">
                        <div class="report-left">
                            <div class="report-icon">
                                <i class="bi bi-layers"></i>
                            </div>
                            <div class="report-info">
                                <span class="report-name">Medication Restock</span>
                                <span class="report-time">5 minutes ago</span>
                            </div>
                        </div>
                        <span class="report-arrow">
                            <i class="bi bi-arrow-right"></i>
                        </span>
                    </a>

                    <a href="#" class="report-item">
                        <div class="report-left">
                            <div class="report-icon">
                                <i class="bi bi-exclamation-circle"></i>
                            </div>
                            <div class="report-info">
                                <span class="report-name">HVAC System Issue</span>
                                <span class="report-time">1 hour ago</span>
                            </div>
                        </div>
                        <span class="report-arrow">
                            <i class="bi bi-arrow-right"></i>
                        </span>
                    </a>

                    <a href="#" class="report-item">
                        <div class="report-left">
                            <div class="report-icon">
                                <i class="bi bi-truck"></i>
                            </div>
                            <div class="report-info">
                                <span class="report-name">Patient Transport Required</span>
                                <span class="report-time">Yesterday</span>
                            </div>
                        </div>
                        <span class="report-arrow">
                            <i class="bi bi-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <div class="bottom-grid">
            {/* ============================================================ */}
            {/* TABLE CARD: Patient Appointment Table                         */}
            {/* ============================================================ */}
            <div class="table-card">
                <div class="card-header">
                    <h2>Patient Appointment</h2>
                    <a href="#" class="view-all">View All</a>
                </div>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Doctor</th>
                                <th>Treatment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="patient-name">
                                    <div class="patient-cell">
                                        <img src="all-images/body-images/patient-1.jpg" alt="Caren G. Simpson" class="patient-avatar" />
                                        <span>Caren G. Simpson</span>
                                    </div>
                                </td>
                                <td>20-07-28</td>
                                <td>09:00 AM</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>Routine Check-Up</td>
                                <td><span class="status-badge status-confirmed">Confirmed</span></td>
                                <td><button type="button" class="row-menu"><i class="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                                <td class="patient-name">
                                    <div class="patient-cell">
                                        <img src="all-images/body-images/patient-2.jpg" alt="Edgar Warrow" class="patient-avatar" />
                                        <span>Edgar Warrow</span>
                                    </div>
                                </td>
                                <td>20-07-28</td>
                                <td>10:30 AM</td>
                                <td>Dr. Olivia Martinez</td>
                                <td>Cardiac Consultation</td>
                                <td><span class="status-badge status-confirmed">Confirmed</span></td>
                                <td><button type="button" class="row-menu"><i class="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                                <td class="patient-name">
                                    <div class="patient-cell">
                                        <img src="all-images/body-images/patient-3.jpg" alt="Ocean Jane Lupre" class="patient-avatar" />
                                        <span>Ocean Jane Lupre</span>
                                    </div>
                                </td>
                                <td>20-07-28</td>
                                <td>11:00 AM</td>
                                <td>Dr. Damian Sanchez</td>
                                <td>Pediatric Check-Up</td>
                                <td><span class="status-badge status-pending">Pending</span></td>
                                <td><button type="button" class="row-menu"><i class="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                                <td class="patient-name">
                                    <div class="patient-cell">
                                        <img src="all-images/body-images/patient-4.jpg" alt="Shane Riddick" class="patient-avatar" />
                                        <span>Shane Riddick</span>
                                    </div>
                                </td>
                                <td>20-07-28</td>
                                <td>01:00 PM</td>
                                <td>Dr. Chloe Harrington</td>
                                <td>Skin Allergy</td>
                                <td><span class="status-badge status-cancelled">Cancelled</span></td>
                                <td><button type="button" class="row-menu"><i class="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                                <td class="patient-name">
                                    <div class="patient-cell">
                                        <img src="all-images/body-images/patient-5.jpg" alt="Queen Lawnston" class="patient-avatar" />
                                        <span>Queen Lawnston</span>
                                    </div>
                                </td>
                                <td>20-07-28</td>
                                <td>02:30 PM</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>Follow-Up Visit</td>
                                <td><span class="status-badge status-confirmed">Confirmed</span></td>
                                <td><button type="button" class="row-menu"><i class="bi bi-three-dots"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ============================================================ */}
            {/* ACTIVITY CARD: Recent Activity Feed                           */}
            {/* ============================================================ */}
            <div class="activity-card">
                <div class="card-header">
                    <h2>Recent Activity</h2>
                    <button type="button" class="card-menu">
                        <i class="bi bi-three-dots"></i>
                    </button>
                </div>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="bi bi-patch-check"></i>
                        </div>
                        <div class="activity-content">
                            <span class="activity-text">Felix Müller was discharged from Room 205 after successful treatment</span>
                            <span class="activity-time">08:30 AM</span>
                        </div>
                    </div>

                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="bi bi-hospital-bed"></i>
                        </div>
                        <div class="activity-content">
                            <span class="activity-text">Léa Rousseau admitted to Room 312 for surgery scheduled later today</span>
                            <span class="activity-time">09:00 AM</span>
                        </div>
                    </div>

                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="bi bi-wrench"></i>
                        </div>
                        <div class="activity-content">
                            <span class="activity-text">MRI machine in Radiology Department received routine maintenance check</span>
                            <span class="activity-time">10:00 AM</span>
                        </div>
                    </div>

                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="bi bi-layers"></i>
                        </div>
                        <div class="activity-content">
                            <span class="activity-text">ICU received restock of essential medications</span>
                            <span class="activity-time">11:00 AM</span>
                        </div>
                    </div>

                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="bi bi-exclamation-circle"></i>
                        </div>
                        <div class="activity-content">
                            <span class="activity-text">Code Blue emergency response initiated for a patient in Room 108</span>
                            <span class="activity-time">01:15 PM</span>
                        </div>
                    </div>
                </div>
            </div>
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
