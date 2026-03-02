import React from "react";
import { products } from "@/data/products";

export default function ProductList() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-amber-50">
      {/* Section header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Danh sách sản phẩm
        </h1>
        <p className="mt-1.5 text-sm sm:text-base text-gray-500">
          {products.length} sản phẩm có sẵn
        </p>
        <div className="mt-4 h-px bg-gradient-to-r from-emerald-200 via-teal-100 to-transparent" />
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Ảnh sản phẩm */}
            {product.images && product.images.length > 0 && (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            {/* Tên & ứng dụng chính */}
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-3">{product.mainApplication}</p>

            {/* Danh sách tính năng */}
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-gray-500 font-medium">Không có sản phẩm nào</p>
        </div>
      )}
    </div>
  );
}