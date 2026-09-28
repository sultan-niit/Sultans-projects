import { useModalState } from "../js/components/ModalContext";

export default function PaymentsTable({ ...props }) {
    const { openEditDrawer } = useModalState();

    const handleEditInvoice = (inv) => {
        openEditDrawer({
            patientName: inv.patientName,
            treatment: inv.treatment,
            amount: inv.amount,
            paymentMethod: inv.paymentMethod,
            date: inv.date || '2028-07-01',
            status: inv.status
        }, 'payment');
    };

    return (
        <>
            <div className="payments-main-card">
                <div className="payments-table-wrap">
                    <table className="payments-data-table">
                        <thead>
                            <tr>
                                <th className="sortable-th">
                                    <span>Invoice ID</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Patient Name</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Treatment</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Date</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Amount</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Status</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Payment Method</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-001</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">John Doe</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Routine Check-Up</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>General Medicine</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">1 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$100</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-paid">
                                        <span className="status-icon"></span>
                                        <span>Paid</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Card</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'John Doe', treatment: 'Routine Check-Up', amount: '100.00', paymentMethod: 'Credit Card', status: 'Paid' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-002</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Mary Johnson</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Heart Surgery</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>Cardiology</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">2 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$5000</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-pending">
                                        <span className="status-icon"></span>
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Transfer</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Mary Johnson', treatment: 'Heart Surgery', amount: '5000.00', paymentMethod: 'Bank Transfer', status: 'Pending' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-003</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Robert Brown</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Flu Symptoms</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>General Medicine</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">3 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$120</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-paid">
                                        <span className="status-icon"></span>
                                        <span>Paid</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Card</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Robert Brown', treatment: 'Flu Symptoms', amount: '120.00', paymentMethod: 'Credit Card', status: 'Paid' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-004</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Susan Lee</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Skin Treatment</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>Dermatology</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">4 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$200</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-paid">
                                        <span className="status-icon"></span>
                                        <span>Paid</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Cash</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Susan Lee', treatment: 'Skin Treatment', amount: '200.00', paymentMethod: 'Cash', status: 'Paid' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-005</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">James Wilson</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Arthritis Management</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>Orthopedics</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">5 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$140</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-pending">
                                        <span className="status-icon"></span>
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Card</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'James Wilson', treatment: 'Arthritis Management', amount: '140.00', paymentMethod: 'Credit Card', status: 'Pending' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-006</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Caren G. Simpson</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Routine Check-Up</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>General Medicine</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">6 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$100</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-paid">
                                        <span className="status-icon"></span>
                                        <span>Paid</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Cash</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Caren G. Simpson', treatment: 'Routine Check-Up', amount: '100.00', paymentMethod: 'Cash', status: 'Paid' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-007</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Patricia Clark</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Hypertension Management</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>General Medicine</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">7 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$150</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-pending">
                                        <span className="status-icon"></span>
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Transfer</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Patricia Clark', treatment: 'Hypertension Management', amount: '150.00', paymentMethod: 'Bank Transfer', status: 'Pending' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-008</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Kevin White</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Respiratory Infection</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>Pulmonology</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">8 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$180</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-paid">
                                        <span className="status-icon"></span>
                                        <span>Paid</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Card</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Kevin White', treatment: 'Respiratory Infection', amount: '180.00', paymentMethod: 'Credit Card', status: 'Paid' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-009</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Jennifer Adams</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Preventive Care</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>General Medicine</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">9 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$130</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-paid">
                                        <span className="status-icon"></span>
                                        <span>Paid</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Cash</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Jennifer Adams', treatment: 'Preventive Care', amount: '130.00', paymentMethod: 'Cash', status: 'Paid' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-010</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Barbara Harris</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Medication Review</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>Pharmacy</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">10 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$110</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-pending">
                                        <span className="status-icon"></span>
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Card</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Barbara Harris', treatment: 'Medication Review', amount: '110.00', paymentMethod: 'Credit Card', status: 'Pending' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-011</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Michael Thompson</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Routine Check-Up</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>General Medicine</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">11 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$100</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-paid">
                                        <span className="status-icon"></span>
                                        <span>Paid</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">Card</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Michael Thompson', treatment: 'Routine Check-Up', amount: '100.00', paymentMethod: 'Credit Card', status: 'Paid' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="invoice-id-cell">INV-WNH-012</span>
                                </td>
                                <td>
                                    <span className="patient-name-cell">Rachel Green</span>
                                </td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">Asthma Management</span>
                                        <span className="treatment-dept">
                                            <i className="bi bi-file-medical"></i>
                                            <span>Pulmonology</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="payment-date-cell">12 July 2028</span>
                                </td>
                                <td>
                                    <span className="payment-amount-cell">$160</span>
                                </td>
                                <td>
                                    <span className="payment-status-pill status-pending">
                                        <span className="status-icon"></span>
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="pay-method-text">-</span>
                                </td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button type="button" className="btn-invoice-action" title="View Invoice" onClick={() => handleEditInvoice({ patientName: 'Rachel Green', treatment: 'Asthma Management', amount: '160.00', paymentMethod: 'Cash', status: 'Pending' })}>
                                            <i className="bi bi-eye"></i>
                                            <span>View</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="payments-pagination-row">
                    <div className="payments-pagination-info">
                        <span>Showing</span>
                        <select className="payments-page-select" defaultValue="12">
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                        </select>
                        <span>out of 33</span>
                    </div>

                    <div className="payments-pagination-controls">
                        <button type="button" className="btn-payments-step" title="Previous Page">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" className="btn-payments-step active">1</button>
                        <button type="button" className="btn-payments-step">2</button>
                        <button type="button" className="btn-payments-step">3</button>
                        <button type="button" className="btn-payments-step" title="Next Page">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


