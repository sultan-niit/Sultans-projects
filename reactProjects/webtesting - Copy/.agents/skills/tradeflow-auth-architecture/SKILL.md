---
name: tradeflow-auth-architecture
description: Complete architecture, routing patterns, component hierarchy, and implementation guide for Tradeflow React authentication applications.
---

# Tradeflow React Authentication Architecture Blueprint

This skill serves as the comprehensive architectural guide, code patterns reference, and implementation standard for Tradeflow React authentication applications.

---

## 1. Directory & File Structure

```text
├── .env
├── index.html
├── package.json
├── src/
│   ├── App.jsx                       # React Router configuration (dual slugs)
│   ├── main.jsx                      # App root wrapping AuthProvider and RouterProvider
│   ├── index.css                     # Global design tokens and reset styles
│   ├── api/
│   │   └── axios.js                  # Configured Axios instance (Accept header only)
│   ├── assets/
│   │   ├── niit-logo.png
│   │   ├── success.jpeg
│   │   └── styles/
│   │       └── mainStyles.css        # Layout & component styling
│   ├── components/
│   │   ├── InputFieldComponent.jsx   # Form input with inline validation error
│   │   ├── ButtonComponent.jsx      # Reusable submit button with disabled state
│   │   └── AlertModal.jsx           # Success feedback modal with redirect link
│   ├── context/
│   │   └── AuthContext.jsx           # Global authentication state & methods
│   └── pages/
│       ├── Home.jsx                  # Welcome page with navigation links
│       ├── SignIn.jsx                # Sign-in form with FormData API submission
│       ├── SignUp.jsx                # Registration form with validation
│       ├── ForgotPassword.jsx        # Password recovery form
│       ├── ResetPassword.jsx         # OTP verification and password reset form
│       └── Profile.jsx               # User details dashboard from localStorage
```

---

## 2. Environment Configuration (`.env`)

```env
VITE_API_BASE_URL=https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth
VITE_SIGN_IN_API_URL=https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth/sign-in.php
```

---

## 3. Axios Configuration (`src/api/axios.js`)

> **Critical Rule**: Never include `"Content-Type": "application/json"` in default headers when posting `FormData`. Keep `Accept: "application/json"` only.

```javascript
import axios from "axios";

const baseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  "https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth";

const api = axios.create({
  baseURL: baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
  headers: {
    Accept: "application/json",
  },
});

export default api;
```

---

## 4. Routing Architecture (`src/App.jsx` & `src/main.jsx`)

### Dual-Slug Path Routing Pattern
Always define both hyphenated and snake_case paths for all auth pages:

```javascript
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign_in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign_up", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/forgot_password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/reset_password", element: <ResetPassword /> },
  { path: "/profile", element: <Profile /> },
]);
```

### Application Entry Point (`src/main.jsx`)
```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
```

---

## 5. Reusable UI Components

### `InputFieldComponent.jsx`
```javascript
export default function InputField({
  title,
  id,
  name,
  inputType = "text",
  placeHolder,
  handleChangeValue,
  inputValue,
  error,
  autoComplete,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{title}</label>
      <input
        type={inputType}
        id={id}
        name={name}
        placeholder={placeHolder}
        value={inputValue}
        onChange={handleChangeValue}
        autoComplete={autoComplete}
        className={error ? "input-error" : ""}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
```

### `ButtonComponent.jsx`
```javascript
export default function ButtonComponent({ ...props }) {
  return (
    <button
      className={`btn ${props.className || ""}`}
      type={props.buttonType || "button"}
      onClick={props.action}
      disabled={props.btnAction}
      title={props.buttonTitle}
    >
      {props.buttonText}
    </button>
  );
}
```

### `AlertModal.jsx`
```javascript
import { Link } from "react-router-dom";
import successImage from "../assets/success.jpeg";

export default function AlertModal({ message, redirectLink, state }) {
  return (
    <div className="alert-overlay">
      <div className="alert-container">
        <div className="image-wrapper">
          <img src={successImage} alt="Success" />
        </div>
        <h4>{message}</h4>
        <Link to={redirectLink} state={state}>
          <button className="btn" title="Okay, Thanks">
            Okay, Thanks
          </button>
        </Link>
      </div>
    </div>
  );
}
```

---

## 6. Form Lifecycle & Validation Standard

Every authentication form maintains:
1. `formData`: State object with field values.
2. `error`: State object with field-specific validation errors.
3. `apiError`: String state for backend errors.
4. `success`: String state for success notification.
5. `loading`: Boolean state controlling spinner/button disabled state.
6. `modal`: Boolean state toggling `<AlertModal />`.

### Real-Time Change Handler
```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
  setError((prev) => ({ ...prev, [name]: "" }));
  setApiError("");
};
```

### Form Validation Pattern
```javascript
const validateForm = () => {
  const newErrors = {};

  if (!formData.emailAddress.trim()) {
    newErrors.emailAddress = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
    newErrors.emailAddress = "Enter a valid email address.";
  }

  if (!formData.password) {
    newErrors.password = "Password is required.";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters.";
  }

  setError(newErrors);
  return !Object.values(newErrors).some((msg) => msg !== "");
};
```

---

## 7. API Submission & User Persistence

### PHP Backend FormData Submission (`SignIn.jsx`)
```javascript
const handleSignIn = async (event) => {
  event.preventDefault();
  if (loading) return;

  setSuccess("");
  setApiError("");

  if (!validateForm()) return;

  try {
    setLoading(true);

    const requestData = new FormData();
    requestData.append("emailAddress", formData.emailAddress);
    requestData.append("password", formData.password);

    const response = await api.post(SIGN_IN_API_URL, requestData);
    const responseData = response.data;

    if (responseData?.success === true) {
      const userData = responseData?.data || responseData?.user;
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
      }

      if (responseData?.accessToken) {
        localStorage.setItem("accessToken", responseData.accessToken);
      } else if (userData?.staffId) {
        localStorage.setItem("accessToken", userData.staffId);
      }

      setSuccess(responseData?.message || "LOGIN SUCCESSFUL");
      setModal(true);
    } else {
      setApiError(responseData?.message || "Unable to sign in. Please try again.");
    }
  } catch (err) {
    setApiError(
      err.response?.data?.message || err.message || "Unable to sign in. Please try again."
    );
  } finally {
    setLoading(false);
  }
};
```

---

## 8. Profile Rendering Standard (`Profile.jsx`)

Reads the persisted session from `localStorage` and populates user attributes safely:

```javascript
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Failed to parse user session", e);
    }
  }, []);

  const fullName = user
    ? user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User"
    : "";
  const emailAddress = user ? user.emailAddress || user.email || "" : "";
  const phoneNumber = user ? user.phoneNumber || "" : "";

  return (
    <div className="profile-container">
      <h3>Full Name:</h3>
      <span id="textfullName">{fullName}</span>

      <h3>Email:</h3>
      <span id="textemailAddress">{emailAddress}</span>

      <h3>Phone Number:</h3>
      <span id="textphoneNumber">{phoneNumber}</span>
    </div>
  );
}
```
