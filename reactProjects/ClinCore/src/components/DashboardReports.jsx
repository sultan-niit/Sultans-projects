export default function DashboardReports() {
    return (
        <div className="details-card">
            <div className="card-header">
                <h2>Report</h2>
                <button type="button" className="card-menu">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
            <div className="report-list">
                <a href="#" className="report-item">
                    <div className="report-left">
                        <div className="report-icon">
                            <i className="bi bi-brush"></i>
                        </div>
                        <div className="report-info">
                            <span className="report-name">Room Cleaning Needed</span>
                            <span className="report-time">1 minutes ago</span>
                        </div>
                    </div>
                    <span className="report-arrow">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>

                <a href="#" className="report-item">
                    <div className="report-left">
                        <div className="report-icon">
                            <i className="bi bi-wrench"></i>
                        </div>
                        <div className="report-info">
                            <span className="report-name">Equipment Maintenance</span>
                            <span className="report-time">3 minutes ago</span>
                        </div>
                    </div>
                    <span className="report-arrow">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>

                <a href="#" className="report-item">
                    <div className="report-left">
                        <div className="report-icon">
                            <i className="bi bi-layers"></i>
                        </div>
                        <div className="report-info">
                            <span className="report-name">Medication Restock</span>
                            <span className="report-time">5 minutes ago</span>
                        </div>
                    </div>
                    <span className="report-arrow">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>

                <a href="#" className="report-item">
                    <div className="report-left">
                        <div className="report-icon">
                            <i className="bi bi-exclamation-circle"></i>
                        </div>
                        <div className="report-info">
                            <span className="report-name">HVAC System Issue</span>
                            <span className="report-time">1 hour ago</span>
                        </div>
                    </div>
                    <span className="report-arrow">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>

                <a href="#" className="report-item">
                    <div className="report-left">
                        <div className="report-icon">
                            <i className="bi bi-truck"></i>
                        </div>
                        <div className="report-info">
                            <span className="report-name">Patient Transport Required</span>
                            <span className="report-time">Yesterday</span>
                        </div>
                    </div>
                    <span className="report-arrow">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
            </div>
        </div>
    );
}
