import { useState } from "react";
import { Download, Save, ShoppingCart, Upload, Type, Palette } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export const Designer = () => {
  const { addToCart } = useCart();
  const [text, setText] = useState("YOUR TEXT");
  const [font, setFont] = useState("Arial");
  const [textColor, setTextColor] = useState("#000000");
  const [shirtColor, setShirtColor] = useState("#FFFFFF");
  const [fontSize, setFontSize] = useState(32);

  const fonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Verdana",
    "Impact",
  ];

  const shirtColors = [
    { name: "Trắng", value: "#FFFFFF" },
    { name: "Đen", value: "#000000" },
    { name: "Xám", value: "#9CA3AF" },
    { name: "Xanh Navy", value: "#1E3A8A" },
    { name: "Đỏ", value: "#DC2626" },
    { name: "Xanh lá", value: "#16A34A" },
  ];

  const handleAddToCart = () => {
    addToCart({
      productId: "custom",
      size: "M",
      color: shirtColor,
      quantity: 1,
      customDesign: {
        text,
        font,
        textColor,
      },
    });
    toast.success("Thiết kế đã được thêm vào giỏ hàng!");
  };

  const handleSaveDesign = () => {
    toast.success("Thiết kế đã được lưu!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold">Công cụ thiết kế</h1>
          <p className="text-gray-600 mt-2">Tạo thiết kế áo thun độc đáo của riêng bạn</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Text Controls */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Type className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Văn bản</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nội dung</label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Nhập văn bản của bạn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Font chữ</label>
                  <select
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    {fonts.map((f) => (
                      <option key={f} value={f} style={{ fontFamily: f }}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Kích thước chữ</label>
                  <input
                    type="range"
                    min="16"
                    max="72"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="text-sm text-gray-600 mt-1">{fontSize}px</div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Màu chữ</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shirt Color */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Palette className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Màu áo</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {shirtColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setShirtColor(color.value)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      shirtColor === color.value
                        ? "border-orange-600 scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded border border-gray-300"
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="text-xs mt-2 text-center">{color.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Image */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Upload className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Tải lên hình ảnh</h3>
              </div>

              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-colors text-sm text-gray-600">
                Chọn file hoặc kéo thả vào đây
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Hỗ trợ: JPG, PNG, SVG (tối đa 5MB)
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleSaveDesign}
                className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                <Save className="w-5 h-5" />
                <span>Lưu thiết kế</span>
              </button>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center space-x-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Thêm vào giỏ hàng</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                <Download className="w-5 h-5" />
                <span>Xuất file</span>
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 sticky top-24">
              <h3 className="font-semibold text-lg mb-6">Xem trước</h3>
              
              <div className="relative aspect-square max-w-xl mx-auto flex items-center justify-center">
                {/* T-shirt outline */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 500"
                    className="w-full h-full"
                    style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))" }}
                  >
                    {/* T-shirt shape */}
                    <path
                      d="M 100 80 L 60 100 L 60 180 L 80 180 L 80 480 L 320 480 L 320 180 L 340 180 L 340 100 L 300 80 L 280 40 L 240 20 L 160 20 L 120 40 Z"
                      fill={shirtColor}
                      stroke="#ddd"
                      strokeWidth="2"
                    />
                    {/* Neck */}
                    <ellipse
                      cx="200"
                      cy="60"
                      rx="30"
                      ry="40"
                      fill={shirtColor === "#FFFFFF" ? "#f0f0f0" : shirtColor}
                      stroke="#ddd"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Custom text */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      fontFamily: font,
                      fontSize: `${fontSize}px`,
                      color: textColor,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: "60px",
                    }}
                  >
                    {text}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Thiết kế này chỉ là hình minh họa. Sản phẩm thực tế có thể khác một chút.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
