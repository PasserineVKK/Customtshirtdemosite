export interface CartItem {
  productId: string;
  size: string;
  color: string;
  quantity: number;
  customDesign?: {
    text?: string;
    font?: string;
    textColor?: string;
    image?: string;
  };
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface CheckoutForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  note?: string;
  paymentMethod: "COD" | "CARD" | "PAYPAL";
}
