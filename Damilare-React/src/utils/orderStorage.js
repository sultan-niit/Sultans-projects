import { deductProductStock } from "./productStorage";

export const INITIAL_ORDERS = [
  {
    id: "#8492",
    date: "05/14/2023",
    customer: "Oluwaseun Adeleke",
    channel: "Online Store",
    destination: "Lagos",
    items: 4,
    status: "Completed",
    totalAmount: 3400,
  },
  {
    id: "#5137",
    date: "06/28/2023",
    customer: "Amina Mohammed",
    channel: "Direct Wholesale",
    destination: "Abuja",
    items: 2,
    status: "Pending",
    totalAmount: 1700,
  },
  {
    id: "#9204",
    date: "08/11/2023",
    customer: "Chinedu Eze",
    channel: "Retail Outlet",
    destination: "Port Harcourt",
    items: 6,
    status: "Completed",
    totalAmount: 4800,
  },
  {
    id: "#3681",
    date: "09/19/2023",
    customer: "Fatima Danjuma",
    channel: "Amazon Store",
    destination: "Ibadan",
    items: 1,
    status: "Pending",
    totalAmount: 850,
  },
  {
    id: "#6549",
    date: "10/04/2023",
    customer: "Babajide Sanwo",
    channel: "Dealer Network",
    destination: "Enugu",
    items: 5,
    status: "Completed",
    totalAmount: 5200,
  },
];

const ORDERS_STORAGE_KEY = "damilare_orders_list";

export function getOrdersList() {
  const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
    return INITIAL_ORDERS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse orders list", e);
    return INITIAL_ORDERS;
  }
}

export function saveOrdersList(orders) {
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
}

// Generate unique 4-digit order ID
export function generateOrderId() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `#${num}`;
}

// Add a new customer order placed from storefront
export function placeCustomerOrder(orderPayload) {
  const currentOrders = getOrdersList();
  
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, "0")}/${String(
    today.getDate()
  ).padStart(2, "0")}/${today.getFullYear()}`;

  const orderId = generateOrderId();
  const totalItemCount = (orderPayload.items || []).reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const newOrder = {
    id: orderId,
    date: formattedDate,
    customer: orderPayload.fullName || "Customer",
    channel: "Online Store",
    destination: orderPayload.state || "Lagos",
    items: totalItemCount || 1,
    status: "Pending",
    totalAmount: orderPayload.totalAmount || 0,
    email: orderPayload.emailAddress || "",
    phone: orderPayload.phoneNumber || "",
    address: orderPayload.deliveryAddress || "",
    paymentMethod: orderPayload.paymentMethod || "Pay on Delivery",
    orderedProducts: orderPayload.items || [],
  };

  const updatedOrders = [newOrder, ...currentOrders];
  saveOrdersList(updatedOrders);

  // Automatically deduct inventory stock
  if (orderPayload.items && orderPayload.items.length > 0) {
    deductProductStock(orderPayload.items);
  }

  return newOrder;
}
