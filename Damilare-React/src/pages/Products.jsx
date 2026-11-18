import DashboardLayout from "../components/DashboardLayout";

import inverterImg from "../assets/body-images/inverter.jpg";
import batteryImg from "../assets/body-images/battery.jpg";
import generatorImg from "../assets/body-images/generator.jpg";
import chargerImg from "../assets/body-images/charger.jpg";
import powerStationImg from "../assets/body-images/power-station.jpg";
import solarPanelImg from "../assets/body-images/solar-panel.jpg";

export default function Products() {
  return (
    <DashboardLayout>
      <section className="products-card">
        <div className="products-header">
          <div className="header-title">
            <h1>Products</h1>
            <p>Manage all solar and power equipment inventory</p>
          </div>

          <div className="header-actions">
            <button type="button" className="btn btn-purple">
              <i className="bi bi-plus"></i> Add Product
            </button>
          </div>
        </div>

        <div className="products-filter-row">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
            />
          </div>

          <div className="filter-controls">
            <button type="button" className="btn btn-category active">
              All
            </button>
            <button type="button" className="btn btn-category">
              Inverters
            </button>
            <button type="button" className="btn btn-category">
              Batteries
            </button>
            <button type="button" className="btn btn-category">
              Generators
            </button>
            <button type="button" className="btn btn-category">
              Controllers
            </button>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-item">
            <div className="product-thumb">
              <img src={inverterImg} alt="SolarNet Hybrid Inverter" />
              <span className="badge in-stock-badge">In Stock</span>
            </div>
            <div className="product-details">
              <span className="product-category">Inverters</span>
              <h3 className="product-title">SolarNet Hybrid Inverter 5kW</h3>
              <div className="product-pricing-row">
                <span className="product-price">$850.00</span>
                <span className="product-qty">24 units</span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-thumb">
              <img src={batteryImg} alt="EcoVolt LiFePO4 Battery" />
              <span className="badge in-stock-badge">In Stock</span>
            </div>
            <div className="product-details">
              <span className="product-category">Batteries</span>
              <h3 className="product-title">EcoVolt LiFePO4 Battery 5kWh 51.2V</h3>
              <div className="product-pricing-row">
                <span className="product-price">$1,450.00</span>
                <span className="product-qty">18 units</span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-thumb">
              <img src={generatorImg} alt="Silent Power Inverter Generator" />
              <span className="badge in-stock-badge">In Stock</span>
            </div>
            <div className="product-details">
              <span className="product-category">Generators</span>
              <h3 className="product-title">Silent Power Inverter Generator 2.2kVA</h3>
              <div className="product-pricing-row">
                <span className="product-price">$620.00</span>
                <span className="product-qty">12 units</span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-thumb">
              <img src={chargerImg} alt="Smart MPPT Solar Charge Controller" />
              <span className="badge in-stock-badge">In Stock</span>
            </div>
            <div className="product-details">
              <span className="product-category">Controllers</span>
              <h3 className="product-title">Smart MPPT Solar Charge Controller 40A</h3>
              <div className="product-pricing-row">
                <span className="product-price">$135.00</span>
                <span className="product-quantity">45 units</span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-thumb">
              <img src={powerStationImg} alt="PowerMax Portable Power Station" />
              <span className="badge in-stock-badge">In Stock</span>
            </div>
            <div className="product-details">
              <span className="product-category">Power Stations</span>
              <h3 className="product-title">PowerMax Portable Power Station 1500Wh</h3>
              <div className="product-pricing-row">
                <span className="product-price">$899.00</span>
                <span className="product-qty">15 units</span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-thumb">
              <img src={solarPanelImg} alt="Monocrystalline Solar Panel" />
              <span className="badge in-stock-badge">In Stock</span>
            </div>
            <div className="product-details">
              <span className="product-category">Solar Panels</span>
              <h3 className="product-title">Monocrystalline Solar Panel 450W</h3>
              <div className="product-pricing-row">
                <span className="product-price">$180.00</span>
                <span className="product-qty">60 units</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
