export default function PatientPortalSettings({ form, status, onChange, onSubmit }) {
  return (
    <div className="pure-content-card">
      <div className="pure-card-header">
        <i className="bi bi-shield-lock"></i>
        <span>EDIT CREDENTIALS &amp; PASSWORD</span>
      </div>

      {status && (
        <div className="settings-alert-banner">
          <i className="bi bi-info-circle"></i>
          <span>{status}</span>
        </div>
      )}

      <form onSubmit={onSubmit} className="pure-settings-form">
        <div className="form-group-item">
          <label htmlFor="current-password">CURRENT PASSWORD</label>
          <input
            id="current-password"
            type="password"
            placeholder="Enter current password"
            value={form.currentPassword}
            onChange={(event) => onChange("currentPassword", event.target.value)}
            required
            className="pure-form-control"
          />
        </div>

        <div className="form-group-row">
          <div className="form-group-item">
            <label htmlFor="new-password">NEW PASSWORD</label>
            <input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              value={form.newPassword}
              onChange={(event) => onChange("newPassword", event.target.value)}
              required
              className="pure-form-control"
            />
          </div>

          <div className="form-group-item">
            <label htmlFor="confirm-password">CONFIRM NEW PASSWORD</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm new password"
              value={form.confirmPassword}
              onChange={(event) => onChange("confirmPassword", event.target.value)}
              required
              className="pure-form-control"
            />
          </div>
        </div>

        <div className="settings-notifications-box">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.enableEmailNotifs}
              onChange={(event) => onChange("enableEmailNotifs", event.target.checked)}
            />
            <span>Receive email notifications for doctor replies &amp; test results</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.enableSmsAlerts}
              onChange={(event) => onChange("enableSmsAlerts", event.target.checked)}
            />
            <span>Receive SMS reminders for appointments</span>
          </label>
        </div>

        <div className="settings-submit-row">
          <button type="submit" className="btn-pure-primary">
            <i className="bi bi-check2"></i>
            <span>UPDATE CREDENTIALS</span>
          </button>
        </div>
      </form>
    </div>
  );
}
