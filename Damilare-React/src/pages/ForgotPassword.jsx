import { Link } from "react-router-dom";
import { useState } from "react";

import brandLogo from "../assets/icon-images/DML-logo.png";
import damiLogo from "../assets/body-images/Dami-Logo.svg";

import api from "../api/axios";
import InputField from "../components/InputFieldComponent";
import ButtonComponent from "../components/ButtonComponent";
import AlertModal from "../components/AlertModal";

export default function ForgotPassword() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    emailAddress: "",
  });

  const [error, setError] = useState({
    emailAddress: "",
  });

  // Handle input change
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

  // Validate form
  const validateForm = () => {
    const newErrors = {
      emailAddress: "",
    };

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "EMAIL ADDRESS REQUIRED";
    } else if (!formData.emailAddress.includes("@") || !formData.emailAddress.includes(".")) {
      newErrors.emailAddress = "ENTER A VALID EMAIL";
    }

    setError(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  // Handle forgot password submit
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (loading) return;

    setFeedbackMessage("");
    setApiError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/forgot-password", {
        emailAddress: formData.emailAddress.trim(),
      });
      const fetchData = response.data;

      if (fetchData.success == true) {
        sessionStorage.setItem("userForgotPasswordSession", JSON.stringify(fetchData));
        sessionStorage.setItem("resetEmail", formData.emailAddress.trim());

        const email = fetchData.data?.emailAddress ? ` Hi, ${fetchData.data.emailAddress}` : "";
        setModalType("success");
        setFeedbackMessage(email + " " + (fetchData.message || "OTP sent to your email address."));
        setModal(true);
      } else {
        setModalType("error");
        setFeedbackMessage(fetchData.message || "Unable to proceed. Please try again.");
        setModal(true);
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Unable to process request. Please try again.";
      setApiError(message);
      setModalType("error");
      setFeedbackMessage(message);
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
                <h1>Forgot Password</h1>
                <p>Forgot your password? don't worry we got you covered</p>
              </div>

              <form className="auth-form" onSubmit={handleForgotPassword}>
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
                </div>

                {apiError && (
                  <p className="error" role="alert">
                    {apiError}
                  </p>
                )}

                <ButtonComponent
                  buttonType="submit"
                  buttonText={loading ? "Processing..." : "Proceed to reset password"}
                  buttonTitle="Proceed to reset password"
                  btnAction={loading}
                  className="login-btn"
                />
              </form>

              <div className="footer-container">
                <p className="signin-footer">
                  Remember your password?{" "}
                  <Link to="/" className="signup-link">
                    Log in
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
          redirectLink={modalType === "success" ? "/reset-password" : null}
          message={feedbackMessage}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
}
