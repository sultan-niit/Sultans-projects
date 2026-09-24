export default function DashboardSchedule() {
    return (
        <div className="details-card">
            <div className="card-header">
                <h2>Doctors' Schedule</h2>
                <button type="button" className="card-menu">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
            <div className="doctor-list">
                <div className="doctor-item">
                    <div className="doctor-info">
                        <div className="doctor-avatar">
                            <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Petra Winsburry" />
                        </div>
                        <div className="doctor-detail">
                            <span className="doctor-name">Dr. Petra Winsburry</span>
                            <span className="doctor-spec">General Medicine</span>
                        </div>
                    </div>
                    <div className="doctor-status">
                        <span className="status-badge status-available">Available</span>
                        <span className="doctor-time">09:00 AM - 12:00 PM</span>
                    </div>
                </div>

                <div className="doctor-item">
                    <div className="doctor-info">
                        <div className="doctor-avatar">
                            <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Ameena Karim" />
                        </div>
                        <div className="doctor-detail">
                            <span className="doctor-name">Dr. Ameena Karim</span>
                            <span className="doctor-spec">Orthopedics</span>
                        </div>
                    </div>
                    <div className="doctor-status">
                        <span className="status-badge status-unavailable">Unavailable</span>
                    </div>
                </div>

                <div className="doctor-item">
                    <div className="doctor-info">
                        <div className="doctor-avatar">
                            <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Olivia Martinez" />
                        </div>
                        <div className="doctor-detail">
                            <span className="doctor-name">Dr. Olivia Martinez</span>
                            <span className="doctor-spec">Cardiology</span>
                        </div>
                    </div>
                    <div className="doctor-status">
                        <span className="status-badge status-available">Available</span>
                        <span className="doctor-time">10:00 AM - 01:00 PM</span>
                    </div>
                </div>

                <div className="doctor-item">
                    <div className="doctor-info">
                        <div className="doctor-avatar">
                            <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Damian Sanchez" />
                        </div>
                        <div className="doctor-detail">
                            <span className="doctor-name">Dr. Damian Sanchez</span>
                            <span className="doctor-spec">Pediatrics</span>
                        </div>
                    </div>
                    <div className="doctor-status">
                        <span className="status-badge status-available">Available</span>
                        <span className="doctor-time">11:00 AM - 02:00 PM</span>
                    </div>
                </div>

                <div className="doctor-item">
                    <div className="doctor-info">
                        <div className="doctor-avatar">
                            <img src="all-images/body-images/doctor-5.jpg" alt="Dr. Chloe Harrington" />
                        </div>
                        <div className="doctor-detail">
                            <span className="doctor-name">Dr. Chloe Harrington</span>
                            <span className="doctor-spec">Dermatology</span>
                        </div>
                    </div>
                    <div className="doctor-status">
                        <span className="status-badge status-unavailable">Unavailable</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
