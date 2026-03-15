export interface Message {
  id: string;
  sender: "user" | "admin";
  content: string;
  time: string;
}

export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
}

export const conversations: Conversation[] = [
  {
    id: "1",
    name: "TeeForge Support",
    lastMessage: "Chúng tôi sẽ hỗ trợ bạn ngay!",
    time: "10:30 AM",
    unread: 2,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    name: "Đơn hàng #12345",
    lastMessage: "Đơn hàng đang được xử lý",
    time: "Yesterday",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    name: "Thiết kế Custom",
    lastMessage: "Thiết kế của bạn đã được lưu",
    time: "2 days ago",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
  }
];

export const messages: Message[] = [
  {
    id: "1",
    sender: "admin",
    content: "Xin chào! Chào mừng bạn đến với TeeForge. Tôi có thể giúp gì cho bạn?",
    time: "10:25 AM"
  },
  {
    id: "2",
    sender: "user",
    content: "Tôi muốn hỏi về chính sách đổi trả hàng",
    time: "10:27 AM"
  },
  {
    id: "3",
    sender: "admin",
    content: "Chúng tôi chấp nhận đổi trả trong vòng 30 ngày kể từ ngày nhận hàng. Sản phẩm cần còn nguyên tem mác và chưa qua sử dụng.",
    time: "10:28 AM"
  },
  {
    id: "4",
    sender: "admin",
    content: "Bạn có thể gửi sản phẩm về địa chỉ của chúng tôi hoặc liên hệ để được hỗ trợ đổi trả tận nơi.",
    time: "10:28 AM"
  },
  {
    id: "5",
    sender: "user",
    content: "Vậy phí ship đổi trả do ai chịu?",
    time: "10:29 AM"
  },
  {
    id: "6",
    sender: "admin",
    content: "Nếu lỗi do shop, chúng tôi sẽ chịu phí ship. Nếu bạn muốn đổi size/màu, bạn sẽ chịu phí ship 1 chiều nhé!",
    time: "10:30 AM"
  }
];
