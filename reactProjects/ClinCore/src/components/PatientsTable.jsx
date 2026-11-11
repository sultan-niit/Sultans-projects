import React, { useState, useMemo, useEffect } from "react";
import { useModalState } from "../js/components/ModalContext";

export default function PatientsTable({
  patients = [],
  totalCount = 0,
  searchTerm = "",
  isLoading = false,
  isOffline = false,
  onRetry,
  onAddPatient,
  onDeletePatient,
  onClearFilters,
}) {
  const { openProfileModal, openEditDrawer } = useModalState();

  // Sorting state
  const [sortField, setSortField] = useState("patientId");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const handlePatientClick = (patient) => {
    openProfileModal(
      {
        fullName: patient.name || patient.fullName || "Patient Record",
        email: patient.email || `${(patient.name || "patient").toLowerCase().replace(/[^a-z]/g, "")}@gmail.com`,
        position: `Treatment: ${patient.treatment || "Routine Check-Up"}`,
        phone: patient.phone || "080 3123 4567",
        status: patient.status || "Active",
        lastLogin: `Checked in on ${patient.checkIn || "Recent"}`,
        avatar:
          patient.avatar ||
          (patient.name || "PT")
            .split(" ")
            .filter(Boolean)
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase() ||
          "PT",
        bannerImg: "/all-images/body-images/dept-pediatrics.jpg",
        department: "General Medicine",
        ...patient,
      },
      "patient"
    );
  };

  const getInitials = (name = "") => {
    if (!name) return "PT";
    const clean = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "").trim();
    const parts = clean.split(" ").filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return clean.slice(0, 2).toUpperCase() || "PT";
  };

  // Sort patients dynamically
  const sortedPatients = useMemo(() => {
    if (!sortField) return patients;
    return [...patients].sort((a, b) => {
      let valA = a[sortField] ?? "";
      let valB = b[sortField] ?? "";
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [patients, sortField, sortOrder]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const totalFiltered = sortedPatients.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));

  // Reset to first page if page exceeds totalPages (e.g. after search filter)
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalFiltered);
  const paginatedPatients = sortedPatients.slice(startIndex, endIndex);

  // 0. LOADING STATE: Pure rolling circle spinner
  if (isLoading) {
    return (
      <div className="doctors-loading-card" id="patientsLoadingAnimation">
        <div className="rolling-circle-spinner" role="status" aria-label="Loading patients"></div>
      </div>
    );
  }

  // 1. NO INTERNET / OFFLINE STATE
  if (isOffline) {
    return (
      <div className="doctors-offline-card" id="patientsOfflineState">
        <div className="offline-circle-indicator">
          <div className="offline-circle-ring"></div>
          <div className="offline-circle-badge">
            <svg className="offline-status-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M2.5 8.8a15 15 0 0 1 17.1-2.1M5.7 12a10 10 0 0 1 6.8-2.4M9.3 15.4a5 5 0 0 1 4.7.2M12 19h.01M3 3l18 18" />
            </svg>
          </div>
        </div>
        <div className="offline-content-group">
          <h4 className="offline-title">No Internet Connection</h4>
          <p className="offline-subtitle">
            Unable to fetch patient records from the ClinCore server. Please check your network connection and try again.
          </p>
          {onRetry && (
            <button
              type="button"
              className="btn-offline-retry"
              onClick={onRetry}
            >
              <svg className="offline-retry-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 4.5a5 5 0 1 1-1 4.5M2 2.5v3h3" />
              </svg>
              <span>Retry Connection</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // 2. EMPTY STATE: When NO patients exist or none match search/filters
  if (totalCount === 0 || patients.length === 0) {
    if (totalCount > 0 && patients.length === 0) {
      return (
        <div className="doctors-empty-prompt-card" style={{ padding: "64px 24px", textAlign: "center" }}>
          <div className="empty-prompt-illustration">
            <div className="empty-prompt-icon-ring outer" style={{ width: "64px", height: "64px", margin: "0 auto 16px", borderRadius: "50%", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="bi bi-search" style={{ fontSize: "24px", color: "#64748B" }}></i>
            </div>
          </div>
          <div className="empty-prompt-content">
            <h3 className="empty-prompt-title" style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>No Matching Patients Found</h3>
            <p className="empty-prompt-description" style={{ color: "#64748B", fontSize: "13.5px", maxWidth: "420px", margin: "0 auto 20px" }}>
              No patient records matched your active search query or filter criteria. Try adjusting your search keywords or resetting filters.
            </p>
            {onClearFilters && (
              <button
                type="button"
                className="btn-offline-retry"
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

    return (
      <div className="doctors-empty-prompt-card" id="emptyPatientsPrompt" style={{ padding: "64px 24px", textAlign: "center" }}>
        <div className="empty-prompt-illustration">
          <div className="empty-prompt-icon-ring outer" style={{ width: "64px", height: "64px", margin: "0 auto 16px", borderRadius: "50%", background: "rgba(13, 92, 86, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="bi bi-person-add" style={{ fontSize: "24px", color: "var(--primary-color-dark, #0d5c56)" }}></i>
          </div>
        </div>
        <div className="empty-prompt-content">
          <h3 className="empty-prompt-title" style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>No Patient Records Registered</h3>
          <p className="empty-prompt-description" style={{ color: "#64748B", fontSize: "13.5px", maxWidth: "420px", margin: "0 auto 20px" }}>
            There are currently no patients registered in the ClinCore system. Get started by admitting or adding your first patient.
          </p>
          {onAddPatient && (
            <button
              type="button"
              className="btn-offline-retry"
              onClick={onAddPatient}
            >
              <i className="bi bi-plus-lg"></i>
              <span>Add New Patient</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="patients-main-card">
      <div className="patients-table-wrap">
        <table className="patients-data-table">
          <thead>
            <tr>
              <th
                className="sortable-th"
                onClick={() => handleSort("patientId")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Patient ID"
              >
                <span>Patient ID</span>
                <i
                  className={`bi ${
                    sortField === "patientId"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th
                className="sortable-th"
                onClick={() => handleSort("name")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Patient Name"
              >
                <span>Patient Name</span>
                <i
                  className={`bi ${
                    sortField === "name"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th
                className="sortable-th"
                onClick={() => handleSort("age")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Age"
              >
                <span>Age</span>
                <i
                  className={`bi ${
                    sortField === "age"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th
                className="sortable-th"
                onClick={() => handleSort("checkIn")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Check In Date"
              >
                <span>Check In</span>
                <i
                  className={`bi ${
                    sortField === "checkIn"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th
                className="sortable-th"
                onClick={() => handleSort("treatment")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Treatment"
              >
                <span>Treatment</span>
                <i
                  className={`bi ${
                    sortField === "treatment"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th
                className="sortable-th"
                onClick={() => handleSort("doctor")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Doctor Assigned"
              >
                <span>Doctor Assigned</span>
                <i
                  className={`bi ${
                    sortField === "doctor"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th
                className="sortable-th"
                onClick={() => handleSort("room")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Room"
              >
                <span>Room</span>
                <i
                  className={`bi ${
                    sortField === "room"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th
                className="sortable-th"
                onClick={() => handleSort("status")}
                style={{ cursor: "pointer", userSelect: "none" }}
                title="Sort by Status"
              >
                <span>Status</span>
                <i
                  className={`bi ${
                    sortField === "status"
                      ? sortOrder === "asc"
                        ? "bi-arrow-up"
                        : "bi-arrow-down"
                      : "bi-arrow-down-up"
                  }`}
                  style={{ marginLeft: "6px", fontSize: "11px" }}
                ></i>
              </th>
              <th className="sortable-th text-center" style={{ textAlign: "center" }}>
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedPatients.map((patient, index) => {
              const statusClass =
                patient.status === "New Patient"
                  ? "status-new"
                  : patient.status === "Inactive" || patient.status === "Discharged"
                  ? "status-inactive"
                  : "status-active";

              const patientName = patient.name || patient.fullName || "Patient";
              const initials = getInitials(patientName);

              return (
                <tr key={patient.patientId || `patient-${index}`}>
                  <td>
                    <span className="patient-id-cell">
                      <svg
                        className="patient-id-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <circle cx="9" cy="10" r="2" />
                        <path d="M5.5 16a3.5 3.5 0 0 1 7 0M14 9h4M14 13h4" />
                      </svg>
                      <span className="patient-id-txt">{patient.patientId || "-"}</span>
                    </span>
                  </td>
                  <td>
                    <div
                      className="patient-profile-cell"
                      style={{ cursor: "pointer" }}
                      onClick={() => handlePatientClick(patient)}
                      title="Click to view patient profile"
                    >
                      <div className="patient-cell-avatar">
                        {patient.avatar && !patient.avatar.includes("PT") ? (
                          <img
                            src={patient.avatar}
                            alt={patientName}
                            onError={(e) => {
                              e.target.style.display = "none";
                              if (e.target.nextSibling) {
                                e.target.nextSibling.style.display = "flex";
                              }
                            }}
                          />
                        ) : null}
                        <div
                          style={{
                            display: patient.avatar && !patient.avatar.includes("PT") ? "none" : "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "var(--primary-color-dark, #0d5c56)",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          {initials}
                        </div>
                      </div>
                      <span className="patient-name-txt">{patientName}</span>
                    </div>
                  </td>
                  <td>{patient.age || "-"}</td>
                  <td>{patient.checkIn || "20 July 2028"}</td>
                  <td>{patient.treatment || "Routine Check-Up"}</td>
                  <td>{patient.doctor || "Dr. Petra Winsburry"}</td>
                  <td>{patient.room || "-"}</td>
                  <td>
                    <span className={`patient-status-badge ${statusClass}`}>
                      {patient.status || "Active"}
                    </span>
                  </td>
                  <td className="text-center" style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <button
                        type="button"
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--text-muted-color, #64748b)",
                          cursor: "pointer",
                          padding: "4px 6px",
                          borderRadius: "4px",
                          fontSize: "14px",
                          transition: "color 0.15s",
                        }}
                        aria-label="Edit Patient Profile"
                        title="Edit Patient Profile"
                        onClick={() => openEditDrawer(patient, "patient")}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-color-dark, #0d5c56)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted-color, #64748b)")}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        style={{
                          background: "none",
                          border: "none",
                          color: "#EF4444",
                          cursor: "pointer",
                          padding: "4px 6px",
                          borderRadius: "4px",
                          fontSize: "14px",
                          transition: "color 0.15s",
                        }}
                        aria-label="Delete Patient Profile"
                        title="Delete Patient Profile"
                        onClick={() => onDeletePatient && onDeletePatient(patient.patientId)}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#B91C1C")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#EF4444")}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="patients-pagination-row">
        <div className="patients-pagination-info">
          <span>Showing</span>
          <select
            className="patients-page-select"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
          <span>out of {totalFiltered}</span>
        </div>

        <div className="patients-pagination-controls">
          <button
            type="button"
            className="btn-patients-step"
            title="Previous Page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            style={{ opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => {
              if (totalPages <= 5) return true;
              return page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
            })
            .map((page, i, arr) => {
              const prev = arr[i - 1];
              return (
                <React.Fragment key={page}>
                  {prev && page - prev > 1 && (
                    <span className="page-step-ellipsis">...</span>
                  )}
                  <button
                    type="button"
                    className={`btn-patients-step ${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </React.Fragment>
              );
            })}

          <button
            type="button"
            className="btn-patients-step"
            title="Next Page"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            style={{ opacity: currentPage === totalPages ? 0.4 : 1, cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
