import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import InStock from "./pages/InStock";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Orders from "./pages/Orders";
import UserProfile from "./pages/UserProfile";
import CustomerShop from "./pages/CustomerShop";
import CustomerCheckout from "./pages/CustomerCheckout";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import CustomerProfile from "./pages/CustomerProfile";

import "./index.css";
import "./assets/styles/mainStyles.css";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
  {
    path: "/in-stock",
    element: <InStock />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/order",
    element: <Orders />,
  },
  {
    path: "/user",
    element: <UserProfile />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/shop",
    element: <CustomerShop />,
  },
  {
    path: "/store",
    element: <CustomerShop />,
  },
  {
    path: "/cart",
    element: <CustomerShop />,
  },
  {
    path: "/checkout",
    element: <CustomerCheckout />,
  },
  {
    path: "/customer-login",
    element: <CustomerLogin />,
  },
  {
    path: "/customer-signin",
    element: <CustomerLogin />,
  },
  {
    path: "/customer-register",
    element: <CustomerRegister />,
  },
  {
    path: "/customer-signup",
    element: <CustomerRegister />,
  },
  {
    path: "/customer-profile",
    element: <CustomerProfile />,
  },
  {
    path: "/customer/user",
    element: <CustomerProfile />,
  },
  {
    path: "/customer-user",
    element: <CustomerProfile />,
  },
]);
