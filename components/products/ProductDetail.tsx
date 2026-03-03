"use client";

import { Product } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import ProductList from "./ProductList";

interface Props {
    product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    return (
        <section className="w-full bg-amber-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT - Images */}
                    <div className="w-full space-y-3">
                        {/* Main Swiper */}
                        <div className="relative group">
                            <Swiper
                                modules={[Navigation, Pagination, Thumbs]}
                                navigation={{
                                    prevEl: ".custom-prev",
                                    nextEl: ".custom-next",
                                }}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                thumbs={{ swiper: thumbsSwiper }}
                                spaceBetween={0}
                                slidesPerView={1}
                                className="rounded-2xl overflow-hidden"
                            >
                                {product.images.map((img: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className={`relative w-full h-72 sm:h-96 lg:h-[480px] bg-gray-50 cursor-zoom-in transition-all duration-300 ${isZoomed ? "scale-110" : "scale-100"
                                                }`}
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

                            {/* Custom Navigation Buttons */}
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

                            {/* Image Counter Badge */}
                            <div className="absolute top-3 right-3 z-10 bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                                1 / {product.images.length}
                            </div>
                        </div>

                        {/* Thumbnail Swiper */}
                        {product.images.length > 1 && (
                            <Swiper
                                modules={[FreeMode, Thumbs]}
                                onSwiper={setThumbsSwiper}
                                spaceBetween={8}
                                slidesPerView={4}
                                freeMode
                                watchSlidesProgress
                                breakpoints={{
                                    640: { slidesPerView: 5 },
                                    1024: { slidesPerView: 6 },
                                }}
                                className="!px-1"
                            >
                                {product.images.map((img: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent [.swiper-slide-thumb-active_&]:border-indigo-500 transition-all duration-200 hover:opacity-80">
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                fill
                                                className="object-contain p-2"
                                                sizes="80px"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>

                    {/* RIGHT - Content */}
                    <div className="flex flex-col justify-center">

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
                            {product.name}
                        </h1>

                        {/* Main Application */}
                        <p className="text-lg text-gray-700 mb-6">
                            <span className="font-semibold text-green-700">
                                Ứng dụng chính:
                            </span>{" "}
                            {product.mainApplication}
                        </p>

                        {/* Features */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-green-800 mb-3">
                                Đặc điểm nổi bật
                            </h2>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-gray-700"
                                    >
                                        <span className="text-green-600 font-bold">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-black">
                                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-md transition">
                                    <a href="/tai-lieu">
                                        <p>Xem giá chi tiết</p>
                                    </a>
                                </button>

                            </div>

                        </div>

                        {/* Usage */}
                        {product.cach_su_dung && (
                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                <h2 className="text-xl font-semibold text-green-800 mb-4">
                                    Cách sử dụng
                                </h2>

                                <p className="text-gray-700 mb-4">
                                    <span className="font-semibold">Hướng dẫn chung:</span>{" "}
                                    {product.cach_su_dung.huong_dan_chung}
                                </p>

                                {product.cach_su_dung.phuong_phap_su_dung.map(
                                    (method, index) => (
                                        <div key={index} className="mb-4 border-t pt-4">
                                            <p className="font-semibold text-green-700">
                                                {method.cach_thuc}
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>Tỉ lệ pha loãng:</strong>{" "}
                                                {method.ti_le_pha_loang}
                                            </p>
                                            <p className="text-gray-700 whitespace-pre-line">
                                                <strong>Ví dụ:</strong> {method.vi_du}
                                            </p>
                                        </div>
                                    )
                                )}

                                {product.cach_su_dung.ghi_chu && (
                                    <p className="mt-4 text-sm text-gray-500 italic whitespace-pre-line">
                                        {product.cach_su_dung.ghi_chu}
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