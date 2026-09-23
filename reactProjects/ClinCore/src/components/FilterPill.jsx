export default function FilterPill({ ...props }) {
    return (
        <>
            {/* Filter pill — className comes from parent (e.g. patients-filter-pill, appointments-date-pill) */}
            <div className={props.className || "patients-filter-pill"}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
                <i className="bi bi-chevron-down"></i>
            </div>
        </>
    );
}
