"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import BisoJicaSection1 from "@/components/hero/BisoJicaSection1";
import BisoJicaSection2 from "@/components/hero/BisoJicaSection2";
import BisoJicaSection3 from "@/components/hero/BisoJicaSection3";
import BisoJicaSection4 from "@/components/hero/BisoJicaSection4";
import BisoJicaSection5 from "@/components/hero/BisoJicaSection5";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-svh overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={800}
        grabCursor={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: false }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <BisoJicaSection1 />
        </SwiperSlide>
        
        <SwiperSlide>
          <BisoJicaSection2 />
        </SwiperSlide>

        <SwiperSlide>
          <BisoJicaSection3 />
        </SwiperSlide>

        <SwiperSlide>
          <BisoJicaSection4 />
        </SwiperSlide>

        <SwiperSlide>
          <BisoJicaSection5 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}