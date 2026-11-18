import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../assets/icon-images/DML-logo.png";
import {
  getProductsList,
  PRODUCT_IMAGE_MAP,
} from "../utils/productStorage";
import {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  getCartItemCount,
  getCartTotal,
} from "../utils/cartStorage";

export default function CustomerShop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [customerUser, setCustomerUser] = useState(null);

  const refreshData = () => {
    setProducts(getProductsList());
    setCart(getCart());
    const storedCustomer = localStorage.getItem("customer_user");
    if (storedCustomer) {
      try {
        setCustomerUser(JSON.parse(storedCustomer));
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    refreshData();

    const handleCartUpdate = () => {
      setCart(getCart());
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const categories = [
    "All",
    "Inverters",
    "Batteries",
    "Solar Panels",
    "Generators",
    "Controllers",
    "Power Stations",
  ];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setToastMessage(`Added "${product.name}" to cart!`);
    setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  const cartCount = getCartItemCount();
  const cartTotal = getCartTotal();

  return (
    <div className="customer-store-wrapper">
      {/* Customer Header */}
      <header className="customer-store-header">
        <div className="customer-header-container">
          <div className="customer-brand">
            <Link to="/shop" className="customer-brand-link">
              <img src={brandLogo} alt="DML Tech Logo" className="customer-logo-img" />
              <div className="customer-brand-titles">
                <span className="customer-brand-name">DML TECH</span>
                <span className="customer-brand-tagline">Solar Energy & Power Solutions</span>
              </div>
            </Link>
          </div>

          <div className="customer-search-wrapper">
            <i className="bi bi-search customer-search-icon"></i>
            <input
              type="text"
              placeholder="Search solar panels, inverters, batteries, generators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="customer-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="customer-search-clear"
                onClick={() => setSearchQuery("")}
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>

          <div className="customer-header-actions">
            <div className="customer-support-pill">
              <i className="bi bi-telephone-fill"></i>
              <div className="support-info">
                <span className="support-label">Direct Order Hotline</span>
                <span className="support-phone">+234 801 234 5678</span>
              </div>
            </div>

            <Link
              to="/customer-profile"
              className="customer-account-btn"
              title="Customer User Account & Edit Info"
            >
              <i className="bi bi-person-circle"></i>
              <div className="account-btn-text">
                <span className="account-greet">Customer</span>
                <span className="account-name">
                  {customerUser?.fullName
                    ? customerUser.fullName.split(" ")[0]
                    : "User"}
                </span>
              </div>
            </Link>

            <button
              type="button"
              className="customer-cart-btn"
              onClick={() => setCartOpen(true)}
              title="View Shopping Cart"
            >
              <i className="bi bi-cart3"></i>
              <span className="cart-btn-label">Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="customer-hero-section">
        <div className="customer-hero-content">
          <span className="customer-hero-badge">
            <i className="bi bi-sun-fill"></i> Official Customer Store
          </span>
          <h1>Clean, Dependable Solar Power For Homes & Businesses</h1>
          <p>
            Direct factory-guaranteed solar inverters, lithium energy storage, high-efficiency
            photovoltaic panels, and low-noise standby generators. Nationwide delivery & warranty.
          </p>

          <div className="customer-trust-badges">
            <div className="trust-badge-item">
              <i className="bi bi-truck"></i>
              <span>Nationwide Fast Dispatch</span>
            </div>
            <div className="trust-badge-item">
              <i className="bi bi-shield-check"></i>
              <span>Up to 25 Years Warranty</span>
            </div>
            <div className="trust-badge-item">
              <i className="bi bi-patch-check-fill"></i>
              <span>100% Tested & Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <main className="customer-catalog-section">
        <div className="catalog-container">
          {/* Category Filter Pills */}
          <div className="catalog-filters-row">
            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="catalog-results-counter">
              Showing <strong>{filteredProducts.length}</strong> solar products
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="empty-catalog-state">
              <i className="bi bi-search"></i>
              <h3>No products found</h3>
              <p>Try searching for a different keyword or choose another category.</p>
              <button
                type="button"
                className="btn btn-purple"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="customer-products-grid">
              {filteredProducts.map((product) => {
                const imgSource = PRODUCT_IMAGE_MAP[product.imageKey];
                const isLowStock = product.stock > 0 && product.stock <= 10;
                const isOutOfStock = product.stock <= 0;

                return (
                  <div key={product.id} className="store-product-card">
                    <div className="store-card-image-wrap">
                      <img src={imgSource} alt={product.name} className="store-card-image" />
                      {product.badge && (
                        <span className="store-product-tag">{product.badge}</span>
                      )}
                      <span className="store-warranty-tag">
                        <i className="bi bi-shield-check"></i> {product.warranty}
                      </span>
                    </div>

                    <div className="store-card-body">
                      <div className="store-category-label">{product.category}</div>
                      <h3 className="store-product-title">{product.name}</h3>
                      <p className="store-specs-summary">{product.specs}</p>

                      <div className="store-rating-row">
                        <div className="stars">
                          {"★".repeat(Math.floor(product.rating))}
                          {"☆".repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span className="rating-score">
                          {product.rating} ({product.reviewsCount} reviews)
                        </span>
                      </div>

                      <div className="store-pricing-row">
                        <div className="price-block">
                          <span className="price-primary">${product.price.toLocaleString()}</span>
                          {product.priceNgn && (
                            <span className="price-secondary">({product.priceNgn})</span>
                          )}
                        </div>

                        <div className="stock-status-indicator">
                          {isOutOfStock ? (
                            <span className="stock-tag out-of-stock">Out of Stock</span>
                          ) : isLowStock ? (
                            <span className="stock-tag low-stock">Only {product.stock} left</span>
                          ) : (
                            <span className="stock-tag in-stock">
                              <i className="bi bi-check2-circle"></i> In Stock ({product.stock})
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn store-add-cart-btn"
                        disabled={isOutOfStock}
                        onClick={() => handleAddToCart(product)}
                      >
                        <i className="bi bi-cart-plus"></i>
                        <span>{isOutOfStock ? "Sold Out" : "Add to Cart"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Customer Footer (No Admin Links!) */}
      <footer className="customer-store-footer">
        <div className="customer-footer-container">
          <div className="footer-col brand-col">
            <div className="customer-footer-brand">
              <img src={brandLogo} alt="DML Logo" className="footer-logo" />
              <span className="footer-brand-title">DML TECH SOLAR ENERGY</span>
            </div>
            <p>
              Premium solar power installations, inverter systems, LiFePO4 batteries, and
              industrial backup generation for residential, corporate, and agricultural projects.
            </p>
          </div>

          <div className="footer-col">
            <h4>Equipment Categories</h4>
            <ul>
              <li>Hybrid Solar Inverters</li>
              <li>Lithium PowerWall Storage</li>
              <li>Monocrystalline Solar Panels</li>
              <li>Soundproof Standby Generators</li>
              <li>MPPT Solar Charge Regulators</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Support</h4>
            <ul>
              <li>
                <i className="bi bi-geo-alt"></i> Plot 12, Admiralty Way, Lekki Phase 1, Lagos
              </li>
              <li>
                <i className="bi bi-telephone"></i> +234 801 234 5678 / +234 802 345 6789
              </li>
              <li>
                <i className="bi bi-envelope"></i> orders@dmlsolarenergy.com
              </li>
              <li>
                <i className="bi bi-clock"></i> Mon - Sat: 8:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
        <div className="customer-footer-bottom">
          <p>© {new Date().getFullYear()} DML Tech Solar Energy. All rights reserved.</p>
        </div>
      </footer>

      {/* Slide-Over Cart Drawer */}
      {cartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setCartOpen(false)}>
          <aside
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Shopping Cart Drawer"
          >
            <div className="cart-drawer-header">
              <div className="drawer-title-box">
                <i className="bi bi-bag-check-fill"></i>
                <h2>Shopping Cart ({cartCount})</h2>
              </div>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setCartOpen(false)}
                title="Close Cart"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="cart-drawer-body">
              {cart.length === 0 ? (
                <div className="empty-cart-drawer">
                  <i className="bi bi-cart-x"></i>
                  <h3>Your cart is empty</h3>
                  <p>Browse our catalog and add solar equipment to your order.</p>
                  <button
                    type="button"
                    className="btn btn-purple"
                    onClick={() => setCartOpen(false)}
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-drawer-item">
                      <img
                        src={PRODUCT_IMAGE_MAP[item.imageKey]}
                        alt={item.name}
                        className="cart-item-thumb"
                      />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <div className="cart-item-price-row">
                          <span className="cart-unit-price">${item.price.toLocaleString()}</span>
                          {item.priceNgn && (
                            <span className="cart-unit-price-ngn">{item.priceNgn}</span>
                          )}
                        </div>

                        <div className="cart-qty-controls">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            title="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            title="Increase quantity"
                          >
                            +
                          </button>

                          <button
                            type="button"
                            className="cart-remove-btn"
                            onClick={() => removeFromCart(item.id)}
                            title="Remove item"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-summary-line">
                  <span>Subtotal</span>
                  <span className="summary-value">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="cart-summary-line note">
                  <span>Shipping & Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="cart-summary-line grand-total">
                  <span>Estimated Total</span>
                  <span className="summary-value">${cartTotal.toLocaleString()}</span>
                </div>

                <div className="cart-drawer-actions">
                  <button
                    type="button"
                    className="btn btn-checkout-primary"
                    onClick={() => {
                      setCartOpen(false);
                      navigate("/checkout");
                    }}
                  >
                    Proceed to Checkout <i className="bi bi-arrow-right"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-cart-continue"
                    onClick={() => setCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* Added to Cart Toast */}
      {toastMessage && (
        <div className="customer-toast">
          <i className="bi bi-check-circle-fill"></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
