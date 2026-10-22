import PatientPortalAppointmentsTable from "./PatientPortalAppointmentsTable";
import PatientPortalMessages from "./PatientPortalMessages";
import PatientPortalSettings from "./PatientPortalSettings";
import PatientPortalSummary from "./PatientPortalSummary";

const VIEW_DETAILS = {
  dashboard: { title: "Dashboard", icon: "bi-speedometer2" },
  messages: { title: "Doctor Messages", icon: "bi-chat-dots" },
  settings: { title: "Account & Password Settings", icon: "bi-gear" },
};

export default function PatientPortalContent({ portal }) {
  const view = VIEW_DETAILS[portal.currentView];

  return (
    <main className="pure-page-body">
      <div className="pure-page-title-row">
        <i className={`bi ${view.icon}`}></i>
        <h2>{view.title}</h2>
      </div>

      {portal.currentView === "dashboard" && (
        <>
          <PatientPortalSummary
            profile={portal.userProfile}
            onOpenProfile={portal.openProfile}
            onNewAppointment={portal.handleOpenNewAppointment}
          />
          <PatientPortalAppointmentsTable
            suggestions={portal.suggestions}
            selectedIds={portal.selectedIds}
            allSelected={portal.allSelected}
            onToggleSelectAll={portal.toggleSelectAll}
            onToggleRow={portal.toggleRowSelection}
            onCancelSelected={portal.handleCancelSelected}
            onReschedule={portal.handleReschedule}
            onCancel={portal.handleCancelSuggestion}
          />
        </>
      )}

      {portal.currentView === "messages" && (
        <PatientPortalMessages
          doctor={portal.userProfile.doctor}
          messages={portal.messages}
          value={portal.typedMessage}
          onValueChange={portal.setTypedMessage}
          onSubmit={portal.handleSendMessage}
        />
      )}

      {portal.currentView === "settings" && (
        <PatientPortalSettings
          form={portal.settingsForm}
          status={portal.settingsStatus}
          onChange={portal.handleSettingsFieldChange}
          onSubmit={portal.handleUpdateSettings}
        />
      )}
    </main>
  );
}
