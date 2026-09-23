export default function DoctorsTable({ ...props }) {
    return (
        <>
            <div className="doctors-table-container">
                <table className="doctors-data-table" id="doctorsTable">
                    <thead>
                        <tr>
                            <th className="sortable">Doctor ID <i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable">Doctor Name <i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable">Department <i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable">Specialist <i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable">Total Patients <i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable">Today's Appointment <i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable">Status <i className="bi bi-arrow-down-up"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="doctorsTableBody">
                        <tr>
                            <td><span className="doctor-id-code">WNH-GM-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Petra Winsburry" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Petra Winsburry</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">General Medicine</span></td>
                            <td><span className="doctor-spec-txt">Routine Check-Ups</span></td>
                            <td><span className="doctor-metric-num">150</span></td>
                            <td><span className="doctor-metric-num">10</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-CD-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Olivia Martinez" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Olivia Martinez</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Cardiology</span></td>
                            <td><span className="doctor-spec-txt">Heart Specialist</span></td>
                            <td><span className="doctor-metric-num">200</span></td>
                            <td><span className="doctor-metric-num">0</span></td>
                            <td><span className="status-pill-badge unavailable">Unavailable</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-PD-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Damian Sanchez" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Damian Sanchez</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Pediatrics</span></td>
                            <td><span className="doctor-spec-txt">Child Health</span></td>
                            <td><span className="doctor-metric-num">180</span></td>
                            <td><span className="doctor-metric-num">12</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-DM-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Chloe Harrington" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Chloe Harrington</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Dermatology</span></td>
                            <td><span className="doctor-spec-txt">Skin Specialist</span></td>
                            <td><span className="doctor-metric-num">220</span></td>
                            <td><span className="doctor-metric-num">8</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-IM-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-5.jpg" alt="Dr. Julian Vance" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Julian Vance</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Internal Medicine</span></td>
                            <td><span className="doctor-spec-txt">Internal Health</span></td>
                            <td><span className="doctor-metric-num">190</span></td>
                            <td><span className="doctor-metric-num">15</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-OR-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Chen" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Michael Chen</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Orthopedics</span></td>
                            <td><span className="doctor-spec-txt">Bone Specialist</span></td>
                            <td><span className="doctor-metric-num">165</span></td>
                            <td><span className="doctor-metric-num">6</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-NR-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Nathan Drake" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Nathan Drake</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Neurology</span></td>
                            <td><span className="doctor-spec-txt">Brain Specialist</span></td>
                            <td><span className="doctor-metric-num">140</span></td>
                            <td><span className="doctor-metric-num">4</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-PD-002</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Sophia Ramirez" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Sophia Ramirez</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Pediatrics</span></td>
                            <td><span className="doctor-spec-txt">Pediatric Care</span></td>
                            <td><span className="doctor-metric-num">210</span></td>
                            <td><span className="doctor-metric-num">14</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-CD-002</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Liam Henderson" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Liam Henderson</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Cardiology</span></td>
                            <td><span className="doctor-spec-txt">Heart Specialist</span></td>
                            <td><span className="doctor-metric-num">175</span></td>
                            <td><span className="doctor-metric-num">0</span></td>
                            <td><span className="status-pill-badge unavailable">Unavailable</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-OP-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-5.jpg" alt="Dr. Lucas Ross" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Lucas Ross</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Ophthalmology</span></td>
                            <td><span className="doctor-spec-txt">Eye Specialist</span></td>
                            <td><span className="doctor-metric-num">195</span></td>
                            <td><span className="doctor-metric-num">9</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-GM-002</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Rachel Green" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Rachel Green</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">General Medicine</span></td>
                            <td><span className="doctor-spec-txt">Family Medicine</span></td>
                            <td><span className="doctor-metric-num">160</span></td>
                            <td><span className="doctor-metric-num">11</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><span className="doctor-id-code">WNH-DN-001</span></td>
                            <td>
                                <div className="doctor-cell-profile">
                                    <div className="doctor-cell-avatar">
                                        <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Robert Paul" />
                                    </div>
                                    <span className="doctor-cell-name">Dr. Robert Paul</span>
                                </div>
                            </td>
                            <td><span className="doctor-dept-txt">Dental Care</span></td>
                            <td><span className="doctor-spec-txt">Dentistry</span></td>
                            <td><span className="doctor-metric-num">130</span></td>
                            <td><span className="doctor-metric-num">7</span></td>
                            <td><span className="status-pill-badge available">Available</span></td>
                            <td>
                                <div className="table-row-actions">
                                    <button type="button" className="btn-table-action edit" title="Edit Doctor"><i className="bi bi-pencil-square"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="table-pagination-row">
                <div className="pagination-showing-wrap">
                    <span>Showing</span>
                    <select className="pagination-select-custom" id="pageSizeSelect" defaultValue="12">
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="50">50</option>
                    </select>
                    <span id="showingCountText">out of 58</span>
                </div>

                <div className="pagination-buttons-wrap">
                    <button type="button" className="btn-page-nav" id="prevPageBtn" title="Previous Page">
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button type="button" className="btn-page-nav active">1</button>
                    <button type="button" className="btn-page-nav">2</button>
                    <button type="button" className="btn-page-nav">3</button>
                    <button type="button" className="btn-page-nav">4</button>
                    <button type="button" className="btn-page-nav">5</button>
                    <button type="button" className="btn-page-nav" id="nextPageBtn" title="Next Page">
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

