import { Link } from "react-router-dom";
import { useState } from "react";

import brandLogo from "../assets/icon-images/DML-logo.png";
import damiLogo from "../assets/body-images/Dami-Logo.svg";

import api from "../api/axios";
import InputField from "../components/InputFieldComponent";
import ButtonComponent from "../components/ButtonComponent";
import AlertModal from "../components/AlertModal";

export default function ResetPassword() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
    confirmedPassword: "",
  });

  const [error, setError] = useState({
    otp: "",
    newPassword: "",
    confirmedPassword: "",
  });

  // Handle inputs
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
      otp: "",
      newPassword: "",
      confirmedPassword: "",
    };

    if (!formData.otp.trim()) {
      newErrors.otp = "OTP REQUIRED";
    } else if (formData.otp.trim().length < 6) {
      newErrors.otp = "OTP MUST NOT BE LESS THAN 6";
    } else if (formData.otp.trim().length > 6) {
      newErrors.otp = "OTP MUST NOT BE MORE THAN 6";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "NEW PASSWORD REQUIRED";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "NEW PASSWORD MUST NOT BE LESS THAN 8 CHARACTERS";
    }

    if (!formData.confirmedPassword) {
      newErrors.confirmedPassword = "CONFIRMED PASSWORD REQUIRED";
    } else if (formData.newPassword !== formData.confirmedPassword) {
      newErrors.confirmedPassword = "NEW PASSWORDS DO NOT MATCH";
    }

    setError(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  // Handle Reset Password submit
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (loading) return;

    setFeedbackMessage("");
    setApiError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/reset-password", {
        otpCode: formData.otp.trim(),
        password: formData.newPassword,
        confirmedPassword: formData.confirmedPassword,
      });
      const fetchData = response.data;

      if (fetchData.success == true) {
        sessionStorage.removeItem("resetEmail");
        sessionStorage.setItem("userResetPasswordSession", JSON.stringify(fetchData));

        setModalType("success");
        setFeedbackMessage(fetchData.message || "PASSWORD RESET SUCCESSFULLY!");
        setModal(true);
      } else {
        setModalType("error");
        setFeedbackMessage(fetchData.message || "Failed to reset password.");
        setModal(true);
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Unable to reset password. Please try again.";
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
                <h1>Reset Password</h1>
                <p>Set a new password for your account</p>
              </div>

              <div className="alert-success">
                👋 <span className="alert-highlight">DML</span>, an OTP has been sent to your{" "}
                <span className="alert-highlight">email address</span> to reset your password.
              </div>

              <form className="auth-form" onSubmit={handleResetPassword}>
                <div className="input-container">
                  <InputField
                    title="OTP"
                    id="otp"
                    name="otp"
                    inputType="number"
                    placeHolder="Enter OTP"
                    handleChangeValue={handleChange}
                    inputValue={formData.otp}
                    error={error.otp}
                  />

                  <InputField
                    title="NEW PASSWORD"
                    id="newPassword"
                    name="newPassword"
                    inputType="password"
                    placeHolder="Enter new password"
                    handleChangeValue={handleChange}
                    inputValue={formData.newPassword}
                    error={error.newPassword}
                  />

                  <div className="alert-warning">
                    <i>
                      At least 8 characters required including upper &amp; lower cases
                      and special characters and numbers.
                    </i>
                  </div>

                  <InputField
                    title="CONFIRMED PASSWORD"
                    id="confirmedPassword"
                    name="confirmedPassword"
                    inputType="password"
                    placeHolder="Enter Confirmed password"
                    handleChangeValue={handleChange}
                    inputValue={formData.confirmedPassword}
                    error={error.confirmedPassword}
                  />
                </div>

                {apiError && (
                  <p className="error" role="alert">
                    {apiError}
                  </p>
                )}

                <ButtonComponent
                  buttonType="submit"
                  buttonText={loading ? "Processing..." : "Reset Password"}
                  buttonTitle="Reset Password"
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
          redirectLink={modalType === "success" ? "/" : null}
          message={feedbackMessage}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
}
