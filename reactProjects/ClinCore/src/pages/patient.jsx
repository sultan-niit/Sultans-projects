import { Link } from "react-router-dom";

export default function Patients() {
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

            <Link to="/appointments" className="nav-link">
              <i className="bi bi-calendar-check"></i>
              <span>Appointments</span>
            </Link>

            <Link to="/patients" className="nav-link active">
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
              <h1 className="page-main-heading">Patients</h1>
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
                <div class="patients-toolbar">
                    <div class="patients-toolbar-left">
                        <div class="patients-filter-pill">
                            <i class="bi bi-calendar-week"></i>
                            <span>1 July - 20 July 2028</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>

                        <div class="patients-filter-pill">
                            <i class="bi bi-funnel"></i>
                            <span>All Treatment</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>

                        <div class="patients-filter-pill">
                            <i class="bi bi-funnel"></i>
                            <span>All Status</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div class="patients-toolbar-right">
                        <div class="patients-search-bar">
                            <i class="bi bi-search"></i>
                            <input type="text" placeholder="Search name, ID, age, etc" />
                        </div>

                        <button type="button" class="btn-patients-filter" title="Filter Settings">
                            <i class="bi bi-sliders"></i>
                        </button>

                        <button type="button" class="btn-add-patient-action">
                            <i class="bi bi-plus-lg"></i>
                            <span>Add Patient</span>
                        </button>
                    </div>
                </div>

                <div class="patients-main-card">
                    <div class="patients-table-wrap">
                        <table class="patients-data-table">
                            <thead>
                                <tr>
                                    <th class="sortable-th">
                                        <span>Patient ID</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Patient Name</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Age</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Check In</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Treatment</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Doctor Assigned</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Room</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Status</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span class="patient-id-txt">301</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-1.jpg" alt="Caren G. Simpson" onerror="this.src='/all-images/body-images/doctor-1.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Caren G. Simpson</span>
                                        </div>
                                    </td>
                                    <td>35</td>
                                    <td>20 July 2028</td>
                                    <td>Routine Check-Up</td>
                                    <td>Dr. Petra Winsburry</td>
                                    <td>-</td>
                                    <td><span class="patient-status-badge status-active">Active</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">302</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-2.jpg" alt="Edgar Warrow" onerror="this.src='/all-images/body-images/doctor-2.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Edgar Warrow</span>
                                        </div>
                                    </td>
                                    <td>45</td>
                                    <td>20 July 2028</td>
                                    <td>Cardiac Consultation</td>
                                    <td>Dr. Olivia Martinez</td>
                                    <td>-</td>
                                    <td><span class="patient-status-badge status-active">Active</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">303</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-3.jpg" alt="Ocean Jane Lupre" onerror="this.src='/all-images/body-images/doctor-3.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Ocean Jane Lupre</span>
                                        </div>
                                    </td>
                                    <td>10</td>
                                    <td>20 July 2028</td>
                                    <td>Pediatric Check-Up</td>
                                    <td>Dr. Damian Sanchez</td>
                                    <td>Double - 303</td>
                                    <td><span class="patient-status-badge status-new">New Patient</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">304</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-4.jpg" alt="Shane Riddick" onerror="this.src='/all-images/body-images/doctor-4.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Shane Riddick</span>
                                        </div>
                                    </td>
                                    <td>50</td>
                                    <td>20 July 2028</td>
                                    <td>Skin Allergy</td>
                                    <td>Dr. Chloe Harrington</td>
                                    <td>Single - 304</td>
                                    <td><span class="patient-status-badge status-inactive">Inactive</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">305</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-5.jpg" alt="Queen Lawnston" onerror="this.src='/all-images/body-images/doctor-5.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Queen Lawnston</span>
                                        </div>
                                    </td>
                                    <td>60</td>
                                    <td>20 July 2028</td>
                                    <td>Follow-Up Visit</td>
                                    <td>Dr. Petra Winsburry</td>
                                    <td>Single - 305</td>
                                    <td><span class="patient-status-badge status-active">Active</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">306</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-6.jpg" alt="Alice Mitchell" onerror="this.src='/all-images/body-images/doctor-1.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Alice Mitchell</span>
                                        </div>
                                    </td>
                                    <td>28</td>
                                    <td>20 July 2028</td>
                                    <td>Routine Check-Up</td>
                                    <td>Dr. Emily Smith</td>
                                    <td>-</td>
                                    <td><span class="patient-status-badge status-active">Active</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">307</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-7.jpg" alt="Mikhail Morozov" onerror="this.src='/all-images/body-images/doctor-2.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Mikhail Morozov</span>
                                        </div>
                                    </td>
                                    <td>55</td>
                                    <td>20 July 2028</td>
                                    <td>Cardiac Consultation</td>
                                    <td>Dr. Samuel Thompson</td>
                                    <td>-</td>
                                    <td><span class="patient-status-badge status-active">Active</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">308</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-8.jpg" alt="Mateus Fernandes" onerror="this.src='/all-images/body-images/doctor-3.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Mateus Fernandes</span>
                                        </div>
                                    </td>
                                    <td>12</td>
                                    <td>20 July 2028</td>
                                    <td>Pediatric Check-Up</td>
                                    <td>Dr. Sarah Johnson</td>
                                    <td>Double - 308</td>
                                    <td><span class="patient-status-badge status-new">New Patient</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">309</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-9.jpg" alt="Pari Desai" onerror="this.src='/all-images/body-images/doctor-4.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Pari Desai</span>
                                        </div>
                                    </td>
                                    <td>40</td>
                                    <td>20 July 2028</td>
                                    <td>Skin Allergy</td>
                                    <td>Dr. Luke Harrison</td>
                                    <td>Single - 309</td>
                                    <td><span class="patient-status-badge status-inactive">Inactive</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">310</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-10.jpg" alt="Omar Ali" onerror="this.src='/all-images/body-images/doctor-5.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Omar Ali</span>
                                        </div>
                                    </td>
                                    <td>70</td>
                                    <td>20 July 2028</td>
                                    <td>Follow-Up Visit</td>
                                    <td>Dr. Andrew Peterson</td>
                                    <td>Single - 310</td>
                                    <td><span class="patient-status-badge status-active">Active</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">311</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-11.jpg" alt="Camila Alvarez" onerror="this.src='/all-images/body-images/doctor-1.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Camila Alvarez</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>20 July 2028</td>
                                    <td>Cardiac Check-Up</td>
                                    <td>Dr. Olivia Martinez</td>
                                    <td>-</td>
                                    <td><span class="patient-status-badge status-active">Active</span></td>
                                </tr>

                                <tr>
                                    <td><span class="patient-id-txt">312</span></td>
                                    <td>
                                        <div class="patient-profile-cell">
                                            <div class="patient-cell-avatar">
                                                <img src="all-images/body-images/patient-12.jpg" alt="Thabo van Rooyen" onerror="this.src='/all-images/body-images/doctor-2.jpg'" />
                                            </div>
                                            <span class="patient-name-txt">Thabo van Rooyen</span>
                                        </div>
                                    </td>
                                    <td>15</td>
                                    <td>20 July 2028</td>
                                    <td>Pediatric Check-Up</td>
                                    <td>Dr. William Carter</td>
                                    <td>Double - 312</td>
                                    <td><span class="patient-status-badge status-new">New Patient</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="patients-pagination-row">
                        <div class="patients-pagination-info">
                            <span>Showing</span>
                            <select class="patients-page-select">
                                <option value="12" selected>12</option>
                                <option value="24">24</option>
                                <option value="48">48</option>
                            </select>
                            <span>out of 286</span>
                        </div>

                        <div class="patients-pagination-controls">
                            <button type="button" class="btn-patients-step" title="Previous Page">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button type="button" class="btn-patients-step active">1</button>
                            <button type="button" class="btn-patients-step">2</button>
                            <button type="button" class="btn-patients-step">3</button>
                            <span class="page-step-ellipsis">...</span>
                            <button type="button" class="btn-patients-step">16</button>
                            <button type="button" class="btn-patients-step" title="Next Page">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="patients-page-footer">
                    <div class="patients-footer-left">
                        <span>Copyright &copy; 2024 Peterdraw</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>

                    <div class="patients-footer-socials">
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
