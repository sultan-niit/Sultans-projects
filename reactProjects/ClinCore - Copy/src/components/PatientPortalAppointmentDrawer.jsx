export default function PatientPortalAppointmentDrawer({
  portal,
  suggestion = portal?.newSuggestion,
  onChange = portal?.handleAppointmentFieldChange,
  onDismiss = portal?.handleDismissAppointment,
  onSubmit = portal?.handleAddSuggestion,
}) {

  return (
    <>
      <div className="clincore-backdrop active" aria-hidden="true" />

      <div
        className="clincore-drawer-container open portal-appointment-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-drawer-title"
      >
        <div className="add-drawer-header">
          <div className="add-drawer-title-group">
            <i className="bi bi-calendar-plus add-drawer-header-icon"></i>
            <h2 id="appointment-drawer-title" className="add-drawer-title-text">
              New Appointment
            </h2>
          </div>
          <button
            type="button"
            className="add-drawer-close-pill"
            title="Close form"
            onClick={onDismiss}
          >
            <i className="bi bi-x-lg"></i>
            <span>Close</span>
          </button>
        </div>

        <div className="add-drawer-subtitle-bar">
          <p>Request a new consultation slot. Our staff will confirm your appointment shortly.</p>
        </div>

        <form onSubmit={onSubmit} className="add-drawer-form">
          <div className="add-drawer-scroll-body">
            <div className="drawer-section-card">
              <div className="drawer-section-header">
                <i className="bi bi-journal-medical section-icon"></i>
                <h3 className="section-title">Appointment Details</h3>
              </div>

              <div className="drawer-fields-grid">
                <div className="form-field-group col-span-2">
                  <label htmlFor="appointment-category" className="form-field-label">
                    Department / Specialist <span className="field-required-star">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="appointment-category"
                      name="category"
                      value={suggestion.category}
                      onChange={(event) => onChange("category", event.target.value)}
                      required
                      className="clincore-input-select"
                    >
                      <option value="Cardiology">Cardiology (Heart Specialist)</option>
                      <option value="General Checkup">Routine &amp; General Health</option>
                      <option value="Pediatrics">Child Health (Pediatrics)</option>
                      <option value="Dermatology">Skin Specialist</option>
                      <option value="Diagnostics">Laboratory &amp; Diagnostics</option>
                    </select>
                    <i className="bi bi-chevron-down select-arrow-icon"></i>
                  </div>
                </div>

                <div className="form-field-group col-span-2">
                  <label htmlFor="appointment-title" className="form-field-label">
                    Reason / Appointment Title <span className="field-required-star">*</span>
                  </label>
                  <input
                    id="appointment-title"
                    type="text"
                    name="title"
                    placeholder="e.g. Regular ECG review, blood pressure check..."
                    value={suggestion.title}
                    onChange={(event) => onChange("title", event.target.value)}
                    required
                    className="clincore-input-text"
                  />
                </div>

                <div className="form-field-group col-span-2">
                  <label htmlFor="appointment-details" className="form-field-label">
                    Symptoms &amp; Additional Notes
                  </label>
                  <textarea
                    id="appointment-details"
                    name="details"
                    rows={4}
                    placeholder="Describe your symptoms or preferred consultation time..."
                    value={suggestion.details}
                    onChange={(event) => onChange("details", event.target.value)}
                    className="clincore-input-textarea"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="add-drawer-footer">
            <button type="button" className="btn-drawer-cancel" onClick={onDismiss}>
              <i className="bi bi-x-lg"></i>
              <span>Cancel</span>
            </button>
            <button type="submit" className="btn-drawer-submit">
              <i className="bi bi-check-circle"></i>
              <span>Confirm Appointment Request</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}