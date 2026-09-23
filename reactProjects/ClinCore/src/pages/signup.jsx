import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";

export default function SignUp() {
  return (
    <div className="login-body">
      <div className="alert-overlay" id="alert"></div>

      <div className="frame">
        {/* ============================================================ */}
        {/* LEFT SIDE: Sign Up Form & Inputs (Edited to use UI Components) */}
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
              <h1 className="card-title">Create Account</h1>
              <p className="card-subtitle">Join ClinCore Healthcare Management Platform</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} noValidate>
              {/* InputField component for Name */}
              <InputField
                title="Name"
                inputType="text"
                placeHolder="e.g. Sultoon Abdulraheem"
              />

              {/* InputField component for Work Email */}
              <InputField
                title="Work Email Address"
                inputType="email"
                placeHolder="name@gmail.com"
              />

              {/* InputField component for Phone Number */}
              <InputField
                title="Phone Number"
                inputType="tel"
                placeHolder="e.g. 08012345678"
              />

              {/* InputField component for Password */}
              <InputField
                title="Password"
                inputType="password"
                placeHolder="Min. 8 chars"
              />

              {/* ButtonComponents for Create Account action */}
              <Link to="/dashboard">
                <ButtonComponents
                  inputType="button"
                  buttonTitle="Create Account"
                />
              </Link>

              <div className="terms-text">
                By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </div>

              <p className="switch-auth-row">
                Already have an account?
                <Link to="/" className="switch-auth-link">Sign In</Link>
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
