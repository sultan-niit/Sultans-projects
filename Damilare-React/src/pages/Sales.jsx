import DashboardLayout from "../components/DashboardLayout";

export default function Sales() {
  return (
    <DashboardLayout>
      <div className="sales-page-header">
        <div className="header-title">
          <h1>Sales &amp; Revenue Analytics</h1>
          <p>Real-time revenue monitoring, distribution channels, and transaction records</p>
        </div>
        <div className="header-actions">
          <button type="button" className="btn btn-outline">
            <i className="bi bi-calendar3"></i> Last 30 Days <i className="bi bi-chevron-down"></i>
          </button>
          <button type="button" className="btn btn-outline">
            <i className="bi bi-download"></i> Download Report
          </button>
          <button type="button" className="btn btn-purple">
            <i className="bi bi-plus-lg"></i> Record Sale
          </button>
        </div>
      </div>

      <section className="sales-metrics-grid">
        <div className="sales-card">
          <div className="card-icon">
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L15 13"></path>
              <circle cx="18" cy="6" r="3"></circle>
            </svg>
          </div>
          <div className="card-info">
            <div className="info-top">
              <span className="metric-value value-purple">30,000</span>
              <span className="trend-badge">
                <i className="bi bi-arrow-up"></i> 12%
              </span>
            </div>
            <span className="metric-label">Today's sales</span>
          </div>
        </div>

        <div className="sales-card">
          <div className="card-icon">
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L15 13"></path>
              <circle cx="18" cy="6" r="3"></circle>
            </svg>
          </div>
          <div className="card-info">
            <div className="info-top">
              <span className="metric-value value-blue">270</span>
              <span className="trend-badge">
                <i className="bi bi-arrow-up"></i> 12%
              </span>
            </div>
            <span className="metric-label">Today's total orders</span>
          </div>
        </div>

        <div className="sales-card">
          <div className="card-icon">
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L15 13"></path>
              <circle cx="18" cy="6" r="3"></circle>
            </svg>
          </div>
          <div className="card-info">
            <div className="info-top">
              <span className="metric-value value-orange">1,000</span>
              <span className="trend-badge">
                <i className="bi bi-arrow-up"></i> 12%
              </span>
            </div>
            <span className="metric-label">Today's revenue</span>
          </div>
        </div>

        <div className="sales-card">
          <div className="card-icon">
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L15 13"></path>
              <circle cx="18" cy="6" r="3"></circle>
            </svg>
          </div>
          <div className="card-info">
            <div className="info-top">
              <span className="metric-value value-yellow">100</span>
              <span className="trend-badge">
                <i className="bi bi-arrow-up"></i> 12%
              </span>
            </div>
            <span className="metric-label">Today's customers</span>
          </div>
        </div>
      </section>

      <section className="sales-charts-row">
        <div className="chart-card sales-bar-chart-card">
          <div className="chart-header">
            <h3>Todays data</h3>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-box box-yellow"></span>
                <span>Order</span>
              </div>
              <div className="legend-item">
                <span className="legend-box box-blue"></span>
                <span>Sales</span>
              </div>
            </div>
          </div>

          <div className="bar-chart-container">
            <div className="axis-wrapper">
              <div className="axis y-axis"></div>
              <div className="bars-wrapper">
                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-90"></div>
                  <div className="bar bar-blue bar-h-75"></div>
                </div>
                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-55"></div>
                  <div className="bar bar-blue bar-h-90"></div>
                </div>
                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-55"></div>
                  <div className="bar bar-blue bar-h-90"></div>
                </div>
                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-55"></div>
                  <div className="bar bar-blue bar-h-90"></div>
                </div>
              </div>
            </div>
            <div className="axis x-axis"></div>
          </div>
        </div>

        <div className="chart-card sales-channel-card">
          <div className="chart-header">
            <h3>Sales by Channel</h3>
            <span className="header-sub">This Month</span>
          </div>

          <div className="channel-list">
            <div className="channel-item">
              <div className="channel-info">
                <div className="channel-title">
                  <span className="channel-dot dot-purple"></span>
                  <span className="channel-name">Online Store</span>
                </div>
                <div className="channel-numbers">
                  <span className="channel-amount">$14,200</span>
                  <span className="channel-percent">47%</span>
                </div>
              </div>
              <div className="channel-progress">
                <div className="channel-progress-bar bar-purple progress-w-47"></div>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-info">
                <div className="channel-title">
                  <span className="channel-dot dot-blue"></span>
                  <span className="channel-name">Direct Wholesale</span>
                </div>
                <div className="channel-numbers">
                  <span className="channel-amount">$8,600</span>
                  <span className="channel-percent">29%</span>
                </div>
              </div>
              <div className="channel-progress">
                <div className="channel-progress-bar bar-blue progress-w-29"></div>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-info">
                <div className="channel-title">
                  <span className="channel-dot dot-yellow"></span>
                  <span className="channel-name">Retail Outlet</span>
                </div>
                <div className="channel-numbers">
                  <span className="channel-amount">$4,500</span>
                  <span className="channel-percent">15%</span>
                </div>
              </div>
              <div className="channel-progress">
                <div className="channel-progress-bar bar-yellow progress-w-15"></div>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-info">
                <div className="channel-title">
                  <span className="channel-dot dot-orange"></span>
                  <span className="channel-name">Dealer Network</span>
                </div>
                <div className="channel-numbers">
                  <span className="channel-amount">$2,700</span>
                  <span className="channel-percent">9%</span>
                </div>
              </div>
              <div className="channel-progress">
                <div className="channel-progress-bar bar-orange progress-w-9"></div>
              </div>
            </div>
          </div>

          <div className="channel-footer">
            <div className="footer-stat">
              <span className="stat-label">Total Channel Sales</span>
              <span className="stat-value">$30,000.00</span>
            </div>
            <div className="footer-stat">
              <span className="stat-label">Average Order Value</span>
              <span className="stat-value">$111.10</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sales-table-card">
        <div className="table-card-header">
          <div className="header-left">
            <h2 className="card-title">Recent Sales Transactions</h2>
            <p className="card-subtitle">
              Real-time overview of recently processed and fulfilled customer orders
            </p>
          </div>
          <div className="header-right">
            <div className="search-box">
              <i className="bi bi-search"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search transactions..."
              />
            </div>
            <button type="button" className="btn">
              <i className="bi bi-funnel"></i> Filter
            </button>
            <button type="button" className="btn">
              <i className="bi bi-download"></i> Export
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="sales-data-table">
            <thead>
              <tr>
                <th className="th-checkbox">
                  <input type="checkbox" className="custom-checkbox" />
                </th>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Sales Channel</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-checkbox">
                  <input type="checkbox" className="custom-checkbox" />
                </td>
                <td className="invoice-id">#INV-9821</td>
                <td>10/12/2023</td>
                <td className="customer-name">Oluwaseun Adeleke</td>
                <td>SolarNet Hybrid Inverter 5kW</td>
                <td>Online Store</td>
                <td>
                  <span className="pay-method">
                    <i className="bi bi-bank"></i> Bank Transfer
                  </span>
                </td>
                <td className="amount-cell">$2,550.00</td>
                <td>
                  <span className="status-badge badge-completed">Paid</span>
                </td>
                <td>
                  <button type="button" className="btn-action" title="View Invoice">
                    <i className="bi bi-receipt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="td-checkbox">
                  <input type="checkbox" className="custom-checkbox" />
                </td>
                <td className="invoice-id">#INV-7415</td>
                <td>10/11/2023</td>
                <td className="customer-name">Amina Mohammed</td>
                <td>EcoVolt LiFePO4 Battery 5kWh</td>
                <td>Direct Wholesale</td>
                <td>
                  <span className="pay-method">
                    <i className="bi bi-credit-card"></i> Card
                  </span>
                </td>
                <td className="amount-cell">$1,450.00</td>
                <td>
                  <span className="status-badge badge-pending">Pending</span>
                </td>
                <td>
                  <button type="button" className="btn-action" title="View Invoice">
                    <i className="bi bi-receipt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="td-checkbox">
                  <input type="checkbox" className="custom-checkbox" />
                </td>
                <td className="invoice-id">#INV-6320</td>
                <td>10/10/2023</td>
                <td className="customer-name">Chinedu Eze</td>
                <td>Silent Power Generator 2.2kVA</td>
                <td>Retail Outlet</td>
                <td>
                  <span className="pay-method">
                    <i className="bi bi-cash-stack"></i> POS / Cash
                  </span>
                </td>
                <td className="amount-cell">$1,860.00</td>
                <td>
                  <span className="status-badge badge-completed">Paid</span>
                </td>
                <td>
                  <button type="button" className="btn-action" title="View Invoice">
                    <i className="bi bi-receipt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="td-checkbox">
                  <input type="checkbox" className="custom-checkbox" />
                </td>
                <td className="invoice-id">#INV-5184</td>
                <td>10/09/2023</td>
                <td className="customer-name">Fatima Danjuma</td>
                <td>Smart MPPT Controller 40A</td>
                <td>Amazon Store</td>
                <td>
                  <span className="pay-method">
                    <i className="bi bi-globe"></i> Online Portal
                  </span>
                </td>
                <td className="amount-cell">$540.00</td>
                <td>
                  <span className="status-badge badge-pending">Pending</span>
                </td>
                <td>
                  <button type="button" className="btn-action" title="View Invoice">
                    <i className="bi bi-receipt"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="td-checkbox">
                  <input type="checkbox" className="custom-checkbox" />
                </td>
                <td className="invoice-id">#INV-4299</td>
                <td>10/08/2023</td>
                <td className="customer-name">Babajide Sanwo</td>
                <td>Monocrystalline Solar Panel (x5)</td>
                <td>Dealer Network</td>
                <td>
                  <span className="pay-method">
                    <i className="bi bi-bank"></i> Bank Transfer
                  </span>
                </td>
                <td className="amount-cell">$900.00</td>
                <td>
                  <span className="status-badge badge-completed">Paid</span>
                </td>
                <td>
                  <button type="button" className="btn-action" title="View Invoice">
                    <i className="bi bi-receipt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sales-pagination">
          <span className="pagination-info">Showing 1 to 5 of 270 transactions</span>
          <div className="pagination-controls">
            <button type="button" className="btn-page prev" disabled title="Previous page">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button type="button" className="btn-page active">
              1
            </button>
            <button type="button" className="btn-page">
              2
            </button>
            <button type="button" className="btn-page">
              3
            </button>
            <button type="button" className="btn-page next" title="Next page">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
