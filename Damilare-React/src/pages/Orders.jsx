import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { getOrdersList } from "../utils/orderStorage";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setOrders(getOrdersList());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(orders.map((o) => o.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (id) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter((item) => item !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.channel.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <DashboardLayout>
      <section className="orders-card">
        <div className="orders-header">
          <div className="header-title">
            <h1>Orders</h1>
            <p className="orders-subtitle">
              Live customer and wholesale order management
            </p>
          </div>

          <div className="header-actions">
            <button type="button" className="btn btn-outline" title="Export orders">
              <i className="bi bi-file-earmark-excel"></i> Export to excel
            </button>
            <button type="button" className="btn btn-outline" title="Import orders">
              <i className="bi bi-upload"></i> Import Orders
            </button>
            <button type="button" className="btn btn-purple" title="Create new order">
              <i className="bi bi-plus"></i> New Orders
            </button>
          </div>
        </div>

        <div className="orders-filter-row">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search order ID, customer, destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-controls">
            <button type="button" className="btn btn-date" title="Select Date">
              <i className="bi bi-calendar3"></i>
            </button>

            <select
              className="btn btn-select select-dropdown"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              title="Filter by status"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
            </select>
          </div>
        </div>

        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th className="th-checkbox">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="selectAll"
                    onChange={handleSelectAll}
                    checked={
                      filteredOrders.length > 0 &&
                      selectedOrders.length === filteredOrders.length
                    }
                  />
                </th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Sales Channel</th>
                <th>Destination</th>
                <th>Items</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "30px", color: "#64748b" }}>
                    No orders match your search criteria.
                  </td>
                </tr>
              ) : (
                paginatedOrders.map((order) => {
                  const isPending = order.status.toLowerCase() === "pending";
                  const isCompleted = order.status.toLowerCase() === "completed";
                  const isProcessing = order.status.toLowerCase() === "processing";

                  return (
                    <tr key={order.id}>
                      <td className="td-checkbox">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => handleSelectOrder(order.id)}
                        />
                      </td>
                      <td style={{ fontWeight: 600, color: "var(--purple-primary, #6366f1)" }}>
                        {order.id}
                      </td>
                      <td>{order.date}</td>
                      <td>
                        <strong>{order.customer}</strong>
                        {order.email && (
                          <div style={{ fontSize: "11px", color: "#64748b" }}>
                            {order.email}
                          </div>
                        )}
                      </td>
                      <td>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "12px",
                            fontWeight: 500,
                            color: order.channel === "Online Store" ? "#0284c7" : "#475569",
                          }}
                        >
                          <i
                            className={
                              order.channel === "Online Store"
                                ? "bi bi-globe2"
                                : "bi bi-shop"
                            }
                          ></i>
                          {order.channel}
                        </span>
                      </td>
                      <td>{order.destination}</td>
                      <td>
                        <span style={{ fontWeight: 600 }}>{order.items}</span>
                      </td>
                      <td>
                        <span
                          className={`status-badge ${
                            isCompleted
                              ? "badge-completed"
                              : isPending
                              ? "badge-pending"
                              : isProcessing
                              ? "badge-processing"
                              : ""
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="orders-pagination">
          <span className="pagination-info">
            Showing {filteredOrders.length > 0 ? `${startIndex + 1} to ${Math.min(startIndex + itemsPerPage, filteredOrders.length)} of ${filteredOrders.length}` : "0"} orders
          </span>
          <div className="pagination-controls">
            <button
              type="button"
              className="btn-page prev"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              title="Previous page"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                className={`btn-page ${currentPage === pageNum ? "active" : ""}`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            ))}
            <button
              type="button"
              className="btn-page next"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              title="Next page"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
