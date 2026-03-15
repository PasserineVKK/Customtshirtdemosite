import { CartItem, WishlistItem } from "../types";

const CART_KEY = "teeforge_cart";
const WISHLIST_KEY = "teeforge_wishlist";
const RECENT_KEY = "teeforge_recent";

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const saveCart = (cart: CartItem[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (item: CartItem): void => {
  const cart = getCart();
  const existingIndex = cart.findIndex(
    (i) =>
      i.productId === item.productId &&
      i.size === item.size &&
      i.color === item.color
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
};

export const removeFromCart = (productId: string, size: string, color: string): void => {
  const cart = getCart();
  const filtered = cart.filter(
    (i) => !(i.productId === productId && i.size === size && i.color === color)
  );
  saveCart(filtered);
};

export const updateCartQuantity = (
  productId: string,
  size: string,
  color: string,
  quantity: number
): void => {
  const cart = getCart();
  const item = cart.find(
    (i) => i.productId === productId && i.size === size && i.color === color
  );
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
};

export const clearCart = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CART_KEY);
};

export const getWishlist = (): WishlistItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
  } catch {
    return [];
  }
};

export const saveWishlist = (wishlist: WishlistItem[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};

export const addToWishlist = (productId: string): void => {
  const wishlist = getWishlist();
  const exists = wishlist.find((i) => i.productId === productId);
  if (!exists) {
    wishlist.push({ productId, addedAt: new Date().toISOString() });
    saveWishlist(wishlist);
  }
};

export const removeFromWishlist = (productId: string): void => {
  const wishlist = getWishlist();
  const filtered = wishlist.filter((i) => i.productId !== productId);
  saveWishlist(filtered);
};

export const isInWishlist = (productId: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.some((i) => i.productId === productId);
};

export const getRecentlyViewed = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const recent = localStorage.getItem(RECENT_KEY);
    return recent ? JSON.parse(recent) : [];
  } catch {
    return [];
  }
};

export const addToRecentlyViewed = (productId: string): void => {
  if (typeof window === "undefined") return;
  let recent = getRecentlyViewed();
  recent = recent.filter((id) => id !== productId);
  recent.unshift(productId);
  recent = recent.slice(0, 8);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
};
