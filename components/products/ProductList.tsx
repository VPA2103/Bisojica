"use client";

import React, { useState, useEffect } from "react";
import { products, category } from "@/data/products";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";

export default function ProductList() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [filter, setFilter] = useState<category | "all">("all");

  useEffect(() => {
    if (categoryParam) {
      setFilter(categoryParam as category);
    }
  }, [categoryParam]);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Danh sách sản phẩm
        </h1>

        <p className="mt-1.5 text-sm sm:text-base text-gray-500">
          {filteredProducts.length} sản phẩm
        </p>

        <div className="mt-4 h-px bg-linear-to-r from-emerald-200 via-teal-100 to-transparent" />
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === "all"
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Tất cả
        </button>

        <button
          onClick={() => setFilter("nong-nghiep")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === "nong-nghiep"
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Nông nghiệp
        </button>

        <button
          onClick={() => setFilter("cong-nghiep")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === "cong-nghiep"
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Công nghiệp
        </button>

        <button
          onClick={() => setFilter("thuy-san")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === "thuy-san"
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Thủy sản
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex justify-center py-20">
          Không có sản phẩm
        </div>
      )}
    </div>
  );
}