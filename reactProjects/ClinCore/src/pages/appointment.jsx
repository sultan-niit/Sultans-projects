import { Link } from "react-router-dom";

export default function Appointments() {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="side-panel">
          <div className="logo-div">
            <Link to="/dashboard" className="logo-brand">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <span className="logo-text">ClinCore</span>
            </Link>
          </div>

          <div className="nav-list">
            <Link to="/dashboard" className="nav-link">
              <i className="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </Link>

            <Link to="/appointments" className="nav-link active">
              <i className="bi bi-calendar-check"></i>
              <span>Appointments</span>
            </Link>

            <Link to="/patients" className="nav-link">
              <i className="bi bi-person-wheelchair"></i>
              <span>Patients</span>
            </Link>

            <Link to="/doctors" className="nav-link">
              <i className="bi bi-heart-pulse"></i>
              <span>Doctors</span>
            </Link>

            <Link to="/departments" className="nav-link">
              <i className="bi bi-building"></i>
              <span>Departments</span>
            </Link>

            <Link to="/doctors" className="nav-link">
              <i className="bi bi-calendar-week"></i>
              <span>Doctors' Schedule</span>
            </Link>

            <Link to="/payments" className="nav-link">
              <i className="bi bi-credit-card"></i>
              <span>Payments</span>
            </Link>

            <Link to="/inventory" className="nav-link">
              <i className="bi bi-box-seam"></i>
              <span>Inventory</span>
            </Link>

            <Link to="/messages" className="nav-link">
              <i className="bi bi-chat-dots"></i>
              <span>Messages</span>
              <span className="badge-count">7</span>
            </Link>
          </div>

          <div className="bottom-div">
            <Link to="/" className="nav-link logout-link">
              <i className="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </Link>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="top-header">
            <div className="header-title-box">
              <h1 className="page-main-heading">Appointments</h1>
            </div>

            <div className="action-div">
              <button type="button" className="icon-btn" title="Settings">
                <i className="bi bi-gear"></i>
              </button>

              <button type="button" className="icon-btn" title="Notifications">
                <i className="bi bi-bell"></i>
                <span className="notif-dot"></span>
              </button>

              <div className="profile-div">
                <div className="profile-img">
                  <img 
                    src="/all-images/body-images/profile-avatar.jpg" 
                    alt="sultoon abdulraheem" 
                    onError={(e) => { e.currentTarget.src = '/all-images/body-images/doctor-1.jpg'; }} 
                  />
                </div>
                <span className="profile-name">sultoon abdulraheem</span>
                <i className="bi bi-chevron-down"></i>
              </div>
            </div>
          </div>

            <div className="main-content" style={{ padding: "24px 32px 40px 32px" }}>
                <div class="appointments-toolbar">
                    <div class="appointments-filter-tabs">
                        <button type="button" class="tab-filter-btn active">All (128)</button>
                        <button type="button" class="tab-filter-btn">Confirmed (98)</button>
                        <button type="button" class="tab-filter-btn">Pending (18)</button>
                        <button type="button" class="tab-filter-btn">Cancelled (12)</button>
                    </div>

                    <div class="appointments-actions-right">
                        <div class="appointments-search-bar">
                            <i class="bi bi-search"></i>
                            <input type="text" placeholder="Search placeholder" />
                        </div>

                        <div class="appointments-date-pill">
                            <i class="bi bi-calendar-week"></i>
                            <span>Today</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>

                        <button type="button" class="btn-add-appointment-action">
                            <span>Add Appointment</span>
                        </button>
                    </div>
                </div>

                <div class="appointments-main-card">
                    <div class="appointments-table-wrap">
                        <table class="appointments-data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: "44px" }}>
                                        <input type="checkbox" class="table-checkbox" />
                                    </th>
                                    <th class="sortable-th">
                                        <span>Name</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Date</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Time</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Doctor</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Treatment</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Status</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Caren G. Simpson</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>09:00 AM</td>
                                    <td>Dr. Petra Winsburry</td>
                                    <td>Routine Check-Up</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Edgar Warrow</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>10:30 AM</td>
                                    <td>Dr. Olivia Martinez</td>
                                    <td>Cardiac Consultation</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Ocean Jane Lupre</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>11:00 AM</td>
                                    <td>Dr. Damian Sanchez</td>
                                    <td>Pediatric Check-Up</td>
                                    <td>
                                        <span class="appointment-status-pill status-pending">Pending</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Shane Riddick</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>01:00 PM</td>
                                    <td>Dr. Chloe Harrington</td>
                                    <td>Skin Allergy</td>
                                    <td>
                                        <span class="appointment-status-pill status-cancelled">Cancelled</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Queen Lawnston</span>
                                    </td>
                                    <td>20-07-28</td>
                                    <td>02:30 PM</td>
                                    <td>Dr. Petra Winsburry</td>
                                    <td>Follow-Up Visit</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Alice Mitchell</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>09:00 AM</td>
                                    <td>Dr. Emily Smith</td>
                                    <td>Routine Check-Up</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Mikhail Morozov</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>10:30 AM</td>
                                    <td>Dr. Samuel Thompson</td>
                                    <td>Cardiac Consultation</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Mateus Fernandes</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>11:00 AM</td>
                                    <td>Dr. Sarah Johnson</td>
                                    <td>Pediatric Check-Up</td>
                                    <td>
                                        <span class="appointment-status-pill status-pending">Pending</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Pari Desai</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>01:00 PM</td>
                                    <td>Dr. Luke Harrison</td>
                                    <td>Skin Allergy</td>
                                    <td>
                                        <span class="appointment-status-pill status-cancelled">Cancelled</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Omar Ali</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>02:30 PM</td>
                                    <td>Dr. Andrew Peterson</td>
                                    <td>Follow-Up Visit</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Camila Alvarez</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>03:00 PM</td>
                                    <td>Dr. Olivia Martinez</td>
                                    <td>Cardiac Check-Up</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Thabo van Rooyen</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>04:00 PM</td>
                                    <td>Dr. William Carter</td>
                                    <td>Pediatric Check-Up</td>
                                    <td>
                                        <span class="appointment-status-pill status-pending">Pending</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <span class="appointment-patient-name">Chance Geidt</span>
                                    </td>
                                    <td>20 July 2028</td>
                                    <td>04:30 PM</td>
                                    <td>Dr. Samuel Thompson</td>
                                    <td>Follow-Up Visit</td>
                                    <td>
                                        <span class="appointment-status-pill status-confirmed">Confirmed</span>
                                    </td>
                                    <td>
                                        <div class="appointment-row-actions">
                                            <button type="button" class="btn-action-reschedule">Reschedule</button>
                                            <button type="button" class="btn-action-cancel">Cancel</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="appointments-pagination-row">
                        <div class="appointments-pagination-info">
                            <span>Showing</span>
                            <select class="appointments-page-select">
                                <option value="13" selected>13</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                            <span>out of 128</span>
                        </div>

                        <div class="appointments-pagination-controls">
                            <button type="button" class="btn-appointments-step" title="Previous Page">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button type="button" class="btn-appointments-step active">1</button>
                            <button type="button" class="btn-appointments-step">2</button>
                            <button type="button" class="btn-appointments-step">3</button>
                            <span class="page-step-ellipsis">...</span>
                            <button type="button" class="btn-appointments-step">10</button>
                            <button type="button" class="btn-appointments-step" title="Next Page">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="appointments-page-footer">
                    <div class="appointments-footer-left">
                        <span>Copyright &copy; 2024 Peterdraw</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>

                    <div class="appointments-footer-socials">
                        <a href="#" title="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" title="X"><i class="bi bi-twitter-x"></i></a>
                        <a href="#" title="Instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" title="YouTube"><i class="bi bi-youtube"></i></a>
                        <a href="#" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
