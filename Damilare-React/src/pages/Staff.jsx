import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import dmlAvatar from "../assets/body-images/DML AVATER.png";
import { useAuth } from "../context/AuthContext";
import {
  AVAILABLE_DEPARTMENTS,
  AVAILABLE_ROLES,
  AVAILABLE_STATUSES,
  deleteStaffMember,
  getFormattedCurrentDate,
  getInitials,
  getRandomAvatarClass,
  getStaffList,
  isSuperAdminEmail,
  saveStaffList,
  updateStaffMember,
} from "../utils/staffStorage";

export default function Staff() {
  const { user, isSuperAdmin: authIsSuperAdmin } = useAuth();
  const [currentUser, setCurrentUser] = useState(user);
  const [staffList, setStaffList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selectedStaffIds, setSelectedStaffIds] = useState([]);

  useEffect(() => {
    let resolved = user;
    if (!resolved) {
      try {
        const stored = localStorage.getItem("user") || sessionStorage.getItem("userSession");
        if (stored) {
          const parsed = JSON.parse(stored);
          resolved = parsed.data || parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    setCurrentUser(resolved);
  }, [user]);

  const activeEmail = currentUser?.emailAddress || currentUser?.email || "";
  const isSuperAdmin = authIsSuperAdmin || isSuperAdminEmail(activeEmail);

  // Modal States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [currentEditingStaff, setCurrentEditingStaff] = useState(null);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    role: "Pending Assignment",
    phoneNumber: "",
    emailAddress: "",
    department: "Unassigned",
    status: "Active",
  });

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    role: "Pending Assignment",
    phoneNumber: "",
    emailAddress: "",
    department: "Unassigned",
    status: "Active",
  });

  // Load staff on mount
  useEffect(() => {
    const list = getStaffList();
    setStaffList(list);
  }, []);

  // Helper for Role Badges
  const getRoleBadgeClass = (role) => {
    switch (role) {
      case "Administrator":
        return "role-admin";
      case "Warehouse Manager":
        return "role-manager";
      case "Senior Sales Rep":
        return "role-sales";
      case "Solar Technician":
        return "role-tech";
      case "Store Auditor":
        return "role-store";
      case "Fulfillment Clerk":
        return "role-staff";
      case "Pending Assignment":
      default:
        return "role-pending";
    }
  };

  // Helper for Status Badges
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "badge-completed";
      case "Pending":
        return "badge-pending";
      case "Inactive":
      default:
        return "badge-canceled";
    }
  };

  // Filtering Logic
  const filteredStaff = staffList.filter((staff) => {
    const matchesSearch =
      staff.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.emailAddress?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role?.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (roleFilter === "All") return true;
    if (roleFilter === "Admin") return staff.role === "Administrator";
    if (roleFilter === "Managers") return staff.role.includes("Manager");
    if (roleFilter === "Technicians") return staff.role.includes("Technician");
    if (roleFilter === "Sales") return staff.role.includes("Sales");
    if (roleFilter === "Pending") return staff.role === "Pending Assignment" || staff.status === "Pending";
    return true;
  });

  // Checkbox Selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedStaffIds(filteredStaff.map((s) => s.id));
    } else {
      setSelectedStaffIds([]);
    }
  };

  const handleSelectStaff = (id) => {
    if (selectedStaffIds.includes(id)) {
      setSelectedStaffIds(selectedStaffIds.filter((item) => item !== id));
    } else {
      setSelectedStaffIds([...selectedStaffIds, id]);
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (staff) => {
    setCurrentEditingStaff(staff);
    setEditFormData({
      fullName: staff.fullName || "",
      role: staff.role || "Pending Assignment",
      phoneNumber: staff.phoneNumber || "",
      emailAddress: staff.emailAddress || "",
      department: staff.department || "Unassigned",
      status: staff.status || "Active",
    });
    setIsEditModalOpen(true);
  };

  // Handle Edit Input Changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Edit Form
  const handleSaveStaffChanges = (e) => {
    e.preventDefault();
    if (!currentEditingStaff) return;

    const { updatedList } = updateStaffMember(currentEditingStaff.id, editFormData);
    setStaffList(updatedList);
    setIsEditModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  // Delete Staff Member
  const handleDeleteStaff = (staffId, name) => {
    if (window.confirm(`Are you sure you want to remove ${name} from the staff directory?`)) {
      const updatedList = deleteStaffMember(staffId);
      setStaffList(updatedList);
      setSelectedStaffIds((prev) => prev.filter((id) => id !== staffId));
    }
  };

  // Export Staff as CSV
  const handleExportStaff = () => {
    const headers = "Staff ID,Full Name,Email,Phone,Role,Department,Date Employed,Status\n";
    const rows = staffList
      .map(
        (s) =>
          `"${s.id}","${s.fullName}","${s.emailAddress}","${s.phoneNumber}","${s.role}","${s.department}","${s.dateEmployed}","${s.status}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Damilare_Staff_List_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add New Staff Submit
  const handleAddStaffSubmit = (e) => {
    e.preventDefault();
    const nextNumber = staffList.length + 1;
    const isRoleGiven = addFormData.role && addFormData.role !== "Pending Assignment";
    const newStaff = {
      id: `STF-${String(nextNumber).padStart(3, "0")}`,
      fullName: addFormData.fullName.trim(),
      emailAddress: addFormData.emailAddress.trim(),
      phoneNumber: addFormData.phoneNumber.trim() || "N/A",
      role: addFormData.role,
      department: addFormData.department,
      dateEmployed: isRoleGiven ? getFormattedCurrentDate() : "Pending",
      status: addFormData.status,
      avatarType: "initials",
      avatarClass: getRandomAvatarClass(staffList.length),
      initials: getInitials(addFormData.fullName),
    };

    const updatedList = [...staffList, newStaff];
    saveStaffList(updatedList);
    setStaffList(updatedList);
    setIsAddModalOpen(false);
    setIsSuccessModalOpen(true);
    setAddFormData({
      fullName: "",
      role: "Pending Assignment",
      phoneNumber: "",
      emailAddress: "",
      department: "Unassigned",
      status: "Active",
    });
  };

  return (
    <DashboardLayout>
      <section className="users-card">
        {/* Header */}
        <div className="users-header">
          <div className="header-title">
            <h1>Staff</h1>
            <p>
              {isSuperAdmin
                ? "Manage team members, staff roles, and administrative access"
                : "Company staff directory (Read-only view for regular staff)"}
            </p>
          </div>

          <div className="header-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleExportStaff}
              title="Download Staff List as CSV"
            >
              <i className="bi bi-download"></i> Export Staff
            </button>
            {isSuperAdmin && (
              <button
                type="button"
                className="btn btn-purple"
                onClick={() => setIsAddModalOpen(true)}
                title="Add New Staff Member"
              >
                <i className="bi bi-person-plus"></i> Add New Staff
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="users-filter-row">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search staff by name, email, department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-controls">
            <button
              type="button"
              className={`btn btn-role ${roleFilter === "All" ? "active" : ""}`}
              onClick={() => setRoleFilter("All")}
            >
              All Roles
            </button>
            <button
              type="button"
              className={`btn btn-role ${roleFilter === "Admin" ? "active" : ""}`}
              onClick={() => setRoleFilter("Admin")}
            >
              Admin
            </button>
            <button
              type="button"
              className={`btn btn-role ${roleFilter === "Managers" ? "active" : ""}`}
              onClick={() => setRoleFilter("Managers")}
            >
              Managers
            </button>
            <button
              type="button"
              className={`btn btn-role ${roleFilter === "Technicians" ? "active" : ""}`}
              onClick={() => setRoleFilter("Technicians")}
            >
              Technicians
            </button>
            <button
              type="button"
              className={`btn btn-role ${roleFilter === "Sales" ? "active" : ""}`}
              onClick={() => setRoleFilter("Sales")}
            >
              Sales
            </button>
            <button
              type="button"
              className={`btn btn-role ${roleFilter === "Pending" ? "active" : ""}`}
              onClick={() => setRoleFilter("Pending")}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Staff Table */}
        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th className="th-checkbox">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="selectAll"
                    onChange={handleSelectAll}
                    checked={
                      filteredStaff.length > 0 &&
                      selectedStaffIds.length === filteredStaff.length
                    }
                  />
                </th>
                <th>Staff</th>
                <th>Role</th>
                <th>Department</th>
                <th>Contact</th>
                <th>Date Employed</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "36px" }}>
                    <div style={{ color: "var(--muted-color)", fontSize: "14px" }}>
                      <i className="bi bi-people" style={{ fontSize: "28px", display: "block", marginBottom: "8px" }}></i>
                      No staff members match the selected criteria.
                    </div>
                  </td>
                </tr>
              ) : (
                filteredStaff.map((staff) => (
                  <tr key={staff.id}>
                    <td className="td-checkbox">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={selectedStaffIds.includes(staff.id)}
                        onChange={() => handleSelectStaff(staff.id)}
                      />
                    </td>
                    <td>
                      <div className="user-cell">
                        {staff.avatarType === "image" ? (
                          <div className="user-avatar img-avatar">
                            <img src={staff.avatarSrc || dmlAvatar} alt={staff.fullName} />
                          </div>
                        ) : (
                          <div className={`user-avatar text-avatar ${staff.avatarClass || "avatar-blue"}`}>
                            <span>{staff.initials || getInitials(staff.fullName)}</span>
                          </div>
                        )}
                        <div className="user-meta">
                          <span className="user-fullname">{staff.fullName}</span>
                          <span className="user-email" style={{ fontSize: "11px", color: "var(--muted-color)" }}>
                            {staff.id}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`role-badge ${getRoleBadgeClass(staff.role)}`}>
                        {staff.role}
                      </span>
                    </td>
                    <td>{staff.department}</td>
                    <td>
                      <div className="contact-cell">
                        <span className="contact-phone">{staff.phoneNumber}</span>
                        <span className="contact-email">{staff.emailAddress}</span>
                      </div>
                    </td>
                    <td>
                      <strong>{staff.dateEmployed || "Pending"}</strong>
                    </td>
                    <td>
                      <span className={`status-badge ${getStatusBadgeClass(staff.status)}`}>
                        {staff.status}
                      </span>
                    </td>
                    <td>
                      {isSuperAdmin ? (
                        <div className="action-buttons">
                          <button
                            type="button"
                            className="btn-action edit"
                            title={`Edit ${staff.fullName}`}
                            onClick={() => handleOpenEdit(staff)}
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button
                            type="button"
                            className="btn-action delete"
                            title={`Delete ${staff.fullName}`}
                            onClick={() => handleDeleteStaff(staff.id, staff.fullName)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      ) : (
                        <span style={{ color: "var(--muted-color)", fontSize: "12px", fontStyle: "italic" }}>
                          Read-only
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Summary */}
        <div className="users-pagination">
          <span className="pagination-info">
            Showing {filteredStaff.length} of {staffList.length} staff
          </span>
          <div className="pagination-controls">
            <button type="button" className="btn-page prev" disabled title="Previous page">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button type="button" className="btn-page active">
              1
            </button>
            <button type="button" className="btn-page next" disabled title="Next page">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* EDIT STAFF MODAL */}
      {isEditModalOpen && (
        <div className="alert-overlay alertModal">
          <div className="edit-staff-modal-card">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="title-icon">
                  <i className="bi bi-person-gear"></i>
                </div>
                <h2>Edit Staff - {currentEditingStaff?.fullName}</h2>
              </div>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setIsEditModalOpen(false)}
                title="Close Modal"
              >
                <i className="bi bi-x-lg"></i> Close
              </button>
            </div>

            {/* Instruction Notice */}
            <div className="modal-notice">
              You are about to modify Staff. Please complete the form below to update staff account details.
            </div>

            {/* Edit Form */}
            <form onSubmit={handleSaveStaffChanges} className="modal-form">
              {/* Staff Details Section */}
              <div className="form-section-title">
                <i className="bi bi-person-lines-fill"></i> Staff Details
              </div>

              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="editFullName">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="editFullName"
                    name="fullName"
                    className="form-control"
                    value={editFormData.fullName}
                    onChange={handleEditChange}
                    required
                  />
                </div>

                {/* Roles (Replaced Staff ID per user request) */}
                <div className="form-group">
                  <label htmlFor="editRole">
                    Roles <span className="required-star">*</span>
                  </label>
                  <select
                    id="editRole"
                    name="role"
                    className="form-control"
                    value={editFormData.role}
                    onChange={handleEditChange}
                    required
                  >
                    {AVAILABLE_ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="editPhoneNumber">
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="editPhoneNumber"
                    name="phoneNumber"
                    className="form-control"
                    value={editFormData.phoneNumber}
                    onChange={handleEditChange}
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="editEmailAddress">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="editEmailAddress"
                    name="emailAddress"
                    className="form-control"
                    value={editFormData.emailAddress}
                    onChange={handleEditChange}
                    required
                  />
                </div>

                {/* Department (Replaced Delivery Address per user request) */}
                <div className="form-group full-width">
                  <label htmlFor="editDepartment">
                    Department <span className="required-star">*</span>
                  </label>
                  <select
                    id="editDepartment"
                    name="department"
                    className="form-control"
                    value={editFormData.department}
                    onChange={handleEditChange}
                    required
                  >
                    {AVAILABLE_DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Roles & Status Section */}
              <div className="form-section-title" style={{ marginTop: "10px" }}>
                <i className="bi bi-shield-check"></i> Roles & Status
              </div>

              <div className="form-grid">
                {/* Account Status */}
                <div className="form-group full-width">
                  <label htmlFor="editStatus">
                    Account Status <span className="required-star">*</span>
                  </label>
                  <select
                    id="editStatus"
                    name="status"
                    className="form-control"
                    value={editFormData.status}
                    onChange={handleEditChange}
                    required
                  >
                    {AVAILABLE_STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  <i className="bi bi-check2-circle"></i> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD NEW STAFF MODAL */}
      {isAddModalOpen && (
        <div className="alert-overlay alertModal">
          <div className="edit-staff-modal-card">
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="title-icon">
                  <i className="bi bi-person-plus-fill"></i>
                </div>
                <h2>Add New Staff Member</h2>
              </div>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setIsAddModalOpen(false)}
              >
                <i className="bi bi-x-lg"></i> Close
              </button>
            </div>

            <div className="modal-notice">
              Fill in the staff details below to enroll a new team member. If a role is assigned, the date employed will automatically update to today.
            </div>

            <form onSubmit={handleAddStaffSubmit} className="modal-form">
              <div className="form-section-title">
                <i className="bi bi-person-lines-fill"></i> Staff Details
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="e.g. John Doe"
                    value={addFormData.fullName}
                    onChange={(e) => setAddFormData({ ...addFormData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Roles <span className="required-star">*</span>
                  </label>
                  <select
                    name="role"
                    className="form-control"
                    value={addFormData.role}
                    onChange={(e) => setAddFormData({ ...addFormData, role: e.target.value })}
                    required
                  >
                    {AVAILABLE_ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="e.g. +234 801 234 5678"
                    value={addFormData.phoneNumber}
                    onChange={(e) => setAddFormData({ ...addFormData, phoneNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    className="form-control"
                    placeholder="e.g. user@example.com"
                    value={addFormData.emailAddress}
                    onChange={(e) => setAddFormData({ ...addFormData, emailAddress: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label>
                    Department <span className="required-star">*</span>
                  </label>
                  <select
                    name="department"
                    className="form-control"
                    value={addFormData.department}
                    onChange={(e) => setAddFormData({ ...addFormData, department: e.target.value })}
                    required
                  >
                    {AVAILABLE_DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-section-title" style={{ marginTop: "10px" }}>
                <i className="bi bi-shield-check"></i> Roles & Status
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label>
                    Account Status <span className="required-star">*</span>
                  </label>
                  <select
                    name="status"
                    className="form-control"
                    value={addFormData.status}
                    onChange={(e) => setAddFormData({ ...addFormData, status: e.target.value })}
                    required
                  >
                    {AVAILABLE_STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  <i className="bi bi-plus-circle"></i> Add Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CUSTOM SUCCESS MODAL (Matching User Image with Our Project Styling) */}
      {isSuccessModalOpen && (
        <div className="alert-overlay alertModal">
          <div className="success-popup-card">
            <div className="success-check-badge">
              <i className="bi bi-check-lg"></i>
            </div>
            <h2 className="success-title">STAFF UPDATED SUCCESSFULLY!</h2>
            <p className="success-subtitle">STAFF UPDATED SUCCESSFULLY</p>
            <button
              type="button"
              className="btn-continue"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              Okay, Continue
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
