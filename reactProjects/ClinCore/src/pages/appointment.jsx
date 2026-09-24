import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import TabFilter from "../components/TabFilter";
import SearchBar from "../components/SearchBar";
import FilterPill from "../components/FilterPill";
import ButtonComponents from "../components/ButtonComponents";
import AppointmentsTable from "../components/AppointmentsTable";
import PageFooter from "../components/PageFooter";

export default function Appointments() {
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

              {/* FilterPill Component for Date */}
              <FilterPill
                icon="bi-calendar-week"
                title="Today"
                className="appointments-date-pill"
              />

              <ButtonComponents
                className="btn-add-appointment-action"
                title="Add Appointment"
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
