export default function DashboardActivity() {
    return (
        <div className="activity-card">
            <div className="card-header">
                <h2>Recent Activity</h2>
                <button type="button" className="card-menu">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
            <div className="activity-list">
                <div className="activity-item">
                    <div className="activity-icon">
                        <i className="bi bi-patch-check"></i>
                    </div>
                    <div className="activity-content">
                        <span className="activity-text">Felix Müller was discharged from Room 205 after successful treatment</span>
                        <span className="activity-time">08:30 AM</span>
                    </div>
                </div>

                <div className="activity-item">
                    <div className="activity-icon">
                        <i className="bi bi-hospital-bed"></i>
                    </div>
                    <div className="activity-content">
                        <span className="activity-text">Léa Rousseau admitted to Room 312 for surgery scheduled later today</span>
                        <span className="activity-time">09:00 AM</span>
                    </div>
                </div>

                <div className="activity-item">
                    <div className="activity-icon">
                        <i className="bi bi-wrench"></i>
                    </div>
                    <div className="activity-content">
                        <span className="activity-text">MRI machine in Radiology Department received routine maintenance check</span>
                        <span className="activity-time">10:00 AM</span>
                    </div>
                </div>

                <div className="activity-item">
                    <div className="activity-icon">
                        <i className="bi bi-layers"></i>
                    </div>
                    <div className="activity-content">
                        <span className="activity-text">ICU received restock of essential medications</span>
                        <span className="activity-time">11:00 AM</span>
                    </div>
                </div>

                <div className="activity-item">
                    <div className="activity-icon">
                        <i className="bi bi-exclamation-circle"></i>
                    </div>
                    <div className="activity-content">
                        <span className="activity-text">Code Blue emergency response initiated for a patient in Room 108</span>
                        <span className="activity-time">01:15 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
