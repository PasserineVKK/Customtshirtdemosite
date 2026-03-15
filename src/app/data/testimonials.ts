export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Minh Anh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    content: "Chất lượng áo rất tốt, vải mềm mại và thoải mái. Thiết kế custom cũng rất đẹp. Sẽ ủng hộ shop lâu dài!",
    date: "2 tuần trước"
  },
  {
    id: "2",
    name: "Quang Huy",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    rating: 5,
    content: "Giao hàng nhanh, đóng gói cẩn thận. Áo đẹp y như hình, size chuẩn. Giá cả hợp lý so với chất lượng.",
    date: "3 tuần trước"
  },
  {
    id: "3",
    name: "Thu Hà",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    content: "Công cụ thiết kế rất dễ sử dụng, tự tay thiết kế áo của mình rất thú vị. Kết quả in ra đẹp, màu sắc sống động.",
    date: "1 tháng trước"
  },
  {
    id: "4",
    name: "Đức Anh",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    rating: 4,
    content: "Áo đẹp, form dáng đẹp. Có điểm trừ là ship hơi lâu nhưng được cái chất lượng ok nên vẫn hài lòng.",
    date: "1 tháng trước"
  }
];
