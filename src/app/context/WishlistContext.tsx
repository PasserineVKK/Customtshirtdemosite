import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  getWishlist,
  addToWishlist as addToWishlistLS,
  removeFromWishlist as removeFromWishlistLS,
  isInWishlist as isInWishlistLS,
} from "../utils/localStorage";

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const items = getWishlist();
    setWishlist(items.map((i) => i.productId));
  }, []);

  const addToWishlist = (productId: string) => {
    addToWishlistLS(productId);
    const items = getWishlist();
    setWishlist(items.map((i) => i.productId));
  };

  const removeFromWishlist = (productId: string) => {
    removeFromWishlistLS(productId);
    const items = getWishlist();
    setWishlist(items.map((i) => i.productId));
  };

  const isInWishlist = (productId: string) => {
    return isInWishlistLS(productId);
  };

  const toggleWishlist = (productId: string) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
};
