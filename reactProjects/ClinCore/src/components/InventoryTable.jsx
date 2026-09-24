export default function InventoryTable({ ...props }) {
    return (
        <>
            <div className="inventory-main-card">
                <div className="inventory-table-wrap">
                    <table className="inventory-data-table">
                        <thead>
                            <tr>
                                <th className="checkbox-col">
                                    <input type="checkbox" className="table-checkbox" />
                                </th>
                                <th>Image</th>
                                <th className="sortable-th">
                                    <span>Item</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Category</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Availability</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Qty In Stock</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Qty In Reorder</span>
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
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/surgical-masks.svg" alt="Surgical Masks" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Surgical Masks</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">PPE</span>
                                </td>
                                <td>
                                    <span className="availability-pill available">
                                        <span className="pill-dot"></span>
                                        <span>Available</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">500</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">200</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/gloves.svg" alt="Gloves" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Gloves</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">PPE</span>
                                </td>
                                <td>
                                    <span className="availability-pill low">
                                        <span className="pill-dot"></span>
                                        <span>Low</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">50</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">150</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/hand-sanitizer.svg" alt="Hand Sanitizer" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Hand Sanitizer</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Sanitizer</span>
                                </td>
                                <td>
                                    <span className="availability-pill available">
                                        <span className="pill-dot"></span>
                                        <span>Available</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">200</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">100</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/thermometers.svg" alt="Thermometers" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Thermometers</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Medical Equipment</span>
                                </td>
                                <td>
                                    <span className="availability-pill out-of-stock">
                                        <span className="pill-dot"></span>
                                        <span>Out of Stock</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">0</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">300</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/stethoscopes.svg" alt="Stethoscopes" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Stethoscopes</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Medical Equipment</span>
                                </td>
                                <td>
                                    <span className="availability-pill available">
                                        <span className="pill-dot"></span>
                                        <span>Available</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">30</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">50</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/blood-pressure-monitors.svg"
                                            alt="Blood Pressure Monitors" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Blood Pressure Monitors</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Medical Equipment</span>
                                </td>
                                <td>
                                    <span className="availability-pill low">
                                        <span className="pill-dot"></span>
                                        <span>Low</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">20</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">100</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/bandages.svg" alt="Bandages" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Bandages</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">First Aid</span>
                                </td>
                                <td>
                                    <span className="availability-pill available">
                                        <span className="pill-dot"></span>
                                        <span>Available</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">300</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">200</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/iv-fluids.svg" alt="IV Fluids" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">IV Fluids</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Medical Supplies</span>
                                </td>
                                <td>
                                    <span className="availability-pill low">
                                        <span className="pill-dot"></span>
                                        <span>Low</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">10</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">150</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/scalpel-blades.svg" alt="Scalpel Blades" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Scalpel Blades</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Surgical Instruments</span>
                                </td>
                                <td>
                                    <span className="availability-pill out-of-stock">
                                        <span className="pill-dot"></span>
                                        <span>Out of Stock</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">0</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">200</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/syringes.svg" alt="Syringes" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Syringes</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Medical Supplies</span>
                                </td>
                                <td>
                                    <span className="availability-pill available">
                                        <span className="pill-dot"></span>
                                        <span>Available</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">400</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">300</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/medical-gowns.svg" alt="Medical Gowns" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Medical Gowns</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">PPE</span>
                                </td>
                                <td>
                                    <span className="availability-pill available">
                                        <span className="pill-dot"></span>
                                        <span>Available</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">150</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">100</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" className="table-checkbox" />
                                </td>
                                <td>
                                    <div className="item-thumb-container">
                                        <img src="all-images/body-images/disinfectant-wipes.svg"
                                            alt="Disinfectant Wipes" />
                                    </div>
                                </td>
                                <td>
                                    <span className="item-name-cell">Disinfectant Wipes</span>
                                </td>
                                <td>
                                    <span className="item-category-cell">Sanitizer</span>
                                </td>
                                <td>
                                    <span className="availability-pill low">
                                        <span className="pill-dot"></span>
                                        <span>Low</span>
                                    </span>
                                </td>
                                <td>
                                    <span className="item-metric-val">25</span>
                                </td>
                                <td>
                                    <span className="item-metric-val">200</span>
                                </td>
                                <td>
                                    <div className="table-row-actions-wrap">
                                        <button type="button" className="btn-view-item-action" title="View Details">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button type="button" className="btn-reorder-item-action">Reorder</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="inventory-pagination-row">
                    <div className="pagination-info">
                        <span>Showing</span>
                        <select className="pagination-size-select" defaultValue="13">
                            <option value="13">13</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>out of 128</span>
                    </div>

                    <div className="pagination-controls">
                        <button type="button" className="btn-page-step" title="Previous Page">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" className="btn-page-step active">1</button>
                        <button type="button" className="btn-page-step">2</button>
                        <button type="button" className="btn-page-step">3</button>
                        <span className="page-step-ellipsis">...</span>
                        <button type="button" className="btn-page-step">10</button>
                        <button type="button" className="btn-page-step" title="Next Page">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
