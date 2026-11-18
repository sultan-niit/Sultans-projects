import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../assets/icon-images/DML-logo.png";
import damiLogo from "../assets/body-images/Dami-Logo.svg";
import InputField from "../components/InputFieldComponent";
import ButtonComponent from "../components/ButtonComponent";
import AlertModal from "../components/AlertModal";

export default function CustomerRegister() {
  const navigate = useNavigate();
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

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

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
    } else if (
      !formData.emailAddress.includes("@") ||
      !formData.emailAddress.includes(".")
    ) {
      newErrors.emailAddress = "ENTER A VALID EMAIL";
    }

    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "PHONE NUMBER REQUIRED";
    }

    if (!formData.password) {
      newErrors.password = "PASSWORD REQUIRED";
    } else if (formData.password.length < 6) {
      newErrors.password = "PASSWORD MUST NOT BE LESS THAN 6 CHARACTERS";
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

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      const email = formData.emailAddress.trim().toLowerCase();
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
      const storedCustomers = JSON.parse(
        localStorage.getItem("damilare_customer_users") || "[]"
      );

      const newCustomer = {
        fullName,
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        emailAddress: email,
        phoneNumber: formData.phoneNo.trim(),
        deliveryAddress: "Not Set",
        state: "Lagos",
        role: "Customer",
        registeredAt: new Date().toISOString(),
      };

      const updated = [
        ...storedCustomers.filter((c) => c.emailAddress !== email),
        newCustomer,
      ];
      localStorage.setItem("damilare_customer_users", JSON.stringify(updated));

      // Also set as active customer session
      localStorage.setItem(
        "customer_user",
        JSON.stringify({ ...newCustomer, isLoggedIn: true })
      );

      setModalType("success");
      setFeedbackMessage("ACCOUNT CREATED SUCCESSFULLY!");
      setModal(true);
      setLoading(false);
    }, 600);
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
                <p>Create your customer account to order solar equipment</p>
              </div>

              <form className="auth-form" onSubmit={handleRegister}>
                <div className="input-container">
                  <div className="form-row">
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

                  <div className="form-row">
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
                  <p
                    className="error"
                    style={{
                      color: "var(--danger-color)",
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
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

              {/* Customer Footer - Strictly customer login, zero admin links */}
              <div className="footer-container">
                <p className="signup-footer">
                  Already have an account?{" "}
                  <Link to="/customer-login" className="login-link">
                    Log in
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
          redirectLink="/shop"
          message={feedbackMessage}
          onClose={() => {
            setModal(false);
            navigate("/shop");
          }}
        />
      )}
    </>
  );
}
