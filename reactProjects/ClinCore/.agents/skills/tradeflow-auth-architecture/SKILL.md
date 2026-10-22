---
name: tradeflow-auth-architecture
description: Complete architecture, routing patterns, component hierarchy, and API implementation guide for Tradeflow React authentication applications.
---

# Tradeflow React Authentication Architecture Blueprint

This skill serves as the comprehensive architectural guide, code patterns reference, and implementation standard for Tradeflow React authentication applications and dashboards.

---

## 1. Directory & File Structure

```text
├── .env                              # API endpoints configuration
├── index.html
├── package.json
├── src/
│   ├── App.jsx                       # React Router configuration (dual slugs)
│   ├── main.jsx                      # App root wrapping AuthProvider, ModalProvider, Router
│   ├── index.css                     # Global design tokens and reset styles
│   ├── api/
│   │   └── axios.js                  # Configured Axios instance (Accept header only)
│   ├── assets/
│   │   ├── niit-logo.png
│   │   ├── success.jpeg
│   │   └── styles/
│   │       └── MainStyle.css         # Auth panels, card layouts, form fields & modal styles
│   ├── components/
│   │   ├── InputField.jsx            # Form input with label, placeholder & inline validation
│   │   ├── ButtonComponents.jsx      # Reusable submit button with disabled & loading state
│   │   ├── AlertModal.jsx            # Success feedback modal with redirect button link
│   │   ├── AuthHeroPanel.jsx         # Right-hand hero illustration & hospital stats banner
│   │   ├── TopHeader.jsx             # Top dashboard header with dynamic profile name & avatar
│   │   └── Sidebar.jsx               # Navigation bar with clean session logout action
│   ├── context/
│   │   └── AuthContext.jsx           # Global authentication state, session sync & login/logout
│   ├── js/
│   │   └── components/
│   │       ├── ModalContext.jsx      # Slide-over and profile modal global state & persistence
│   │       └── ProfileEditModal.jsx  # Doctor/Staff profile modal with real-time update sync
│   └── pages/
│       ├── signin.jsx                # Sign-in form with FormData API & user extraction
│       ├── forgotpassword.jsx        # OTP request form persisting session to sessionStorage
│       ├── resetpassword.jsx         # Verification code & new password submission form
│       └── dashboard.jsx             # Main dashboard rendering TopHeader, metrics & charts
```

---

## 2. Environment Configuration (`.env`)

Every Tradeflow application configures its backend endpoints in `.env`:

```env
VITE_API_BASE_URL=https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth
VITE_SIGN_IN_API_URL=https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth/sign-in.php
VITE_FORGOT_PASSWORD_API_URL=https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth/forgot-password.php
VITE_RESET_PASSWORD_API_URL=https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth/reset-password.php
```

---

## 3. Axios Configuration (`src/api/axios.js`)

> **Critical Rule**: Never include `"Content-Type": "application/json"` in default Axios headers when posting `FormData`. Keep `Accept: "application/json"` only, letting Axios or the browser set the boundary headers automatically.

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
Always define both hyphenated and snake_case paths for all auth pages, as well as the root `/` redirecting to sign in:

```javascript
import { createBrowserRouter, Navigate } from "react-router-dom";
import SignIn from "./pages/signin";
import ForgotPassword from "./pages/forgotpassword";
import ResetPassword from "./pages/resetpassword";
import Dashboard from "./pages/dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign_in", element: <SignIn /> },
  { path: "/login", element: <SignIn /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/forgot_password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/reset_password", element: <ResetPassword /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "*", element: <Navigate to="/dashboard" replace /> }
]);
```

### Application Entry Point (`src/main.jsx`)
```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ModalProvider, ProfileEditModal, ToastNotification } from "./js/index.js";
import "./index.css";
import "./assets/styles/MainStyle.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={router} />
        <ProfileEditModal />
        <ToastNotification />
      </ModalProvider>
    </AuthProvider>
  </StrictMode>
);
```

---

## 5. Reusable UI Components

### `InputField.jsx`
Standard input component supporting inline error messages, placeholders, and change events:
```javascript
export default function InputField({
  title,
  id,
  name,
  inputType = "text",
  placeHolder,
  onChange,
  value,
  error,
  autoComplete,
}) {
  return (
    <div className="input-group">
      {title && <label htmlFor={id || name}>{title}</label>}
      <input
        type={inputType}
        id={id || name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={error ? "input-error" : ""}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
```

