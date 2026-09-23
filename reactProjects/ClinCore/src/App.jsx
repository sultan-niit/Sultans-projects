import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import ResetPassword from "./pages/resetpassword";
import Dashboard from "./pages/dashboard";
import Appointments from "./pages/appointment";
import Rooms from "./pages/rooms";
import Patients from "./pages/patient";
import Doctors from "./pages/doctors";
import Departments from "./pages/department";
import Payments from "./pages/payment";
import Inventory from "./pages/inventory";
import Messages from "./pages/messages";
import "./index.css";
import "./assets/styles/MainStyle.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signin",
    element: <Home />
  },
  {
    path: "/login",
    element: <Home />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  
  {
    path: "/reset-password",
    element: <ResetPassword />
  },

  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/appointments",
    element: <Appointments />
  },
  {
    path: "/appointment",
    element: <Appointments />
  },
  {
    path: "/rooms",
    element: <Rooms />
  },
  {
    path: "/room",
    element: <Rooms />
  },
  
  {
    path: "/patients",
    element: <Patients />
  },
  {
    path: "/patient",
    element: <Patients />
  },
  
  {
    path: "/doctors",
    element: <Doctors />
  },
  {
    path: "/doctor",
    element: <Doctors />
  },
  {
    path: "/departments",
    element: <Departments />
  },
  {
    path: "/department",
    element: <Departments />
  },
  {
    path: "/payments",
    element: <Payments />
  },
  {
    path: "/payment",
    element: <Payments />
  },
  {
    path: "/inventory",
    element: <Inventory />
  },
  {
    path: "/messages",
    element: <Messages />
  },

  {
    path: "*",
    element: <Navigate to="/dashboard" replace />
  }
]);


