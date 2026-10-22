import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";

const API_URL = import.meta.env.VITE_RESET_PASSWORD_API_URL || "";

export default function ResetPassword() {
  const navigate = useNavigate();
  const saved = JSON.parse(sessionStorage.getItem("forgotPasswordSession") || "{}");
  const session = saved.data || saved;

  const [form, setForm] = useState({
    resetotp: `${session.resetotp || ""}`,
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (loading) return;

    const {resetotp, password, confirmPassword } = form;

    if (!resetotp.trim()) return setError("RESET OTP IS REQUIRED, Kindly fill in the reset OTP to continue.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (password !== confirmPassword) return setError("Passwords do not match.");

    try {
      setLoading(true);

      const data = new FormData();
      data.append("staffId", session.staffId);
      data.append("resetOtp", resetotp.trim());
      data.append("password", password);
      data.append("confirmPassword", confirmPassword);

      const res = await api.post(API_URL, data);

      if (res.data?.success) {
        sessionStorage.removeItem("forgotPasswordSession");
        setSuccess(res.data.message || "Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      } else {
        setError(res.data?.message || "Unable to reset password.");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Unable to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-body reset-password-page">
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
            {session.staffId || session.staffId} <br />
              An OTP has been sent to <span className="alert-highlight">{session.emailAddress}</span> to reset your password.
              <br />
            </div>

            <form onSubmit={handleResetPassword} noValidate>
              <InputField
                title="Verification Code (OTP)"
                name="resetotp"
                inputType="text"
                placeHolder="OTP"
                value={form.resetotp}
                onChange={handleChange}
              />

              <InputField
                title="New Password"
                name="password"
                inputType="password"
                placeHolder="Min. 8 chars"
                value={form.password}
                onChange={handleChange}
              />

              <InputField
                title="Confirm Password"
                name="confirmPassword"
                inputType="password"
                placeHolder="Min. 8 chars"
                value={form.confirmPassword}
                onChange={handleChange}
              />

              {error && <p className="api-error-message" style={{ color: "#b91c1c", margin: "8px 0" }}>{error}</p>}
              {success && <p className="alert-success">{success}</p>}

              <ButtonComponents
                inputType="submit"
                buttonTitle={loading ? "Updating Password..." : "Update Password"}
                disabled={loading}
              />

              <p className="switch-auth-row">
                Remembered your password?
                <Link to="/" className="switch-auth-link">Login</Link>
              </p>
            </form>
          </div>
        </div>

        <AuthHeroPanel />
      </div>
    </div>
  );
}
