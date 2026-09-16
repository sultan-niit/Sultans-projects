import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="login-body">
      <div className="alert-overlay" id="alert"></div>

      <div className="frame">
        <div className="left-panel">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <span className="logo-text">ClinCore</span>
          </Link>

          <div className="card auth-card">
            <div className="back-btn-row">
              <Link to="/" className="btn-back">
                <svg viewBox="0 0 24 24">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Login</span>
              </Link>
            </div>

            <div className="card-header">
              <h1 className="card-title">Reset Password</h1>
              <p className="card-subtitle">
                Enter your registered email address to receive your one-time verification code (OTP).
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="forgotEmail">Email Address</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m2 7 10 7 10-7"></path>
                  </svg>
                  <input 
                    id="forgotEmail" 
                    name="email" 
                    className="form-input" 
                    type="email" 
                    placeholder="Enter your email"
                    required 
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <Link to="/reset-password" id="submitBtnId" className="btn-login" style={{ textDecoration: "none" }}>
                <span>Send OTP Code</span>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <p className="switch-auth-row">
                Remember password?
                <Link to="/" className="switch-auth-link">Login</Link>
              </p>
            </form>
          </div>
        </div>

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
      </div>
    </div>
  );
}
