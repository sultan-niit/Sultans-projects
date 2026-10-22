import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/InputField";
import ButtonComponents from "../components/ButtonComponents";
import AuthHeroPanel from "../components/AuthHeroPanel";
import AlertModal from "../components/AlertModal";
import api from "../api/axios";
import successImage from "../assets/success.jpeg";
import { useAuth } from "../context/AuthContext";

const SIGN_IN_API_URL =
  import.meta.env.VITE_SIGN_IN_API_URL ||
  "https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth/sign-in.php";

export default function Home() {
  const { setUser } = useAuth() || {};
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const [error, setError] = useState({
    emailAddress: "",
    password: "",
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
      password: "",
    };

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setError(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  const handleSignIn = async (event) => {
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
      requestData.append("password", formData.password);

      const response = await api.post(SIGN_IN_API_URL, requestData);
      const responseData = response.data;

      if (responseData?.success) {
        const staff = responseData.data || {};
        const fullName = `${staff.firstName || ""} ${staff.lastName || ""}`.trim() || staff.emailAddress || "User";

        const userData = {
          ...staff,
          fullName,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("accessToken", responseData.accessToken || staff.staffId);
        if (setUser) setUser(userData);

        setSuccess(responseData.message || "LOGIN SUCCESSFUL");
        setModal(true);
      } else {
        setApiError(responseData?.message || "Unable to sign in. Please try again.");
      }
    } catch (err) {
      setApiError(
        err.response?.data?.message ||
        err.message ||
        "Unable to sign in. Please try again."
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
          redirectLink="/dashboard"
          redirectUrl="/dashboard"
          buttonTitle="Go to Dashboard"
        />
      )}

      <div className="frame">
        {/* ============================================================ */}
        {/* LEFT SIDE: Login Form & Card (Tradeflow Sign-in API)         */}
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

            <form onSubmit={handleSignIn} noValidate>
              {/* Email Address */}
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

              {/* Password */}
              <InputField
                title="Password"
                id="password"
                name="password"
                inputType="password"
                placeHolder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                error={error.password}
                autoComplete="current-password"
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

              {/* ButtonComponents for Login action */}
              <ButtonComponents
                inputType="submit"
                buttonType="submit"
                buttonTitle={loading ? "Signing In..." : "Sign In"}
                buttonText={loading ? "Signing In..." : "Sign In"}
                disabled={loading}
                btnAction={loading}
              />

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
