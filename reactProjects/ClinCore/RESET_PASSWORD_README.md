# ClinCore - Reset Password Module Documentation

This document explains the architecture, data flow, validation, API integration, and styling mechanics for the Password Reset feature in ClinCore.

---

## 1. Flow Overview

```mermaid
graph LR
    A[Forgot Password Page] -->|POST emailAddress| B[API: forgot-password.php]
    B -->|Return OTP & Staff Info| A
    A -->|Store response in sessionStorage| C[sessionStorage: forgotPasswordSession]
    A -->|navigate('/reset-password')| D[Reset Password Page]
    C -->|Read session data| D
    D -->|User fills / verifies fields| D
    D -->|POST FormData| E[API: reset-password.php]
    E -->|Success: Password updated| F[Clear session & Show Success]
```

1. **Step 1 (Forgot Password)**: The user enters their registered email on the `ForgotPassword` page (`src/pages/forgotpassword.jsx`).
2. **Step 2 (Session Storage)**: Upon a successful response from `forgot-password.php`, the complete response payload is saved in browser storage:
   ```javascript
   sessionStorage.setItem("forgotPasswordSession", JSON.stringify(responseData));
   ```
3. **Step 3 (Navigation)**: The user is redirected to `/reset-password` (`src/pages/resetpassword.jsx`).
4. **Step 4 (Pre-population)**: The reset password screen reads `forgotPasswordSession` and automatically populates:
   - The green alert notification (displaying the OTP, destination email, and Staff ID).
   - The **Verification Code (OTP)** input field.
   - The **Staff ID** input field.
5. **Step 5 (Form Submission)**: The user inputs and confirms their new password (min. 8 characters) and submits.
6. **Step 6 (Completion)**: On success, the session storage is cleared and a success notification is shown.

---

## 2. Session Data Contract

The reset password page expects data under the key `"forgotPasswordSession"`.

### Data Structure
The API response object can provide values either directly or under a nested `data` object:
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "data": {
    "emailAddress": "user@example.com",
    "resetotp": "836577",
    "staffId": "STAFF20261015031219"
  }
}
```

### Safe Retrieval in `resetpassword.jsx`:
```javascript
const saved = JSON.parse(sessionStorage.getItem("forgotPasswordSession") || "{}");
const session = saved.data || saved;
```
This safely retrieves:
- `session.emailAddress`: The target email for the password reset.
- `session.resetotp` or `session.resetOtp`: The 6-digit one-time password (automatically converted to String if returned as an integer from the PHP backend).
- `session.staffId`: The unique staff identification code.

---

## 3. Form State & Validation

The form manages four fields:

| Field Name | Type | Description | Default Value |
| :--- | :--- | :--- | :--- |
| `resetotp` | text | OTP code sent to email | `session.resetotp \|\| session.resetOtp \|\| ""` |
| `staffId` | text | Unique employee/staff ID | `session.staffId \|\| ""` |
| `password` | password | New account password | `""` |
| `confirmPassword` | password | Confirmation of new password | `""` |

### Validation Rules (Client-Side)
Before dispatching the network request, the following guard checks run in order:
1. **Staff ID**: Must not be empty. Error: *"STAFF ID IS REQUIRED, Kindly fill in the staff ID to continue."*
2. **Reset OTP**: Must not be empty. Error: *"RESET OTP IS REQUIRED, Kindly fill in the reset OTP to continue."*
3. **Password Length**: Must be at least 8 characters. Error: *"Password must be at least 8 characters."*
4. **Password Match**: `password` and `confirmPassword` must match. Error: *"Passwords do not match."*

---

## 4. API Integration

### Endpoint
- **URL**: Configured via `import.meta.env.VITE_RESET_PASSWORD_API_URL`
- **Method**: `POST`
- **Body Format**: `FormData` (`multipart/form-data`)

### Payload Fields
```javascript
const data = new FormData();
Object.entries({
  emailAddress: session.emailAddress || "",
  staffId: staffId.trim(),
  resetOtp: resetotp.trim(),
  password,
  confirmPassword,
}).forEach(([key, val]) => data.append(key, val));
```

### Success Handling
- Removes the temporary reset session:
  ```javascript
  sessionStorage.removeItem("forgotPasswordSession");
  ```
- Displays success notification banner.
- Button reverts from loading state.

### Error Handling
- Captures backend error messages from `err.response?.data?.message` or `err.message`.
- Displays the error in a red alert banner (`api-error-message`).

---

## 5. UI Layout & Styling Architecture

The page follows ClinCore's dual-panel auth screen design:

### Structure (`resetpassword.jsx`):
```
.login-body.reset-password-page
 └── .frame
      ├── .left-panel (Form Panel, 50% width)
      │    ├── .logo (ClinCore brand logo link)
      │    └── .card.auth-card
      │         ├── .card-header ("Set New Password", subtitle)
      │         ├── .alert-success (OTP code, email, staff ID)
      │         └── <form>
      │              ├── <InputField name="resetotp" />
      │              ├── <InputField name="password" />
      │              ├── <InputField name="confirmPassword" />
      │              ├── <InputField name="staffId" />
      │              ├── {error && <p className="api-error-message" />}
      │              ├── {success && <p className="alert-success" />}
      │              ├── <ButtonComponents type="submit" />
      │              └── .switch-auth-row (Back to Login)
      └── <AuthHeroPanel /> (Hero illustration and hospital stats, 50% width)
```

### Key CSS Enhancements in `src/assets/styles/MainStyle.css`:
1. **Logo Overlap Fix**:
   - In `.reset-password-page`, `.left-panel` uses `justify-content: flex-start;` and `position: static` for `.logo` instead of absolute positioning.
   - This ensures the brand logo stays in natural document flow above the form card and never collides with the "Set New Password" header.
2. **Compact Card Spacing**:
   - Card padding is set to `24px 32px` with `12px` form-group gaps so that all 4 input fields comfortably fit within standard laptop screen heights without excessive scrolling.
3. **Sleek Custom Scrollbar**:
   - `6px` subtle track and thumb replaces the standard bulky OS scrollbar on `.left-panel`.
4. **Enhanced OTP Notification Box**:
   - Styled using ClinCore's theme variables (`--status-success-bg-color`, `--status-success-border-color`).
   - Displays the OTP code cleanly on top, followed by the registered email address and staff ID with bold highlighted values (`.alert-highlight`).

---

## 6. Associated Files

- **Page**: [`src/pages/resetpassword.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/pages/resetpassword.jsx)
- **Preceding Page**: [`src/pages/forgotpassword.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/pages/forgotpassword.jsx)
- **Shared Inputs**: [`src/components/InputField.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/components/InputField.jsx)
- **Shared Buttons**: [`src/components/ButtonComponents.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/components/ButtonComponents.jsx)
- **Hero Panel**: [`src/components/AuthHeroPanel.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/components/AuthHeroPanel.jsx)
- **Global Stylesheet**: [`src/assets/styles/MainStyle.css`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/assets/styles/MainStyle.css)
