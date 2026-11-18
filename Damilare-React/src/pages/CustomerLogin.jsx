import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../assets/icon-images/DML-logo.png";
import damiLogo from "../assets/body-images/Dami-Logo.svg";
import InputField from "../components/InputFieldComponent";
import ButtonComponent from "../components/ButtonComponent";
import AlertModal from "../components/AlertModal";

export default function CustomerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const [error, setError] = useState({
    emailAddress: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = { emailAddress: "", password: "" };

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "EMAIL ADDRESS REQUIRED";
    } else if (!formData.emailAddress.includes("@")) {
      newErrors.emailAddress = "ENTER A VALID EMAIL";
    }

    if (!formData.password) {
      newErrors.password = "PASSWORD REQUIRED";
    } else if (formData.password.length < 6) {
      newErrors.password = "PASSWORD MUST NOT BE LESS THAN 6 CHARACTERS";
    }

    setError(newErrors);
    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setApiError("");

    setTimeout(() => {
      const email = formData.emailAddress.trim().toLowerCase();
      const storedCustomers = JSON.parse(
        localStorage.getItem("damilare_customer_users") || "[]"
      );

      const existing = storedCustomers.find(
        (c) => c.emailAddress?.toLowerCase() === email
      );

      const derivedName =
        existing?.fullName ||
        email
          .split("@")[0]
          .replace(/[._-]/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

      const customerSession = {
        fullName: derivedName,
        emailAddress: email,
        phoneNumber: existing?.phoneNumber || "+234 801 234 5678",
        deliveryAddress: existing?.deliveryAddress || "Plot 12, Victoria Island",
        state: existing?.state || "Lagos",
        role: "Customer",
        isLoggedIn: true,
      };

      localStorage.setItem("customer_user", JSON.stringify(customerSession));

      setModalType("success");
      setSuccessMessage("USER LOGIN SUCCESFFULLY!");
      setModal(true);
      setLoading(false);
    }, 600);
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
                <p>Log in your account to order solar equipment</p>
              </div>

              <div className="social-login">
                <button type="button" className="btn google-btn">
                  <span>Sign in with google</span>
                  <i className="bi bi-google"></i>
                </button>
              </div>

              <form className="auth-form" onSubmit={handleLogin}>
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

              {/* Customer Footer - Strictly customer sign up with zero admin links */}
              <div className="footer-container">
                <p className="signin-footer">
                  Not registered yet?{" "}
                  <Link to="/customer-register" className="signup-link">
                    Create a new account
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
          redirectLink="/shop"
          message={successMessage}
          onClose={() => {
            setModal(false);
            navigate("/shop");
          }}
        />
      )}
    </>
  );
}