### `ButtonComponents.jsx`
Reusable submit/action button supporting disabled state and loading indicators:
```javascript
export default function ButtonComponents({
  inputType = "button",
  buttonType = "submit",
  buttonTitle,
  buttonText,
  disabled = false,
  btnAction = false,
  onClick,
  className = "",
}) {
  return (
    <button
      className={`btn ${className}`}
      type={buttonType || inputType}
      onClick={onClick}
      disabled={disabled || btnAction}
      title={buttonTitle || buttonText}
    >
      {buttonText || buttonTitle}
    </button>
  );
}
```

### `AlertModal.jsx`
Modal overlay shown on successful completion of actions (e.g. login):
```javascript
import { Link } from "react-router-dom";
import defaultSuccessImg from "../assets/success.jpeg";

export default function AlertModal({
  image = defaultSuccessImg,
  message,
  redirectLink = "/dashboard",
  buttonTitle = "Go to Dashboard",
}) {
  return (
    <div className="alert-overlay">
      <div className="alert-container">
        <div className="image-wrapper">
          <img src={image} alt="Success" />
        </div>
        <h4>{message}</h4>
        <Link to={redirectLink}>
          <button className="btn" title={buttonTitle}>
            {buttonTitle}
          </button>
        </Link>
      </div>
    </div>
  );
}
```

---

## 6. Form Lifecycle & Validation Standard

All authentication forms adhere to consistent state hygiene:
1. `formData`: Structured field state object.
2. `error`: Object mapping each field to an inline validation string.
3. `apiError`: Backend error string displayed in an alert banner (`.api-error-message`).
4. `loading`: Boolean state controlling submit button spinner & disability.
5. Real-time error clearing when the user types in a field.

```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
  setError((prev) => ({ ...prev, [name]: "" }));
  setApiError("");
};
```

---

## 7. Authentication Flow Specifications

### 7.1 Sign-In Flow (`signin.jsx`)

1. **Submission Format**: `FormData` containing `emailAddress` and `password`.
2. **Backend Payload Structure**: The Tradeflow backend returns:
   ```json
   {
     "success": true,
     "message": "LOGIN SUCCESSFUL",
     "data": {
       "staffId": "STAFF...",
       "firstName": "sultan",
       "lastName": "raheem",
       "emailAddress": "user@example.com",
       "phoneNumber": "09130235181",
       "address": "...",
       "statusName": "ACTIVE",
       "roleName": "ADMIN",
       "lastLoginDate": "2026-10-22 13:38:05"
     }
   }
   ```
3. **Session Persistence**:
   - Construct `fullName` cleanly from `firstName` and `lastName`.
   - Persist full user payload to `localStorage.setItem("user", JSON.stringify(userData))`.
   - Persist access token to `localStorage.setItem("accessToken", responseData.accessToken || staff.staffId)`.
   - Update `AuthContext` via `setUser(userData)`.
   - Display `<AlertModal>` which redirects to `/dashboard`.

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
      err.response?.data?.message || err.message || "Unable to sign in. Please try again."
    );
  } finally {
    setLoading(false);
  }
};
```

---

### 7.2 Forgot Password Flow (`forgotpassword.jsx`)

1. **Submission Format**: `FormData` containing `emailAddress`.
2. **Session Storage Pattern**: On success (`responseData.success === true`), save the response payload directly to `sessionStorage` under `"forgotPasswordSession"` and navigate to `/reset-password` without an intermediate modal:
   ```javascript
   sessionStorage.setItem("forgotPasswordSession", JSON.stringify(responseData));
   navigate('/reset-password');
   ```
3. **Error Handling**: Displays API error directly in `.api-error-message` above the submit button.

```javascript
const handleForgotPassword = async (event) => {
  event.preventDefault();
  if (loading) return;
  setApiError("");

  if (!validateForm()) return;

  try {
    setLoading(true);

    const requestData = new FormData();
    requestData.append("emailAddress", formData.emailAddress.trim());

    const response = await api.post(FORGOT_PASSWORD_API_URL, requestData);
    const responseData = response.data;

    if (responseData?.success === true) {
      sessionStorage.setItem("forgotPasswordSession", JSON.stringify(responseData));
      navigate('/reset-password');
    } else {
      setApiError(responseData?.message || "Unable to send reset OTP. Please try again.");
    }
  } catch (err) {
    setApiError(
      err.response?.data?.message || err.message || "Unable to send reset OTP. Please try again."
    );
  } finally {
    setLoading(false);
  }
};
```

---

### 7.3 Reset Password Flow (`resetpassword.jsx`)

1. **Session Consumption**: Reads `forgotPasswordSession` from `sessionStorage` on mount:
   ```javascript
   const saved = JSON.parse(sessionStorage.getItem("forgotPasswordSession") || "{}");
   const session = saved.data || saved;
   ```
2. **Pre-population**:
   - `session.staffId`: Unique staff ID displayed in `.alert-success` and sent with payload.
   - `session.emailAddress`: Displayed in the `.alert-success` notification.
   - `session.resetotp` or `session.resetOtp`: Pre-fills the OTP input field `resetotp: `${session.resetotp || ""}`.
