"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroImages = [
  "/images/hero/anh1.png",
  "/images/hero/anh2.png",
  "/images/hero/anh3.png",
  "/images/hero/anh4.png",
  "/images/hero/anh5.png",
  "/images/hero/anh6.png",
  "/images/hero/anh7.png",
  "/images/hero/anh8.png",
  "/images/hero/anh9.png",
  "/images/hero/anh10.png",
  "/images/hero/anh11.png",
  "/images/hero/anh12.png",
  "/images/hero/anh13.png",
];

export default function Hero() {
  return (
    <section className="relative w-full h-svh overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1200}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full hero-swiper"
      >
        {heroImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full flex items-center justify-center overflow-hidden bg-[#f3edd7]/50 relative hero-slide-inner">
              <Image
                src={src}
                alt={`Hero slide ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="hero-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-slide {
          background: white;
          height: 100%;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        /* Desktop: giữ nguyên object-contain */
        .hero-image {
          object-fit: contain;
        }

        /* Mobile: tự động tính chiều cao thực của ảnh để crop trắng */
        @media (max-width: 768px) {
          .hero-slide-inner {
            align-items: center;
          }

          .hero-image {
            object-fit: contain;
            object-position: center center;
          }

          /* Override height của section để vừa khít ảnh theo chiều ngang */
          .hero-swiper,
          .hero-swiper .swiper-wrapper,
          .hero-swiper .swiper-slide,
          .hero-slide-inner {
            height: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}