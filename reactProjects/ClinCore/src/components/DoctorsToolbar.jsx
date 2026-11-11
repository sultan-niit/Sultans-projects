import SearchBar from "./SearchBar";
import FilterSelect from "./FilterSelect";
import ButtonComponents from "./ButtonComponents";
import { DEPARTMENT_NAMES } from "../js/sessionData";

export default function DoctorsToolbar() {
    const specialistOptions = [
        "Routine Check-Ups",
        "Heart Specialist",
        "Child Health",
        "Skin Specialist",
        "Internal Health",
        "Bone Specialist",
        "Brain Specialist"
    ];

    const statusOptions = ["Available", "Unavailable"];

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
                    options={DEPARTMENT_NAMES}
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
