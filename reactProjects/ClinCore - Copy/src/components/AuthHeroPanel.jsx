export default function AuthHeroPanel({ ...props }) {
    return (
        <>
            <div className="right-panel">
                <img className="hero-img" src="/all-images/body-images/images.jpg" alt="Healthcare professionals" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-icon-wrap">
                        <svg viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <h2 className="hero-heading">Advanced Healthcare<br />Management</h2>
                    <p className="hero-body">
                        Streamline your hospital operations with our comprehensive management system.
                        Manage patients, appointments, staff, and records all in one place.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Secure</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Hospitals</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
