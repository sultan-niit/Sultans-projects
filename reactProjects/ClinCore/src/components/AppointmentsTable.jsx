import { useModalState } from "../js/components/ModalContext";

export default function AppointmentsTable({ ...props }) {
    const { openEditDrawer } = useModalState();

    const handleEditAppointment = (apptData) => {
        openEditDrawer({
            patientName: apptData.patientName,
            doctor: apptData.doctor,
            department: apptData.department || 'General Medicine',
            treatment: apptData.treatment,
            date: apptData.date || '2028-07-20',
            time: apptData.time || '09:00',
            status: apptData.status
        }, 'appointment');
    };

    return (
        <>
            <div className="appointments-main-card">
                <div className="appointments-table-wrap">
                    <table className="appointments-data-table">
                        <thead>
                            <tr>
                                <th className="checkbox-col">
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Caren G. Simpson', doctor: 'Dr. Petra Winsburry', department: 'General Medicine', treatment: 'Routine Check-Up', status: 'Confirmed' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Caren G. Simpson', doctor: 'Dr. Petra Winsburry', department: 'General Medicine', treatment: 'Routine Check-Up', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Edgar Warrow', doctor: 'Dr. Petra Winsburry', department: 'General Medicine', treatment: 'Teeth Check-Up', status: 'Confirmed' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Edgar Warrow', doctor: 'Dr. Petra Winsburry', department: 'General Medicine', treatment: 'Teeth Check-Up', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Eleanor Fitz', doctor: 'Dr. Liam Henderson', department: 'Cardiology', treatment: 'Cardiology Consult', status: 'Pending' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Eleanor Fitz', doctor: 'Dr. Liam Henderson', department: 'Cardiology', treatment: 'Cardiology Consult', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Jonathan Hayes', doctor: 'Dr. Sophia Ramirez', department: 'Pediatrics', treatment: 'Pediatric Follow-up', status: 'Confirmed' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Jonathan Hayes', doctor: 'Dr. Sophia Ramirez', department: 'Pediatrics', treatment: 'Pediatric Follow-up', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Marcus Vance', doctor: 'Dr. Michael Chen', department: 'Orthopedics', treatment: 'Orthopedic Assessment', status: 'Cancelled' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Marcus Vance', doctor: 'Dr. Michael Chen', department: 'Orthopedics', treatment: 'Orthopedic Assessment', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Ocean Jane Lupre', doctor: 'Dr. Damian Sanchez', department: 'Pediatrics', treatment: 'Pediatric Check-Up', status: 'Confirmed' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Ocean Jane Lupre', doctor: 'Dr. Damian Sanchez', department: 'Pediatrics', treatment: 'Pediatric Check-Up', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Shane Riddick', doctor: 'Dr. Chloe Harrington', department: 'Dermatology', treatment: 'Skin Allergy Consult', status: 'Pending' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Shane Riddick', doctor: 'Dr. Chloe Harrington', department: 'Dermatology', treatment: 'Skin Allergy Consult', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Queen Lawnston', doctor: 'Dr. Petra Winsburry', department: 'General Medicine', treatment: 'Follow-Up Visit', status: 'Confirmed' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Queen Lawnston', doctor: 'Dr. Petra Winsburry', department: 'General Medicine', treatment: 'Follow-Up Visit', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Sarah Connor', doctor: 'Dr. Sophia Ramirez', department: 'General Care', treatment: 'Dental Surgery Follow-up', status: 'Confirmed' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Sarah Connor', doctor: 'Dr. Sophia Ramirez', department: 'General Care', treatment: 'Dental Surgery Follow-up', status: 'Cancelled' })}>Cancel</button>
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
                                        <button type="button" className="btn-action-reschedule" onClick={() => handleEditAppointment({ patientName: 'Lucas Miller', doctor: 'Dr. Lucas Ross', department: 'Ophthalmology', treatment: 'Eye Surgery Consult', status: 'Confirmed' })}>Reschedule</button>
                                        <button type="button" className="btn-action-cancel" onClick={() => handleEditAppointment({ patientName: 'Lucas Miller', doctor: 'Dr. Lucas Ross', department: 'Ophthalmology', treatment: 'Eye Surgery Consult', status: 'Cancelled' })}>Cancel</button>
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


