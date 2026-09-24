import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import SearchBar from "../components/SearchBar";
import ButtonComponents from "../components/ButtonComponents";
import InventoryTable from "../components/InventoryTable";
import PageFooter from "../components/PageFooter";

export default function Inventory() {
  return (
    <>
      <div className="dashboard-wrapper">
        <Sidebar />

        <div className="content-wrapper">
          <TopHeader pageTitle="Inventory" />

          <div className="main-content">
                <div className="inventory-toolbar">
                    <div className="inventory-toolbar-left">
                        <div className="filter-pill">
                            <i className="bi bi-funnel"></i>
                            <span>All Category</span>
                            <i className="bi bi-chevron-down"></i>
                        </div>

                        <div className="filter-pill">
                            <i className="bi bi-funnel"></i>
                            <span>All Status</span>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div className="inventory-toolbar-right">
                        <SearchBar className="inventory-search-bar" placeHolder="Search item, etc" />

                        <button type="button" className="btn-filter-toggle" title="Filter Settings">
                            <i className="bi bi-sliders"></i>
                        </button>

                        <ButtonComponents
                            className="btn-add-item-action"
                            icon="bi-plus-lg"
                            title="Add Item"
                        />
                    </div>
                </div>

                <InventoryTable />

                <PageFooter
                  className="inventory-page-footer"
                  leftClass="footer-credits"
                  socialsClass="footer-social-links"
                />
            </div>
        </div>
    </div>
    </>
  );
}
