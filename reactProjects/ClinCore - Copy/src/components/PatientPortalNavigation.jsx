import { Link } from "react-router-dom";

export function PatientPortalSidebar({ currentView, onViewChange }) {
  return (
    <aside className="pure-portal-sidebar">
      <div className="pure-sidebar-top">
        <div className="pure-brand">
          <div className="pure-brand-icon">
            <svg viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="pure-brand-text">
            <span className="brand-title">ClinCore</span>
            <span className="brand-subtitle">Patient Care</span>
          </div>
        </div>

        <nav className="pure-nav-menu">
          <button
            type="button"
            className={`pure-nav-link ${currentView === "dashboard" ? "active" : ""}`}
            onClick={() => onViewChange("dashboard")}
          >
            <i className="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </button>
          <button
            type="button"
            className={`pure-nav-link ${currentView === "messages" ? "active" : ""}`}
            onClick={() => onViewChange("messages")}
          >
            <i className="bi bi-chat-dots"></i>
            <span>Messages</span>
            <span className="pure-nav-badge">3</span>
          </button>
          <button
            type="button"
            className={`pure-nav-link ${currentView === "settings" ? "active" : ""}`}
            onClick={() => onViewChange("settings")}
          >
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </button>
        </nav>
      </div>

      <div className="pure-sidebar-bottom">
        <Link to="/signin" className="pure-logout-btn">
          <i className="bi bi-power"></i>
          <span>Log-Out</span>
        </Link>
      </div>
    </aside>
  );
}

export function PatientPortalHeader({ currentView, onViewChange, onOpenProfile }) {
  return (
    <header className="pure-top-header">
      <div className="pure-header-left">
        <span className="pure-portal-title">PATIENT PORTAL</span>
        <div className="pure-pill-tabs">
          <button
            type="button"
            className={`pure-pill-tab ${currentView === "dashboard" ? "active" : ""}`}
            onClick={() => onViewChange("dashboard")}
          >
            <i className="bi bi-speedometer2"></i> Dashboard
          </button>
          <button type="button" className="pure-pill-tab" onClick={onOpenProfile}>
            <i className="bi bi-person"></i> My Profile
          </button>
        </div>
      </div>

      <div className="pure-header-right">
        <button type="button" className="pure-icon-btn" title="Notifications">
          <i className="bi bi-bell"></i>
        </button>
        <button
          type="button"
          className="pure-profile-avatar-chip"
          onClick={onOpenProfile}
          title="Click to view & edit Profile"
          aria-label="Open profile"
        >
          <span className="avatar-graphic-small">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" fill="#e6faf7" />
              <ellipse cx="50" cy="50" rx="20" ry="22" fill="#FDDCB5" />
              <path d="M28 92C28 72 40 68 50 68C60 68 72 72 72 92H28Z" fill="#0D5C56" />
              <path d="M30 45C30 30 38 22 50 22C62 22 70 30 70 45C70 48 64 36 50 36C36 36 30 48 30 45Z" fill="#1E293B" />
              <path d="M48 70L50 82L52 70Z" fill="#EF4444" />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}
