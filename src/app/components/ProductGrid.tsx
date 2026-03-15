import { Product } from "../data/products";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export const ProductGrid = ({ products, onQuickView }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
};
