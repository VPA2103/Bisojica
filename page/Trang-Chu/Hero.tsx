"use client";
// components/Hero.tsx
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "lucide-react";

const stats = [
    { num: "15+", label: "Năm kinh nghiệm" },
    { num: "8", label: "Dòng sản phẩm" },
    { num: "3", label: "Lĩnh vực ứng dụng" },
];

const Hero: React.FC = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,    
          easing: "ease-in-out",
        });
      }, []);
    return (
        <section id="hero" className="relative var(--text-color) overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                {/* <Image
                    src="/images/canh-dong-lua-vang-dep-nhat_115735930.jpg"
                    alt="hero background"
                    fill
                    priority
                    className="object-cover"
                /> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white to-white/30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center md:items-center gap-8">
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    {/* Badge */}
                    <span className="inline-flex items-center  text-green-900 text-sm font-medium px-3 py-1 rounded-full mb-4" data-aos="fade-up">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Công nghệ enzyme Nhật Bản
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight drop-shadow-sm"  data-aos="fade-up" >
                        <em className="not-italic text-green-800 font-serif">BISOJICA</em>
                        <br />
                        Japan – Vietnam
                    </h1>

                    {/* Slogan */}
                    <p className="text-lg sm:text-xl text-black mb-6"  data-aos="fade-up">
                         Sạch đất · Xanh cây · Năng suất bền vững
                    </p>

                    {/* Description */}
                    <p className="text-black mb-8 max-w-xl  mx-auto md:mx-0" data-aos="fade-up">
                        Doanh nghiệp tiên phong tại Việt Nam trong nghiên cứu và phân phối enzyme
                        sinh học hữu cơ Nhật Bản — ứng dụng toàn diện cho Nông nghiệp, Công nghiệp
                        và Thủy sản.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" data-aos="fade-up">
                        <a
                            href="/contact"
                            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Nhận tư vấn miễn phí
                        </a>
                        <a
                            href="/products"
                            className="inline-block px-6 py-3 border border-green-600 text-green-800 font-semibold rounded-lg hover:bg-green-50 transition"
                        >
                            Khám phá sản phẩm
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-1 justify-center md:justify-end gap-10 mt-10 md:mt-0 text-center md:text-left" data-aos="fade-up">
                    {stats.map((stat, idx) => (
                        <div key={idx}>
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.num}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;