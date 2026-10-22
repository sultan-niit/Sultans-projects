import { CATEGORY_ICON_MAP, STATUS_CLASS_MAP, STATUS_ICON_MAP } from "../js/usePatientPortal";

export default function PatientPortalAppointmentsTable({
  suggestions,
  selectedIds,
  allSelected,
  onToggleSelectAll,
  onToggleRow,
  onCancelSelected,
  onReschedule,
  onCancel,
}) {
  return (
    <div className="pure-content-card pure-appointments-card">
      <div className="pure-card-header">
        <i className="bi bi-calendar-check"></i>
        <span>LIST OF APPOINTMENTS &amp; VISITS</span>
      </div>

      <div className="pure-appointments-toolbar">
        {selectedIds.length > 0 && (
          <button type="button" className="btn-action-cancel" onClick={onCancelSelected}>
            <i className="bi bi-x-circle"></i>
            Cancel Selected ({selectedIds.length})
          </button>
        )}
      </div>

      {suggestions.length === 0 ? (
        <div className="pure-empty-message">
          <i className="bi bi-calendar-x"></i>
          No appointments booked yet.
        </div>
      ) : (
        <>
          <div className="appointments-table-wrap">
            <table className="appointments-data-table">
              <thead>
                <tr>
                  <th className="checkbox-col">
                    <input
                      type="checkbox"
                      className="table-checkbox"
                      checked={allSelected}
                      onChange={onToggleSelectAll}
                    />
                  </th>
                  <th className="sortable-th id-col"><span>S/N</span><i className="bi bi-arrow-down-up"></i></th>
                  <th className="sortable-th"><span>Appointment Purpose / Reason</span><i className="bi bi-arrow-down-up"></i></th>
                  <th className="sortable-th"><span>Department</span><i className="bi bi-arrow-down-up"></i></th>
                  <th className="sortable-th"><span>Scheduled Date</span><i className="bi bi-arrow-down-up"></i></th>
                  <th className="sortable-th"><span>Status</span><i className="bi bi-arrow-down-up"></i></th>
                  <th className="sortable-th"><span>Doctor / Clinic Notes</span><i className="bi bi-arrow-down-up"></i></th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {suggestions.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="table-checkbox"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => onToggleRow(item.id)}
                      />
                    </td>
                    <td><span className="room-name-txt">{index + 1}</span></td>
                    <td>
                      <div className="room-cell-info">
                        <span className="appointment-patient-name">{item.title}</span>
                        <span className="room-id-txt">Ref #{String(item.id).padStart(4, "0")}</span>
                      </div>
                    </td>
                    <td>
                      <span className="portal-dept-badge">
                        <i className={`bi ${CATEGORY_ICON_MAP[item.category] || "bi-building"}`}></i>
                        {item.category}
                      </span>
                    </td>
                    <td><span className="portal-cell-with-icon"><i className="bi bi-calendar3"></i>{item.date}</span></td>
                    <td>
                      <span className={`appointment-status-pill ${STATUS_CLASS_MAP[item.status] || "status-pending"}`}>
                        <i className={`bi ${STATUS_ICON_MAP[item.status] || "bi-hourglass-split"}`}></i>
                        {item.status}
                      </span>
                    </td>
                    <td><span className="portal-cell-with-icon"><i className="bi bi-chat-left-text"></i>{item.response}</span></td>
                    <td>
                      <div className="appointment-row-actions">
                        <button
                          type="button"
                          className="btn-action-reschedule"
                          onClick={() => onReschedule(item)}
                          title="Reschedule Appointment"
                        >
                          <i className="bi bi-pencil-square"></i>Reschedule
                        </button>
                        <button
                          type="button"
                          className="btn-action-cancel"
                          onClick={() => onCancel(item.id)}
                          title="Cancel Appointment"
                        >
                          <i className="bi bi-x-circle"></i>Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="appointments-pagination-row">
            <div className="appointments-pagination-info">
              <span>Showing</span>
              <select className="appointments-page-select" defaultValue="10" aria-label="Rows per page">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span>out of {suggestions.length}</span>
            </div>
            <div className="appointments-pagination-controls">
              <button type="button" className="btn-appointments-step" title="Previous Page"><i className="bi bi-chevron-left"></i></button>
              <button type="button" className="btn-appointments-step active">1</button>
              <button type="button" className="btn-appointments-step">2</button>
              <button type="button" className="btn-appointments-step">3</button>
              <span className="page-step-ellipsis">...</span>
              <button type="button" className="btn-appointments-step">5</button>
              <button type="button" className="btn-appointments-step" title="Next Page"><i className="bi bi-chevron-right"></i></button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
