import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";
import AlertModal from "../components/AlertModal";
import api from "../api/axios";
import successImage from "../assets/success.jpeg";

const FORGOT_PASSWORD_API_URL =
  import.meta.env.VITE_FORGOT_PASSWORD_API_URL ||
  "https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth/forgot-password.php";

export default function ForgotPassword() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");
  const [resetData, setResetData] = useState(null);

  const [formData, setFormData] = useState({
    emailAddress: "",
  });

  const [error, setError] = useState({
    emailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));

    setApiError("");
  };

  const validateForm = () => {
    const newErrors = {
      emailAddress: "",
    };

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = "Enter a valid email address.";
    }

    setError(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    if (loading) return;

    setSuccess("");
    setApiError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const requestData = new FormData();
      requestData.append("emailAddress", formData.emailAddress.trim());

      const response = await api.post(FORGOT_PASSWORD_API_URL, requestData);
      const responseData = response.data;

      if (responseData?.success === true) {
        const payload = responseData?.data || {};
        setResetData(payload);

        // Persist reset details for Reset Password page
        sessionStorage.setItem("resetEmail", formData.emailAddress.trim());
        if (payload?.staffId) {
          sessionStorage.setItem("resetStaffId", payload.staffId);
        }
        if (payload?.resetotp) {
          sessionStorage.setItem("resetOtp", String(payload.resetotp));
        }

        setSuccess(
          responseData?.message || "RESET OTP GENERATED SUCCESSFULLY"
        );
        setModal(true);
      } else {
        setApiError(
          responseData?.message || "Unable to send reset OTP. Please check your email and try again."
        );
      }
    } catch (err) {
      setApiError(
        err.response?.data?.message ||
        err.message ||
        "Unable to send reset OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-body">
      {modal && success && (
        <AlertModal
          image={successImage}
          message={success}
          redirectLink="/reset-password"
          redirectUrl="/reset-password"
          buttonTitle="Proceed to Reset Password"
          state={{
            emailAddress: formData.emailAddress.trim(),
            staffId: resetData?.staffId,
            resetotp: resetData?.resetotp,
          }}
        />
      )}

      <div className="frame">
        {/* ============================================================ */}
        {/* LEFT SIDE: Reset Password Form (Tradeflow Forgot Password)   */}
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

            <form onSubmit={handleForgotPassword} noValidate>
              {/* InputField component for Registered Email */}
              <InputField
                title="Email Address"
                id="emailAddress"
                name="emailAddress"
                inputType="email"
                placeHolder="Enter your email"
                value={formData.emailAddress}
                onChange={handleChange}
                error={error.emailAddress}
                autoComplete="email"
              />

              {/* API Error Notification */}
              {apiError && (
                <div
                  className="api-error-message"
                  role="alert"
                  style={{
                    padding: "10px 14px",
                    backgroundColor: "#fef2f2",
                    color: "#b91c1c",
                    border: "1px solid #fecaca",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    marginBottom: "16px",
                  }}
                >
                  {apiError}
                </div>
              )}

              {/* ButtonComponents for Sending OTP */}
              <ButtonComponents
                inputType="submit"
                buttonType="submit"
                buttonTitle={loading ? "Sending OTP..." : "Send OTP Code"}
                buttonText={loading ? "Sending OTP..." : "Send OTP Code"}
                disabled={loading}
                btnAction={loading}
              />

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
