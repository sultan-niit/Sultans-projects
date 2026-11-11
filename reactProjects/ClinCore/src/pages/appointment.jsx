import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import TabFilter from "../components/TabFilter";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import AppointmentsTable from "../components/AppointmentsTable";
import PageFooter from "../components/PageFooter";
import { FILTER_CONFIGS } from "../js/formSchemas";

export default function Appointments() {
  const appointmentFilters = FILTER_CONFIGS.appointment;

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
          <div className="appointments-toolbar">
            <TabFilter />
            <div className="appointments-actions-right">
              <SearchBar placeHolder="Search placeholder" />
              <FilterDropdown
                icon={appointmentFilters.date.icon}
                label={appointmentFilters.date.label}
                options={appointmentFilters.date.options}
                className="appointments-date-pill"
              />
            </div>
          </div>
          <AppointmentsTable />
          <PageFooter />
        </div>
      </div>
    </div>
  );
}
