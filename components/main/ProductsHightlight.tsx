import { products } from "@/data/products";
import ProductFeature from "../products/ProductFeature";

export default function ProductsHightlight() {
  const highlightProducts = products
    .filter((p) => p.featured)
    .slice(0, 4);

  return (
    <section className="py-4 var(--background)">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 ">
          Sản phẩm tiêu biểu
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlightProducts.map((product) => (
            <ProductFeature key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}