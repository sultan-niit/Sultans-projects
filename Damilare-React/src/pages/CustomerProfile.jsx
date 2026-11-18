import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../assets/icon-images/DML-logo.png";
import AlertModal from "../components/AlertModal";
import { getOrdersList } from "../utils/orderStorage";
import { getCartItemCount } from "../utils/cartStorage";

export default function CustomerProfile() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [orders, setOrders] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    deliveryAddress: "",
    state: "Lagos",
    deliveryNotes: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    // Load customer data
    const stored = localStorage.getItem("customer_user");
    let currentCustomer = null;
    if (stored) {
      try {
        currentCustomer = JSON.parse(stored);
      } catch (e) {
        console.error(e);
      }
    }

    if (!currentCustomer) {
      currentCustomer = {
        fullName: "Customer User",
        firstName: "Customer",
        lastName: "User",
        emailAddress: "customer@gmail.com",
        phoneNumber: "+234 801 234 5678",
        deliveryAddress: "Plot 12, Admiralty Way, Lekki Phase 1",
        state: "Lagos",
        deliveryNotes: "Call when dispatch arrives",
        role: "Customer",
      };
      localStorage.setItem("customer_user", JSON.stringify(currentCustomer));
    }

    setCustomer(currentCustomer);

    const nameParts = (currentCustomer.fullName || "").trim().split(/\s+/);
    setFormData({
      firstName: currentCustomer.firstName || nameParts[0] || "Customer",
      lastName:
        currentCustomer.lastName ||
        (nameParts.length > 1 ? nameParts.slice(1).join(" ") : ""),
      emailAddress: currentCustomer.emailAddress || "",
      phoneNumber: currentCustomer.phoneNumber || "",
      deliveryAddress:
        currentCustomer.deliveryAddress ||
        "Plot 12, Admiralty Way, Lekki Phase 1",
      state: currentCustomer.state || "Lagos",
      deliveryNotes: currentCustomer.deliveryNotes || "",
    });

    // Load customer orders
    const allOrders = getOrdersList();
    const customerOrders = allOrders.filter(
      (o) =>
        o.customer?.toLowerCase() === currentCustomer.fullName?.toLowerCase() ||
        o.email?.toLowerCase() === currentCustomer.emailAddress?.toLowerCase() ||
        o.channel === "Online Store"
    );
    setOrders(customerOrders);
    setCartCount(getCartItemCount());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();

    const updatedCustomer = {
      ...customer,
      fullName: fullName || formData.firstName,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      emailAddress: formData.emailAddress.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      deliveryAddress: formData.deliveryAddress.trim(),
      state: formData.state,
      deliveryNotes: formData.deliveryNotes.trim(),
    };

    setCustomer(updatedCustomer);
    localStorage.setItem("customer_user", JSON.stringify(updatedCustomer));

    setIsEditing(false);
    setModalMessage("PROFILE UPDATED SUCCESSFULLY!");
    setModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("customer_user");
    navigate("/customer-login");
  };

  const getInitials = (name) => {
    if (!name) return "CU";
    const parts = name.replace(/[^a-zA-Z\s]/g, "").trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <div className="customer-profile-page-wrapper">
      {/* Top Customer Header */}
      <header className="customer-store-header">
        <div className="customer-header-container">
          <Link to="/shop" className="customer-brand-link" title="Return to Shop">
            <img src={brandLogo} alt="DML Tech Logo" className="customer-logo-img" />
            <div className="customer-brand-titles">
              <span className="customer-brand-name">DML TECH</span>
              <span className="customer-brand-tagline">Customer Energy Account</span>
            </div>
          </Link>

          <div className="customer-header-actions">
            <Link to="/shop" className="btn btn-outline" style={{ display: "flex", alignItems: "center", gap: "6px", height: "42px", padding: "0 16px", borderRadius: "50px", border: "1px solid #cbd5e1", textDecoration: "none", color: "#334155", fontSize: "13px", fontWeight: "600" }}>
              <i className="bi bi-arrow-left"></i> Continue Shopping
            </Link>

            <Link to="/shop" className="customer-cart-btn" style={{ textDecoration: "none" }}>
              <i className="bi bi-cart3"></i>
              <span className="cart-btn-label">Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleLogout}
              title="Sign out of customer account"
              style={{ display: "flex", alignItems: "center", gap: "6px", height: "42px", padding: "0 16px", borderRadius: "50px", border: "1px solid #ef4444", color: "#ef4444", background: "transparent", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}
            >
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Profile Container */}
      <main className="customer-profile-main">
        <div className="customer-profile-container">
          {/* Hero Profile Summary Card */}
          <section className="customer-profile-hero-card">
            <div className="hero-left-content">
              <div className="customer-avatar-box">
                <span>{getInitials(customer?.fullName)}</span>
                <span className="customer-active-dot"></span>
              </div>

              <div className="customer-hero-meta">
                <div className="customer-name-row">
                  <h1>{customer?.fullName || "Valued Customer"}</h1>
                  <span className="customer-verified-tag">
                    <i className="bi bi-patch-check-fill"></i> Verified Customer
                  </span>
                  <span className="customer-role-tag">Solar Account</span>
                </div>

                <div className="customer-chips-row">
                  <span className="chip">
                    <i className="bi bi-envelope"></i> {customer?.emailAddress}
                  </span>
                  <span className="chip">
                    <i className="bi bi-telephone"></i> {customer?.phoneNumber}
                  </span>
                  <span className="chip">
                    <i className="bi bi-geo-alt"></i> {customer?.state || "Lagos"}, Nigeria
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-right-actions">
              <button
                type="button"
                className={`btn ${isEditing ? "btn-outline" : "btn-purple"}`}
                onClick={() => setIsEditing(!isEditing)}
                style={{ height: "44px", padding: "0 20px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <i className={`bi ${isEditing ? "bi-x-lg" : "bi-pencil-square"}`}></i>
                <span>{isEditing ? "Cancel Editing" : "Edit Profile Info"}</span>
              </button>
            </div>
          </section>

          {/* Profile Details & Edit Form */}
          <div className="customer-content-grid">
            {/* Left Column: Personal & Delivery Information */}
            <div className="customer-info-card">
              <div className="card-top-bar">
                <h2>
                  <i className="bi bi-person-lines-fill"></i> Personal & Delivery Information
                </h2>
                {!isEditing && (
                  <button
                    type="button"
                    className="btn-text-edit"
                    onClick={() => setIsEditing(true)}
                  >
                    <i className="bi bi-pencil"></i> Edit Details
                  </button>
                )}
              </div>

              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="customer-edit-form">
                  <div className="form-row-2">
                    <div className="form-field-item">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field-item">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field-item">
                      <label htmlFor="emailAddress">Email Address *</label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field-item">
                      <label htmlFor="phoneNumber">Phone Number *</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field-item">
                    <label htmlFor="deliveryAddress">Delivery Street Address / Landmark *</label>
                    <input
                      type="text"
                      id="deliveryAddress"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-field-item">
                      <label htmlFor="state">Destination State *</label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      >
                        <option value="Lagos">Lagos State</option>
                        <option value="Abuja">Abuja (FCT)</option>
                        <option value="Port Harcourt">Rivers (Port Harcourt)</option>
                        <option value="Ibadan">Oyo (Ibadan)</option>
                        <option value="Ogun">Ogun State</option>
                        <option value="Enugu">Enugu State</option>
                        <option value="Kano">Kano State</option>
                        <option value="Delta">Delta State</option>
                        <option value="Kaduna">Kaduna State</option>
                      </select>
                    </div>

                    <div className="form-field-item">
                      <label htmlFor="deliveryNotes">Delivery Notes / Instructions</label>
                      <input
                        type="text"
                        id="deliveryNotes"
                        name="deliveryNotes"
                        placeholder="e.g. Call security upon arrival"
                        value={formData.deliveryNotes}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-action-buttons">
                    <button type="submit" className="btn btn-purple" style={{ padding: "10px 24px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}>
                      <i className="bi bi-check2"></i> Save Profile Changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setIsEditing(false)}
                      style={{ padding: "10px 20px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}
                    >
                      Discard
                    </button>
                  </div>
                </form>
              ) : (
                <div className="customer-display-fields">
                  <div className="display-field">
                    <span className="field-lbl">Full Name</span>
                    <span className="field-val strong">{customer?.fullName}</span>
                  </div>

                  <div className="display-field">
                    <span className="field-lbl">Email Address</span>
                    <span className="field-val">{customer?.emailAddress}</span>
                  </div>

                  <div className="display-field">
                    <span className="field-lbl">Phone Number</span>
                    <span className="field-val">{customer?.phoneNumber}</span>
                  </div>

                  <div className="display-field">
                    <span className="field-lbl">State / City</span>
                    <span className="field-val">{customer?.state || "Lagos"}</span>
                  </div>

                  <div className="display-field full-row">
                    <span className="field-lbl">Primary Delivery Address</span>
                    <span className="field-val">
                      {customer?.deliveryAddress || "Plot 12, Victoria Island, Lagos"}
                    </span>
                  </div>

                  {customer?.deliveryNotes && (
                    <div className="display-field full-row">
                      <span className="field-lbl">Delivery Instructions</span>
                      <span className="field-val">{customer.deliveryNotes}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Customer Orders & Purchases */}
            <div className="customer-orders-card">
              <div className="card-top-bar">
                <h2>
                  <i className="bi bi-box-seam-fill"></i> Your Recent Solar Orders
                </h2>
                <Link to="/shop" className="btn-text-edit">
                  + Order More
                </Link>
              </div>

              {orders.length === 0 ? (
                <div className="empty-customer-orders">
                  <i className="bi bi-bag-x"></i>
                  <h4>No orders placed yet</h4>
                  <p>Browse our catalog of solar inverters, batteries, and panels.</p>
                  <Link to="/shop" className="btn btn-purple" style={{ textDecoration: "none", display: "inline-block", padding: "8px 18px", borderRadius: "8px", color: "white", fontSize: "13px", fontWeight: "600" }}>
                    Explore Solar Catalog
                  </Link>
                </div>
              ) : (
                <div className="customer-order-items-list">
                  {orders.map((ord) => (
                    <div key={ord.id} className="customer-order-row-item">
                      <div className="order-main-info">
                        <div className="order-id-badge">{ord.id}</div>
                        <div className="order-details-col">
                          <span className="order-date-text">Placed on {ord.date}</span>
                          <span className="order-dest-text">
                            <i className="bi bi-geo-alt"></i> Delivery to {ord.destination}
                          </span>
                        </div>
                      </div>

                      <div className="order-amount-col">
                        <span className="order-total-price">
                          ${(ord.totalAmount || 850).toLocaleString()}
                        </span>
                        <span
                          className={`status-badge ${
                            ord.status?.toLowerCase() === "completed"
                              ? "badge-completed"
                              : "badge-pending"
                          }`}
                        >
                          {ord.status || "Pending"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {modal && (
        <AlertModal
          type="success"
          message={modalMessage}
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
}
