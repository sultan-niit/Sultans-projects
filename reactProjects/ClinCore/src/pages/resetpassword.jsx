import { Link } from "react-router-dom";

export default function ResetPassword() {
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
            <div className="card-header">
              <h1 className="card-title">Set New Password</h1>
              <p className="card-subtitle">Enter your verification code and choose a new secure password.</p>
            </div>

            <div className="alert-success">
              ✓ <span className="alert-highlight">ClinCore</span>, an OTP has been sent to your <span
                className="alert-highlight">email address</span> to reset your password.
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="otp">Verification Code (OTP)</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input 
                    id="otp" 
                    name="otp" 
                    className="form-input otp-input-field" 
                    type="text" 
                    placeholder="ENTER OTP"
                    maxLength={6}
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="newPassword">New Password</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input 
                    id="newPassword" 
                    name="password" 
                    className="form-input" 
                    type="password" 
                    placeholder="Min. 8 chars"
                    minLength={8}
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="confirmedPassword">Confirm Password</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input 
                    id="confirmedPassword" 
                    name="confirmedPassword" 
                    className="form-input" 
                    type="password" 
                    placeholder="Min. 8 chars"
                    minLength={8}
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <Link to="/" id="submitBtnId" className="btn-login" style={{ marginTop: "10px", textDecoration: "none" }}>
                <span>Update Password</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <p className="switch-auth-row">
                Remembered your password?
                <Link to="/" className="switch-auth-link">
                  Login
                </Link>
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
