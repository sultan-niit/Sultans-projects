import { useEffect, useState } from "react";
import { fetchAllDoctors, getDoctorInitials, getStoredDoctors } from "../api/doctor";

export default function DashboardSchedule() {
    const [doctors, setDoctors] = useState(() => getStoredDoctors());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadDoctors = async () => {
            try {
                const fetchedDoctors = await fetchAllDoctors();
                if (isMounted) {
                    setDoctors(fetchedDoctors?.length ? fetchedDoctors : getStoredDoctors());
                }
            } catch (error) {
                console.warn("Unable to load doctors' schedule:", error.message);
                if (isMounted) setDoctors(getStoredDoctors());
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        const refreshDoctors = (event) => {
            const changedDoctor = event?.detail?.record;
            if (event?.detail?.isEdit && changedDoctor) {
                setDoctors((currentDoctors) =>
                    currentDoctors.map((doctor) =>
                        String(doctor.doctorId) === String(changedDoctor.doctorId)
                            ? { ...doctor, ...changedDoctor }
                            : doctor
                    )
                );
                return;
            }
            loadDoctors();
        };

        loadDoctors();
        window.addEventListener("clincore:doctor-changed", refreshDoctors);
        window.addEventListener("storage", refreshDoctors);

        return () => {
            isMounted = false;
            window.removeEventListener("clincore:doctor-changed", refreshDoctors);
            window.removeEventListener("storage", refreshDoctors);
        };
    }, []);

    return (
        <div className="details-card">
            <div className="card-header">
                <h2>Doctors' Schedule</h2>
                <button type="button" className="card-menu" aria-label="Doctors' schedule options">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
            <div className="doctor-list" aria-live="polite">
                {doctors.slice(0, 5).map((doctor) => {
                    const isAvailable = ["available", "active"].includes(
                        String(doctor.status || "").toLowerCase()
                    );
                    const name = doctor.name || doctor.fullName || "Doctor";

                    return (
                        <div className="doctor-item" key={doctor.doctorId || doctor.id}>
                            <div className="doctor-info">
                                <div className="doctor-avatar">
                                    {doctor.avatar ? (
                                        <img src={doctor.avatar} alt={name} />
                                    ) : (
                                        <span aria-hidden="true">{getDoctorInitials(name)}</span>
                                    )}
                                </div>
                                <div className="doctor-detail">
                                    <span className="doctor-name">{name}</span>
                                    <span className="doctor-spec">
                                        {doctor.department || doctor.specialist || "General Specialist"}
                                    </span>
                                </div>
                            </div>
                            <div className="doctor-status">
                                <span
                                    className={`status-badge ${
                                        isAvailable ? "status-available" : "status-unavailable"
                                    }`}
                                >
                                    {isAvailable ? "Available" : "Unavailable"}
                                </span>
                                {doctor.todayAppointments > 0 && (
                                    <span className="doctor-time">
                                        {doctor.todayAppointments}{" "}
                                        {doctor.todayAppointments === 1 ? "appointment" : "appointments"} today
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
                {isLoading && doctors.length === 0 && (
                    <div className="doctor-schedule-loading">
                        <div
                            className="rolling-circle-spinner"
                            role="status"
                            aria-label="Loading doctors"
                        ></div>
                    </div>
                )}
                {!isLoading && doctors.length === 0 && (
                    <p className="doctor-schedule-message">No doctors to display.</p>
                )}
            </div>
        </div>
    );
}
