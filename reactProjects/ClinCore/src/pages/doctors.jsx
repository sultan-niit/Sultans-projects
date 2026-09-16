import { Link } from "react-router-dom";

export default function Doctors() {

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

            <Link to="/patients" className="nav-link">
              <i className="bi bi-person-wheelchair"></i>
              <span>Patients</span>
            </Link>

            <Link to="/doctors" className="nav-link active">
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
            <div className="search-div">
              <i className="bi bi-search"></i>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search anything..." 
              />
            </div>

            <div className="action-div">
              <button type="button" className="icon-btn" title="Settings">
                <i className="bi bi-gear"></i>
              </button>

              <button type="button" className="icon-btn" title="Notifications" style={{ position: "relative" }}>
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

            <div className="main-content" style={{ padding: "20px 24px" }}>

                <div class="doctors-main-card">
                    <div class="doctors-toolbar">
                        <div class="doctors-filters-group">
                            <div class="table-search-pill">
                                <i class="bi bi-search"></i>
                                <input type="text" id="doctorSearchInput" placeholder="Search name, ID, age, etc" />
                            </div>

                            <select id="departmentFilter" class="filter-dropdown-btn">
                                <option value="">Department</option>
                                <option value="General Medicine">General Medicine</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Pediatrics">Pediatrics</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="Internal Medicine">Internal Medicine</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="Neurology">Neurology</option>
                            </select>

                            <select id="specialistFilter" class="filter-dropdown-btn">
                                <option value="">Specialist</option>
                                <option value="Routine Check-Ups">Routine Check-Ups</option>
                                <option value="Heart Specialist">Heart Specialist</option>
                                <option value="Child Health">Child Health</option>
                                <option value="Skin Specialist">Skin Specialist</option>
                                <option value="Internal Health">Internal Health</option>
                                <option value="Bone Specialist">Bone Specialist</option>
                                <option value="Brain Specialist">Brain Specialist</option>
                            </select>

                            <select id="statusFilter" class="filter-dropdown-btn">
                                <option value="">Status</option>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                            </select>
                        </div>

                        <button type="button" class="btn-add-doctor-action" id="openAddDoctorModal">
                            <i class="bi bi-plus-lg"></i>
                            <span>Add Doctor</span>
                        </button>
                    </div>

                    <div class="doctors-table-container">
                        <table class="doctors-data-table" id="doctorsTable">
                            <thead>
                                <tr>
                                    <th class="sortable">Doctor ID <i class="bi bi-arrow-down-up"></i></th>
                                    <th class="sortable">Doctor Name <i class="bi bi-arrow-down-up"></i></th>
                                    <th class="sortable">Department <i class="bi bi-arrow-down-up"></i></th>
                                    <th class="sortable">Specialist <i class="bi bi-arrow-down-up"></i></th>
                                    <th class="sortable">Total Patients <i class="bi bi-arrow-down-up"></i></th>
                                    <th class="sortable">Today's Appointment <i class="bi bi-arrow-down-up"></i></th>
                                    <th class="sortable">Status <i class="bi bi-arrow-down-up"></i></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="doctorsTableBody">
                                <tr>
                                    <td><span class="doctor-id-code">WNH-GM-001</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Petra Winsburry" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Petra Winsburry</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">General Medicine</span></td>
                                    <td><span class="doctor-spec-txt">Routine Check-Ups</span></td>
                                    <td><span class="doctor-metric-num">150</span></td>
                                    <td><span class="doctor-metric-num">10</span></td>
                                    <td><span class="status-pill-badge available">Available</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-CD-001</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Olivia Martinez" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Olivia Martinez</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Cardiology</span></td>
                                    <td><span class="doctor-spec-txt">Heart Specialist</span></td>
                                    <td><span class="doctor-metric-num">200</span></td>
                                    <td><span class="doctor-metric-num">0</span></td>
                                    <td><span class="status-pill-badge unavailable">Unavailable</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-PD-001</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Damian Sanchez" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Damian Sanchez</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Pediatrics</span></td>
                                    <td><span class="doctor-spec-txt">Child Health</span></td>
                                    <td><span class="doctor-metric-num">180</span></td>
                                    <td><span class="doctor-metric-num">12</span></td>
                                    <td><span class="status-pill-badge available">Available</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-DM-001</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Chloe Harrington" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Chloe Harrington</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Dermatology</span></td>
                                    <td><span class="doctor-spec-txt">Skin Specialist</span></td>
                                    <td><span class="doctor-metric-num">120</span></td>
                                    <td><span class="doctor-metric-num">8</span></td>
                                    <td><span class="status-pill-badge available">Available</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-GM-002</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-5.jpg" alt="Dr. Emily Smith" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Emily Smith</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">General Medicine</span></td>
                                    <td><span class="doctor-spec-txt">Routine Check-Ups</span></td>
                                    <td><span class="doctor-metric-num">160</span></td>
                                    <td><span class="doctor-metric-num">0</span></td>
                                    <td><span class="status-pill-badge unavailable">Unavailable</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-CD-002</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Samuel Thompson" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Samuel Thompson</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Cardiology</span></td>
                                    <td><span class="doctor-spec-txt">Heart Specialist</span></td>
                                    <td><span class="doctor-metric-num">210</span></td>
                                    <td><span class="doctor-metric-num">14</span></td>
                                    <td><span class="status-pill-badge available">Available</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-PD-002</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Sarah Johnson" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Sarah Johnson</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Pediatrics</span></td>
                                    <td><span class="doctor-spec-txt">Child Health</span></td>
                                    <td><span class="doctor-metric-num">170</span></td>
                                    <td><span class="doctor-metric-num">0</span></td>
                                    <td><span class="status-pill-badge unavailable">Unavailable</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-DM-002</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Luke Harrison" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Luke Harrison</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Dermatology</span></td>
                                    <td><span class="doctor-spec-txt">Skin Specialist</span></td>
                                    <td><span class="doctor-metric-num">130</span></td>
                                    <td><span class="doctor-metric-num">9</span></td>
                                    <td><span class="status-pill-badge available">Available</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-IM-001</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Andrew Peterson" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Andrew Peterson</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Internal Medicine</span></td>
                                    <td><span class="doctor-spec-txt">Internal Health</span></td>
                                    <td><span class="doctor-metric-num">190</span></td>
                                    <td><span class="doctor-metric-num">0</span></td>
                                    <td><span class="status-pill-badge unavailable">Unavailable</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-PD-003</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-5.jpg" alt="Dr. William Carter" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. William Carter</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Pediatrics</span></td>
                                    <td><span class="doctor-spec-txt">Child Health</span></td>
                                    <td><span class="doctor-metric-num">175</span></td>
                                    <td><span class="doctor-metric-num">12</span></td>
                                    <td><span class="status-pill-badge available">Available</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-OR-001</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Mark Wilson" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Mark Wilson</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Orthopedics</span></td>
                                    <td><span class="doctor-spec-txt">Bone Specialist</span></td>
                                    <td><span class="doctor-metric-num">140</span></td>
                                    <td><span class="doctor-metric-num">0</span></td>
                                    <td><span class="status-pill-badge unavailable">Unavailable</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span class="doctor-id-code">WNH-NL-001</span></td>
                                    <td>
                                        <div class="doctor-cell-profile">
                                            <div class="doctor-cell-avatar">
                                                <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Thomas Brown" onerror="this.src='/all-images/body-images/profile-avatar.jpg'" />
                                            </div>
                                            <span class="doctor-cell-name">Dr. Thomas Brown</span>
                                        </div>
                                    </td>
                                    <td><span class="doctor-dept-txt">Neurology</span></td>
                                    <td><span class="doctor-spec-txt">Brain Specialist</span></td>
                                    <td><span class="doctor-metric-num">155</span></td>
                                    <td><span class="doctor-metric-num">11</span></td>
                                    <td><span class="status-pill-badge available">Available</span></td>
                                    <td>
                                        <div class="table-row-actions">
                                            <button type="button" class="btn-table-action edit" title="Edit Doctor"><i class="bi bi-pencil-square"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="table-pagination-row">
                        <div class="pagination-showing-wrap">
                            <span>Showing</span>
                            <select class="pagination-select-custom" id="pageSizeSelect">
                                <option value="12" selected>12</option>
                                <option value="24">24</option>
                                <option value="50">50</option>
                            </select>
                            <span id="showingCountText">out of 58</span>
                        </div>

                        <div class="pagination-buttons-wrap">
                            <button type="button" class="btn-page-nav" id="prevPageBtn" title="Previous Page">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button type="button" class="btn-page-nav active">1</button>
                            <button type="button" class="btn-page-nav">2</button>
                            <button type="button" class="btn-page-nav">3</button>
                            <button type="button" class="btn-page-nav">4</button>
                            <button type="button" class="btn-page-nav">5</button>
                            <button type="button" class="btn-page-nav" id="nextPageBtn" title="Next Page">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="doctors-footer-row">
                    <div class="doctors-footer-left">
                        <span>Copyright &copy; 2024 Peterdraw</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>

                    <div class="doctors-footer-socials">
                        <a href="#" title="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" title="X / Twitter"><i class="bi bi-twitter-x"></i></a>
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
