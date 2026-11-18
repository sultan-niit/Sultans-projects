import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { getInStockList } from "../utils/productStorage";

export default function InStock() {
  const [stockList, setStockList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setStockList(getInStockList());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(stockList.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const filteredStock = stockList.filter((item) => {
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.channel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.instruction.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredStock.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStock = filteredStock.slice(startIndex, startIndex + itemsPerPage);

  return (
    <DashboardLayout>
      <section className="instock-card">
        <div className="instock-header">
          <div className="header-title">
            <h1>In stock</h1>
            <p className="orders-subtitle" style={{ fontSize: "13px", color: "#64748b", margin: "4px 0 0" }}>
              Warehouse inventory levels and replenishment tracking
            </p>
          </div>

          <div className="header-actions">
            <button type="button" className="btn btn-blue" title="Add new replenishment batch">
              <i className="bi bi-plus"></i> New Stock
            </button>
          </div>
        </div>

        <div className="instock-filter-row">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Quick search product, category, batch ID..."
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
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="instock-table-wrapper">
          <table className="instock-table">
            <thead>
              <tr>
                <th className="th-checkbox">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="selectAll"
                    onChange={handleSelectAll}
                    checked={
                      filteredStock.length > 0 &&
                      selectedItems.length === filteredStock.length
                    }
                  />
                </th>
                <th>Order ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Sales Channel</th>
                <th>Instruction</th>
                <th>Items (Available)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStock.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "30px", color: "#64748b" }}>
                    No stock records match your search criteria.
                  </td>
                </tr>
              ) : (
                paginatedStock.map((item) => {
                  const isCompleted = item.status.toLowerCase() === "completed";
                  const isPending = item.status.toLowerCase() === "pending";

                  return (
                    <tr key={item.id}>
                      <td className="td-checkbox">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleSelectItem(item.id)}
                        />
                      </td>
                      <td style={{ fontWeight: 600, color: "var(--purple-primary, #6366f1)" }}>
                        {item.id}
                      </td>
                      <td>
                        <strong>{item.product}</strong>
                      </td>
                      <td>
                        <span className="badge badge-light" style={{ padding: "3px 8px", borderRadius: "12px", fontSize: "11px", background: "#f1f5f9", color: "#334155" }}>
                          {item.category}
                        </span>
                      </td>
                      <td>{item.channel}</td>
                      <td>{item.instruction}</td>
                      <td>
                        <strong style={{ color: item.available < 10 ? "#ef4444" : "#0f172a" }}>
                          {item.available}
                        </strong>
                        <span style={{ color: "#94a3b8" }}>/{item.maxCapacity}</span>
                      </td>
                      <td>
                        <span
                          className={`status-badge ${
                            isCompleted ? "badge-completed" : isPending ? "badge-pending" : ""
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="instock-pagination">
          <span className="pagination-info">
            Showing {filteredStock.length > 0 ? `${startIndex + 1} to ${Math.min(startIndex + itemsPerPage, filteredStock.length)} of ${filteredStock.length}` : "0"} inventory batches
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
