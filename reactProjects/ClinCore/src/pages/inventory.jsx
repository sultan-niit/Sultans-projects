import { Link } from "react-router-dom";

export default function Inventory() {
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

            <Link to="/inventory" className="nav-link active">
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
              <h1 className="page-main-heading">Inventory</h1>
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
                <div class="inventory-toolbar">
                    <div class="inventory-toolbar-left">
                        <div class="filter-pill">
                            <i class="bi bi-funnel"></i>
                            <span>All Category</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>

                        <div class="filter-pill">
                            <i class="bi bi-funnel"></i>
                            <span>All Status</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div class="inventory-toolbar-right">
                        <div class="inventory-search-bar">
                            <i class="bi bi-search"></i>
                            <input type="text" placeholder="Search item, etc" />
                        </div>

                        <button type="button" class="btn-filter-toggle" title="Filter Settings">
                            <i class="bi bi-sliders"></i>
                        </button>

                        <button type="button" class="btn-add-item-action">
                            <i class="bi bi-plus-lg"></i>
                            <span>Add Item</span>
                        </button>
                    </div>
                </div>

                <div class="inventory-main-card">
                    <div class="inventory-table-wrap">
                        <table class="inventory-data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: "44px" }}>
                                        <input type="checkbox" class="table-checkbox" />
                                    </th>
                                    <th>Image</th>
                                    <th class="sortable-th">
                                        <span>Item</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Category</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Availability</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Qty In Stock</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Qty In Reorder</span>
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
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/surgical-masks.svg" alt="Surgical Masks" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Surgical Masks</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">PPE</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill available">
                                            <span class="pill-dot"></span>
                                            <span>Available</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">500</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">200</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/gloves.svg" alt="Gloves" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Gloves</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">PPE</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill low">
                                            <span class="pill-dot"></span>
                                            <span>Low</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">50</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">150</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/hand-sanitizer.svg" alt="Hand Sanitizer" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Hand Sanitizer</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Sanitizer</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill available">
                                            <span class="pill-dot"></span>
                                            <span>Available</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">200</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">100</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/thermometers.svg" alt="Thermometers" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Thermometers</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Medical Equipment</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill out-of-stock">
                                            <span class="pill-dot"></span>
                                            <span>Out of Stock</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">0</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">300</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/stethoscopes.svg" alt="Stethoscopes" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Stethoscopes</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Medical Equipment</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill available">
                                            <span class="pill-dot"></span>
                                            <span>Available</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">30</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">50</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/blood-pressure-monitors.svg"
                                                alt="Blood Pressure Monitors" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Blood Pressure Monitors</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Medical Equipment</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill low">
                                            <span class="pill-dot"></span>
                                            <span>Low</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">20</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">100</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/bandages.svg" alt="Bandages" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Bandages</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">First Aid</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill available">
                                            <span class="pill-dot"></span>
                                            <span>Available</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">300</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">200</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/iv-fluids.svg" alt="IV Fluids" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">IV Fluids</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Medical Supplies</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill low">
                                            <span class="pill-dot"></span>
                                            <span>Low</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">10</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">150</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/scalpel-blades.svg" alt="Scalpel Blades" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Scalpel Blades</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Surgical Instruments</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill out-of-stock">
                                            <span class="pill-dot"></span>
                                            <span>Out of Stock</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">0</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">200</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/syringes.svg" alt="Syringes" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Syringes</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Medical Supplies</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill available">
                                            <span class="pill-dot"></span>
                                            <span>Available</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">400</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">300</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/medical-gowns.svg" alt="Medical Gowns" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Medical Gowns</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">PPE</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill available">
                                            <span class="pill-dot"></span>
                                            <span>Available</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">150</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">100</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" class="table-checkbox" />
                                    </td>
                                    <td>
                                        <div class="item-thumb-container">
                                            <img src="all-images/body-images/disinfectant-wipes.svg"
                                                alt="Disinfectant Wipes" />
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name-cell">Disinfectant Wipes</span>
                                    </td>
                                    <td>
                                        <span class="item-category-cell">Sanitizer</span>
                                    </td>
                                    <td>
                                        <span class="availability-pill low">
                                            <span class="pill-dot"></span>
                                            <span>Low</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">25</span>
                                    </td>
                                    <td>
                                        <span class="item-metric-val">200</span>
                                    </td>
                                    <td>
                                        <div class="table-row-actions-wrap">
                                            <button type="button" class="btn-view-item-action" title="View Details">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                            <button type="button" class="btn-reorder-item-action">Reorder</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="inventory-pagination-row">
                        <div class="pagination-info">
                            <span>Showing</span>
                            <select class="pagination-size-select">
                                <option value="13" selected>13</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                            <span>out of 128</span>
                        </div>

                        <div class="pagination-controls">
                            <button type="button" class="btn-page-step" title="Previous Page">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button type="button" class="btn-page-step active">1</button>
                            <button type="button" class="btn-page-step">2</button>
                            <button type="button" class="btn-page-step">3</button>
                            <span class="page-step-ellipsis">...</span>
                            <button type="button" class="btn-page-step">10</button>
                            <button type="button" class="btn-page-step" title="Next Page">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="inventory-page-footer">
                    <div class="footer-credits">
                        <span>Copyright &copy; 2024 Peterdraw</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>

                    <div class="footer-social-links">
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
