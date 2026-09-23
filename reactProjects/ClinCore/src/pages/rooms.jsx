import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import SearchBar from "../components/SearchBar";
import FilterPill from "../components/FilterPill";
import RoomsTable from "../components/RoomsTable";
import PageFooter from "../components/PageFooter";

export default function Rooms() {
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
            {/* Filter Tabs for Rooms */}
            <div className="appointments-filter-tabs">
              <button type="button" className="tab-filter-btn active">All (48)</button>
              <button type="button" className="tab-filter-btn">Available (24)</button>
              <button type="button" className="tab-filter-btn">Occupied (18)</button>
              <button type="button" className="tab-filter-btn">Unavailable (6)</button>
            </div>

            <div className="appointments-actions-right">
              {/* SearchBar UI Component */}
              <SearchBar placeHolder="Search room name, ID, type..." />

              {/* FilterPill Component for Capacity */}
              <FilterPill
                icon="bi-funnel"
                title="All Capacity"
                className="appointments-date-pill"
              />

              <button type="button" className="btn-add-appointment-action">
                <i className="bi bi-plus-lg"></i>
                <span>Add Room</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* TABLE SECTION: Rooms Data Table Component                     */}
          {/* ============================================================ */}
          <RoomsTable />

          {/* ============================================================ */}
          {/* FOOTER SECTION: Copyright & Social Links Component            */}
          {/* ============================================================ */}
          <PageFooter />
        </div>
      </div>
    </div>
  );
}
