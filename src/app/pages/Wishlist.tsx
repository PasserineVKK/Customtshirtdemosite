import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/products";
import { ProductGrid } from "../components/ProductGrid";
import { Link } from "react-router";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="w-8 h-8 text-orange-600 fill-orange-600" />
            <h1 className="text-3xl md:text-4xl font-bold">Sản phẩm yêu thích</h1>
          </div>
          <p className="text-gray-600">
            {wishlistProducts.length} sản phẩm trong danh sách yêu thích
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Chưa có sản phẩm yêu thích</h2>
            <p className="text-gray-600 mb-8">
              Thêm sản phẩm vào danh sách yêu thích để dễ dàng theo dõi
            </p>
            <Link
              to="/products"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Khám phá sản phẩm
            </Link>
          </div>
        ) : (
          <ProductGrid products={wishlistProducts} />
        )}
      </div>
    </div>
  );
};
