import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import DoctorsTable from "../components/DoctorsTable";
import PageFooter from "../components/PageFooter";

export default function Doctors() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content" style={{ padding: "20px 24px" }}>
          {/* ============================================================ */}
          {/* MAIN BODY: Doctors Toolbar, Filters & Action Buttons          */}
          {/* ============================================================ */}
          <div className="doctors-main-card">
            <div className="doctors-toolbar">
              <div className="doctors-filters-group">
                <div className="table-search-pill">
                  <i className="bi bi-search"></i>
                  <input type="text" id="doctorSearchInput" placeholder="Search name, ID, age, etc" />
                </div>

                <select id="departmentFilter" className="filter-dropdown-btn" defaultValue="">
                  <option value="">Department</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Internal Medicine">Internal Medicine</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Neurology">Neurology</option>
                </select>

                <select id="specialistFilter" className="filter-dropdown-btn" defaultValue="">
                  <option value="">Specialist</option>
                  <option value="Routine Check-Ups">Routine Check-Ups</option>
                  <option value="Heart Specialist">Heart Specialist</option>
                  <option value="Child Health">Child Health</option>
                  <option value="Skin Specialist">Skin Specialist</option>
                  <option value="Internal Health">Internal Health</option>
                  <option value="Bone Specialist">Bone Specialist</option>
                  <option value="Brain Specialist">Brain Specialist</option>
                </select>

                <select id="statusFilter" className="filter-dropdown-btn" defaultValue="">
                  <option value="">Status</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>

              <button type="button" className="btn-add-doctor-action" id="openAddDoctorModal">
                <i className="bi bi-plus-lg"></i>
                <span>Add Doctor</span>
              </button>
            </div>

            {/* ============================================================ */}
            {/* TABLE SECTION: Doctors Data Table Component                  */}
            {/* ============================================================ */}
            <DoctorsTable />
          </div>

          {/* ============================================================ */}
          {/* FOOTER SECTION: Copyright & Social Links Component            */}
          {/* ============================================================ */}
          <PageFooter
            className="doctors-footer-row"
            leftClass="doctors-footer-left"
            socialsClass="doctors-footer-socials"
          />
        </div>
      </div>
    </div>
  );
}
