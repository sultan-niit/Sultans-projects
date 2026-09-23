import { NavLink } from "react-router-dom";

export default function Sidebar({ ...props }) {
    return (
        <>
            <div className="side-panel">
                {/* Brand / Logo Section */}
                <div className="logo-div">
                    <NavLink to="/dashboard" className="logo-brand">
                        <div className="logo-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <span className="logo-text">ClinCore</span>
                    </NavLink>
                </div>

                {/* Navigation Links Section */}
                <div className="nav-list">
                    <NavLink to="/dashboard" className="nav-link">
                        <i className="bi bi-grid-fill"></i>
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/appointments" className="nav-link">
                        <i className="bi bi-calendar-check"></i>
                        <span>Appointments</span>
                    </NavLink>

                    <NavLink to="/rooms" className="nav-link">
                        <i className="bi bi-door-closed"></i>
                        <span>Rooms</span>
                    </NavLink>

                    <NavLink to="/patients" className="nav-link">
                        <i className="bi bi-person-wheelchair"></i>
                        <span>Patients</span>
                    </NavLink>

                    <NavLink to="/doctors" className="nav-link">
                        <i className="bi bi-heart-pulse"></i>
                        <span>Doctors</span>
                    </NavLink>

                    <NavLink to="/departments" className="nav-link">
                        <i className="bi bi-building"></i>
                        <span>Departments</span>
                    </NavLink>

                    <NavLink to="/payments" className="nav-link">
                        <i className="bi bi-credit-card"></i>
                        <span>Payments</span>
                    </NavLink>

                    <NavLink to="/inventory" className="nav-link">
                        <i className="bi bi-box-seam"></i>
                        <span>Inventory</span>
                    </NavLink>

                    <NavLink to="/messages" className="nav-link">
                        <i className="bi bi-chat-dots"></i>
                        <span>Messages</span>
                        <span className="badge-count">7</span>
                    </NavLink>
                </div>

                {/* Bottom Logout Section */}
                <div className="bottom-div">
                    <NavLink to="/" className="nav-link logout-link">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Logout</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

