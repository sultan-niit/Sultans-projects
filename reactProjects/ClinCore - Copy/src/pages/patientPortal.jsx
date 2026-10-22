import PatientPortalAppointmentDrawer from "../components/PatientPortalAppointmentDrawer";
import PatientPortalContent from "../components/PatientPortalContent";
import { PatientPortalHeader, PatientPortalSidebar } from "../components/PatientPortalNavigation";
import PatientPortalProfileDialog from "../components/PatientPortalProfileDialog";
import usePatientPortal from "../js/usePatientPortal";

export default function PatientPortal() {
  const portal = usePatientPortal();

  return (
    <div className="pure-portal-root">
      <PatientPortalSidebar
        currentView={portal.currentView}
        onViewChange={portal.setCurrentView}
      />
      <div className="pure-portal-main">
        <PatientPortalHeader
          currentView={portal.currentView}
          onViewChange={portal.setCurrentView}
          onOpenProfile={portal.openProfile}
        />
        <PatientPortalContent portal={portal} />
      </div>

      {portal.showProfileModal && <PatientPortalProfileDialog portal={portal} />}
      {portal.showSuggestionModal && <PatientPortalAppointmentDrawer portal={portal} />}
    </div>
  );
}


