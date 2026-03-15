import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="relative -mt-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Không tìm thấy trang</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Về trang chủ</span>
          </Link>
          
          <Link
            to="/products"
            className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"
          >
            <Search className="w-5 h-5" />
            <span>Xem sản phẩm</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
