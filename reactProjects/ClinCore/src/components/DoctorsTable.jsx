import React, { useState, useMemo, useEffect } from "react";
import { useModalState } from "../js/components/ModalContext";
import { formatDoctorName, formatSpecialist, getDoctorInitials } from "../api/doctor";

export default function DoctorsTable({
  doctors = [],
  totalCount = 0,
  searchTerm = "",
  isLoading = false,
  isOffline = false,
  onRetry,
  onAddDoctor,
  onDeleteDoctor,
  onClearFilters,
}) {
  const { openProfileModal, openEditDrawer } = useModalState();

  // Sorting state
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleEditDoctorProfile = (doc) => {
    const rawName =
      doc.name ||
      doc.fullName ||
      doc.doctor_name ||
      doc.doctorName ||
      "Dr. Medical Specialist";
    const docName = formatDoctorName(rawName) || "Dr. Medical Specialist";

    openProfileModal(
      {
        fullName: docName,
        email: doc.emailAddress || doc.email || doc.email_address || "doctor@clincore.com",
        position: `${doc.department || doc.departmentName || "Medical Department"} - ${formatSpecialist(doc.specialist || doc.role || "Specialist")}`,
        phone: doc.phone || doc.phoneNumber || doc.phone_number || "+1 (555) 312-4567",
        status: doc.status || (doc.statusId === "A" || doc.status_id === "A" ? "Available" : "Unavailable"),
        lastLogin: "Active Today",
        avatar:
          doc.avatar ||
          getDoctorInitials(docName) ||
          "DR",
        bannerImg: "/all-images/body-images/dept-cardiology.jpg",
        department: doc.department || doc.departmentName || "Cardiology",
      },
      "doctor"
    );
  };

  const getInitials = (name) => {
    return getDoctorInitials(name);
  };

  // Sort doctors dynamically
  const sortedDoctors = useMemo(() => {
    if (!sortField) return doctors;
    return [...doctors].sort((a, b) => {
      let valA = a[sortField] ?? "";
      let valB = b[sortField] ?? "";
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [doctors, sortField, sortOrder]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const totalFiltered = sortedDoctors.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));

  // Reset to first page if page exceeds totalPages (e.g. after search filter)
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalFiltered);
  const paginatedDoctors = sortedDoctors.slice(startIndex, endIndex);

  // 0. LOADING STATE: Just a rolling circle spinner
  if (isLoading) {
    return (
      <div className="doctors-loading-card" id="doctorsLoadingAnimation">
        <div className="rolling-circle-spinner" role="status" aria-label="Loading doctors"></div>
      </div>
    );
  }

  // 1. NO INTERNET / OFFLINE STATE
  if (isOffline) {
    return (
      <div className="doctors-offline-card" id="doctorsOfflineState">
        <div className="offline-circle-indicator">
          <div className="offline-circle-ring"></div>
          <div className="offline-circle-badge">
            <i className="bi bi-wifi-off"></i>
          </div>
        </div>
        <div className="offline-content-group">
          <h4 className="offline-title">No Internet Connection</h4>
          <p className="offline-subtitle">
            Unable to fetch doctor records from the ClinCore server. Please check your network connection and try again.
          </p>
          {onRetry && (
            <button
              type="button"
              className="btn-offline-retry"
              onClick={onRetry}
            >
              <i className="bi bi-arrow-clockwise"></i>
              <span>Retry Connection</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // 1. EMPTY STATE: When NO doctors exist at all
  if (totalCount === 0 || doctors.length === 0) {
    // If user has filtered/searched and there are 0 results out of existing doctors:
    if (totalCount > 0 && doctors.length === 0) {
      return (
        <div className="doctors-empty-prompt-card">
          <div className="empty-prompt-illustration">
            <div className="empty-prompt-icon-ring outer">
              <div className="empty-prompt-icon-ring inner">
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
          <div className="empty-prompt-content">
            <h3 className="empty-prompt-title">No Matching Doctors Found</h3>
            <p className="empty-prompt-description">
              No doctor profiles matched your current search query or active filter criteria.
              Try adjusting your search terms or clearing filters.
            </p>
            {onClearFilters && (
              <button
                type="button"
                className="btn-create-doctor-prompt"
                onClick={onClearFilters}
              >
                <i className="bi bi-arrow-counterclockwise"></i>
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>
      );
    }

    // Default Empty State: Small design prompting the user to add a doctor
    return (
      <div className="doctors-empty-prompt-card" id="emptyDoctorsPrompt">
        <div className="empty-prompt-illustration">
          <div className="empty-prompt-icon-ring outer">
            <div className="empty-prompt-icon-ring inner">
              <i className="bi bi-person-plus-fill"></i>
            </div>
          </div>
        </div>

        <div className="empty-prompt-content">
          <h3 className="empty-prompt-title">No Doctor Profiles Created Yet</h3>
          <p className="empty-prompt-description">
            Your clinical staff directory is currently empty. Start building your medical
            department by adding your first doctor profile with specialization, department,
            and consultation availability.
          </p>

          <div className="empty-prompt-highlights">
            <div className="prompt-highlight-pill">
              <i className="bi bi-building-check"></i>
              <span>Assign Departments</span>
            </div>
            <div className="prompt-highlight-pill">
              <i className="bi bi-heart-pulse"></i>
              <span>Specialist Focus</span>
            </div>
            <div className="prompt-highlight-pill">
              <i className="bi bi-calendar-check"></i>
              <span>Consultation Availability</span>
            </div>
          </div>

          <button
            type="button"
            className="btn-create-doctor-prompt"
            onClick={onAddDoctor}
            id="promptAddDoctorBtn"
            title="Create your first doctor profile"
          >
            <i className="bi bi-plus-lg"></i>
            <span>Add Doctor Profile</span>
          </button>
        </div>
      </div>
    );
  }

  // 2. DATA TABLE: When doctors are registered in the system
  return (
    <>
      <div className="doctors-table-container">
        <table className="doctors-data-table" id="doctorsTable">
          <thead>
            <tr>
              <th className="sortable" onClick={() => handleSort("doctorId")} title="Sort by Doctor ID">
                Doctor ID{" "}
                <i
                  className={`bi ${
                    sortField === "doctorId"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                ></i>
              </th>
              <th className="sortable" onClick={() => handleSort("name")} title="Sort by Name">
                Doctor Name{" "}
                <i
                  className={`bi ${
                    sortField === "name"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                ></i>
              </th>
              <th className="sortable" onClick={() => handleSort("department")} title="Sort by Department">
                Department{" "}
                <i
                  className={`bi ${
                    sortField === "department"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                ></i>
              </th>
              <th className="sortable" onClick={() => handleSort("specialist")} title="Sort by Specialist">
                Specialist{" "}
                <i
                  className={`bi ${
                    sortField === "specialist"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                ></i>
              </th>
              <th className="sortable text-center" onClick={() => handleSort("totalPatients")} title="Sort by Patients">
                Total Patients{" "}
                <i
                  className={`bi ${
                    sortField === "totalPatients"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                ></i>
              </th>
              <th className="sortable text-center" onClick={() => handleSort("todayAppointments")} title="Sort by Appointments">
                Today's Appointment{" "}
                <i
                  className={`bi ${
                    sortField === "todayAppointments"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                ></i>
              </th>
              <th className="sortable" onClick={() => handleSort("status")} title="Sort by Status">
                Status{" "}
                <i
                  className={`bi ${
                    sortField === "status"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                ></i>
              </th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody id="doctorsTableBody">
            {paginatedDoctors.map((doctor, idx) => {
              const rawName =
                doctor.name ||
                doctor.fullName ||
                doctor.doctor_name ||
                doctor.doctorName ||
                "Dr. Medical Specialist";
              const docName = formatDoctorName(rawName) || "Dr. Medical Specialist";
              const isAvailable =
                doctor.status === "Available" ||
                doctor.status === "Active" ||
                doctor.statusId === "A" ||
                doctor.status_id === "A";

              const docId =
                doctor.doctorId || doctor.doctor_id || `WNH-DOC-${String(idx + 1).padStart(3, "0")}`;
              const docEmail =
                doctor.emailAddress || doctor.email || doctor.email_address || "";
              const docDept =
                doctor.department || doctor.departmentName || "General Medicine";
              const docSpec =
                formatSpecialist(doctor.specialist || doctor.role || "Routine Check-Ups");

              return (
                <tr key={docId}>
                  <td>
                    <span className="doctor-id-code">
                      {docId}
                    </span>
                  </td>
                  <td>
                    <div
                      className="doctor-cell-profile"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleEditDoctorProfile(doctor)}
                      title={`View profile for ${docName}`}
                    >
                      <div className="doctor-avatar-badge">
                        <span>{getInitials(docName)}</span>
                      </div>
                      <div className="doctor-cell-info-col">
                        <span className="doctor-cell-name">{docName}</span>
                        {docEmail && (
                          <span className="doctor-cell-email">
                            {docEmail}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="doctor-dept-txt">
                      {docDept}
                    </span>
                  </td>
                  <td>
                    <span className="doctor-spec-txt">
                      {docSpec}
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="doctor-metric-num">
                      {doctor.totalPatients ?? 0}
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="doctor-metric-num">
                      {doctor.todayAppointments ?? 0}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`status-pill-badge ${
                        isAvailable ? "available" : "unavailable"
                      }`}
                    >
                      <span className="status-dot-indicator"></span>
                      {isAvailable ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="table-row-actions">
                      <button
                        type="button"
                        className="btn-table-action edit"
                        aria-label="Edit Doctor Profile"
                        title="Edit Doctor Profile"
                        onClick={() => openEditDrawer(doctor, "doctor")}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      {onDeleteDoctor && (
                        <button
                          type="button"
                          className="btn-table-action delete"
                          aria-label="Delete Doctor Profile"
                          title="Delete Doctor"
                          onClick={() => onDeleteDoctor(docId)}
                        >
                          <i className="bi bi-trash3"></i>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="table-pagination-row">
        <div className="pagination-showing-wrap">
          <span>Showing</span>
          <span className="pagination-count-highlight">
            {totalFiltered === 1
              ? "1"
              : totalFiltered <= pageSize
              ? `1 - ${totalFiltered}`
              : `${startIndex + 1} - ${endIndex}`}
          </span>
          <span id="showingCountText">of {totalFiltered}</span>

          {totalFiltered > 10 && (
            <div className="pagination-size-selector">
              <label htmlFor="pageSizeSelect" className="pagination-size-label">
                Per page:
              </label>
              <select
                className="pagination-select-custom"
                id="pageSizeSelect"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          )}
        </div>

        <div className="pagination-buttons-wrap">
          <button
            type="button"
            className="btn-page-nav"
            id="prevPageBtn"
            aria-label="Previous Page"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              className={`btn-page-nav ${currentPage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className="btn-page-nav"
            id="nextPageBtn"
            aria-label="Next Page"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
