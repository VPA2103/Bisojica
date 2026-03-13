"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import useGoogleTranslateLanguage from "@/hooks/useGoogleTranslateLanguage";

const images: Record<"vi" | "en", string[]> = {
  vi: [
    "/images/hero/vi/image1.png",
    "/images/hero/vi/image2.png",
    "/images/hero/vi/image3.png",
    "/images/hero/vi/image4.png",
    "/images/hero/vi/image5.png",
    "/images/hero/vi/image6.png",
    "/images/hero/vi/image7.png",
    "/images/hero/vi/image8.png",
    "/images/hero/vi/image9.png",
    "/images/hero/vi/image10.png",
    "/images/hero/vi/image11.png",
    "/images/hero/vi/image12.png",
  ],
  en: [
    "/images/hero/en/anh1.png",
    "/images/hero/en/anh2.png",
    "/images/hero/en/anh3.png",
    "/images/hero/en/anh4.png",
    "/images/hero/en/anh5.png",
    "/images/hero/en/anh6.png",
    "/images/hero/en/anh7.png",
    "/images/hero/en/anh8.png",
    "/images/hero/en/anh9.png",
    "/images/hero/en/anh10.png",
    "/images/hero/en/anh11.png",
    "/images/hero/en/anh12.png",
  ],
};

export default function Hero() {
  const lang = useGoogleTranslateLanguage();
  const slides = images[lang];
  return (
    <section className="relative w-full h-auto md:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={800}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center bg-[#f3edd7]"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1600}
              height={900}
              className="object-contain w-full h-auto md:h-full"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}