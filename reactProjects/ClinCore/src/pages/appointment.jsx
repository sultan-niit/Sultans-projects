import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import TabFilter from "../components/TabFilter";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import ButtonComponents from "../components/ButtonComponents";
import AppointmentsTable from "../components/AppointmentsTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";

export default function Appointments() {
  const { openAddDrawer } = useModalState();
  const appointmentFilters = FILTER_CONFIGS.appointment;

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
          {/* ============================================================ */}
          {/* TOOLBAR SECTION: Tab Filters, Search & Action Pills           */}
          {/* ============================================================ */}
          <div className="appointments-toolbar">
            {/* Filter Tabs Component */}
            <TabFilter />

            <div className="appointments-actions-right">
              {/* SearchBar UI Component */}
              <SearchBar placeHolder="Search placeholder" />

              {/* FilterDropdown Component for Date */}
              <FilterDropdown
                icon={appointmentFilters.date.icon}
                label={appointmentFilters.date.label}
                options={appointmentFilters.date.options}
                className="appointments-date-pill"
              />

              <ButtonComponents
                className="btn-add-appointment-action"
                icon="bi-plus-lg"
                title="Add Appointment"
                onClick={() => openAddDrawer('appointment')}
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* TABLE SECTION: Appointments Data Table Component              */}
          {/* ============================================================ */}
          <AppointmentsTable />

          {/* ============================================================ */}
          {/* FOOTER SECTION: Copyright & Social Links Component            */}
          {/* ============================================================ */}
          <PageFooter />
        </div>
      </div>
    </div>
  );
}


