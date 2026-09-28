import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import ButtonComponents from "../components/ButtonComponents";
import PaymentsTable from "../components/PaymentsTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";

export default function Payments() {
  const { openAddDrawer } = useModalState();
  const paymentFilters = FILTER_CONFIGS.payment;

  return (
    <>
      <div className="dashboard-wrapper">
        <Sidebar />

        <div className="content-wrapper">
          <TopHeader pageTitle="Payments" />

          <div className="main-content">
                <div className="payments-stats-grid">
                    <div className="payment-stat-card">
                        <div className="payment-stat-left">
                            <div className="payment-stat-icon">
                                <i className="bi bi-receipt"></i>
                            </div>
                            <div className="payment-stat-info">
                                <span className="payment-stat-label">Total Invoice</span>
                                <span className="payment-stat-value">865</span>
                            </div>
                        </div>
                        <div className="payment-stat-trend trend-up">
                            <i className="bi bi-graph-up-arrow"></i>
                            <span>+2.14%</span>
                        </div>
                    </div>

                    <div className="payment-stat-card">
                        <div className="payment-stat-left">
                            <div className="payment-stat-icon">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <div className="payment-stat-info">
                                <span className="payment-stat-label">Paid Invoice</span>
                                <span className="payment-stat-value">289</span>
                            </div>
                        </div>
                        <div className="payment-stat-trend trend-up">
                            <i className="bi bi-graph-up-arrow"></i>
                            <span>+1.40%</span>
                        </div>
                    </div>

                    <div className="payment-stat-card">
                        <div className="payment-stat-left">
                            <div className="payment-stat-icon">
                                <i className="bi bi-hourglass-split"></i>
                            </div>
                            <div className="payment-stat-info">
                                <span className="payment-stat-label">Pending Invoice</span>
                                <span className="payment-stat-value">98</span>
                            </div>
                        </div>
                        <div className="payment-stat-trend trend-down">
                            <i className="bi bi-graph-down-arrow"></i>
                            <span>-1.56%</span>
                        </div>
                    </div>

                    <div className="payment-stat-card">
                        <div className="payment-stat-left">
                            <div className="payment-stat-icon">
                                <i className="bi bi-info-circle"></i>
                            </div>
                            <div className="payment-stat-info">
                                <span className="payment-stat-label">Overdue</span>
                                <span className="payment-stat-value">168</span>
                            </div>
                        </div>
                        <div className="payment-stat-trend trend-up">
                            <i className="bi bi-graph-up-arrow"></i>
                            <span>+0.37%</span>
                        </div>
                    </div>
                </div>

                <div className="payments-toolbar">
                    <div className="payments-toolbar-left" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <SearchBar className="payments-search-bar" placeHolder="Search name, treatment, etc" />

                        <FilterDropdown
                            icon={paymentFilters.dateRange.icon}
                            label={paymentFilters.dateRange.label}
                            options={paymentFilters.dateRange.options}
                        />

                        <FilterDropdown
                            icon={paymentFilters.status.icon}
                            label={paymentFilters.status.label}
                            options={paymentFilters.status.options}
                        />
                    </div>

                    <ButtonComponents
                        className="btn-add-invoice-action"
                        icon="bi-plus-lg"
                        title="Add Invoice"
                        onClick={() => openAddDrawer('payment')}
                    />
                </div>

                <PaymentsTable />

                <PageFooter
                  className="payments-page-footer"
                  leftClass="payments-footer-left"
                  socialsClass="payments-footer-socials"
                />
            </div>
        </div>
    </div>
    </>
  );
}


