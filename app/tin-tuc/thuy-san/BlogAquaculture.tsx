"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    num: "01",
    title: "Cải thiện môi trường ao nuôi",
    items: ["Phân hủy chất thải hữu cơ", "Ổn định hệ vi sinh", "Cân bằng môi trường nước"],
    note: "Ao nuôi sạch giúp tôm cá phát triển ổn định và giảm tỷ lệ hao hụt.",
  },
  {
    num: "02",
    title: "Giảm khí độc H₂S, NH₃",
    items: ["Phân giải khí độc trong nước", "Giảm mùi và bùn đáy ao", "Tăng chất lượng nước"],
    note: "Khí độc là nguyên nhân chính gây stress và bệnh cho thủy sản.",
  },
  {
    num: "03",
    title: "Tăng sức đề kháng cho tôm cá",
    items: ["Phát triển khỏe mạnh", "Tăng khả năng miễn dịch tự nhiên", "Giảm phụ thuộc kháng sinh"],
    note: "Bước tiến quan trọng hướng tới nuôi trồng thủy sản bền vững.",
  },
];

export default function BlogAquaculture() {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#f3edd7", color: "#20412e", fontFamily: "'Lato', serif" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 80%, rgba(32,65,46,0.08) 0%, transparent 45%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-20">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            background: "rgba(32,65,46,0.08)",
            border: "1px solid rgba(32,65,46,0.3)",
            color: "#20412e",
          }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: "#20412e" }} />
          Thủy Sản Việt Nam
        </div>

        {/* Title */}
        <div className={`mb-10 transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6" style={{ color: "#20412e", letterSpacing: "-0.03em" }}>
            Giải Pháp
            <br />
            <span className="italic font-bold" style={{ color: "#3a6e4a" }}>Sinh Học</span>
            <br />
            <span className="text-3xl md:text-4xl font-light" style={{ color: "#20412e" }}>Cho Thủy Sản</span>
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "#20412e" }}>
            Ngành thủy sản Việt Nam đóng vai trò quan trọng trong xuất khẩu, nhưng cũng đối mặt với nhiều thách
            thức như ô nhiễm ao nuôi, khí độc và dịch bệnh.
          </p>
        </div>

        {/* Hero Image */}
        <div
          className={`relative w-full mb-14 overflow-hidden transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ height: "400px" }}
        >
          <img
            src="/images/thuy-san.png"
            alt="Nuôi trồng thủy sản Việt Nam"
            className="w-full h-full object-cover"
            style={{ filter: "sepia(12%) saturate(85%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(32,65,46,0.4) 0%, transparent 55%)" }}
          />
          <span
            className="absolute bottom-5 left-6 text-xs tracking-widest uppercase"
            style={{ color: "#f3edd7", opacity: 0.9 }}
          >
            Nuôi trồng thủy sản bền vững
          </span>
        </div>

        {/* Tab selector */}
        <div
          className={`flex gap-2 mb-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {benefits.map((b, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className="flex-1 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300"
              style={{
                background: activeCard === i ? "rgba(32,65,46,0.15)" : "rgba(32,65,46,0.04)",
                border: `1px solid ${activeCard === i ? "#20412e" : "rgba(32,65,46,0.2)"}`,
                color: "#20412e",
                cursor: "pointer",
              }}
            >
              {b.num}
            </button>
          ))}
        </div>

        {/* Active card */}
        {benefits.map((b, i) => (
          <div key={i} style={{ display: activeCard === i ? "block" : "none" }}>
            <div
              className="p-8 mb-6 transition-all duration-500"
              style={{ background: "rgba(32,65,46,0.06)", border: "1px solid rgba(32,65,46,0.2)" }}
            >
              <div className="flex items-start gap-6">
                <span
                  className="text-6xl font-black shrink-0 leading-none"
                  style={{ color: "rgba(32,65,46,0.15)" }}
                >
                  {b.num}
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: "#20412e" }}>{b.title}</h2>
                  <ul className="space-y-3 mb-6">
                    {b.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span style={{ color: "#20412e" }}>◈</span>
                        <span className="text-sm" style={{ color: "#20412e" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="p-4 text-sm italic"
                    style={{ background: "rgba(32,65,46,0.08)", borderLeft: "3px solid #20412e", color: "#20412e" }}
                  >
                    {b.note}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Mini cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {benefits.map((b, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className="text-left p-5 transition-all duration-300"
              style={{
                background: activeCard === i ? "rgba(32,65,46,0.12)" : "rgba(32,65,46,0.03)",
                border: `1px solid ${activeCard === i ? "#20412e" : "rgba(32,65,46,0.18)"}`,
                cursor: "pointer",
              }}
            >
              <div className="text-xs font-bold tracking-widest mb-2 uppercase" style={{ color: "#20412e" }}>
                {b.num}
              </div>
              <div className="text-sm font-semibold" style={{ color: "#20412e" }}>{b.title}</div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center gap-6 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="h-px flex-1" style={{ background: "rgba(32,65,46,0.3)" }} />
          <div className="text-center">
            <p className="text-xs tracking-[0.4em] uppercase mb-1" style={{ color: "#3a6e4a" }}>Hướng tới</p>
            <p className="text-sm font-bold" style={{ color: "#20412e" }}>
              Nuôi Trồng Bền Vững ✦ Tiêu Chuẩn Xuất Khẩu Quốc Tế
            </p>
          </div>
          <div className="h-px flex-1" style={{ background: "rgba(32,65,46,0.3)" }} />
        </div>
      </div>
    </article>
  );
}