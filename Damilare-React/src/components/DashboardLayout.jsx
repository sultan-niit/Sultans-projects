import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import brandLogo from "../assets/icon-images/DML-logo.png";
import avatarImg from "../assets/body-images/DML AVATER.png";
import { useAuth } from "../context/AuthContext";
import { formatEmailToName } from "../utils/staffStorage";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (!currentUser) {
      try {
        const stored = localStorage.getItem("user") || sessionStorage.getItem("userSession");
        if (stored) {
          const parsed = JSON.parse(stored);
          setCurrentUser(parsed.data || parsed);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [currentUser]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const displayName =
    currentUser?.fullName ||
    currentUser?.firstName ||
    (currentUser?.emailAddress ? formatEmailToName(currentUser.emailAddress) : "DML");

  const currentPath = location.pathname;

  return (
    <div className="dashboard-layout">
      {/* Top Header */}
      <header className="top-header">
        <div className="left-nav">
          <Link to="/dashboard" className="header-logo" title="Damilare Dashboard">
            <img src={brandLogo} alt="DML Logo" className="header-logo-img" />
          </Link>
        </div>
        <div className="right-nav">
          <button type="button" className="icon-btn search-btn" title="Search">
            <i className="bi bi-search"></i>
          </button>
          <button
            type="button"
            className="icon-btn notification-btn"
            title="Notifications"
          >
            <i className="bi bi-bell-fill"></i>
          </button>
          <Link to="/user" className="user-profile" title="View Profile">
            <div className="avatar-img">
              <img src={avatarImg} alt="DML Avatar" />
            </div>
            <span className="user-name">{displayName}</span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            title="Logout"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--muted-color)",
              marginLeft: "12px",
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </header>

      {/* Dashboard Body */}
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar" id="sidebar">
          <nav className="sidebar-nav">
            <ul className="nav-list">
              <li className={`nav-item ${currentPath === "/dashboard" ? "active" : ""}`}>
                <Link to="/dashboard" className="nav-link">
                  <div className="icon-box">
                    <i className="bi bi-grid-fill"></i>
                  </div>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className={`nav-item ${currentPath === "/staff" ? "active" : ""}`}>
                <Link to="/staff" className="nav-link">
                  <div className="icon-box">
                    <i className="bi bi-people"></i>
                  </div>
                  <span>Staff</span>
                </Link>
              </li>

              <li className={`nav-item ${currentPath === "/in-stock" ? "active" : ""}`}>
                <Link to="/in-stock" className="nav-link">
                  <div className="icon-box">
                    <i className="bi bi-box-seam"></i>
                  </div>
                  <span>In Stock</span>
                </Link>
              </li>

              <li className={`nav-item ${currentPath === "/products" ? "active" : ""}`}>
                <Link to="/products" className="nav-link">
                  <div className="icon-box">
                    <i className="bi bi-grid-3x3-gap"></i>
                  </div>
                  <span>Products</span>
                </Link>
              </li>

              <li className={`nav-item ${currentPath === "/sales" ? "active" : ""}`}>
                <Link to="/sales" className="nav-link">
                  <div className="icon-box">
                    <i className="bi bi-receipt"></i>
                  </div>
                  <span>Sales</span>
                </Link>
              </li>

              <li className={`nav-item ${currentPath === "/orders" || currentPath === "/order" ? "active" : ""}`}>
                <Link to="/orders" className="nav-link">
                  <div className="icon-box">
                    <i className="bi bi-clipboard-data"></i>
                  </div>
                  <span>Orders</span>
                </Link>
              </li>

              <li className={`nav-item ${currentPath === "/user" || currentPath === "/profile" ? "active" : ""}`}>
                <Link to="/user" className="nav-link">
                  <div className="icon-box">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <span>User</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main View */}
        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
}
