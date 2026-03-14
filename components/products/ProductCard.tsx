import { Product } from "@/types";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const tList = useTranslations("productList");
  const tProducts = useTranslations("products");

  // Lấy mainApplication từ JSON đã tách
  const mainApplication = tProducts(`${product.slug}.mainApplication`);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
    >
      {product.images && product.images.length > 0 && (
        <div className="relative w-full h-56 overflow-hidden bg-gray-100 flex items-center justify-center rounded-md">
          <img
            src={product.images[0]}
            alt={product.name}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}

      <h2 className="text-lg font-semibold text-(--text-color) mt-3 mb-1">
        {product.name}
      </h2>

      {mainApplication && (
        <p className="text-sm text-gray-500 mb-3">
          {mainApplication}
        </p>
      )}

      <div className="mt-auto w-full text-center bg-(--text-color) hover:bg-green-700 text-white text-sm font-medium py-2 rounded-md transition">
        {tList("viewDetail")}
      </div>
    </Link>
  );
};

export default ProductCard;