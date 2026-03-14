"use client";

import React, { useState, useEffect } from "react";
import { products, category } from "@/data/products";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ProductList() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const t = useTranslations();

  const [filter, setFilter] = useState<category | "all">("all");

  useEffect(() => {
    if (categoryParam) setFilter(categoryParam as category);
  }, [categoryParam]);

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  // Tận dụng lại common.categories đã tách trước đó
  const tCommon = useTranslations("common");
  const tList = useTranslations("productList");

  const filterButtons: { value: category | "all"; label: string }[] = [
    { value: "all",          label: tList("filterAll") },
    { value: "nong-nghiep",  label: tCommon("categories.nong-nghiep") },
    { value: "cong-nghiep",  label: tCommon("categories.cong-nghiep") },
    { value: "thuy-san",     label: tCommon("categories.thuy-san") },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          {tList("title")}
        </h1>
        <p className="mt-1.5 text-sm sm:text-base text-gray-500">
          {tList("count", { count: filteredProducts.length })}
        </p>
        <div className="mt-4 h-px bg-linear-to-r from-emerald-200 via-teal-100 to-transparent" />
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filterButtons.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === value
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex justify-center py-20">
          {tList("empty")}
        </div>
      )}
    </div>
  );
}