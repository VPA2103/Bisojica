import { Product } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductFeature: React.FC<Props> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex bg-white  overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex-col"
    >
      {/* Ảnh */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Label */}
      <div className="bg-[#20412e] w-full px-4 py-3 text-center flex-1 flex flex-col justify-center">
        <h2 className="text-white text-sm font-semibold tracking-widest uppercase">
          {product.name}
        </h2>

        {product.mainApplication && (
          <p className="text-emerald-300 text-xs mt-1 opacity-80">
            {product.mainApplication}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductFeature;