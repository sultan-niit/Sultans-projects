export default function DashboardAppointments() {
    return (
        <div className="table-card">
            <div className="card-header">
                <h2>Patient Appointment</h2>
                <a href="#" className="view-all">View All</a>
            </div>
            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor</th>
                            <th>Treatment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="patient-name">
                                <div className="patient-cell">
                                    <img src="all-images/body-images/patient-1.jpg" alt="Caren G. Simpson" className="patient-avatar" />
                                    <span>Caren G. Simpson</span>
                                </div>
                            </td>
                            <td>20-07-28</td>
                            <td>09:00 AM</td>
                            <td>Dr. Petra Winsburry</td>
                            <td>Routine Check-Up</td>
                            <td><span className="status-badge status-confirmed">Confirmed</span></td>
                            <td><button type="button" className="row-menu"><i className="bi bi-three-dots"></i></button></td>
                        </tr>
                        <tr>
                            <td className="patient-name">
                                <div className="patient-cell">
                                    <img src="all-images/body-images/patient-2.jpg" alt="Edgar Warrow" className="patient-avatar" />
                                    <span>Edgar Warrow</span>
                                </div>
                            </td>
                            <td>20-07-28</td>
                            <td>10:30 AM</td>
                            <td>Dr. Olivia Martinez</td>
                            <td>Cardiac Consultation</td>
                            <td><span className="status-badge status-confirmed">Confirmed</span></td>
                            <td><button type="button" className="row-menu"><i className="bi bi-three-dots"></i></button></td>
                        </tr>
                        <tr>
                            <td className="patient-name">
                                <div className="patient-cell">
                                    <img src="all-images/body-images/patient-3.jpg" alt="Ocean Jane Lupre" className="patient-avatar" />
                                    <span>Ocean Jane Lupre</span>
                                </div>
                            </td>
                            <td>20-07-28</td>
                            <td>11:00 AM</td>
                            <td>Dr. Damian Sanchez</td>
                            <td>Pediatric Check-Up</td>
                            <td><span className="status-badge status-pending">Pending</span></td>
                            <td><button type="button" className="row-menu"><i className="bi bi-three-dots"></i></button></td>
                        </tr>
                        <tr>
                            <td className="patient-name">
                                <div className="patient-cell">
                                    <img src="all-images/body-images/patient-4.jpg" alt="Shane Riddick" className="patient-avatar" />
                                    <span>Shane Riddick</span>
                                </div>
                            </td>
                            <td>20-07-28</td>
                            <td>01:00 PM</td>
                            <td>Dr. Chloe Harrington</td>
                            <td>Skin Allergy</td>
                            <td><span className="status-badge status-cancelled">Cancelled</span></td>
                            <td><button type="button" className="row-menu"><i className="bi bi-three-dots"></i></button></td>
                        </tr>
                        <tr>
                            <td className="patient-name">
                                <div className="patient-cell">
                                    <img src="all-images/body-images/patient-5.jpg" alt="Queen Lawnston" className="patient-avatar" />
                                    <span>Queen Lawnston</span>
                                </div>
                            </td>
                            <td>20-07-28</td>
                            <td>02:30 PM</td>
                            <td>Dr. Petra Winsburry</td>
                            <td>Follow-Up Visit</td>
                            <td><span className="status-badge status-confirmed">Confirmed</span></td>
                            <td><button type="button" className="row-menu"><i className="bi bi-three-dots"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
