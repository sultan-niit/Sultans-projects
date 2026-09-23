import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import FilterPill from "../components/FilterPill";
import SearchBar from "../components/SearchBar";
import PatientsTable from "../components/PatientsTable";
import PageFooter from "../components/PageFooter";

export default function Patients() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
          {/* ============================================================ */}
          {/* TOOLBAR SECTION: Date/Status Filters, Search & Action Pills   */}
          {/* ============================================================ */}
          <div className="patients-toolbar">
            <div className="patients-toolbar-left">
              {/* FilterPill Component for Date Range */}
              <FilterPill
                icon="bi-calendar-week"
                title="1 July - 20 July 2028"
              />

              {/* FilterPill Component for Treatment */}
              <FilterPill
                icon="bi-funnel"
                title="All Treatment"
              />

              {/* FilterPill Component for Status */}
              <FilterPill
                icon="bi-funnel"
                title="All Status"
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

              <button type="button" className="btn-add-patient-action">
                <i className="bi bi-plus-lg"></i>
                <span>Add Patient</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* TABLE SECTION: Patients Data Table Component                  */}
          {/* ============================================================ */}
          <PatientsTable />

          {/* ============================================================ */}
          {/* FOOTER SECTION: Copyright & Social Links Component            */}
          {/* ============================================================ */}
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
