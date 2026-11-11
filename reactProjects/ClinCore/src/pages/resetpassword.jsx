import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";
const API_URL = import.meta.env.VITE_RESET_PASSWORD_API_URL || "";
export default function ResetPassword() {
  const navigate = useNavigate();
  const saved = JSON.parse(sessionStorage.getItem("forgotPasswordSession") || "");
  const session = saved.data || saved;
  const [form, setForm] = useState({
    emailAddress: session.emailAddress || "",
    resetotp: `${session.resetotp || session.resetOtp || ""}`,
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError("");
  };
  const handleResetPassword = async e => {
    e.preventDefault();
    if (loading) return;
    const email = (form.emailAddress || session.emailAddress || "").trim();
    const {
      resetotp,
      password,
      confirmPassword
    } = form;
    if (!email) return setError("EMAIL ADDRESS IS REQUIRED, Kindly fill in the email address to continue.");
    if (!resetotp.trim()) return setError("RESET OTP IS REQUIRED, Kindly fill in the reset OTP to continue.");
    if (!password) return setError("NEW PASSWORD IS REQUIRED, Kindly fill in the new password to continue.");
    if (password.length < 4) return setError("Password must be at least 4 characters.");
    if (password !== confirmPassword) return setError("Passwords do not match.");
    try {
      setLoading(true);
      const data = new FormData();
      data.append("emailAddress", email);
      data.append("resetOtp", resetotp.trim());
      data.append("newPassword", password);
      data.append("confirmPassword", confirmPassword);
      if (session.staffId) {
        data.append("staffId", session.staffId);
      }
      const res = await api.post(API_URL, data);
      if (res.data?.success) {
        sessionStorage.removeItem("forgotPasswordSession");
        setSuccess(res.data.message || "PASSWORD RESET SUCCESSFULLY! Redirecting to login...");
        setTimeout(() => {
          navigate("/", {
            replace: true
          });
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
  return <div className="login-body reset-password-page">
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

            {session.emailAddress && <div className="alert-success" style={{
            marginBottom: "16px"
          }}>
                {session.staffId && <>
                    <span>Staff ID: <strong>{session.staffId}</strong></span>
                    <br />
                  </>}
                An OTP has been sent to <span className="alert-highlight">{session.emailAddress}</span> to reset your password.
              </div>}

            <form onSubmit={handleResetPassword} noValidate>
              {!session.emailAddress && <InputField title="Email Address" name="emailAddress" inputType="email" placeHolder="Enter your email" value={form.emailAddress} onChange={handleChange} autoComplete="email" />}

              <InputField title="Verification Code (OTP)" name="resetotp" inputType="text" placeHolder="Enter OTP" value={form.resetotp} onChange={handleChange} />

              <InputField title="New Password" name="password" inputType="password" placeHolder="Enter new password" value={form.password} onChange={handleChange} autoComplete="new-password" />

              <InputField title="Confirm Password" name="confirmPassword" inputType="password" placeHolder="Confirm new password" value={form.confirmPassword} onChange={handleChange} autoComplete="new-password" />

              {error && <p className="api-error-message" style={{
              color: "#b91c1c",
              margin: "8px 0"
            }}>{error}</p>}
              {success && <p className="alert-success">{success}</p>}

              <ButtonComponents inputType="submit" buttonTitle={loading ? "Updating Password..." : "Update Password"} disabled={loading} btnAction={loading} />

              <p className="switch-auth-row">
                Remembered your password?
                <Link to="/" className="switch-auth-link">Login</Link>
              </p>
            </form>
          </div>
        </div>

        <AuthHeroPanel />
      </div>
    </div>;
}
