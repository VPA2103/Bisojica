import { products } from "@/data/products";
import ProductCard from "../products/ProductCard";

export default function ProductsHightlight() {
    const highlightProducts = products
      .filter((p) => p.featured)
      .slice(0, 3);
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">
            Sản phẩm tiêu biểu
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {highlightProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }