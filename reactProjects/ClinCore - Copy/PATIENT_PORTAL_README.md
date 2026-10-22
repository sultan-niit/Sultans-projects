# ClinCore - Dedicated Patient Portal Architecture & Routing

The **Patient Portal** in ClinCore is an independent, standalone patient-facing application view with its own dedicated sidebar, top navigation, interactive dashboard sub-views, and modal systems.

---

## 1. Dedicated Layout Architecture

The Patient Portal is located at [`src/pages/patientPortal.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/pages/patientPortal.jsx) and is styled via the dedicated `.pure-portal-*` component tree:

```
pure-portal-root
├── PatientPortalSidebar (Dedicated patient nav menu: Dashboard, Messages, Settings, Logout)
└── pure-portal-main
    ├── PatientPortalHeader (Brand, pill tabs, notification icons, avatar trigger)
    └── PatientPortalContent (Active sub-view container)
        ├── [View: Dashboard]
        │   ├── PatientPortalSummary (Patient welcome banner & quick action)
        │   └── PatientPortalAppointmentsTable (Full visit records, search, actions)
        ├── [View: Messages]
        │   └── PatientPortalMessages (Direct communication thread with doctor)
        └── [View: Settings]
            └── PatientPortalSettings (Password & notification preferences)
```

---

## 2. Routing Configuration

In [`src/App.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/App.jsx), the routes are defined as:

```jsx
import PatientPortal from "./pages/patientPortal";

export const router = createBrowserRouter([
  // ...
  {
    path: "/patient-portal",
    element: <PatientPortal />
  },
  {
    path: "/patient-dashboard",
    element: <PatientPortal />
  },
  // ...
]);
```

- When patients navigate to `/patient-portal`, they access their own dedicated portal interface without the staff admin shell.

---

## 3. Dedicated Navigation Components

Located in [`src/components/PatientPortalNavigation.jsx`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/components/PatientPortalNavigation.jsx):
- **`PatientPortalSidebar`**: Features tabs for **Dashboard**, **Messages** (with unread badge), **Settings**, and a patient-specific **Log-Out** button.
- **`PatientPortalHeader`**: Features portal tabs (**Dashboard** & **My Profile**), notification button, and interactive profile chip.

---

## 4. State Management Hook (`usePatientPortal`)

Located in [`src/js/usePatientPortal.js`](file:///c:/Users/USER/Documents/Sultans-projects/reactProjects/ClinCore/src/js/usePatientPortal.js):
- **`currentView`**: Controls active view (`'dashboard'` | `'messages'` | `'settings'`).
- **`showProfileModal` & `showSuggestionModal`**: Controls dialogs with automatic body scroll-locking.
- **`suggestions` & handlers**: Full lifecycle for appointment booking, rescheduling, and cancellation.
- **`messages` & `typedMessage`**: Real-time message feed with assigned doctor.

---

## 5. Running the Application

To run ClinCore in development mode:

```bash
npm run dev
```

Visit **[http://localhost:5173/patient-portal](http://localhost:5173/patient-portal)** to view the dedicated Patient Portal.
