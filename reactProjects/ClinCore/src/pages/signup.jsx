import { Link } from "react-router-dom";

export default function SignUp() {
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
              <h1 className="card-title">Create Account</h1>
              <p className="card-subtitle">Join ClinCore Healthcare Management Platform</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Name</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input 
                    id="fullName" 
                    name="name" 
                    className="form-input" 
                    type="text" 
                    placeholder="e.g. Sultoon Abdulraheem" 
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="emailAddress">Work Email Address</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m2 7 10 7 10-7"></path>
                  </svg>
                  <input 
                    id="emailAddress" 
                    name="email" 
                    className="form-input" 
                    type="email" 
                    placeholder="name@gmail.com" 
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <input 
                    id="phoneNumber" 
                    name="phone" 
                    className="form-input" 
                    type="tel" 
                    placeholder="e.g. 08012345678" 
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input 
                    id="password" 
                    name="password" 
                    className="form-input" 
                    type="password" 
                    placeholder="Min. 8 chars"
                    minLength={8}  
                  />
                </div>
                <span className="error-text" hidden></span>
              </div>

              <Link to="/dashboard" id="submitBtnId" className="btn-login" style={{ textDecoration: "none" }}>
                <span>Create Account</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <p className="switch-auth-row">
                Already have an account?
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
