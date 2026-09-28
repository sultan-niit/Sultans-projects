import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import ButtonComponents from "../components/ButtonComponents";
import PatientsTable from "../components/PatientsTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";

export default function Patients() {
  const { openAddDrawer } = useModalState();
  const filters = FILTER_CONFIGS.patient;

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
          <div className="patients-toolbar">
            <div className="patients-toolbar-left">
              {/* FilterDropdown for Date Range */}
              <FilterDropdown
                icon="bi-calendar-week"
                label={filters.dateRange.label}
                options={filters.dateRange.options}
              />

              {/* FilterDropdown for Treatment */}
              <FilterDropdown
                icon="bi-funnel"
                label={filters.treatment.label}
                options={filters.treatment.options}
              />

              {/* FilterDropdown for Status */}
              <FilterDropdown
                icon="bi-funnel"
                label={filters.status.label}
                options={filters.status.options}
              />
            </div>

            <div className="patients-toolbar-right">
              {/* SearchBar UI Component */}
              <SearchBar
                className="patients-search-bar"
                placeHolder="Search name, ID, age, etc"
              />

              <button type="button" className="btn-patients-filter" title="Filter Settings">
                <i className="bi bi-sliders"></i>
              </button>

              <ButtonComponents
                className="btn-add-patient-action"
                icon="bi-plus-lg"
                title="Add Patient"
                onClick={() => openAddDrawer('patient')}
              />
            </div>
          </div>

        
          <PatientsTable /> 
          <PageFooter
            className="patients-page-footer"
            leftClass="patients-footer-left"
            socialsClass="patients-footer-socials"
          />
        </div>
      </div>
    </div>
  );
}


