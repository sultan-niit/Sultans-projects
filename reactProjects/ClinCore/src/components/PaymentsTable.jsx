import { useModalState } from "../js/components/ModalContext";
import { useSessionCollection } from "../js/sessionData";

const formatDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

export default function PaymentsTable() {
    const { openEditDrawer } = useModalState();
    const payments = useSessionCollection("payments");

    return (
        <div className="payments-main-card">
            <div className="payments-table-wrap">
                <table className="payments-data-table">
                    <thead>
                        <tr>
                            <th className="sortable-th"><span>Invoice ID</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Patient Name</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Treatment</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Date</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Amount</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Status</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Payment Method</span><i className="bi bi-arrow-down-up"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id}>
                                <td><span className="invoice-id-cell">{payment.invoiceId}</span></td>
                                <td><span className="patient-name-cell">{payment.patientName}</span></td>
                                <td>
                                    <div className="treatment-cell-wrap">
                                        <span className="treatment-title">{payment.treatment}</span>
                                        <span className="treatment-dept"><i className="bi bi-file-medical"></i><span>{payment.department}</span></span>
                                    </div>
                                </td>
                                <td><span className="payment-date-cell">{formatDate(payment.date)}</span></td>
                                <td><span className="payment-amount-cell">${payment.amount}</span></td>
                                <td>
                                    <span className={`payment-status-pill status-${payment.status.toLowerCase()}`}>
                                        <span className="status-icon"></span><span>{payment.status}</span>
                                    </span>
                                </td>
                                <td><span className="pay-method-text">{payment.paymentMethod}</span></td>
                                <td>
                                    <div className="payment-row-actions">
                                        <button
                                            type="button"
                                            className="btn-invoice-action"
                                            title="Edit Invoice"
                                            onClick={() => openEditDrawer(payment, "payment")}
                                        >
                                            <i className="bi bi-pencil-square"></i><span>Edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {payments.length === 0 && (
                            <tr><td colSpan="8">No invoices found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
