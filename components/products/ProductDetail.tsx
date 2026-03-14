"use client";

import { Product } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import ProductList from "./ProductList";
import { useTranslations } from "next-intl";
import { ProductTranslation } from "@/types";

interface Props {
  product: Product;
}

const sizes = ["1L", "100ml", "10L"];

const ProductDetail: React.FC<Props> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const tProducts = useTranslations("products");
  const tDetail = useTranslations("productDetail");

  // Lấy data từ JSON đã tách
  const mainApplication = tProducts(`${product.slug}.mainApplication`);
  const features = tProducts.raw(`${product.slug}.features`) as string[];
  const usage = tProducts.raw(`${product.slug}.usage`) as ProductTranslation["usage"];

  return (
    <section className="w-full bg-amber-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT - Images — giữ nguyên hoàn toàn */}
          <div className="w-full space-y-3">
            <div className="relative group">
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
                pagination={{ clickable: true, dynamicBullets: true }}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={0}
                slidesPerView={1}
                className="rounded-2xl overflow-hidden"
              >
                {product.images.map((img: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`relative w-full h-72 sm:h-96 lg:h-[480px] bg-gray-50 cursor-zoom-in transition-all duration-300 ${isZoomed ? "scale-110" : "scale-100"}`}
                      onClick={() => setIsZoomed(!isZoomed)}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - ${index + 1}`}
                        fill
                        className="object-contain p-6 transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="custom-next absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {product.images.length > 1 && (
              <Swiper
                modules={[FreeMode, Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                breakpoints={{ 640: { slidesPerView: 5 }, 1024: { slidesPerView: 6 } }}
                className="px-1"
              >
                {product.images.map((img: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent in-[.swiper-slide-thumb-active]:border-indigo-500 transition-all duration-200 hover:opacity-80">
                      <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-contain p-2" sizes="80px" />
                    </div>
                    <span className="text-xl font-medium ml-4 text-gray-600">{sizes[index]}</span>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* RIGHT - Content */}
          <div className="flex flex-col justify-center">

            <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
              {product.name}
            </h1>

            {/* Main Application */}
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold text-green-800">
                {tDetail("mainApplication")}:
              </span>{" "}
              {mainApplication}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-green-800 mb-3">
                {tDetail("features")}
              </h2>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            {usage && (
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h2 className="text-xl font-semibold text-green-800 mb-4">
                  {tDetail("usage")}
                </h2>

                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">{tDetail("generalGuide")}:</span>{" "}
                  {usage.general}
                </p>

                {usage.methods.map((method, index) => (
                  <div key={index} className="mb-4 border-t pt-4">
                    <p className="font-semibold text-green-700">{method.method}</p>
                    <p className="text-gray-700">
                      <strong>{tDetail("dilutionRatio")}:</strong> {method.ratio}
                    </p>
                    <p className="text-gray-700 whitespace-pre-line">
                      <strong>{tDetail("example")}:</strong> {method.example}
                    </p>
                  </div>
                ))}

                {usage.note && (
                  <p className="mt-4 text-sm text-gray-500 italic whitespace-pre-line">
                    {usage.note}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <ProductList />
      </div>
    </section>
  );
};

export default ProductDetail;