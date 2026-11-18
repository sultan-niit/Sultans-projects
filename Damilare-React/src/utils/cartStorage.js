const CART_STORAGE_KEY = "damilare_customer_cart";

export function getCart() {
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse customer cart", e);
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  // Dispatch custom event for real-time header badge updates
  window.dispatchEvent(new Event("cartUpdated"));
}

export function addToCart(product, quantity = 1) {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      priceNgn: product.priceNgn,
      imageKey: product.imageKey,
      specs: product.specs,
      quantity: quantity,
    });
  }

  saveCart(cart);
  return cart;
}

export function updateCartQuantity(productId, newQuantity) {
  let cart = getCart();
  if (newQuantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  } else {
    const idx = cart.findIndex((item) => item.id === productId);
    if (idx !== -1) {
      cart[idx].quantity = newQuantity;
    }
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  return cart;
}

export function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  window.dispatchEvent(new Event("cartUpdated"));
}

export function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
}

export function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
}
