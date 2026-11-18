import { Link } from "react-router-dom";
import { useState } from "react";

import brandLogo from "../assets/icon-images/DML-logo.png";
import damiLogo from "../assets/body-images/Dami-Logo.svg";

import api from "../api/axios";
import InputField from "../components/InputFieldComponent";
import ButtonComponent from "../components/ButtonComponent";
import AlertModal from "../components/AlertModal";
import { addRegisteredStaff } from "../utils/staffStorage";

export default function SignUp() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });

  // Handle inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
      agreeTerms: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "FIRST NAME REQUIRED";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "LAST NAME REQUIRED";
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "EMAIL ADDRESS REQUIRED";
    } else if (!formData.emailAddress.includes("@") || !formData.emailAddress.includes(".")) {
      newErrors.emailAddress = "ENTER A VALID EMAIL";
    }

    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "PHONE NUMBER REQUIRED";
    }

    if (!formData.password) {
      newErrors.password = "PASSWORD REQUIRED";
    } else if (formData.password.length < 8) {
      newErrors.password = "PASSWORD MUST NOT BE LESS THAN 8 CHARACTERS";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "CONFIRM PASSWORD REQUIRED";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "PASSWORDS DO NOT MATCH";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "PLEASE AGREE TO TERMS & CONDITIONS";
    }

    setError(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  // Handle SignUp submit
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (loading) return;

    setFeedbackMessage("");
    setApiError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
      const requestData = new FormData();
      requestData.append("fullName", fullName);
      requestData.append("emailAddress", formData.emailAddress.trim());
      requestData.append("phoneNumber", formData.phoneNo.trim());
      requestData.append("password", formData.password);
      requestData.append("confirmPassword", formData.confirmPassword);

      const response = await api.post("/auth/sign-up", requestData);
      const fetchData = response.data;

      if (fetchData.success == true) {
        sessionStorage.setItem("userSignUpSession", JSON.stringify(fetchData));
        addRegisteredStaff({
          fullName,
          emailAddress: formData.emailAddress.trim(),
          phoneNumber: formData.phoneNo.trim(),
        });
        setModalType("success");
        setFeedbackMessage(fetchData.message || "Account created successfully!");
        setModal(true);
      } else {
        setModalType("error");
        setFeedbackMessage(fetchData.message || "Registration failed. Try again.");
        setModal(true);
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Unable to register. Please try again.";
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
      <section className="register-section">
        <div className="register-container">
          <div className="background-img">
            <div className="image-wrapper">
              <img
                src={damiLogo}
                alt="Analytics and Growth Platform Illustration"
              />
            </div>
          </div>

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
                <h1>Register</h1>
                <h2>Manage all your inventory efficiently</h2>
                <p>
                  Let's get you all set up so you can verify your personal account
                  and begin setting up your work profile
                </p>
              </div>

              <form className="auth-form" onSubmit={handleSignUp}>
                <div className="input-container">
                  <div className="input-row">
                    <InputField
                      title="First name"
                      id="firstName"
                      name="firstName"
                      inputType="text"
                      placeHolder="Enter your First Name"
                      handleChangeValue={handleChange}
                      inputValue={formData.firstName}
                      error={error.firstName}
                      required={false}
                    />

                    <InputField
                      title="Last name"
                      id="lastName"
                      name="lastName"
                      inputType="text"
                      placeHolder="Enter your Last Name"
                      handleChangeValue={handleChange}
                      inputValue={formData.lastName}
                      error={error.lastName}
                      required={false}
                    />
                  </div>

                  <div className="input-row">
                    <InputField
                      title="Email"
                      id="emailAddress"
                      name="emailAddress"
                      inputType="email"
                      placeHolder="Enter your email"
                      handleChangeValue={handleChange}
                      inputValue={formData.emailAddress}
                      error={error.emailAddress}
                      required={false}
                    />

                    <InputField
                      title="Phone no."
                      id="phoneNo"
                      name="phoneNo"
                      inputType="tel"
                      placeHolder="Enter your Phone Number"
                      handleChangeValue={handleChange}
                      inputValue={formData.phoneNo}
                      error={error.phoneNo}
                      required={false}
                    />
                  </div>

                  <div className="input-row">
                    <InputField
                      title="Password"
                      id="password"
                      name="password"
                      inputType="password"
                      placeHolder="Create a Password"
                      handleChangeValue={handleChange}
                      inputValue={formData.password}
                      error={error.password}
                      required={false}
                    />

                    <InputField
                      title="Confirm Password"
                      id="confirmPassword"
                      name="confirmPassword"
                      inputType="password"
                      placeHolder="Confirm your Password"
                      handleChangeValue={handleChange}
                      inputValue={formData.confirmPassword}
                      error={error.confirmPassword}
                      required={false}
                    />
                  </div>
                </div>

                <div className="terms-container">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="agreeTerms">
                    I agree to all terms,{" "}
                    <a href="#" className="policy-link">
                      privacy policies
                    </a>
                    , and fees
                  </label>
                </div>
                {error.agreeTerms && (
                  <p className="error" style={{ color: "var(--danger-color)", fontSize: "12px", marginTop: "4px" }}>
                    {error.agreeTerms}
                  </p>
                )}

                {apiError && (
                  <p className="error" role="alert">
                    {apiError}
                  </p>
                )}

                <ButtonComponent
                  buttonType="submit"
                  buttonText={loading ? "Processing..." : "Sign up"}
                  buttonTitle="Sign up"
                  btnAction={loading}
                  className="signup-btn"
                />
              </form>

              <div className="footer-container">
                <p className="signup-footer">
                  Already have an account?{" "}
                  <Link to="/" className="login-link">
                    Log in
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
