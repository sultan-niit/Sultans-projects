import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import ButtonComponents from "../components/ButtonComponents";
import DepartmentCard from "../components/DepartmentCard";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";
import { useSessionCollection } from "../js/sessionData";
export default function Departments() {
  const {
    openAddDrawer
  } = useModalState();
  const departments = useSessionCollection("departments");
  const filters = FILTER_CONFIGS.department;
  return <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
      
          <div className="patients-toolbar">
            <div className="patients-toolbar-left">
              <FilterDropdown icon="bi-calendar-week" label={filters.dateRange.label} options={filters.dateRange.options} />

              <FilterDropdown icon="bi-funnel" label={filters.departments.label} options={filters.departments.options} />

              
              <FilterDropdown icon="bi-funnel" label={filters.status.label} options={filters.status.options} />
            </div>

            <div className="patients-toolbar-right">
              
              <SearchBar className="patients-search-bar" placeHolder="Search department, etc" />

              <button type="button" className="btn-patients-filter" title="Filter Settings">
                <i className="bi bi-sliders"></i>
              </button>

              <ButtonComponents className="btn-add-patient-action" icon="bi-plus-lg" title="Add Department" onClick={() => openAddDrawer('department')} />
            </div>
          </div>

          
          
          
          <div className="departments-grid">
            {departments.map((department) => (
              <DepartmentCard
                key={department.id}
                {...department}
                image={department.profileImage}
                staffCount={`+ ${department.staffCount} others`}
              />
            ))}
          </div>

          
          <PageFooter className="departments-page-footer" />
        </div>
      </div>
    </div>;
}
