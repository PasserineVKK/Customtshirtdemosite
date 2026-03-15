import { Link } from "react-router";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { QuantitySelector } from "../components/QuantitySelector";
import { useState } from "react";

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const cartWithProducts = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  const subtotal = cartWithProducts.reduce((sum, item) => {
    const price = item.product?.price || 0;
    return sum + price * item.quantity;
  }, 0);

  const shipping = subtotal >= 500000 ? 0 : 30000;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Giỏ hàng trống</h2>
          <p className="text-gray-600 mb-8">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span>Khám phá sản phẩm</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">Giỏ hàng</h1>
          <p className="text-gray-600 mt-2">
            Bạn có {cart.length} sản phẩm trong giỏ hàng
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartWithProducts.map((item, index) => {
              const product = item.product;
              if (!product) return null;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-6"
                >
                  {/* Image */}
                  <Link
                    to={`/products/${product.slug}`}
                    className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1">
                    <Link
                      to={`/products/${product.slug}`}
                      className="font-semibold text-lg hover:text-orange-600 transition-colors"
                    >
                      {product.name}
                    </Link>

                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>Size: {item.size}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-2">
                        <span>Màu:</span>
                        <div
                          className="w-5 h-5 rounded-full border border-gray-300"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <QuantitySelector
                        quantity={item.quantity}
                        onQuantityChange={(qty) =>
                          updateQuantity(item.productId, item.size, item.color, qty)
                        }
                      />

                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {(product.price * item.quantity).toLocaleString("vi-VN")}₫
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.price.toLocaleString("vi-VN")}₫ / cái
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.productId, item.size, item.color)}
                    className="self-start p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Tóm tắt đơn hàng</h3>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Mã giảm giá</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Nhập mã"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                  >
                    Áp dụng
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ Mã giảm giá đã được áp dụng
                  </p>
                )}
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tạm tính</span>
                  <span className="font-medium">{subtotal.toLocaleString("vi-VN")}₫</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Giảm giá</span>
                    <span className="font-medium text-green-600">
                      -{discount.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Phí vận chuyển</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Miễn phí</span>
                    ) : (
                      `${shipping.toLocaleString("vi-VN")}₫`
                    )}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-baseline mb-6">
                <span className="font-semibold text-lg">Tổng cộng</span>
                <span className="font-bold text-2xl text-orange-600">
                  {total.toLocaleString("vi-VN")}₫
                </span>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="block w-full bg-black text-white text-center py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4"
              >
                Thanh toán
              </Link>

              <Link
                to="/products"
                className="block w-full text-center py-3 text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              >
                Tiếp tục mua sắm
              </Link>

              {/* Free shipping notice */}
              {subtotal < 500000 && (
                <div className="mt-6 p-4 bg-orange-50 rounded-lg text-sm">
                  <p className="text-gray-700">
                    Mua thêm{" "}
                    <span className="font-semibold text-orange-600">
                      {(500000 - subtotal).toLocaleString("vi-VN")}₫
                    </span>{" "}
                    để được miễn phí vận chuyển
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
