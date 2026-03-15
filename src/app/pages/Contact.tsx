import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tin nhắn của bạn đã được gửi! (Demo)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Liên hệ</h1>
          <p className="text-gray-600">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4">Thông tin liên hệ</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Địa chỉ</p>
                    <p className="text-sm text-gray-600 mt-1">
                      123 Đường ABC, Phường Bến Nghé<br />
                      Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Điện thoại</p>
                    <p className="text-sm text-gray-600 mt-1">
                      0123 456 789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 mt-1">
                      contact@teeforge.demo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Giờ làm việc</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Thứ 2 - Thứ 6: 8:00 - 20:00<br />
                      Thứ 7 - CN: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4">Bản đồ</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Map Placeholder</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg shadow-sm p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Kết nối với chúng tôi</h3>
              <p className="text-sm text-orange-100 mb-4">
                Theo dõi TeeForge trên mạng xã hội để cập nhật xu hướng mới nhất
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-semibold">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-semibold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-semibold">TW</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-2">Gửi tin nhắn cho chúng tôi</h2>
              <p className="text-gray-600 mb-6">
                Điền thông tin dưới đây và chúng tôi sẽ phản hồi trong vòng 24 giờ
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tiêu đề <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Vấn đề bạn muốn trao đổi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nội dung <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
                    placeholder="Chi tiết nội dung tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span>Gửi tin nhắn</span>
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
              <h3 className="text-xl font-bold mb-4">Câu hỏi thường gặp</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Làm thế nào để đặt hàng?</h4>
                  <p className="text-sm text-gray-600">
                    Bạn có thể chọn sản phẩm từ bộ sưu tập hoặc tự thiết kế áo của mình bằng công cụ Designer, sau đó thêm vào giỏ hàng và thanh toán.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Thời gian giao hàng là bao lâu?</h4>
                  <p className="text-sm text-gray-600">
                    Thời gian giao hàng tiêu chuẩn là 2-3 ngày làm việc đối với đơn hàng có sẵn, và 5-7 ngày cho đơn hàng custom.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Có chính sách đổi trả không?</h4>
                  <p className="text-sm text-gray-600">
                    Có, chúng tôi chấp nhận đổi trả trong vòng 30 ngày kể từ ngày nhận hàng với sản phẩm còn nguyên tem mác.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
