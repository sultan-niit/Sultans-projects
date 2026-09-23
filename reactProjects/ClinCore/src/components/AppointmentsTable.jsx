export default function AppointmentsTable({ ...props }) {
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
                                <th className="sortable-th">
                                    <span>Name</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Date</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Time</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Doctor</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Treatment</span>
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
                                    <span className="appointment-patient-name">Caren G. Simpson</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>09:00 AM</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>Routine Check-Up</td>
                                <td>
                                    <span className="appointment-status-pill status-confirmed">Confirmed</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Edgar Warrow</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>09:30 AM</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>Teeth Check-Up</td>
                                <td>
                                    <span className="appointment-status-pill status-confirmed">Confirmed</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Eleanor Fitz</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>10:00 AM</td>
                                <td>Dr. Liam Henderson</td>
                                <td>Cardiology Consult</td>
                                <td>
                                    <span className="appointment-status-pill status-pending">Pending</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Jonathan Hayes</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>11:00 AM</td>
                                <td>Dr. Sophia Ramirez</td>
                                <td>Pediatric Follow-up</td>
                                <td>
                                    <span className="appointment-status-pill status-confirmed">Confirmed</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Marcus Vance</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>11:30 AM</td>
                                <td>Dr. Michael Chen</td>
                                <td>Orthopedic Assessment</td>
                                <td>
                                    <span className="appointment-status-pill status-cancelled">Cancelled</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Ocean Jane Lupre</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>01:00 PM</td>
                                <td>Dr. Damian Sanchez</td>
                                <td>Pediatric Check-Up</td>
                                <td>
                                    <span className="appointment-status-pill status-confirmed">Confirmed</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Shane Riddick</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>02:00 PM</td>
                                <td>Dr. Chloe Harrington</td>
                                <td>Skin Allergy Consult</td>
                                <td>
                                    <span className="appointment-status-pill status-pending">Pending</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Queen Lawnston</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>02:30 PM</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>Follow-Up Visit</td>
                                <td>
                                    <span className="appointment-status-pill status-confirmed">Confirmed</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Sarah Connor</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>03:15 PM</td>
                                <td>Dr. Sophia Ramirez</td>
                                <td>Dental Surgery Follow-up</td>
                                <td>
                                    <span className="appointment-status-pill status-confirmed">Confirmed</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <span className="appointment-patient-name">Lucas Miller</span>
                                </td>
                                <td>20 July 2028</td>
                                <td>04:00 PM</td>
                                <td>Dr. Lucas Ross</td>
                                <td>Eye Surgery Consult</td>
                                <td>
                                    <span className="appointment-status-pill status-confirmed">Confirmed</span>
                                </td>
                                <td>
                                    <div className="appointment-row-actions">
                                        <button type="button" className="btn-action-reschedule">Reschedule</button>
                                        <button type="button" className="btn-action-cancel">Cancel</button>
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
                        <span>out of 128</span>
                    </div>

                    <div className="appointments-pagination-controls">
                        <button type="button" className="btn-appointments-step" title="Previous Page">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" className="btn-appointments-step active">1</button>
                        <button type="button" className="btn-appointments-step">2</button>
                        <button type="button" className="btn-appointments-step">3</button>
                        <span className="page-step-ellipsis">...</span>
                        <button type="button" className="btn-appointments-step">10</button>
                        <button type="button" className="btn-appointments-step" title="Next Page">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
