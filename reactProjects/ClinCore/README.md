# ClinCore Healthcare Management System

## Project introduction

**ClinCore** is a browser-based healthcare administration and clinic operations
dashboard. It brings common administrative workflows—such as viewing patient
and doctor records, managing rooms, and reviewing appointments and inventory—
into one React application.

The project is intended to give clinic administrators and staff a shared,
easy-to-navigate workspace for routine operational tasks. It is an
administrative interface, not a medical diagnosis or clinical decision-support
system.

## What ClinCore is used for

ClinCore is designed to help authorized clinic staff:

- Review a dashboard with doctor and patient counts, a doctors' schedule, and
  operational summaries.
- Find and manage patient profiles, including contact details, treatment,
  doctor assignment, room assignment, and status.
- Maintain a directory of doctors and their departments, specialties, and
  availability.
- Review appointment records and related patient, doctor, date, and status
  details.
- Organize hospital rooms and their capacity and availability.
- View department information and related staffing details.
- Review invoice/payment records and track medical inventory items and stock
  status.
- Sign in and use password-recovery and password-reset flows where the
  configured authentication API supports them.

The application combines API-backed operations with browser-session data in
some modules. See [Data and API behavior](#data-and-api-behavior) for the
distinction.

## Main areas

| Area | Route | Purpose |
|---|---|---|
| Sign in | `/`, `/signin`, `/sign-in`, `/sign_in`, `/login` | Authenticate an administrator or staff user. |
| Password recovery | `/forgot-password`, `/forgot_password` | Start the configured password-recovery flow. |
| Reset password | `/reset-password`, `/reset_password` | Submit a reset code and new password. |
| Dashboard | `/dashboard` | Review key counts, doctor availability, and operational panels. |
| Patients | `/patients`, `/patient` | Search, filter, inspect, add, edit, and delete patient records. |
| Doctors | `/doctors`, `/doctor` | Search and manage the doctor directory and assignments. |
| Appointments | `/appointments`, `/appointment` | Review and manage appointment information. |
| Rooms | `/rooms`, `/room` | Review room capacity and availability and manage room records. |
| Departments | `/departments`, `/department` | Review and maintain department information. |
| Payments | `/payments`, `/payment` | Review invoice and payment information. |
| Inventory | `/inventory` | Review and manage stock records. |

Unknown routes redirect to `/dashboard`. Routes are declared in `src/App.jsx`.

## Features and user experience

- **Shared administration layout:** sidebar navigation, a top header, profile
  controls, and consistent page content areas.
- **Record tables:** patient and doctor directories provide search, sorting,
  filters, pagination, status display, and record actions.
- **Record forms:** a shared drawer renders add/edit forms from entity
  definitions in `src/js/formSchemas.js`.
- **API feedback:** loading indicators, empty states, offline messaging, and
  toast notifications communicate the state of supported workflows.
- **Responsive layout:** dashboard grids, navigation, and content adapt to
  smaller viewports.
- **Local record caching:** patient, doctor, and room API modules keep browser
  storage copies to support display and fallback behavior.
- **Session-based operational data:** appointments, departments, payments, and
  inventory use browser session storage and seeded records in
  `src/js/sessionData.js`.

## Technology

- React 19 and React DOM
- Vite 8 for local development and production builds
- React Router for client-side routing
- Axios for HTTP requests
- Bootstrap Icons for interface icons
- ESLint for code linting
- Plain JavaScript and CSS

## Application structure

```text
src/
  api/                 Axios setup and API/data modules
  assets/styles/       Main application styles
  components/          Shared tables, cards, navigation, and page components
  context/             Authentication context
  js/
    components/        Shared form drawer, profile modal, and notifications
    formSchemas.js     Add/edit form definitions
    sessionData.js     Seeded and session-persisted collections
  pages/               Route-level screens
  App.jsx              Routes
  main.jsx             React application entry point and providers
```

### Important implementation files

- `src/App.jsx` — route definitions and fallback route.
- `src/main.jsx` — app bootstrap; registers authentication and modal providers.
- `src/context/AuthContext.jsx` — restores the saved user from browser storage
  and provides login/logout state.
- `src/api/axios.js` — shared Axios client and response parsing.
- `src/api/patient.js` — patient API requests, record normalization, and local
  storage helpers.
- `src/api/doctor.js` — doctor API requests, record normalization, and local
  storage helpers.
- `src/api/room.js` — room API requests, record normalization, and local
  storage helpers.
- `src/js/components/ModalContext.jsx` — shared add/edit submission, profile
  modal, and toast state.
- `src/js/components/AddFormDrawer.jsx` — shared dynamic add/edit form.
- `src/js/formSchemas.js` — fields and sections used by the shared forms.
- `src/js/sessionData.js` — seeded operational data stored in the browser
  session.
- `src/assets/styles/MainStyle.css` and `src/index.css` — application layout,
  component, and responsive styles.

## Data and API behavior

### API-backed data

The application uses a shared Axios client for configured HTTP requests.
Patient and doctor pages load directory records through their API modules.
Room records also have API-backed create, fetch, and delete operations.
Authentication and password-recovery pages call the configured authentication
endpoints.

Patient creation sends form fields including `patientName`, `emailAddress`,
`password`, `phone`, `address`, `treatment`, doctor and room IDs, and status.
Exact field requirements and success behavior ultimately depend on the
configured server implementation.

### Browser storage

- Authentication user and access token are saved in `localStorage`.
- Patient, doctor, and room modules cache records in `localStorage`.
- Session-managed appointment, department, payment, and inventory collections
  are stored in `sessionStorage`.
- Clearing browser storage removes these local copies and session records.

Browser storage is not a secure database and should not be treated as a
production source of truth. API availability, server validation, and server
authorization are required for reliable and secure operation.

### API configuration

API endpoints are configured with Vite environment variables. The source
contains defaults for some endpoints; doctor endpoints without a default must
be supplied in the environment. Common variables used by the app include:

| Group | Variables |
|---|---|
| Shared API client | `VITE_API_BASE_URL` |
| Authentication | `VITE_SIGN_IN_API_URL`, `VITE_FORGOT_PASSWORD_API_URL`, `VITE_RESET_PASSWORD_API_URL` |
| Doctors | `VITE_CREATE_DOCTOR_API_URL`, `VITE_FETCH_EACH_DOCTOR_API_URL`, `VITE_DELETE_DOCTOR_API_URL`, `VITE_SEARCH_DOCTOR_API_URL`, `VITE_FETCH_ALL_DOCTORS_API_URL`, `VITE_FETCH_DEPARTMENTS_API_URL`, `VITE_FETCH_ROLES_API_URL`, `VITE_FETCH_STATUS_API_URL` |
| Patients | `VITE_CREATE_PATIENT_API_URL`, `VITE_FETCH_EACH_PATIENT_API_URL`, `VITE_FETCH_ALL_PATIENTS_API_URL`, `VITE_SEARCH_PATIENT_API_URL`, `VITE_DELETE_PATIENT_API_URL` |
| Rooms | `VITE_CREATE_ROOM_API_URL`, `VITE_FETCH_EACH_ROOM_API_URL`, `VITE_FETCH_ALL_ROOMS_API_URL`, `VITE_DELETE_ROOM_API_URL` |

Create a local `.env` file at the project root and set each variable to the
appropriate endpoint for your environment. Restart the Vite development
server after changing environment variables. Do not put database credentials,
private keys, or other secrets in `VITE_` variables: Vite exposes those values
to the client bundle.

## Getting started

### Requirements

- Node.js and npm versions compatible with the Vite version in `package.json`.
- Access to the API service for workflows that require server data.

### Install and run

From the project directory:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production bundle in `dist/`. |
| `npm run preview` | Serve the production bundle locally for review. |
| `npm run lint` | Run ESLint across the project. |

## Typical workflows

### Register and manage a patient

1. Open **Patients** and choose **Add Patient**.
2. Enter the required patient details and treatment.
3. Choose a doctor and room from the available options.
4. Submit the form; the app sends the configured create request and updates its
   local patient cache after a successful response.
5. Search, filter, open, edit, or delete records from the patient directory.

### Maintain the doctor directory

1. Open **Doctors** and add or select a doctor.
2. Provide contact details, department, specialty, and availability.
3. Review the directory and use search, filters, sorting, and pagination to
   locate records.
4. The dashboard can display the current doctor count and a short
   availability list.

### Review operational information

Use the dashboard and the relevant module to review appointments, rooms,
departments, billing records, and inventory. Some of these modules currently
use seeded, session-persisted browser data rather than a server API.

## Security and operational notes

- This repository contains a front-end application; backend validation,
  authorization, database access, and audit logging must be implemented and
  enforced by the API service.
- Client-side route visibility is not an authorization boundary. Protect
  sensitive API operations on the server.
- Do not use real patient information in local development unless the
  environment and data handling have been approved for that purpose.
- Use HTTPS for deployed API endpoints and handle patient information according
  to applicable privacy and healthcare requirements.
- A successful front-end build does not verify that remote APIs are reachable
  or that their server-side schemas match the form payloads.
- Seeded records are for interface development and demonstration; they should
  not be interpreted as live clinic records.

## Project status and future integration

ClinCore provides the front-end structure for common clinic administration
tasks. Before production use, verify each endpoint and its request/response
contract, connect remaining session-based modules to approved backend
services, apply server-side access controls, and test workflows with
non-production data.
