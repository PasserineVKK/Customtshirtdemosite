export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Tee",
    slug: "classic-black-tee",
    price: 299000,
    description: "Premium cotton t-shirt with a minimalist design. Perfect for everyday wear with superior comfort and durability.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=800&fit=crop"
    ],
    colors: ["#000000", "#FFFFFF", "#9CA3AF"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Basic",
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: "2",
    name: "Vintage Graphic Tee",
    slug: "vintage-graphic-tee",
    price: 349000,
    description: "Retro-inspired graphic tee with distressed print. Made from soft, breathable fabric for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop"
    ],
    colors: ["#1F2937", "#FFFFFF", "#EF4444"],
    sizes: ["S", "M", "L", "XL"],
    category: "Graphic",
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: "3",
    name: "Oversized Street Tee",
    slug: "oversized-street-tee",
    price: 399000,
    description: "Trendy oversized fit with modern streetwear aesthetics. Heavy-weight cotton for premium quality.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop"
    ],
    colors: ["#000000", "#9CA3AF", "#F59E0B"],
    sizes: ["M", "L", "XL", "XXL"],
    category: "Streetwear",
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: "4",
    name: "Minimalist White Tee",
    slug: "minimalist-white-tee",
    price: 289000,
    description: "Clean and simple white tee. Essential wardrobe staple with a perfect fit and premium cotton blend.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800&h=800&fit=crop"
    ],
    colors: ["#FFFFFF", "#F3F4F6", "#E5E7EB"],
    sizes: ["S", "M", "L", "XL"],
    category: "Basic",
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  {
    id: "5",
    name: "Urban Logo Tee",
    slug: "urban-logo-tee",
    price: 329000,
    description: "Bold logo design with urban appeal. Comfortable fit with reinforced stitching for long-lasting wear.",
    images: [
      "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580902394836-5bd0dc5b3dca?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&h=800&fit=crop"
    ],
    colors: ["#000000", "#FFFFFF", "#3B82F6"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Logo",
    rating: 4.5,
    reviews: 98,
    inStock: true
  },
  {
    id: "6",
    name: "Abstract Art Tee",
    slug: "abstract-art-tee",
    price: 379000,
    description: "Unique abstract artwork print. Stand out with this artistic design crafted on premium fabric.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=800&fit=crop"
    ],
    colors: ["#000000", "#FFFFFF", "#8B5CF6"],
    sizes: ["S", "M", "L", "XL"],
    category: "Graphic",
    rating: 4.8,
    reviews: 72,
    inStock: true
  },
  {
    id: "7",
    name: "Retro Stripe Tee",
    slug: "retro-stripe-tee",
    price: 359000,
    description: "Classic stripe pattern with vintage vibes. Soft cotton blend for maximum comfort and style.",
    images: [
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=800&fit=crop"
    ],
    colors: ["#FFFFFF", "#EF4444", "#3B82F6"],
    sizes: ["S", "M", "L", "XL"],
    category: "Vintage",
    rating: 4.6,
    reviews: 115,
    inStock: true
  },
  {
    id: "8",
    name: "Pocket Detail Tee",
    slug: "pocket-detail-tee",
    price: 319000,
    description: "Functional chest pocket with modern cut. Versatile design suitable for any casual occasion.",
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598032895397-b9e2d533a74e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop"
    ],
    colors: ["#000000", "#9CA3AF", "#14532D"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Basic",
    rating: 4.7,
    reviews: 87,
    inStock: true
  },
  {
    id: "9",
    name: "Neon Print Tee",
    slug: "neon-print-tee",
    price: 389000,
    description: "Eye-catching neon graphics on premium cotton. Make a statement with this bold streetwear piece.",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=800&h=800&fit=crop"
    ],
    colors: ["#000000", "#10B981", "#F59E0B"],
    sizes: ["M", "L", "XL"],
    category: "Streetwear",
    rating: 4.9,
    reviews: 143,
    inStock: true
  },
  {
    id: "10",
    name: "Essential Gray Tee",
    slug: "essential-gray-tee",
    price: 279000,
    description: "Timeless gray tee in premium cotton. Soft, breathable, and perfect for layering or wearing solo.",
    images: [
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop"
    ],
    colors: ["#9CA3AF", "#6B7280", "#4B5563"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Basic",
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: "11",
    name: "Geometric Pattern Tee",
    slug: "geometric-pattern-tee",
    price: 369000,
    description: "Modern geometric design with clean lines. Contemporary style meets comfort in this unique piece.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=800&fit=crop"
    ],
    colors: ["#FFFFFF", "#000000", "#EF4444"],
    sizes: ["S", "M", "L", "XL"],
    category: "Graphic",
    rating: 4.7,
    reviews: 94,
    inStock: true
  },
  {
    id: "12",
    name: "Tie-Dye Tee",
    slug: "tie-dye-tee",
    price: 429000,
    description: "Hand-dyed tie-dye pattern, each piece is unique. Premium quality with vibrant, long-lasting colors.",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop"
    ],
    colors: ["#8B5CF6", "#EC4899", "#3B82F6"],
    sizes: ["M", "L", "XL"],
    category: "Special",
    rating: 4.9,
    reviews: 68,
    inStock: true
  }
];

export const categories = [
  { id: "all", name: "Tất cả", count: 12 },
  { id: "basic", name: "Basic", count: 4 },
  { id: "graphic", name: "Graphic", count: 3 },
  { id: "streetwear", name: "Streetwear", count: 2 },
  { id: "vintage", name: "Vintage", count: 1 },
  { id: "logo", name: "Logo", count: 1 },
  { id: "special", name: "Special", count: 1 }
];
