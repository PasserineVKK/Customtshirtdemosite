import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem } from "../types";
import {
  getCart,
  saveCart,
  addToCart as addToCartLS,
  removeFromCart as removeFromCartLS,
  updateCartQuantity as updateCartQuantityLS,
  clearCart as clearCartLS,
} from "../utils/localStorage";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addToCart = (item: CartItem) => {
    addToCartLS(item);
    setCart(getCart());
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    removeFromCartLS(productId, size, color);
    setCart(getCart());
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      updateCartQuantityLS(productId, size, color, quantity);
      setCart(getCart());
    }
  };

  const clearCart = () => {
    clearCartLS();
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = 0; // Will be calculated with product prices

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