3. **Client-side Validations**:
   - `!resetotp.trim()` -> `"RESET OTP IS REQUIRED, Kindly fill in the reset OTP to continue."`
   - `password.length < 8` -> `"Password must be at least 8 characters."`
   - `password !== confirmPassword` -> `"Passwords do not match."`
4. **Submission Payload**:
   ```javascript
   const data = new FormData();
   data.append("staffId", session.staffId);
   data.append("resetOtp", resetotp.trim());
   data.append("password", password);
   data.append("confirmPassword", confirmPassword);

   const res = await api.post(API_URL, data);
   ```
5. **Success Cleanup & Redirect**:
   - Removes `sessionStorage.removeItem("forgotPasswordSession")`.
   - Shows success message banner.
   - Automatically navigates back to `/` login after `1500ms`.

```javascript
if (res.data?.success) {
  sessionStorage.removeItem("forgotPasswordSession");
  setSuccess(res.data.message || "Password reset successfully! Redirecting to login...");
  setTimeout(() => {
    navigate("/", { replace: true });
  }, 1500);
} else {
  setError(res.data?.message || "Unable to reset password.");
}
```

---

## 8. Dashboard Profile & Header Integration

### Dynamic Profile Badge (`src/components/TopHeader.jsx`)

The dashboard displays the logged-in user's name and dynamic initials avatar at the top header from `useAuth()` / `localStorage`. Clicking the profile badge opens the `<ProfileEditModal />` with the authenticated user details:

```javascript
import { useModalState } from "../js/components/ModalContext";
import { useAuth } from "../context/AuthContext";

export default function TopHeader({ ...props }) {
  const { openProfileModal } = useModalState();
  const { user } = useAuth() || {};

  const currentUser = user || (() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  })();

  const displayName =
    currentUser?.fullName ||
    currentUser?.name ||
    currentUser?.staffName ||
    [currentUser?.firstName, currentUser?.lastName].filter(Boolean).join(" ") ||
    currentUser?.emailAddress ||
    currentUser?.email ||
    "Sultoon Abdulraheem";

  const email = currentUser?.emailAddress || currentUser?.email || "user@clincore.com";
  const position = currentUser?.position || currentUser?.role || "Chief Medical Administrator";
  const phone = currentUser?.phoneNumber || currentUser?.phone || "080 3123 4567";
  const status = currentUser?.status || "Active";
  const lastLogin = currentUser?.lastLogin || "2026-09-26 12:40 PM";
  const department = currentUser?.department || "Medical Administration";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "SA";

  const handleProfileClick = () => {
    openProfileModal({
      fullName: displayName,
      email,
      position,
      phone,
      status,
      lastLogin,
      avatar: initials,
      department,
      ...(currentUser || {}),
    }, 'staff');
  };

  return (
    <div className="top-header">
      {/* Search Input */}
      <div className="search-div">
        <i className="bi bi-search"></i>
        <input type="text" className="search-input" placeholder={props.placeHolder || "Search anything"} />
      </div>

      {/* Profile Badge */}
      <div className="action-div">
        <div className="profile-div" onClick={handleProfileClick} style={{ cursor: "pointer" }} title={`View profile for ${displayName}`}>
          <div
            className="profile-img"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "var(--primary-color-dark, #0d5c56)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
              border: "1.5px solid var(--border-color)",
              userSelect: "none",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff", letterSpacing: "0.5px" }}>
              {initials}
            </span>
          </div>
          <span className="profile-name">{displayName}</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}
```

---

## 9. Session Persistence & Logout Standard

### Logout (`src/components/Sidebar.jsx`)
Logout clears all authentication state from browser storage and context, navigating the user back to the login screen:

```javascript
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth() || {};

  const handleLogout = () => {
    if (logout) logout();
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  return (
    <div className="side-panel">
      {/* Nav Links */}
      <div className="bottom-div">
        <NavLink to="/" className="nav-link logout-link" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}
```
