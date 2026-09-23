import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";

export default function ResetPassword() {
  return (
    <div className="login-body">
      <div className="alert-overlay" id="alert"></div>

      <div className="frame">
        {/* ============================================================ */}
        {/* LEFT SIDE: Set New Password Form (Edited with UI Components) */}
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
            <div className="card-header">
              <h1 className="card-title">Set New Password</h1>
              <p className="card-subtitle">Enter your verification code and choose a new secure password.</p>
            </div>

            <div className="alert-success">
              âœ“ <span className="alert-highlight">ClinCore</span>, an OTP has been sent to your <span
                className="alert-highlight">email address</span> to reset your password.
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate>
              {/* InputField component for OTP code */}
              <InputField
                title="Verification Code (OTP)"
                inputType="text"
                placeHolder="ENTER OTP"
              />

              {/* InputField component for New Password */}
              <InputField
                title="New Password"
                inputType="password"
                placeHolder="Min. 8 chars"
              />

              {/* InputField component for Confirm Password */}
              <InputField
                title="Confirm Password"
                inputType="password"
                placeHolder="Min. 8 chars"
              />

              {/* ButtonComponents for Updating Password */}
              <Link to="/">
                <ButtonComponents
                  inputType="button"
                  buttonTitle="Update Password"
                />
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

        {/* ============================================================ */}
        {/* RIGHT SIDE: Auth Hero Illustration & Stats (AuthHeroPanel)   */}
        {/* ============================================================ */}
        <AuthHeroPanel />
      </div>
    </div>
  );
}
