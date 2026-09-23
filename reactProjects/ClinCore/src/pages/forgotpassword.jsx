import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";

export default function ForgotPassword() {
  return (
    <div className="login-body">
      <div className="alert-overlay" id="alert"></div>

      <div className="frame">
        {/* ============================================================ */}
        {/* LEFT SIDE: Reset Password Form (Edited to use UI Components) */}
        {/* ============================================================ */}
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
              {/* InputField component for Registered Email */}
              <InputField
                title="Email Address"
                inputType="email"
                placeHolder="Enter your email"
              />

              {/* ButtonComponents for Sending OTP */}
              <Link to="/reset-password">
                <ButtonComponents
                  inputType="button"
                  buttonTitle="Send OTP Code"
                />
              </Link>

              <p className="switch-auth-row">
                Remember password?
                <Link to="/" className="switch-auth-link">Login</Link>
              </p>
            </form>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT SIDE: Auth Hero Illustration & Stats (AuthHeroPanel)   */}
        {/* ============================================================ */}
        <AuthHeroPanel />
      </div>
    </div>
  );
}
