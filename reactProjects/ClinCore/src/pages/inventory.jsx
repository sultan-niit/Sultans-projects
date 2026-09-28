import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import ButtonComponents from "../components/ButtonComponents";
import InventoryTable from "../components/InventoryTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";

export default function Inventory() {
  const { openAddDrawer } = useModalState();
  const inventoryFilters = FILTER_CONFIGS.inventory;

  return (
    <>
      <div className="dashboard-wrapper">
        <Sidebar />

        <div className="content-wrapper">
          <TopHeader pageTitle="Inventory" />

          <div className="main-content">
                <div className="inventory-toolbar">
                    <div className="inventory-toolbar-left" style={{ display: 'flex', gap: '10px' }}>
                        <FilterDropdown
                            icon={inventoryFilters.category.icon}
                            label={inventoryFilters.category.label}
                            options={inventoryFilters.category.options}
                        />

                        <FilterDropdown
                            icon={inventoryFilters.status.icon}
                            label={inventoryFilters.status.label}
                            options={inventoryFilters.status.options}
                        />
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
                            onClick={() => openAddDrawer('inventory')}
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


