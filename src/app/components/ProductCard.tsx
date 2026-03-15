import { Link } from "react-router";
import { Heart, Eye, Star } from "lucide-react";
import { Product } from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import { motion } from "motion/react";
import { StartsFiller } from "./ui/starts-rating";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuickView?.(product);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/products/${product.slug}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            
            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button
                  onClick={handleWishlistClick}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                    inWishlist
                      ? "bg-orange-600 text-white"
                      : "bg-white/90 text-gray-800 hover:bg-orange-600 hover:text-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
                </button>
                
                {onQuickView && (
                  <button
                    onClick={handleQuickView}
                    className="p-2 bg-white/90 rounded-full hover:bg-orange-600 hover:text-white transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Stock Badge */}
            {!product.inStock && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                  Hết hàng
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-4">
            <div className="flex items-center space-x-1 mb-2">
          
                <StartsFiller key = {product.id} rating = {Math.floor(product.rating+0.4)} startSize={5}/>
             
              <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
            </div>

            <h3 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
              {product.name}
            </h3>

            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">
                {product.price.toLocaleString("vi-VN")}₫
              </span>
              <span className="text-xs text-gray-500">{product.category}</span>
            </div>

            {/* Colors */}
            <div className="flex items-center space-x-2 mt-3">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
