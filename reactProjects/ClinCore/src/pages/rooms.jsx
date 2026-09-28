import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import ButtonComponents from "../components/ButtonComponents";
import RoomsTable from "../components/RoomsTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";

export default function Rooms() {
  const { openAddDrawer } = useModalState();
  const roomFilters = FILTER_CONFIGS.room;

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

              {/* FilterDropdown Component for Capacity */}
              <FilterDropdown
                icon={roomFilters.capacity.icon}
                label={roomFilters.capacity.label}
                options={roomFilters.capacity.options}
                className="appointments-date-pill"
              />

              <ButtonComponents
                className="btn-add-appointment-action"
                icon="bi-plus-lg"
                title="Add Room"
                onClick={() => openAddDrawer('room')}
              />
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


