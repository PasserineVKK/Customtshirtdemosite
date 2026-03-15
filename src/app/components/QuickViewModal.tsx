import { useState } from "react";
import { X, Heart, ShoppingCart } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { QuantitySelector } from "./QuantitySelector";
import { toast } from "sonner";
import { Link } from "react-router";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Vui lòng chọn size và màu sắc");
      return;
    }

    addToCart({
      productId: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    toast.success("Đã thêm vào giỏ hàng!");
    onClose();
  };

  const inWishlist = isInWishlist(product.id);

  // Set defaults
  if (!selectedSize && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0]);
  }
  if (!selectedColor && product.colors.length > 0) {
    setSelectedColor(product.colors[0]);
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h3 className="font-semibold text-lg">Xem nhanh</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Image */}
          <div>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-2xl font-bold text-orange-600 mb-4">
              {product.price.toLocaleString("vi-VN")}₫
            </p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Màu sắc</label>
              <div className="flex items-center space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? "border-orange-600 scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Kích thước</label>
              <div className="flex items-center space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Số lượng</label>
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Thêm vào giỏ</span>
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 border-2 rounded-lg transition-colors ${
                  inWishlist
                    ? "border-orange-600 bg-orange-50"
                    : "border-gray-300 hover:border-orange-600"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${
                    inWishlist ? "fill-orange-600 text-orange-600" : ""
                  }`}
                />
              </button>
            </div>

            <Link
              to={`/products/${product.slug}`}
              onClick={onClose}
              className="block text-center text-orange-600 hover:underline text-sm"
            >
              Xem chi tiết sản phẩm →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
