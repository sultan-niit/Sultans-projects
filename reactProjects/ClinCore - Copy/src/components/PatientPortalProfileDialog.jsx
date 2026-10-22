export default function PatientPortalProfileDialog({
  portal,
  doctor = portal?.userProfile?.doctor,
  form = portal?.profileForm,
  onChange = portal?.handleProfileFieldChange,
  onClose = () => portal?.setShowProfileModal(false),
  onSubmit = portal?.handleSaveProfile,
}) {

  return (
    <div className="pure-modal-overlay">
      <div className="pure-profile-modal-box" role="dialog" aria-modal="true" aria-labelledby="patient-profile-title">
        <div className="pure-modal-top-bar">
          <div className="modal-top-title">
            <i className="bi bi-person"></i>
            <span id="patient-profile-title">MY PROFILE</span>
          </div>
          <button type="button" className="pure-close-btn" onClick={onClose} aria-label="Close profile">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="profile-modal-body">
          <div className="profile-modal-left">
            <div className="modal-avatar-circle">
              <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="#F1F5F9" />
                <ellipse cx="50" cy="52" rx="22" ry="24" fill="#FDDCB5" />
                <path d="M24 96C24 74 38 70 50 70C62 70 76 74 76 96H24Z" fill="#0D5C56" />
                <path d="M28 46C28 28 38 20 50 20C62 20 72 28 72 46C72 50 66 36 50 36C34 36 28 50 28 46Z" fill="#1E293B" />
                <path d="M48 72L50 86L52 72Z" fill="#EF4444" />
              </svg>
            </div>
            <div className="modal-patient-meta">
              <span className="meta-tag">Assigned Doctor: {doctor}</span>
            </div>
          </div>

          <div className="profile-modal-right">
            <form onSubmit={onSubmit} className="pure-profile-form">
              <div className="form-group-item">
                <label htmlFor="profile-username">USERNAME: <span className="req">*</span></label>
                <input
                  id="profile-username"
                  type="text"
                  value={form.username}
                  onChange={(event) => onChange("username", event.target.value)}
                  placeholder="USERNAME"
                  required
                  className="pure-form-control"
                />
              </div>
              <div className="form-group-item">
                <label htmlFor="profile-email">EMAIL ADDRESS: <span className="req">*</span></label>
                <input
                  id="profile-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => onChange("email", event.target.value)}
                  placeholder="EMAIL ADDRESS"
                  required
                  className="pure-form-control"
                />
              </div>
              <div className="form-group-item">
                <label htmlFor="profile-department">SELECT DEPARTMENT: <span className="req">*</span></label>
                <select
                  id="profile-department"
                  value={form.department}
                  onChange={(event) => onChange("department", event.target.value)}
                  className="pure-form-control pure-select"
                  required
                >
                  <option value="Cardiology">Cardiology</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="General Health">General Health</option>
                  <option value="Child Health (Pediatrics)">Child Health (Pediatrics)</option>
                  <option value="Skin Specialist (Dermatology)">Skin Specialist (Dermatology)</option>
                </select>
              </div>
              <div className="profile-submit-box">
                <button type="submit" className="btn-pure-primary">
                  <i className="bi bi-check2"></i>
                  <span>UPDATE PROFILE</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
