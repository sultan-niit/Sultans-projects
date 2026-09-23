export default function StatCard({ ...props }) {
    return (
        <>
            {/* Stat summary card — icon, title, value, trend badge and description come from parent */}
            <div className="stat-card">
                <div className="card-header">
                    <div className="card-title">
                        {/* Icon class (e.g. "bi bi-people") passed via props.icon */}
                        <i className={props.icon || "bi bi-people"}></i>
                        <span>{props.title || "Total Invoice"}</span>
                    </div>
                    <button type="button" className="card-menu">
                        <i className="bi bi-three-dots"></i>
                    </button>
                </div>
                <div className="card-body">
                    <h2 className="stat-value">{props.value || "1,287"}</h2>
                    {/* Badge class: badge-down when trendDown prop is set, else badge-up */}
                    <span className={props.trendDown ? "stat-badge badge-down" : "stat-badge badge-up"}>
                        <i className={props.trendDown ? "bi bi-graph-down-arrow" : "bi bi-graph-up-arrow"}></i>
                        <span>{props.trend || "+2.14%"}</span>
                    </span>
                </div>
                <p className="stat-desc">{props.desc || "56 more than yesterday"}</p>
            </div>
        </>
    );
}
