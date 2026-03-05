"use client";

import { useEffect, useRef, useState } from "react";

const articles = [
  {
    id: 1,
    category: "Nông Nghiệp",
    tag: "Canh tác bền vững",
    title: "Công Nghệ Enzyme Sinh Học – Giải Pháp Bền Vững Cho Nông Nghiệp Việt Nam",
    excerpt:
      "Trong bối cảnh nông nghiệp Việt Nam đang đối mặt với tình trạng thoái hóa đất và sâu bệnh gia tăng, enzyme sinh học nổi lên như một giải pháp toàn diện, cải tạo đất và đạt chuẩn quốc tế USDA, GlobalG.A.P.",
    image: "/images/nong-nghiep.png",
    href: "/tin-tuc/nong-nghiep",
    readTime: "5 phút đọc",
    index: "01",
  },
  {
    id: 2,
    category: "Công Nghiệp",
    tag: "Xử lý môi trường",
    title: "Ứng Dụng Enzyme Sinh Học Trong Công Nghiệp – Giải Pháp Xử Lý Môi Trường Hiệu Quả",
    excerpt:
      "Từ xử lý nước thải BOD/COD, khử mùi hôi NH₃ và H₂S chuồng trại, đến chất tẩy rửa sinh học — enzyme mang đến giải pháp xanh toàn diện cho doanh nghiệp trong hành trình chuyển đổi bền vững.",
    image: "/images/cong-nghiep.png",
    href: "/tin-tuc/cong-nghiep",
    readTime: "4 phút đọc",
    index: "02",
  },
  {
    id: 3,
    category: "Thủy Sản",
    tag: "Nuôi trồng bền vững",
    title: "Giải Pháp Sinh Học Cho Thủy Sản – Nâng Cao Hiệu Quả Nuôi Trồng",
    excerpt:
      "Enzyme sinh học giúp cân bằng môi trường ao nuôi, phân giải khí độc H₂S và NH₃, tăng sức đề kháng tự nhiên cho tôm cá — hướng tới tiêu chuẩn xuất khẩu quốc tế mà không phụ thuộc kháng sinh.",
    image: "/images/thuy-san.png",
    href: "/tin-tuc/thuy-san",
    readTime: "4 phút đọc",
    index: "03",
  },
];

function useInView(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function NewsListBlog() {
  const header = useInView(0.1);

  return (
    <section
      style={{ background: "#ffffff", color: "#20412e", fontFamily: "'Lato', 'Times New Roman', serif" }}
      className="relative min-h-screen px-6 py-20 overflow-hidden"
    >
      {/* Subtle corner accents */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle at top right, rgba(32,65,46,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(32,65,46,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div ref={header.ref}>
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="w-8 h-px" style={{ background: "#20412e" }} />
            <span className="text-xs tracking-[0.45em] uppercase font-semibold" style={{ color: "#20412e" }}>
              Tin Tức &amp; Chuyên Đề
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(32,65,46,0.18)" }} />
          </div>

          {/* Title */}
          <div
            className={`mb-4 transition-all duration-1000 delay-100 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h2
              className="text-5xl md:text-6xl font-bold leading-none"
              style={{ color: "#20412e", letterSpacing: "-0.02em" }}
            >
              Giải Pháp
              <br />
              <span className="italic font-light" style={{ color: "#3a6e4a" }}>Enzyme Sinh Học</span>
            </h2>
          </div>

          <p
            className={`text-base leading-relaxed max-w-xl mb-16 transition-all duration-700 delay-200 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "rgba(32,65,46,0.7)" }}
          >
            Khám phá ứng dụng công nghệ enzyme sinh học trong nông nghiệp, công nghiệp và nuôi trồng thủy sản —
            nền tảng cho một Việt Nam xanh và bền vững hơn.
          </p>
        </div>

        {/* Article list */}
        <div className="space-y-0">
          {articles.map((article, i) => (
            <ArticleRow key={article.id} article={article} index={i} />
          ))}
        </div>

        {/* Footer line */}
        <div
          className="mt-16 flex items-center gap-4"
          style={{ borderTop: "1px solid rgba(32,65,46,0.15)", paddingTop: "2rem" }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(32,65,46,0.45)" }}>
            Enzyme Sinh Học · Công Nghệ Nhật Bản · USDA · GlobalG.A.P.
          </span>
        </div>
      </div>
    </section>
  );
}

function ArticleRow({ article, index }: { article: typeof articles[0]; index: number }) {
  const { ref, visible } = useInView(0.15);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <a
        href={article.href}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ textDecoration: "none" }}
      >
        <div
          className="grid md:grid-cols-[1fr_320px] gap-0 py-10 transition-all duration-300"
          style={{
            borderTop: "1px solid rgba(32,65,46,0.15)",
            background: hovered ? "rgba(32,65,46,0.03)" : "transparent",
          }}
        >
          {/* Left: Text */}
          <div className="pr-0 md:pr-12 flex flex-col justify-between">
            {/* Meta row */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="text-xs tracking-widest uppercase font-bold px-3 py-1"
                style={{ background: "rgba(32,65,46,0.1)", color: "#20412e" }}
              >
                {article.category}
              </span>
              <span className="text-xs" style={{ color: "rgba(32,65,46,0.5)" }}>
                {article.readTime}
              </span>
            </div>

            {/* Index + Title */}
            <div className="flex gap-5 items-start mb-5">
              <span
                className="text-5xl font-black leading-none shrink-0 mt-1 transition-all duration-300"
                style={{
                  color: hovered ? "rgba(32,65,46,0.2)" : "rgba(32,65,46,0.1)",
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1,
                }}
              >
                {article.index}
              </span>
              <h3
                className="text-xl md:text-2xl font-bold leading-snug transition-colors duration-300"
                style={{ color: hovered ? "#20412e" : "#2d5a3d" }}
              >
                {article.title}
              </h3>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-lg"
              style={{ color: "rgba(32,65,46,0.65)" }}
            >
              {article.excerpt}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300"
                style={{ color: "#20412e" }}
              >
                Đọc bài viết
              </span>
              <span
                className="inline-block transition-transform duration-300"
                style={{
                  transform: hovered ? "translateX(6px)" : "translateX(0)",
                  color: "#20412e",
                  fontSize: "1rem",
                }}
              >
                →
              </span>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="hidden md:block relative overflow-hidden mt-0"
            style={{ height: "220px", flexShrink: 0 }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: hovered ? "scale(1.05)" : "scale(1)",
                filter: "sepia(12%) saturate(85%)",
              }}
            />
            {/* Tag overlay */}
            <div
              className="absolute bottom-3 left-3 text-xs px-3 py-1 font-semibold tracking-wide"
              style={{ background: "#f3edd7", color: "#20412e" }}
            >
              {article.tag}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}