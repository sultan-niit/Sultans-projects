import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../assets/icon-images/DML-logo.png";
import { getCart, clearCart, getCartTotal } from "../utils/cartStorage";
import { PRODUCT_IMAGE_MAP } from "../utils/productStorage";
import { placeCustomerOrder } from "../utils/orderStorage";

export default function CustomerCheckout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    deliveryAddress: "",
    state: "Lagos",
    paymentMethod: "Pay on Delivery",
    orderNotes: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const currentCart = getCart();
    setCart(currentCart);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
    } else if (!formData.emailAddress.includes("@")) {
      newErrors.emailAddress = "Enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = "Delivery address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const subtotal = getCartTotal();
  const shippingFee = subtotal > 2000 ? 0 : 50;
  const grandTotal = subtotal + shippingFee;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (cart.length === 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const orderPayload = {
        fullName: formData.fullName.trim(),
        emailAddress: formData.emailAddress.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        deliveryAddress: formData.deliveryAddress.trim(),
        state: formData.state,
        paymentMethod: formData.paymentMethod,
        orderNotes: formData.orderNotes.trim(),
        items: cart,
        totalAmount: grandTotal,
      };

      const newOrder = placeCustomerOrder(orderPayload);
      clearCart();
      setIsSubmitting(false);
      setCompletedOrder(newOrder);
    }, 700);
  };

  return (
    <div className="customer-checkout-wrapper">
      {/* Checkout Header */}
      <header className="checkout-top-header">
        <div className="checkout-header-inner">
          <Link to="/shop" className="checkout-logo-link" title="Return to Customer Store">
            <img src={brandLogo} alt="DML Tech Logo" className="checkout-logo-img" />
            <span className="checkout-brand-title">DML TECH STORE</span>
          </Link>

          <div className="checkout-security-tag">
            <i className="bi bi-shield-lock-fill"></i>
            <span>256-Bit Encrypted Secure Checkout</span>
          </div>

          <Link to="/shop" className="btn-back-shop">
            <i className="bi bi-arrow-left"></i> Back to Catalog
          </Link>
        </div>
      </header>

      {/* Main Checkout Area */}
      <main className="checkout-main-content">
        <div className="checkout-container">
          {cart.length === 0 && !completedOrder ? (
            <div className="checkout-empty-box">
              <i className="bi bi-cart-x"></i>
              <h2>Your shopping cart is currently empty</h2>
              <p>Add some solar panels, batteries, or inverters to proceed with an order.</p>
              <button
                type="button"
                className="btn btn-purple"
                onClick={() => navigate("/shop")}
              >
                Return to Customer Shop
              </button>
            </div>
          ) : (
            <div className="checkout-grid">
              {/* Left Column: Customer Form */}
              <div className="checkout-form-column">
                <form onSubmit={handleSubmitOrder} className="checkout-card-form">
                  <div className="form-section-title">
                    <span className="step-num">1</span>
                    <h3>Customer Information</h3>
                  </div>

                  <div className="form-fields-grid">
                    <div className="form-group full-width">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Adeola Adeleke"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? "input-error" : ""}
                      />
                      {errors.fullName && <span className="field-err">{errors.fullName}</span>}
                    </div>

                    <div className="form-group half-width">
                      <label htmlFor="emailAddress">Email Address *</label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="e.g. adeola@gmail.com"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className={errors.emailAddress ? "input-error" : ""}
                      />
                      {errors.emailAddress && (
                        <span className="field-err">{errors.emailAddress}</span>
                      )}
                    </div>

                    <div className="form-group half-width">
                      <label htmlFor="phoneNumber">Phone Number *</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="e.g. +234 803 123 4567"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={errors.phoneNumber ? "input-error" : ""}
                      />
                      {errors.phoneNumber && (
                        <span className="field-err">{errors.phoneNumber}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-section-title" style={{ marginTop: "30px" }}>
                    <span className="step-num">2</span>
                    <h3>Delivery Address & Destination</h3>
                  </div>

                  <div className="form-fields-grid">
                    <div className="form-group full-width">
                      <label htmlFor="deliveryAddress">Street Address / Landmark *</label>
                      <input
                        type="text"
                        id="deliveryAddress"
                        name="deliveryAddress"
                        placeholder="e.g. Plot 24, Victoria Island, opposite City Mall"
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        className={errors.deliveryAddress ? "input-error" : ""}
                      />
                      {errors.deliveryAddress && (
                        <span className="field-err">{errors.deliveryAddress}</span>
                      )}
                    </div>

                    <div className="form-group half-width">
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

                    <div className="form-group half-width">
                      <label htmlFor="orderNotes">Delivery Instructions (Optional)</label>
                      <input
                        type="text"
                        id="orderNotes"
                        name="orderNotes"
                        placeholder="e.g. Call upon arrival at security gate"
                        value={formData.orderNotes}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-section-title" style={{ marginTop: "30px" }}>
                    <span className="step-num">3</span>
                    <h3>Select Payment Method</h3>
                  </div>

                  <div className="payment-options-group">
                    <label
                      className={`payment-choice-card ${
                        formData.paymentMethod === "Pay on Delivery" ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Pay on Delivery"
                        checked={formData.paymentMethod === "Pay on Delivery"}
                        onChange={handleChange}
                      />
                      <div className="choice-info">
                        <span className="choice-title">
                          <i className="bi bi-cash-stack"></i> Pay on Delivery (Cash / POS)
                        </span>
                        <span className="choice-desc">
                          Inspect your solar equipment upon arrival before making payment.
                        </span>
                      </div>
                    </label>

                    <label
                      className={`payment-choice-card ${
                        formData.paymentMethod === "Direct Bank Transfer" ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Direct Bank Transfer"
                        checked={formData.paymentMethod === "Direct Bank Transfer"}
                        onChange={handleChange}
                      />
                      <div className="choice-info">
                        <span className="choice-title">
                          <i className="bi bi-bank"></i> Direct Bank Transfer
                        </span>
                        <span className="choice-desc">
                          Transfer to DML Tech Corporate Account after order confirmation.
                        </span>
                      </div>
                    </label>

                    <label
                      className={`payment-choice-card ${
                        formData.paymentMethod === "Debit / Credit Card" ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Debit / Credit Card"
                        checked={formData.paymentMethod === "Debit / Credit Card"}
                        onChange={handleChange}
                      />
                      <div className="choice-info">
                        <span className="choice-title">
                          <i className="bi bi-credit-card-2-front"></i> Debit / Credit Card
                        </span>
                        <span className="choice-desc">
                          Instant card payment via secure gateway.
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className="checkout-submit-bar">
                    <button
                      type="submit"
                      className="btn btn-confirm-order"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Processing Order...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-check2-circle"></i>
                          <span>Confirm & Place Order (${grandTotal.toLocaleString()})</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Order Summary */}
              <div className="checkout-summary-column">
                <div className="checkout-summary-card">
                  <h3>Order Summary ({cart.reduce((s, i) => s + (i.quantity || 1), 0)} items)</h3>

                  <div className="summary-items-list">
                    {cart.map((item) => (
                      <div key={item.id} className="summary-item-row">
                        <img
                          src={PRODUCT_IMAGE_MAP[item.imageKey]}
                          alt={item.name}
                          className="summary-thumb"
                        />
                        <div className="summary-item-info">
                          <h4>{item.name}</h4>
                          <span className="summary-item-meta">
                            Qty: {item.quantity} × ${item.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="summary-item-price">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="summary-financial-breakdown">
                    <div className="breakdown-row">
                      <span>Equipment Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>

                    <div className="breakdown-row">
                      <span>Nationwide Solar Logistics</span>
                      <span>{shippingFee === 0 ? "FREE" : `$${shippingFee}`}</span>
                    </div>

                    <div className="breakdown-row total-row">
                      <span>Total Amount</span>
                      <span className="total-highlight">${grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="checkout-guarantee-box">
                    <div className="guarantee-line">
                      <i className="bi bi-shield-check"></i>
                      <span>100% Genuine Solar Equipment Guaranteed</span>
                    </div>
                    <div className="guarantee-line">
                      <i className="bi bi-arrow-counterclockwise"></i>
                      <span>7-Day Return & Replacement Policy</span>
                    </div>
                    <div className="guarantee-line">
                      <i className="bi bi-headset"></i>
                      <span>Free Technical Sizing & Sizing Consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Order Success Modal */}
      {completedOrder && (
        <div className="order-success-modal-overlay">
          <div className="order-success-modal-card">
            <div className="success-icon-wrap">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h2>ORDER PLACED SUCCESSFULLY!</h2>
            <div className="order-id-highlight">
              Order ID: <strong>{completedOrder.id}</strong>
            </div>

            <p className="order-success-lead">
              Thank you, <strong>{completedOrder.customer}</strong>! We have received your order
              for delivery to <strong>{completedOrder.destination}</strong>.
            </p>

            <div className="order-details-recap">
              <div className="recap-row">
                <span>Items Ordered:</span>
                <strong>{completedOrder.items} items</strong>
              </div>
              <div className="recap-row">
                <span>Total Amount:</span>
                <strong>${completedOrder.totalAmount?.toLocaleString()}</strong>
              </div>
              <div className="recap-row">
                <span>Payment Method:</span>
                <strong>{completedOrder.paymentMethod}</strong>
              </div>
              <div className="recap-row">
                <span>Status:</span>
                <span className="status-badge badge-pending">Pending Dispatch</span>
              </div>
            </div>

            <p className="order-dispatch-note">
              Our dispatch department will contact you at <strong>{completedOrder.phone}</strong>{" "}
              shortly to confirm your delivery schedule and equipment warranty registration.
            </p>

            <div className="order-success-actions">
              <button
                type="button"
                className="btn btn-purple"
                onClick={() => navigate("/shop")}
              >
                Return to Customer Store
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
