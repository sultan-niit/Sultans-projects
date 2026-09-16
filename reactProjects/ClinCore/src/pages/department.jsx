import { Link } from "react-router-dom";

export default function Departments() {
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

            <Link to="/doctors" className="nav-link">
              <i className="bi bi-heart-pulse"></i>
              <span>Doctors</span>
            </Link>

            <Link to="/departments" className="nav-link active">
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
              <h1 className="page-main-heading">Departments</h1>
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
                    alt="Sultoon Abdulraheem" 
                    onError={(e) => { e.currentTarget.src = '/all-images/body-images/doctor-1.jpg'; }} 
                  />
                </div>
                <span className="profile-name">Sultoon Abdulraheem</span>
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
                            <span>All Departments</span>
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
                            <input type="text" placeholder="Search department, etc" />
                        </div>

                        <button type="button" class="btn-patients-filter" title="Filter Settings">
                            <i class="bi bi-sliders"></i>
                        </button>

                        <button type="button" class="btn-add-patient-action">
                            <i class="bi bi-plus-lg"></i>
                            <span>Add Department</span>
                        </button>
                    </div>
                </div>

                <div class="departments-grid">

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-general-medicine.jpg" alt="General Medicine" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">General Medicine</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Provides comprehensive healthcare services including routine check-ups, preventive care, and treatment for a wide range of illnesses.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-1.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-2.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-3.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-4.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-5.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 15 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-cardiology.jpg" alt="Cardiology" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Cardiology</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Specializes in the diagnosis and treatment of heart-related conditions, offering advanced cardiac care and preventive cardiology.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-6.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-7.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-8.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-9.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-10.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 10 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-pediatrics.jpg" alt="Pediatrics" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Pediatrics</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Dedicated to the health and well-being of children, providing specialized care for infants, children, and adolescents.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-11.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-12.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-1.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-2.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-3.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 7 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-dermatology.jpg" alt="Dermatology" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Dermatology</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Focuses on the treatment of skin conditions, offering medical and cosmetic dermatology services to improve skin health.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-2.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-4.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-6.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-8.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-4.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 5 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-internal-medicine.jpg" alt="Internal Medicine" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Internal Medicine</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Provides primary care for adults, focusing on the prevention, diagnosis, and treatment of adult diseases.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-1.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-3.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-5.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-7.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-5.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 13 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-orthopedics.jpg" alt="Orthopedics" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Orthopedics</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Specializes in the treatment of musculoskeletal system disorders, including bones, joints, ligaments, tendons, and muscles.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-9.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-10.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-11.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-12.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-1.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 9 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-neurology.jpg" alt="Neurology" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Neurology</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Deals with disorders of the nervous system, offering expert care for conditions affecting the brain, spinal cord, and nerves.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-2.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-5.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-8.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-11.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-2.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 6 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-oncology.jpg" alt="Oncology" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Oncology</h3>
                                <span class="dept-status dept-status-inactive">Inactive</span>
                            </div>
                            <p class="department-desc">Focuses on the diagnosis and treatment of cancer, providing comprehensive cancer care and support services.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-3.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-6.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-9.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-12.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-3.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 8 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                    <div class="department-card">
                        <div class="department-img-box">
                            <img src="all-images/body-images/dept-obgyn.jpg" alt="Obstetrics and Gynecology (OB/GYN)" />
                        </div>
                        <div class="department-body">
                            <div class="department-title-row">
                                <h3 class="department-title">Obstetrics and Gynecology (OB/GYN)</h3>
                                <span class="dept-status dept-status-active">Active</span>
                            </div>
                            <p class="department-desc">Provides care for women's health, including pregnancy, childbirth, and reproductive health.</p>
                            <div class="department-footer">
                                <div class="department-staff-stack">
                                    <div class="avatar-group">
                                        <img src="all-images/body-images/patient-1.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-4.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-7.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/patient-10.jpg" alt="Doctor" />
                                        <img src="all-images/body-images/doctor-4.jpg" alt="Doctor" />
                                    </div>
                                    <span class="staff-count">+ 11 others</span>
                                </div>
                                <a href="#" class="btn-see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="departments-page-footer">
                    <div class="departments-footer-left">
                        <span>Copyright � 2024 Peterdraw</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>

                    <div class="departments-footer-socials">
                        <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" aria-label="X"><i class="bi bi-twitter-x"></i></a>
                        <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
