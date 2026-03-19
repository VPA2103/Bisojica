import { Product } from "@/types";
import Link from "next/link";
import { useTranslations } from "next-intl"; // ← thêm
import React from "react";

interface Props {
  product: Product;
}

const ProductFeature: React.FC<Props> = ({ product }) => {
  const t = useTranslations("products");
  const tCommon = useTranslations("common"); // ← cho category

  // Lấy mainApplication từ JSON theo slug
  const mainApplication = t(`${product.slug}.mainApplication`);

  // Lấy category label từ JSON
  const categoryLabel = tCommon(`categories.${product.category}`);

  return (
    <Link
      href={`/products?category=${product.category}`}
      className="group flex bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex-col"
    >
      <div className="relative w-full h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        {categoryLabel && (
          <span className="absolute top-2 left-2 bg-[#20412e] text-white text-xs px-2 py-1 uppercase tracking-wider">
            {categoryLabel}
          </span>
        )}
      </div>

      <div className="bg-[#20412e] w-full px-4 py-3 text-center flex-1 flex flex-col justify-center h-[80px] overflow-hidden">
        <h2
          className="text-white text-sm font-semibold tracking-widest uppercase"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.name}
        </h2>

        {mainApplication && (
          <p
            className="text-emerald-300 text-xs mt-1 opacity-80"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {mainApplication}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductFeature;