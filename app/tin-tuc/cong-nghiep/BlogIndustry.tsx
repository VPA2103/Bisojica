"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  {
    icon: "💧",
    title: "Xử lý nước thải BOD, COD",
    body: "Enzyme sinh học giúp phân hủy hợp chất hữu cơ, giảm chỉ số BOD và COD, tăng hiệu quả hệ thống xử lý sinh học. Nhờ cơ chế xúc tác tự nhiên, quá trình xử lý diễn ra nhanh hơn, tiết kiệm chi phí vận hành và giảm phụ thuộc hóa chất.",
    tags: ["Giảm BOD/COD", "Xúc tác tự nhiên", "Tiết kiệm chi phí"],
  },
  {
    icon: "💨",
    title: "Khử mùi hôi chuồng trại & bãi rác",
    body: "Mùi hôi từ khí độc như NH₃ và H₂S không chỉ ảnh hưởng đến môi trường mà còn gây tác động tiêu cực đến sức khỏe cộng đồng. Enzyme sinh học phân hủy khí độc, giảm mùi hiệu quả và cải thiện môi trường làm việc.",
    tags: ["Phân hủy NH₃", "Phân hủy H₂S", "Cải thiện môi trường"],
  },
  {
    icon: "🧴",
    title: "Chất tẩy rửa sinh học thân thiện",
    body: "Trong sản xuất công nghiệp, enzyme được ứng dụng trong các dòng chất tẩy rửa sinh học. Làm sạch hiệu quả, không gây ăn mòn, không ô nhiễm nguồn nước – xu hướng tất yếu trong chuyển đổi xanh.",
    tags: ["Không ăn mòn", "Không ô nhiễm", "Chuyển đổi xanh"],
  },
];

export default function BlogIndustry() {
  const [visible, setVisible] = useState(false);
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
          backgroundImage: `radial-gradient(circle at 90% 5%, rgba(32,65,46,0.08) 0%, transparent 45%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-20">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-3 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
        >
          <div className="w-10 h-0.5" style={{ background: "#20412e" }} />
          <span className="text-xs tracking-[0.4em] uppercase font-semibold" style={{ color: "#20412e" }}>
            Công Nghiệp &amp; Môi Trường
          </span>
        </div>

        {/* Title */}
        <div className={`mb-10 transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-6xl font-black leading-none mb-4" style={{ color: "#20412e", letterSpacing: "-0.02em" }}>
            Enzyme Sinh Học
            <br />
            <span className="text-3xl md:text-4xl font-light italic" style={{ color: "#3a6e4a" }}>
              Trong Công Nghiệp
            </span>
          </h1>
          <p className="max-w-xl leading-relaxed text-base" style={{ color: "#20412e" }}>
            Ô nhiễm môi trường công nghiệp đang trở thành vấn đề cấp bách. Từ nước thải, khí thải đến mùi hôi,
            doanh nghiệp cần những giải pháp vừa hiệu quả vừa thân thiện môi trường.
          </p>
        </div>

        {/* Hero Image */}
        <div
          className={`relative w-full mb-14 overflow-hidden transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ height: "400px" }}
        >
          <img
            src="/images/cong-nghiep.png"
            alt="Xử lý nước thải công nghiệp"
            className="w-full h-full object-cover"
            style={{ filter: "sepia(15%) saturate(80%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(32,65,46,0.35) 0%, transparent 55%)" }}
          />
          <span
            className="absolute bottom-5 left-6 text-xs tracking-widest uppercase"
            style={{ color: "#f3edd7", opacity: 0.9 }}
          >
            Xử lý môi trường công nghiệp bền vững
          </span>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-4 mb-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {[
            { val: "BOD↓", label: "Giảm chỉ số ô nhiễm" },
            { val: "NH₃", label: "Phân hủy khí độc" },
            { val: "100%", label: "Thân thiện sinh thái" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-5"
              style={{ borderTop: "3px solid #20412e", background: "rgba(32,65,46,0.06)" }}
            >
              <div className="text-2xl font-black mb-1" style={{ color: "#20412e" }}>{s.val}</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: "#3a6e4a" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`group flex gap-6 p-8 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                border: "1px solid rgba(32,65,46,0.22)",
                background: "rgba(32,65,46,0.03)",
                transitionDelay: `${400 + i * 150}ms`,
              }}
            >
              <div
                className="shrink-0 w-14 h-14 flex items-center justify-center text-2xl"
                style={{ border: "2px solid #20412e" }}
              >
                {s.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-3" style={{ color: "#20412e" }}>{s.title}</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#20412e" }}>{s.body}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 font-semibold tracking-wide"
                      style={{ background: "rgba(32,65,46,0.1)", color: "#20412e" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer callout */}
        <div
          className={`mt-16 p-8 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ background: "#20412e", color: "#f3edd7" }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🌿</span>
            <div>
              <h3 className="text-xl font-bold mb-2">Xu hướng tất yếu</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(243,237,215,0.8)" }}>
                Đây là xu hướng tất yếu trong chuyển đổi xanh và phát triển bền vững của doanh nghiệp Việt Nam
                trong thời đại mới.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}