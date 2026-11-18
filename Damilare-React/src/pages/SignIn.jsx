import { Link } from "react-router-dom";
import { useState } from "react";

import brandLogo from "../assets/icon-images/DML-logo.png";
import damiLogo from "../assets/body-images/Dami-Logo.svg";

import api from "../api/axios";
import InputField from "../components/InputFieldComponent";
import ButtonComponent from "../components/ButtonComponent";
import AlertModal from "../components/AlertModal";
import { addRegisteredStaff, formatEmailToName } from "../utils/staffStorage";

export default function SignIn() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("success");
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

  // Update input values
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear current field error while typing
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));

    setApiError("");
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {
      emailAddress: "",
      password: "",
    };

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "EMAIL ADDRESS REQUIRED";
    } else if (!formData.emailAddress.includes("@") || !formData.emailAddress.includes(".")) {
      newErrors.emailAddress = "ENTER A VALID EMAIL";
    }

    if (!formData.password) {
      newErrors.password = "PASSWORD REQUIRED";
    }

    setError(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  // Handle Sign In submit
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (loading) return;

    setSuccess("");
    setApiError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        emailAddress: formData.emailAddress.trim(),
        password: formData.password,
        confirmPassword: formData.password,
      });
      const responseData = response.data;

      if (responseData?.success === true) {
        sessionStorage.setItem("userSession", JSON.stringify(responseData));
        const email = formData.emailAddress.trim();
        const derivedName = formatEmailToName(email);
        const userData = responseData?.data && responseData.data.fullName
          ? responseData.data
          : { ...responseData?.data, emailAddress: email, fullName: derivedName };
        localStorage.setItem("user", JSON.stringify(userData));

        // Automatically register in staff directory if not already present
        addRegisteredStaff({
          fullName: derivedName,
          emailAddress: email,
          phoneNumber: "N/A",
        });

        setModalType("success");
        setSuccess(responseData?.message || "USER LOGIN SUCCESFFULLY!");
        setModal(true);
      } else {
        const message = responseData?.message || "Unable to sign in. Please try again.";
        setApiError(message);
        setModalType("error");
        setSuccess(message);
        setModal(true);
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Unable to connect to server. Please try again.";
      setApiError(message);
      setModalType("error");
      setSuccess(message);
      setModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-container">
          <div className="form-content">
            <div className="inner-form">
              <div className="brand-logo">
                <img
                  src={brandLogo}
                  alt="DML Tech Solar Energy Logo"
                  className="brand-logo-img"
                />
              </div>

              <div className="header-content">
                <h1>Login</h1>
                <p>See your growth and get support!</p>
              </div>

              <div className="social-login">
                <button type="button" class="btn google-btn">
                  <span>Sign in with google</span>
                  <i className="bi bi-google"></i>
                </button>
              </div>

              <form className="auth-form" onSubmit={handleSignIn}>
                <div className="input-container">
                  <InputField
                    title="Email"
                    id="emailAddress"
                    name="emailAddress"
                    inputType="email"
                    placeHolder="Enter your email"
                    handleChangeValue={handleChange}
                    inputValue={formData.emailAddress}
                    error={error.emailAddress}
                    autoComplete="email"
                  />

                  <InputField
                    title="Password"
                    id="password"
                    name="password"
                    inputType="password"
                    placeHolder="minimum 8 characters"
                    handleChangeValue={handleChange}
                    inputValue={formData.password}
                    error={error.password}
                    autoComplete="current-password"
                  />
                </div>

                <div className="options-container">
                  <div className="remember-wrapper">
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>

                  <div className="forgot-wrapper">
                    <Link to="/forgot-password" className="forgot-password">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {apiError && (
                  <p className="error" role="alert">
                    {apiError}
                  </p>
                )}

                <ButtonComponent
                  buttonType="submit"
                  buttonText={loading ? "Authenticating..." : "Login"}
                  buttonTitle="Login"
                  btnAction={loading}
                  className="login-btn"
                />
              </form>

              <div className="footer-container">
                <p className="signin-footer">
                  Not registered yet?{" "}
                  <Link to="/register" className="signup-link">
                    Create a new account
                  </Link>
                </p>
                <div className="portal-switch-divider"></div>
                <p className="portal-switch-footer">
                  Are you a customer?{" "}
                  <Link to="/customer-login" className="portal-customer-link">
                    Visit Customer Store
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="background-img">
            <div className="image-wrapper">
              <img
                src={damiLogo}
                alt="Analytics and Growth Platform Illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alert Modal */}
      {modal && (
        <AlertModal
          type={modalType}
          redirectLink={modalType === "success" ? "/dashboard" : null}
          message={success}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
}
