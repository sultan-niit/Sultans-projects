import { Link } from "react-router-dom";
import { useSessionCollection } from "../js/sessionData";

export default function DashboardAppointments() {
    const appointments = useSessionCollection("appointments");
    const now = new Date();
    const today = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
    ].join("-");
    const todaysAppointments = appointments.filter((appointment) => appointment.date === today);

    return (
        <div className="table-card">
            <div className="card-header">
                <h2>Today's Appointments</h2>
                <Link to="/appointments" className="view-all">View All</Link>
            </div>
            {todaysAppointments.length === 0 ? (
                <div className="dashboard-appointments-empty" role="status">
                    <div className="dashboard-appointments-empty-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
                            <path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17m-11 5 2 2 4-4" />
                        </svg>
                    </div>
                    <h3>Your schedule is clear</h3>
                    <p>No appointments are scheduled for today.</p>
                </div>
            ) : (
            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor</th>
                            <th>Treatment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todaysAppointments.slice(0, 5).map((appointment) => (
                            <tr key={appointment.id}>
                                <td className="patient-name">
                                    <div className="patient-cell">
                                        <span className="patient-avatar dashboard-appointment-avatar">
                                            {appointment.patientName?.split(/\s+/).map((part) => part[0]).slice(0, 2).join("")}
                                        </span>
                                        <span>{appointment.patientName}</span>
                                    </div>
                                </td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.treatment}</td>
                                <td><span className={`status-badge status-${appointment.status?.toLowerCase()}`}>{appointment.status}</span></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
        </div>
    );
}
