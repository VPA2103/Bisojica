"use client";

import { useRef } from "react";
import ProductFeature from "../products/ProductFeature";
import type { NavigationOptions } from "swiper/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { products_feature } from "@/data/products";

export default function ProductsHighlight() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const highlightProducts = products_feature.filter((p) => p.featured);

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl text-center mb-10" style={{ fontWeight: 500 }}>
          Sản phẩm tiêu biểu
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          grabCursor
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {highlightProducts.map((product) => (
            <SwiperSlide key={product.slug}>
              <ProductFeature product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation dưới */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            ref={prevRef}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            ←
          </button>

          <button
            ref={nextRef}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}