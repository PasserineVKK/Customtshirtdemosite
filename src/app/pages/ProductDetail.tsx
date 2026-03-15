import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Heart, Share2, Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/products";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { addToRecentlyViewed, getRecentlyViewed } from "../utils/localStorage";
import { ProductCard } from "../components/ProductCard";
import { QuantitySelector } from "../components/QuantitySelector";
import { toast } from "sonner";
import { StartsFiller } from "../components/ui/starts-rating";

export const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product.id);
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);

      // Load recently viewed
      const recentIds = getRecentlyViewed().filter((id) => id !== product.id);
      const recent = recentIds
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is Product => p !== undefined)
        .slice(0, 4);
      setRecentProducts(recent);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
          <Link to="/products" className="text-orange-600 hover:underline">
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    );
  }

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
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link to="/" className="hover:text-orange-600">Trang chủ</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-orange-600">Sản phẩm</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImage((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImage((prev) =>
                        prev === product.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-orange-600"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center space-x-1 mb-3">
            
                <StartsFiller rating = {Math.floor(product.rating+0.4)} startSize={10}/>
              
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviews} đánh giá)
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-baseline space-x-4 mb-6">
              <span className="text-3xl font-bold text-orange-600">
                {product.price.toLocaleString("vi-VN")}₫
              </span>
              <span className="text-sm text-gray-500">Đã bao gồm VAT</span>
            </div>

            <p className="text-gray-700 mb-8">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block font-semibold mb-3">
                Màu sắc: <span className="text-gray-600 font-normal">{selectedColor}</span>
              </label>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? "border-orange-600 scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="font-semibold">Kích thước</label>
                <button className="text-sm text-orange-600 hover:underline">
                  Hướng dẫn chọn size
                </button>
              </div>
              <div className="flex items-center space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block font-semibold mb-3">Số lượng</label>
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                min={1}
                max={10}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
              </button>
              
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  inWishlist
                    ? "border-orange-600 bg-orange-50"
                    : "border-gray-300 hover:border-orange-600"
                }`}
              >
                <Heart
                  className={`w-6 h-6 ${inWishlist ? "fill-orange-600 text-orange-600" : ""}`}
                />
              </button>

              <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Truck className="w-5 h-5 text-gray-600" />
                <span>Miễn phí vận chuyển cho đơn hàng từ 500.000₫</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <span>Đổi trả trong vòng 30 ngày</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Shield className="w-5 h-5 text-gray-600" />
                <span>Bảo hành chất lượng sản phẩm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        {recentProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Sản phẩm đã xem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
