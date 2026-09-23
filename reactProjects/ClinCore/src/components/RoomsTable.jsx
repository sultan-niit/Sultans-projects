export default function RoomsTable({ ...props }) {
    return (
        <>
            <div className="appointments-main-card">
                <div className="appointments-table-wrap">
                    <table className="appointments-data-table">
                        <thead>
                            <tr>
                                <th style={{ width: "44px" }}>
                                    <input type="checkbox" className="table-checkbox" />
                                </th>
                                <th className="sortable-th" style={{ width: "70px" }}>
                                    <span>S/N</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Room Name</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Capacity</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Status</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">1</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Deluxe General Ward A</span>
                                        <span className="room-id-txt">RM-101</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Single</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-available">Available</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">2</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Cardiology ICU Room 1</span>
                                        <span className="room-id-txt">RM-102</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Single</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-occupied">Occupied</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">3</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Pediatrics Care Suite</span>
                                        <span className="room-id-txt">RM-103</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Double</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-available">Available</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">4</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Post-Op Recovery Ward B</span>
                                        <span className="room-id-txt">RM-104</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Double</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-occupied">Occupied</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">5</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Orthopedic Rehabilitation Unit</span>
                                        <span className="room-id-txt">RM-105</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Single</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-unavailable">Unavailable</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">6</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Neurology Observation Room</span>
                                        <span className="room-id-txt">RM-106</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Single</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-available">Available</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">7</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Maternity & Infant Suite</span>
                                        <span className="room-id-txt">RM-107</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Double</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-occupied">Occupied</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">8</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">Emergency Isolation Room</span>
                                        <span className="room-id-txt">RM-108</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Single</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-unavailable">Unavailable</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">9</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">General Patient Room 201</span>
                                        <span className="room-id-txt">RM-201</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Double</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-available">Available</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="room-name-txt">10</span>
                                </td>
                                <td>
                                    <div className="room-cell-info">
                                        <span className="room-name-txt">VIP Executive Recovery Suite</span>
                                        <span className="room-id-txt">RM-202</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="room-capacity-badge">Single</span>
                                </td>
                                <td>
                                    <span className="appointment-status-pill status-available">Available</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Manage</button>
                                        <button type="button" className="btn-action-cancel">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="appointments-pagination-row">
                    <div className="appointments-pagination-info">
                        <span>Showing</span>
                        <select className="appointments-page-select" defaultValue="10">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>out of 48</span>
                    </div>

                    <div className="appointments-pagination-controls">
                        <button type="button" className="btn-appointments-step" title="Previous Page">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" className="btn-appointments-step active">1</button>
                        <button type="button" className="btn-appointments-step">2</button>
                        <button type="button" className="btn-appointments-step">3</button>
                        <span className="page-step-ellipsis">...</span>
                        <button type="button" className="btn-appointments-step">5</button>
                        <button type="button" className="btn-appointments-step" title="Next Page">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
