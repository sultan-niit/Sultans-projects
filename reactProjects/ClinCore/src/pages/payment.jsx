import { Link } from "react-router-dom";

export default function Payments() {
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

            <Link to="/payments" className="nav-link active">
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
              <h1 className="page-main-heading">Payments</h1>
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
                <div class="payments-stats-grid">
                    <div class="payment-stat-card">
                        <div class="payment-stat-left">
                            <div class="payment-stat-icon">
                                <i class="bi bi-receipt"></i>
                            </div>
                            <div class="payment-stat-info">
                                <span class="payment-stat-label">Total Invoice</span>
                                <span class="payment-stat-value">865</span>
                            </div>
                        </div>
                        <div class="payment-stat-trend trend-up">
                            <i class="bi bi-graph-up-arrow"></i>
                            <span>+2.14%</span>
                        </div>
                    </div>

                    <div class="payment-stat-card">
                        <div class="payment-stat-left">
                            <div class="payment-stat-icon">
                                <i class="bi bi-shield-check"></i>
                            </div>
                            <div class="payment-stat-info">
                                <span class="payment-stat-label">Paid Invoice</span>
                                <span class="payment-stat-value">289</span>
                            </div>
                        </div>
                        <div class="payment-stat-trend trend-up">
                            <i class="bi bi-graph-up-arrow"></i>
                            <span>+1.40%</span>
                        </div>
                    </div>

                    <div class="payment-stat-card">
                        <div class="payment-stat-left">
                            <div class="payment-stat-icon">
                                <i class="bi bi-hourglass-split"></i>
                            </div>
                            <div class="payment-stat-info">
                                <span class="payment-stat-label">Pending Invoice</span>
                                <span class="payment-stat-value">98</span>
                            </div>
                        </div>
                        <div class="payment-stat-trend trend-down">
                            <i class="bi bi-graph-down-arrow"></i>
                            <span>-1.56%</span>
                        </div>
                    </div>

                    <div class="payment-stat-card">
                        <div class="payment-stat-left">
                            <div class="payment-stat-icon">
                                <i class="bi bi-info-circle"></i>
                            </div>
                            <div class="payment-stat-info">
                                <span class="payment-stat-label">Overdue</span>
                                <span class="payment-stat-value">168</span>
                            </div>
                        </div>
                        <div class="payment-stat-trend trend-up">
                            <i class="bi bi-graph-up-arrow"></i>
                            <span>+0.37%</span>
                        </div>
                    </div>
                </div>

                <div class="payments-toolbar">
                    <div class="payments-toolbar-left">
                        <div class="payments-search-bar">
                            <i class="bi bi-search"></i>
                            <input type="text" placeholder="Search name, treatment, etc" />
                        </div>

                        <div class="payment-filter-pill">
                            <i class="bi bi-calendar-week"></i>
                            <span>1 - 20 July 2028</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>

                        <div class="payment-filter-pill">
                            <i class="bi bi-funnel"></i>
                            <span>Status</span>
                            <i class="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <button type="button" class="btn-add-invoice-action">
                        <i class="bi bi-plus-lg"></i>
                        <span>Add Invoice</span>
                    </button>
                </div>

                <div class="payments-main-card">
                    <div class="payments-table-wrap">
                        <table class="payments-data-table">
                            <thead>
                                <tr>
                                    <th class="sortable-th">
                                        <span>Invoice ID</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Patient Name</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Treatment</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Date</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Amount</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Status</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th class="sortable-th">
                                        <span>Payment Method</span>
                                        <i class="bi bi-arrow-down-up"></i>
                                    </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-001</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">John Doe</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Routine Check-Up</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>General Medicine</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">1 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$100</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-paid">
                                            <span class="status-icon"></span>
                                            <span>Paid</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Card</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                                                                    </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-002</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Mary Johnson</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Heart Surgery</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>Cardiology</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">2 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$5000</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-pending">
                                            <span class="status-icon"></span>
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Transfer</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-003</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Robert Brown</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Flu Symptoms</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>General Medicine</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">3 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$120</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-paid">
                                            <span class="status-icon"></span>
                                            <span>Paid</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Card</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-004</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Susan Lee</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Skin Treatment</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>Dermatology</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">4 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$200</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-paid">
                                            <span class="status-icon"></span>
                                            <span>Paid</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Cash</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-005</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">James Wilson</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Arthritis Management</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>Orthopedics</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">5 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$140</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-pending">
                                            <span class="status-icon"></span>
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Card</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-006</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Caren G. Simpson</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Routine Check-Up</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>General Medicine</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">6 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$100</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-paid">
                                            <span class="status-icon"></span>
                                            <span>Paid</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Cash</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-007</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Patricia Clark</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Hypertension Management</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>General Medicine</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">7 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$150</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-pending">
                                            <span class="status-icon"></span>
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Transfer</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-008</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Kevin White</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Respiratory Infection</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>Pulmonology</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">8 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$180</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-paid">
                                            <span class="status-icon"></span>
                                            <span>Paid</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Card</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-009</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Jennifer Adams</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Preventive Care</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>General Medicine</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">9 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$130</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-paid">
                                            <span class="status-icon"></span>
                                            <span>Paid</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Cash</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-010</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Barbara Harris</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Medication Review</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>Pharmacy</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">10 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$110</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-pending">
                                            <span class="status-icon"></span>
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Card</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-011</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Michael Thompson</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Routine Check-Up</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>General Medicine</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">11 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$100</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-paid">
                                            <span class="status-icon"></span>
                                            <span>Paid</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="pay-method-text">Card</span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="invoice-id-cell">INV-WNH-012</span>
                                    </td>
                                    <td>
                                        <span class="patient-name-cell">Rachel Green</span>
                                    </td>
                                    <td>
                                        <div class="treatment-cell-wrap">
                                            <span class="treatment-title">Asthma Management</span>
                                            <span class="treatment-dept">
                                                <i class="bi bi-file-medical"></i>
                                                <span>Pulmonology</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="payment-date-cell">12 July 2028</span>
                                    </td>
                                    <td>
                                        <span class="payment-amount-cell">$160</span>
                                    </td>
                                    <td>
                                        <span class="payment-status-pill status-pending">
                                            <span class="status-icon"></span>
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="payment-row-actions">
                                            <button type="button" class="btn-invoice-action" title="View Invoice">
                                                <i class="bi bi-eye"></i>
                                                <span>View</span>
                                            </button>
                                                                                    </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="payments-pagination-row">
                        <div class="payments-pagination-info">
                            <span>Showing</span>
                            <select class="payments-page-select">
                                <option value="12" selected>12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                            </select>
                            <span>out of 33</span>
                        </div>

                        <div class="payments-pagination-controls">
                            <button type="button" class="btn-payments-step" title="Previous Page">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button type="button" class="btn-payments-step active">1</button>
                            <button type="button" class="btn-payments-step">2</button>
                            <button type="button" class="btn-payments-step">3</button>
                            <button type="button" class="btn-payments-step" title="Next Page">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="payments-page-footer">
                    <div class="payments-footer-left">
                        <span>Copyright &copy; 2024 Peterdraw</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>

                    <div class="payments-footer-socials">
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
