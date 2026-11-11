import { useModalState } from "../js/components/ModalContext";
import { useSessionCollection } from "../js/sessionData";

const formatDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":").map(Number);
    return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
};

const statusClass = (status) => {
    if (status === "Cancelled") return "status-cancelled";
    if (status === "Pending" || status === "Scheduled") return "status-pending";
    return "status-confirmed";
};

export default function AppointmentsTable() {
    const { openEditDrawer } = useModalState();
    const appointments = useSessionCollection("appointments");

    const handleEditAppointment = (appointment, status = appointment.status) => {
        openEditDrawer({ ...appointment, status }, "appointment");
    };

    return (
        <div className="appointments-main-card">
            {appointments.length === 0 ? (
                <div className="appointments-empty-state" role="status">
                    <div className="appointments-empty-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
                            <path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17M9 13h.01M12 13h.01M15 13h.01M9 16.5h.01M12 16.5h.01" />
                            <path d="m15.5 16.5 4 4m0-4-4 4" />
                        </svg>
                    </div>
                    <h2>No appointments available</h2>
                    <p>There are no appointments to display right now.</p>
                </div>
            ) : (
            <div className="appointments-table-wrap">
                <table className="appointments-data-table">
                    <thead>
                        <tr>
                            <th className="checkbox-col"><input type="checkbox" className="table-checkbox" /></th>
                            <th className="sortable-th"><span>Name</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Date</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Time</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Doctor</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Treatment</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Status</span><i className="bi bi-arrow-down-up"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td><input type="checkbox" className="table-checkbox" /></td>
                                <td><span className="appointment-patient-name">{appointment.patientName}</span></td>
                                <td>{formatDate(appointment.date)}</td>
                                <td>{formatTime(appointment.time)}</td>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.treatment}</td>
                                <td><span className={`appointment-status-pill ${statusClass(appointment.status)}`}>{appointment.status}</span></td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment(appointment)}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment(appointment, "Cancelled")}>Cancel</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
        </div>
    );
}
