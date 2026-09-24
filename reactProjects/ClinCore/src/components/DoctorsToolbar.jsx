import SearchBar from "./SearchBar";
import FilterSelect from "./FilterSelect";
import ButtonComponents from "./ButtonComponents";

export default function DoctorsToolbar() {
    const departmentOptions = [
        "General Medicine",
        "Cardiology",
        "Pediatrics",
        "Dermatology",
        "Internal Medicine",
        "Orthopedics",
        "Neurology"
    ];

    const specialistOptions = [
        "Routine Check-Ups",
        "Heart Specialist",
        "Child Health",
        "Skin Specialist",
        "Internal Health",
        "Bone Specialist",
        "Brain Specialist"
    ];

    const statusOptions = [
        "Available",
        "Unavailable"
    ];

    return (
        <div className="doctors-toolbar">
            <div className="doctors-filters-group">
                <SearchBar
                    className="table-search-pill"
                    id="doctorSearchInput"
                    placeHolder="Search name, ID, age, etc"
                />

                <FilterSelect
                    id="departmentFilter"
                    label="Department"
                    options={departmentOptions}
                />

                <FilterSelect
                    id="specialistFilter"
                    label="Specialist"
                    options={specialistOptions}
                />

                <FilterSelect
                    id="statusFilter"
                    label="Status"
                    options={statusOptions}
                />
            </div>

            <ButtonComponents
                id="openAddDoctorModal"
                className="btn-add-doctor-action"
                icon="bi-plus-lg"
                title="Add Doctor"
            />
        </div>
    );
}
