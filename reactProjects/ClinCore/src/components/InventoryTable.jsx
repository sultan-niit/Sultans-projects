import { useModalState } from "../js/components/ModalContext";
import { useSessionCollection } from "../js/sessionData";

export default function InventoryTable() {
    const { openEditDrawer } = useModalState();
    const inventory = useSessionCollection("inventory");

    const handleEditItem = (item) => {
        openEditDrawer({
            ...item,
            itemName: item.name,
            quantity: item.qty,
            unitPrice: item.price,
        }, "inventory");
    };

    return (
        <div className="inventory-main-card">
            <div className="inventory-table-wrap">
                <table className="inventory-data-table">
                    <thead>
                        <tr>
                            <th className="checkbox-col"><input type="checkbox" className="table-checkbox" /></th>
                            <th>Image</th>
                            <th className="sortable-th"><span>Item</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Category</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Availability</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Qty In Stock</span><i className="bi bi-arrow-down-up"></i></th>
                            <th className="sortable-th"><span>Qty In Reorder</span><i className="bi bi-arrow-down-up"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item) => {
                            const isInStock = item.status === "In Stock";
                            const availability = item.status === "In Stock" ? "Available" : item.status;
                            return (
                                <tr key={item.id}>
                                    <td><input type="checkbox" className="table-checkbox" /></td>
                                    <td><div className="item-thumb-container"><img src={item.image || "all-images/body-images/bandages.svg"} alt={item.name} /></div></td>
                                    <td><span className="item-name-cell">{item.name}</span></td>
                                    <td><span className="item-category-cell">{item.category}</span></td>
                                    <td>
                                        <span className={`availability-pill ${isInStock ? "available" : "low"}`}>
                                            <span className="pill-dot"></span><span>{availability}</span>
                                        </span>
                                    </td>
                                    <td><span className="item-metric-val">{item.qty}</span></td>
                                    <td><span className="item-metric-val">{item.reorderQty}</span></td>
                                    <td>
                                        <div className="table-row-actions-wrap">
                                            <button type="button" className="btn-view-item-action" title="Edit Details" onClick={() => handleEditItem(item)}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button type="button" className="btn-reorder-item-action" onClick={() => handleEditItem(item)}>Reorder</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        {inventory.length === 0 && (
                            <tr><td colSpan="8">No inventory items found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
