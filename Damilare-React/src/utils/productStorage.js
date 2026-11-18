import inverterImg from "../assets/body-images/inverter.jpg";
import batteryImg from "../assets/body-images/battery.jpg";
import generatorImg from "../assets/body-images/generator.jpg";
import chargerImg from "../assets/body-images/charger.jpg";
import powerStationImg from "../assets/body-images/power-station.jpg";
import solarPanelImg from "../assets/body-images/solar-panel.jpg";

export const PRODUCT_IMAGE_MAP = {
  inverter: inverterImg,
  battery: batteryImg,
  generator: generatorImg,
  charger: chargerImg,
  powerStation: powerStationImg,
  solarPanel: solarPanelImg,
};

export const INITIAL_PRODUCTS = [
  {
    id: "prod-1",
    name: "SolarNet Hybrid Inverter 5kVA",
    category: "Inverters",
    price: 850,
    priceNgn: "₦1,275,000",
    rating: 4.9,
    reviewsCount: 38,
    stock: 42,
    specs: "48V DC • Pure Sine Wave • 98% Efficiency",
    imageKey: "inverter",
    description: "Heavy-duty pure sine wave hybrid inverter with built-in MPPT solar charger for residential and commercial setups.",
    warranty: "5 Years Warranty",
    badge: "Bestseller",
  },
  {
    id: "prod-2",
    name: "Lithium PowerWall Battery 10kWh",
    category: "Batteries",
    price: 2400,
    priceNgn: "₦3,600,000",
    rating: 5.0,
    reviewsCount: 52,
    stock: 18,
    specs: "51.2V 200Ah • 6000+ Cycles • LiFePO4",
    imageKey: "battery",
    description: "Long-cycle LiFePO4 wall-mounted energy storage battery with smart BMS, thermal management and status display.",
    warranty: "10 Years Warranty",
    badge: "Premium",
  },
  {
    id: "prod-3",
    name: "Silent Diesel Backup Generator 5kVA",
    category: "Generators",
    price: 1200,
    priceNgn: "₦1,800,000",
    rating: 4.8,
    reviewsCount: 24,
    stock: 7,
    specs: "Single Phase • Soundproof • ATS Ready",
    imageKey: "generator",
    description: "Low-noise diesel standby generator engineered for continuous commercial and residential emergency power.",
    warranty: "3 Years Warranty",
    badge: "Heavy Duty",
  },
  {
    id: "prod-4",
    name: "MPPT Solar Charge Controller 60A",
    category: "Controllers",
    price: 180,
    priceNgn: "₦270,000",
    rating: 4.7,
    reviewsCount: 41,
    stock: 55,
    specs: "12V/24V/36V/48V Auto • 150V Max PV",
    imageKey: "charger",
    description: "High-precision Maximum Power Point Tracking (MPPT) regulator with 99.5% efficiency and LCD display.",
    warranty: "3 Years Warranty",
    badge: "High Efficiency",
  },
  {
    id: "prod-5",
    name: "Portable Solar Power Station 1000W",
    category: "Power Stations",
    price: 450,
    priceNgn: "₦675,000",
    rating: 4.9,
    reviewsCount: 29,
    stock: 31,
    specs: "1024Wh Capacity • AC/DC/USB-C PD 100W",
    imageKey: "powerStation",
    description: "All-in-one portable power generator with rapid dual-charging, pure sine wave AC output, and LED light.",
    warranty: "2 Years Warranty",
    badge: "Portable",
  },
  {
    id: "prod-6",
    name: "Monocrystalline Solar Panel 450W",
    category: "Solar Panels",
    price: 160,
    priceNgn: "₦240,000",
    rating: 5.0,
    reviewsCount: 67,
    stock: 120,
    specs: "Half-Cell Tech • 21.3% Efficiency • IP68",
    imageKey: "solarPanel",
    description: "Tier-1 high efficiency monocrystalline photovoltaic panel with anti-reflective tempered glass and aluminum frame.",
    warranty: "25 Years Warranty",
    badge: "Top Rated",
  },
];

const PRODUCTS_STORAGE_KEY = "damilare_products_list";
const INSTOCK_STORAGE_KEY = "damilare_instock_list";

export function getProductsList() {
  const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse products list", e);
    return INITIAL_PRODUCTS;
  }
}

export function saveProductsList(products) {
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
}

// In-Stock table default items
export const INITIAL_INSTOCK = [
  {
    id: "#4183",
    product: "SolarNet Hybrid Inverter",
    category: "Inverters",
    channel: "Retail Store",
    instruction: "Routine Restock",
    available: 42,
    maxCapacity: 100,
    status: "Completed",
  },
  {
    id: "#7926",
    product: "Lithium PowerWall Battery",
    category: "Batteries",
    channel: "Wholesale Warehouse",
    instruction: "Warranty Replacement",
    available: 18,
    maxCapacity: 100,
    status: "Pending",
  },
  {
    id: "#1508",
    product: "Silent Diesel Generator",
    category: "Generators",
    channel: "Online Distribution",
    instruction: "Buffer Replenishment",
    available: 7,
    maxCapacity: 50,
    status: "Completed",
  },
  {
    id: "#9342",
    product: "MPPT Charge Controller",
    category: "Controllers",
    channel: "Direct Dispatch",
    instruction: "Warehouse Transfer",
    available: 55,
    maxCapacity: 120,
    status: "Completed",
  },
  {
    id: "#2675",
    product: "Portable Power Station",
    category: "Power Stations",
    channel: "Branch Distribution",
    instruction: "Emergency Restock",
    available: 31,
    maxCapacity: 60,
    status: "Pending",
  },
  {
    id: "#3819",
    product: "Monocrystalline Solar Panel",
    category: "Solar Panels",
    channel: "Online Store",
    instruction: "Container Arrival",
    available: 120,
    maxCapacity: 200,
    status: "Completed",
  },
];

export function getInStockList() {
  const stored = localStorage.getItem(INSTOCK_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(INSTOCK_STORAGE_KEY, JSON.stringify(INITIAL_INSTOCK));
    return INITIAL_INSTOCK;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse in-stock list", e);
    return INITIAL_INSTOCK;
  }
}

export function saveInStockList(list) {
  localStorage.setItem(INSTOCK_STORAGE_KEY, JSON.stringify(list));
}

// Deduct stock when an order is placed
export function deductProductStock(items) {
  const products = getProductsList();
  const instock = getInStockList();

  items.forEach((item) => {
    // Deduct from products catalog
    const pIdx = products.findIndex((p) => p.id === item.id || p.name === item.name);
    if (pIdx !== -1) {
      products[pIdx].stock = Math.max(0, products[pIdx].stock - (item.quantity || 1));
    }

    // Deduct from InStock table
    const sIdx = instock.findIndex(
      (s) =>
        s.category?.toLowerCase() === item.category?.toLowerCase() ||
        item.name?.toLowerCase().includes(s.product?.toLowerCase())
    );
    if (sIdx !== -1) {
      instock[sIdx].available = Math.max(0, instock[sIdx].available - (item.quantity || 1));
    }
  });

  saveProductsList(products);
  saveInStockList(instock);
}
