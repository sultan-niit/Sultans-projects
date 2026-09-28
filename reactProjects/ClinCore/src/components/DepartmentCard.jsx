import { useModalState } from "../js/components/ModalContext";

export default function DepartmentCard({ ...props }) {
    const { openEditDrawer } = useModalState();
    const isInactive = props.status === "Inactive" || props.inactive;
    const statusClass = isInactive ? "dept-status dept-status-inactive" : "dept-status dept-status-active";
    const statusText = props.status || (isInactive ? "Inactive" : "Active");

    const handleSeeDetail = (e) => {
        e.preventDefault();
        openEditDrawer({
            title: props.title || "General Medicine",
            deptHead: props.deptHead || "Dr. Medical Director",
            status: statusText,
            staffCount: parseInt((props.staffCount || "15").replace(/[^0-9]/g, '')) || 15,
            desc: props.desc || ""
        }, 'department');
    };

    return (
        <>
            <div className="department-card">
                <div className="department-img-box">
                    <img src={props.image || "all-images/body-images/dept-general-medicine.jpg"} alt={props.title || "Department"} />
                </div>
                <div className="department-body">
                    <div className="department-title-row">
                        <h3 className="department-title">{props.title || "General Medicine"}</h3>
                        <span className={statusClass}>{statusText}</span>
                    </div>
                    <p className="department-desc">
                        {props.desc || "Provides comprehensive healthcare services including routine check-ups, preventive care, and treatment for a wide range of illnesses."}
                    </p>
                    <div className="department-footer">
                        <div className="department-staff-stack">
                            <div className="avatar-group">
                                <img src={props.avatar1 || "all-images/body-images/patient-1.jpg"} alt="Doctor" />
                                <img src={props.avatar2 || "all-images/body-images/patient-2.jpg"} alt="Doctor" />
                                <img src={props.avatar3 || "all-images/body-images/patient-3.jpg"} alt="Doctor" />
                                <img src={props.avatar4 || "all-images/body-images/patient-4.jpg"} alt="Doctor" />
                                <img src={props.avatar5 || "all-images/body-images/patient-5.jpg"} alt="Doctor" />
                            </div>
                            <span className="staff-count">{props.staffCount || "+ 15 others"}</span>
                        </div>
                        <button 
                            type="button" 
                            className="btn-see-detail" 
                            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                            onClick={handleSeeDetail}
                        >
                            See Detail
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


