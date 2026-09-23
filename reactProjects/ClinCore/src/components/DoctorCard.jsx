export default function DoctorCard({ ...props }) {
    return (
        <>
            <div className="doctor-card">
                <div className="doctor-card-top">
                    <div className="doctor-avatar">
                        <img src={props.image || "all-images/body-images/doctor-1.jpg"} alt={props.name || "Doctor"} />
                        <span className="status-indicator available"></span>
                    </div>
                    <div className="doctor-info">
                        <h4 className="doctor-name">{props.name || "Dr. Petra Winsburry"}</h4>
                        <span className="doctor-specialty">{props.specialty || "General Medicine"}</span>
                    </div>
                </div>

                <div className="doctor-card-details">
                    <div className="detail-item">
                        <span className="detail-label">Experience</span>
                        <span className="detail-val">{props.experience || "8 Years"}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Patients</span>
                        <span className="detail-val">{props.patients || "1,500+"}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Rating</span>
                        <span className="detail-val">
                            <i className="bi bi-star-fill" style={{ color: "#f59e0b", marginRight: "4px" }}></i>
                            {props.rating || "4.9"}
                        </span>
                    </div>
                </div>

                <div className="doctor-card-actions">
                    <button type="button" className="btn btn-outline">Profile</button>
                    <button type="button" className="btn btn-primary">Schedule</button>
                </div>
            </div>
        </>
    );
}
