import { createBrowserRouter, Navigate } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import ResetPassword from "./pages/resetpassword";
import PatientPortal from "./pages/patientPortal";
import "./index.css";
import "./assets/styles/MainStyle.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },
  {
    path: "/sign_in",
    element: <SignIn />
  },
  {
    path: "/login",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/sign_up",
    element: <SignUp />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/forgot_password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/reset_password",
    element: <ResetPassword />
  },
  {
    path: "/patient-portal",
    element: <PatientPortal />
  },
  {
    path: "/patient-dashboard",
    element: <PatientPortal />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

