import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import FilterPill from "../components/FilterPill";
import SearchBar from "../components/SearchBar";
import DepartmentCard from "../components/DepartmentCard";
import PageFooter from "../components/PageFooter";

export default function Departments() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
          {/* ============================================================ */}
          {/* TOOLBAR SECTION: Filters, Search & Action Buttons             */}
          {/* ============================================================ */}
          <div className="patients-toolbar">
            <div className="patients-toolbar-left">
              {/* FilterPill Component for Date Range */}
              <FilterPill
                icon="bi-calendar-week"
                title="1 July - 20 July 2028"
              />

              {/* FilterPill Component for Departments */}
              <FilterPill
                icon="bi-funnel"
                title="All Departments"
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
                placeHolder="Search department, etc"
              />

              <button type="button" className="btn-patients-filter" title="Filter Settings">
                <i className="bi bi-sliders"></i>
              </button>

              <button type="button" className="btn-add-patient-action">
                <i className="bi bi-plus-lg"></i>
                <span>Add Department</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* MAIN GRID: Departments Cards Grid using DepartmentCard Comp  */}
          {/* ============================================================ */}
          <div className="departments-grid">
            <DepartmentCard
              image="all-images/body-images/dept-general-medicine.jpg"
              title="General Medicine"
              status="Active"
              desc="Provides comprehensive healthcare services including routine check-ups, preventive care, and treatment for a wide range of illnesses."
              avatar1="all-images/body-images/patient-1.jpg"
              avatar2="all-images/body-images/patient-2.jpg"
              avatar3="all-images/body-images/patient-3.jpg"
              avatar4="all-images/body-images/patient-4.jpg"
              avatar5="all-images/body-images/patient-5.jpg"
              staffCount="+ 15 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-cardiology.jpg"
              title="Cardiology"
              status="Active"
              desc="Specializes in the diagnosis and treatment of heart-related conditions, offering advanced cardiac care and preventive cardiology."
              avatar1="all-images/body-images/patient-6.jpg"
              avatar2="all-images/body-images/patient-7.jpg"
              avatar3="all-images/body-images/patient-8.jpg"
              avatar4="all-images/body-images/patient-9.jpg"
              avatar5="all-images/body-images/patient-10.jpg"
              staffCount="+ 10 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-pediatrics.jpg"
              title="Pediatrics"
              status="Active"
              desc="Dedicated to the health and well-being of children, providing specialized care for infants, children, and adolescents."
              avatar1="all-images/body-images/patient-11.jpg"
              avatar2="all-images/body-images/patient-12.jpg"
              avatar3="all-images/body-images/doctor-1.jpg"
              avatar4="all-images/body-images/doctor-2.jpg"
              avatar5="all-images/body-images/doctor-3.jpg"
              staffCount="+ 7 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-dermatology.jpg"
              title="Dermatology"
              status="Active"
              desc="Focuses on the treatment of skin conditions, offering medical and cosmetic dermatology services to improve skin health."
              avatar1="all-images/body-images/patient-2.jpg"
              avatar2="all-images/body-images/patient-4.jpg"
              avatar3="all-images/body-images/patient-6.jpg"
              avatar4="all-images/body-images/patient-8.jpg"
              avatar5="all-images/body-images/doctor-4.jpg"
              staffCount="+ 5 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-internal-medicine.jpg"
              title="Internal Medicine"
              status="Active"
              desc="Provides primary care for adults, focusing on the prevention, diagnosis, and treatment of adult diseases."
              avatar1="all-images/body-images/patient-1.jpg"
              avatar2="all-images/body-images/patient-3.jpg"
              avatar3="all-images/body-images/patient-5.jpg"
              avatar4="all-images/body-images/patient-7.jpg"
              avatar5="all-images/body-images/doctor-5.jpg"
              staffCount="+ 13 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-orthopedics.jpg"
              title="Orthopedics"
              status="Active"
              desc="Specializes in the treatment of musculoskeletal system disorders, including bones, joints, ligaments, tendons, and muscles."
              avatar1="all-images/body-images/patient-9.jpg"
              avatar2="all-images/body-images/patient-10.jpg"
              avatar3="all-images/body-images/patient-11.jpg"
              avatar4="all-images/body-images/patient-12.jpg"
              avatar5="all-images/body-images/doctor-1.jpg"
              staffCount="+ 9 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-neurology.jpg"
              title="Neurology"
              status="Active"
              desc="Deals with disorders of the nervous system, offering expert care for conditions affecting the brain, spinal cord, and nerves."
              avatar1="all-images/body-images/patient-2.jpg"
              avatar2="all-images/body-images/patient-5.jpg"
              avatar3="all-images/body-images/patient-8.jpg"
              avatar4="all-images/body-images/patient-11.jpg"
              avatar5="all-images/body-images/doctor-2.jpg"
              staffCount="+ 6 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-oncology.jpg"
              title="Oncology"
              status="Inactive"
              desc="Focuses on the diagnosis and treatment of cancer, providing comprehensive cancer care and support services."
              avatar1="all-images/body-images/patient-3.jpg"
              avatar2="all-images/body-images/patient-6.jpg"
              avatar3="all-images/body-images/patient-9.jpg"
              avatar4="all-images/body-images/patient-12.jpg"
              avatar5="all-images/body-images/doctor-3.jpg"
              staffCount="+ 8 others"
            />

            <DepartmentCard
              image="all-images/body-images/dept-obgyn.jpg"
              title="Obstetrics and Gynecology (OB/GYN)"
              status="Active"
              desc="Provides care for women's health, including pregnancy, childbirth, and reproductive health."
              avatar1="all-images/body-images/patient-1.jpg"
              avatar2="all-images/body-images/patient-4.jpg"
              avatar3="all-images/body-images/patient-7.jpg"
              avatar4="all-images/body-images/patient-10.jpg"
              avatar5="all-images/body-images/doctor-4.jpg"
              staffCount="+ 11 others"
            />
          </div>

          {/* ============================================================ */}
          {/* FOOTER SECTION: Copyright & Social Links Component            */}
          {/* ============================================================ */}
          <PageFooter className="departments-page-footer" />
        </div>
      </div>
    </div>
  );
}
