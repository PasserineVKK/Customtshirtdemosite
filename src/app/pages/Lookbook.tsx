import { useState } from "react";
import { lookbookImages } from "../data/lookbook";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Lookbook = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "streetwear", name: "Streetwear" },
    { id: "casual", name: "Casual" },
    { id: "minimal", name: "Minimal" },
    { id: "urban", name: "Urban" },
    { id: "graphic", name: "Graphic" },
    { id: "vintage", name: "Vintage" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? lookbookImages
      : lookbookImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lookbook</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Khám phá cách phối đồ với áo thun TeeForge qua những bộ ảnh lifestyle đầy cảm hứng
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 bg-white border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="16px">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-semibold capitalize">{image.category}</p>
                    <p className="text-sm text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tạo phong cách riêng của bạn
          </h2>
          <p className="text-gray-600 mb-8">
            Khám phá bộ sưu tập áo thun TeeForge và thiết kế mẫu áo độc đáo của riêng bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/products"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Xem sản phẩm
            </a>
            <a
              href="/designer"
              className="bg-white border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Thiết kế ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};