import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";

export default function Home() {
  return (
    <div className="login-body">
      <div className="alert-overlay" id="alert"></div>

      <div className="frame">
        {/* ============================================================ */}
        {/* LEFT SIDE: Login Form & Card (Edited to use UI Components)   */}
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
              <h1 className="card-title">Welcome Back!</h1>
              <p className="card-subtitle">Sign in to continue to ClinCore Healthcare</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate>
              {/* InputField component for Email Address */}
              <InputField
                title="Email Address"
                inputType="email"
                placeHolder="Enter your email"
              />

              {/* InputField component for Password */}
              <InputField
                title="Password"
                inputType="password"
                placeHolder="Enter your password"
              />

              <div className="form-options-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="remember"
                    defaultChecked
                  />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
              </div>

              {/* ButtonComponents for Login action */}
              <Link to="/dashboard">
                <ButtonComponents
                  inputType="button"
                  buttonTitle="Sign In"
                />
              </Link>

              <p className="switch-auth-row">
                Don't have an account?
                <Link to="/signup" className="switch-auth-link">Sign Up</Link>
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
