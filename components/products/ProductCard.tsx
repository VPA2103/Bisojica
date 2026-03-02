import { Product } from "@/types";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-teal-500" />

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Header */}
        <div className="mb-3">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-200">
            {product.name}
          </h2>
        </div>

        {/* Main application badge */}
        <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-teal-700 line-clamp-1">
            {product.mainApplication}
          </p>
        </div>

        
      </div>

      {/* Footer CTA */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
        <button className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-95 transition-all duration-150 shadow-sm">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductCard;