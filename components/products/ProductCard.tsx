import { Product } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">

      {/* Ảnh */}
      {product.images && product.images.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      {/* Tên */}
      <h2 className="text-lg font-semibold text-[var(--text-color] mb-1">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500 mb-3">
        {product.mainApplication}
      </p>

      {/* Tính năng */}
      <ul className="text-sm text-[var(--text-color] list-disc list-inside space-y-1">
        {product.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {/* Nút luôn nằm đáy */}
      <Link
        href={`/products/${product.slug}`}
        className="mt-auto w-full text-center bg-[var(--text-color)] hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-md transition"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default ProductCard;