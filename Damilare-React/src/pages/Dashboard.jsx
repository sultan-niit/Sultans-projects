import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Metrics */}
      <section className="metrics-grid">
        <div className="metric-card">
          <h3 className="card-title">Revenue</h3>
          <div className="card-body">
            <div className="coin-icon">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  strokeLinecap="round"
                />
                <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" />
              </svg>
            </div>
            <span className="plus-sign">+</span>
            <span className="metric-value">30,000</span>
          </div>
        </div>

        <div className="metric-card">
          <h3 className="card-title">Sales Return</h3>
          <div className="card-body">
            <div className="coin-icon">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  strokeLinecap="round"
                />
                <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" />
              </svg>
            </div>
            <span className="plus-sign">+</span>
            <span className="metric-value">30,000</span>
          </div>
        </div>

        <div className="metric-card">
          <h3 className="card-title">Purchase</h3>
          <div className="card-body">
            <div className="coin-icon">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  strokeLinecap="round"
                />
                <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" />
              </svg>
            </div>
            <span className="plus-sign">+</span>
            <span className="metric-value">30,000</span>
          </div>
        </div>

        <div className="metric-card">
          <h3 className="card-title">Income</h3>
          <div className="card-body">
            <div className="coin-icon">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  strokeLinecap="round"
                />
                <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" />
              </svg>
            </div>
            <span className="plus-sign">+</span>
            <span className="metric-value">30,000</span>
          </div>
        </div>
      </section>

      {/* Charts Row */}
      <section className="charts-row">
        <div className="chart-card bar-chart-card">
          <div className="bar-chart-container">
            <div className="axis-wrapper">
              <div className="axis y-axis"></div>
              <div className="bars-wrapper">
                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-90"></div>
                  <div className="bar bar-blue bar-h-75"></div>
                </div>

                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-60"></div>
                  <div className="bar bar-blue bar-h-90"></div>
                </div>

                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-60"></div>
                  <div className="bar bar-blue bar-h-90"></div>
                </div>

                <div className="bar-group">
                  <div className="bar bar-yellow bar-h-60"></div>
                  <div className="bar bar-blue bar-h-90"></div>
                </div>
              </div>
            </div>
            <div className="axis x-axis"></div>
          </div>
        </div>
      </section>

      {/* Tables Row */}
      <section className="tables-row">
        <div className="table-card stock-alert-card">
          <h3 className="table-card-title">Stock Alert</h3>
          <div className="table-divider"></div>
          <div className="table-responsive">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>order ID</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Alert amt.</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#4821</td>
                  <td>04/12/2023</td>
                  <td>8</td>
                  <td>15</td>
                  <td>
                    <span className="status-badge badge-alert">Low Stock</span>
                  </td>
                </tr>
                <tr>
                  <td>#9304</td>
                  <td>07/19/2023</td>
                  <td>3</td>
                  <td>10</td>
                  <td>
                    <span className="status-badge badge-pending">Critical</span>
                  </td>
                </tr>
                <tr>
                  <td>#5172</td>
                  <td>09/05/2023</td>
                  <td>24</td>
                  <td>20</td>
                  <td>
                    <span className="status-badge badge-completed">In Stock</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-card top-selling-card">
          <h3 className="table-card-title">Top selling Products</h3>
          <div className="table-divider"></div>
          <div className="table-responsive">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>order ID</th>
                  <th>Quantity</th>
                  <th>Alert amt.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#8245</td>
                  <td>142</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>#3910</td>
                  <td>98</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>#6734</td>
                  <td>65</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
