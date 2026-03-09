"use client";

import ProductFeature from "../products/ProductFeature";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { products_feature } from "@/data/products";

export default function ProductsHighlight() {

  const highlightProducts = products_feature.filter(
    (p) => p.featured
  );

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <h2
          className="text-4xl text-center mb-10"
          style={{ fontWeight: 500 }}
        >
          Sản phẩm tiêu biểu
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          grabCursor={true}
          loop={true}
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

      </div>
    </section>
  );
}