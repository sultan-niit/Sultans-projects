export default function PatientPortalSummary({ profile, onOpenProfile, onNewAppointment }) {
  return (
    <div className="pure-hero-card">
      <div className="pure-hero-left">
        <button
          type="button"
          className="pure-hero-avatar"
          onClick={onOpenProfile}
          title="Click to view and edit profile"
          aria-label="Open profile"
        >
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#F1F5F9" />
            <ellipse cx="50" cy="52" rx="22" ry="24" fill="#FDDCB5" />
            <path d="M24 96C24 74 38 70 50 70C62 70 76 74 76 96H24Z" fill="#0D5C56" />
            <path d="M28 46C28 28 38 20 50 20C62 20 72 28 72 46C72 50 66 36 50 36C34 36 28 50 28 46Z" fill="#1E293B" />
            <path d="M48 72L50 86L52 72Z" fill="#EF4444" />
          </svg>
        </button>

        <div className="pure-hero-info">
          <h3 className="hero-name">{profile.name}</h3>
          <p className="hero-dept">Department: {profile.department}</p>
          <p className="hero-login"><i className="bi bi-clock"></i> Last Login Date - {profile.lastLoginDate}</p>
        </div>
      </div>

      <div className="pure-hero-right">
        <button type="button" className="btn-pure-primary" onClick={onNewAppointment}>
          <i className="bi bi-calendar-plus"></i>
          <span>New Appointment</span>
        </button>
      </div>
    </div>
  );
}
