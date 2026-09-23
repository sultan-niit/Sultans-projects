export default function PatientsTable({ ...props }) {
    return (
        <>
            <div className="patients-main-card">
                <div className="patients-table-wrap">
                    <table className="patients-data-table">
                        <thead>
                            <tr>
                                <th className="sortable-th">
                                    <span>Patient ID</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Patient Name</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Age</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Check In</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Treatment</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Doctor Assigned</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Room</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Status</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="patient-id-txt">301</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/patient-1.jpg" alt="Caren G. Simpson" />
                                        </div>
                                        <span className="patient-name-txt">Caren G. Simpson</span>
                                    </div>
                                </td>
                                <td>35</td>
                                <td>20 July 2028</td>
                                <td>Routine Check-Up</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>-</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">302</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/patient-2.jpg" alt="Edgar Warrow" />
                                        </div>
                                        <span className="patient-name-txt">Edgar Warrow</span>
                                    </div>
                                </td>
                                <td>45</td>
                                <td>20 July 2028</td>
                                <td>Cardiac Consultation</td>
                                <td>Dr. Olivia Martinez</td>
                                <td>-</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">303</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/patient-3.jpg" alt="Ocean Jane Lupre" />
                                        </div>
                                        <span className="patient-name-txt">Ocean Jane Lupre</span>
                                    </div>
                                </td>
                                <td>10</td>
                                <td>20 July 2028</td>
                                <td>Pediatric Check-Up</td>
                                <td>Dr. Damian Sanchez</td>
                                <td>Double - 303</td>
                                <td><span className="patient-status-badge status-new">New Patient</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">304</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/patient-4.jpg" alt="Shane Riddick" />
                                        </div>
                                        <span className="patient-name-txt">Shane Riddick</span>
                                    </div>
                                </td>
                                <td>50</td>
                                <td>20 July 2028</td>
                                <td>Skin Allergy</td>
                                <td>Dr. Chloe Harrington</td>
                                <td>Single - 304</td>
                                <td><span className="patient-status-badge status-inactive">Inactive</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">305</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/patient-5.jpg" alt="Queen Lawnston" />
                                        </div>
                                        <span className="patient-name-txt">Queen Lawnston</span>
                                    </div>
                                </td>
                                <td>60</td>
                                <td>20 July 2028</td>
                                <td>Follow-Up Visit</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>Single - 305</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">306</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/doctor-1.jpg" alt="Eleanor Fitz" />
                                        </div>
                                        <span className="patient-name-txt">Eleanor Fitz</span>
                                    </div>
                                </td>
                                <td>28</td>
                                <td>21 July 2028</td>
                                <td>Neurology Consult</td>
                                <td>Dr. Nathan Drake</td>
                                <td>-</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">307</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/doctor-2.jpg" alt="Jonathan Hayes" />
                                        </div>
                                        <span className="patient-name-txt">Jonathan Hayes</span>
                                    </div>
                                </td>
                                <td>42</td>
                                <td>21 July 2028</td>
                                <td>Orthopedic Surgery</td>
                                <td>Dr. Michael Chen</td>
                                <td>Single - 307</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">308</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/doctor-3.jpg" alt="Marcus Vance" />
                                        </div>
                                        <span className="patient-name-txt">Marcus Vance</span>
                                    </div>
                                </td>
                                <td>55</td>
                                <td>21 July 2028</td>
                                <td>Internal Medicine</td>
                                <td>Dr. Julian Vance</td>
                                <td>Double - 308</td>
                                <td><span className="patient-status-badge status-inactive">Inactive</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">309</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/doctor-4.jpg" alt="Sarah Connor" />
                                        </div>
                                        <span className="patient-name-txt">Sarah Connor</span>
                                    </div>
                                </td>
                                <td>31</td>
                                <td>22 July 2028</td>
                                <td>Dental Surgery</td>
                                <td>Dr. Sophia Ramirez</td>
                                <td>-</td>
                                <td><span className="patient-status-badge status-new">New Patient</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">310</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/doctor-5.jpg" alt="Liam Henderson" />
                                        </div>
                                        <span className="patient-name-txt">Liam Henderson</span>
                                    </div>
                                </td>
                                <td>39</td>
                                <td>22 July 2028</td>
                                <td>Cardiology Consult</td>
                                <td>Dr. Olivia Martinez</td>
                                <td>Single - 310</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">311</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/patient-1.jpg" alt="Sophia Anderson" />
                                        </div>
                                        <span className="patient-name-txt">Sophia Anderson</span>
                                    </div>
                                </td>
                                <td>24</td>
                                <td>22 July 2028</td>
                                <td>General Check-Up</td>
                                <td>Dr. Petra Winsburry</td>
                                <td>-</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>

                            <tr>
                                <td><span className="patient-id-txt">312</span></td>
                                <td>
                                    <div className="patient-profile-cell">
                                        <div className="patient-cell-avatar">
                                            <img src="all-images/body-images/patient-2.jpg" alt="Lucas Miller" />
                                        </div>
                                        <span className="patient-name-txt">Lucas Miller</span>
                                    </div>
                                </td>
                                <td>68</td>
                                <td>23 July 2028</td>
                                <td>Eye Surgery Consult</td>
                                <td>Dr. Lucas Ross</td>
                                <td>Single - 312</td>
                                <td><span className="patient-status-badge status-active">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="patients-pagination-row">
                    <div className="patients-pagination-info">
                        <span>Showing</span>
                        <select className="patients-page-select" defaultValue="12">
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="48">48</option>
                        </select>
                        <span>out of 286</span>
                    </div>

                    <div className="patients-pagination-controls">
                        <button type="button" className="btn-patients-step" title="Previous Page">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" className="btn-patients-step active">1</button>
                        <button type="button" className="btn-patients-step">2</button>
                        <button type="button" className="btn-patients-step">3</button>
                        <span className="page-step-ellipsis">...</span>
                        <button type="button" className="btn-patients-step">16</button>
                        <button type="button" className="btn-patients-step" title="Next Page">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

