"use client";

import { articlesStatic } from "@/data/newsArticles";
import { useTranslations } from "next-intl";
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
    category: "Thủy Hải Sản",
    tag: "Nuôi trồng bền vững",
    title: "Giải Pháp Sinh Học Cho Thủy Sản – Nâng Cao Hiệu Quả Nuôi Trồng",
    excerpt:
      "Enzyme sinh học giúp cân bằng môi trường ao nuôi, phân giải khí độc H₂S và NH₃, tăng sức đề kháng tự nhiên cho tôm cá — hướng tới tiêu chuẩn xuất khẩu quốc tế mà không phụ thuộc kháng sinh.",
    image: "/images/thuy-san.png",
    href: "/tin-tuc/thuy-san",
    readTime: "4 phút đọc",
    index: "03",
  },
  {
    id: 4,
    category: "Nông nghiệp",
    tag: "Canh tác bền vững",
    title: "Enzyme “Liều thuốc” sinh học cứu đất, hồi sinh vườn cây tưởng như đã chết",
    excerpt:
      "Đất bạc màu, chai cứng, rễ cây không phát triển được, sâu bệnh lan rộng, đó là thực trạng chung tại nhiều vùng canh tác lâu năm. Nông dân dù bỏ nhiều công chăm bón, tăng liều phân, thuốc hóa học nhưng vẫn “bó tay” nhìn vườn cây tàn lụi.",
    image: "https://media.daidoanket.vn/w3840/uploaded/images/2025/09/08/a95db1d3-29cf-4849-aac2-56ecb03da9ee.jpg.avif",
    href: "https://daidoanket.vn/enzyme-lieu-thuoc-sinh-hoc-cuu-dat-hoi-sinh-vuon-cay-tuong-nhu-da-chet-10310034.html",
    readTime: "10 phút đọc",
    index: "04",
  },
  {
    id: 5,
    category: "Nông nghiệp",
    tag: "Canh tác bền vững",
    title: "Thăm vườn cây hiếm ngay đảo Kim Cương - Cùng Biso Jica thăm nhà anh Vinh Chà Là",
    excerpt:
      "Chào mừng bạn đến với kênh Biso Jica – nơi chia sẻ kiến thức và giải pháp về enzyme hữu cơ ứng dụng trong các ngành nông nghiệp, công nghiệp và thủy sản.",
    image: "https://img.youtube.com/vi/oJuhF7213Pw/0.jpg",
    href: "https://www.youtube.com/watch?v=oJuhF7213Pw",
    readTime: "13 phút 51 giây xem",
    index: "05",
  },
];

type ArticleTranslated = {
  category: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
};


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
  const t = useTranslations("news");
  const articles = t.raw("articles") as ArticleTranslated[];

  return (
    <section
      style={{ background: "#ffffff", color: "#20412e", fontFamily: "'Lato', 'Times New Roman', serif" }}
      className="relative min-h-screen px-6 py-20 overflow-hidden"
    >
      {/* Corner accents — giữ nguyên */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle at top right, rgba(32,65,46,0.3) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle at bottom left, rgba(32,65,46,0.25) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div ref={header.ref}>
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="w-8 h-px" style={{ background: "#20412e" }} />
            <span className="text-xl tracking-[0.45em] uppercase font-semibold" style={{ color: "#20412e" }}>
              {t("eyebrow")}
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(32,65,46,0.18)" }} />
          </div>

          <div className={`mb-4 transition-all duration-1000 delay-100 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="text-5xl md:text-6xl font-bold leading-none" style={{ color: "#20412e", letterSpacing: "-0.02em" }}>
              {t("titleLine1")}
              <br />
              <span className="italic font-light" style={{ color: "#3a6e4a" }}>
                {t("titleLine2")}
              </span>
            </h2>
          </div>

          <p className={`leading-relaxed max-w-2xl text-xl mb-16 transition-all duration-700 delay-200 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "rgba(32,65,46,0.7)" }}
          >
            {t("desc")}
          </p>
        </div>

        {/* Article list */}
        <div className="space-y-0">
          {articlesStatic.map((staticData, i) => (
            <ArticleRow
              key={staticData.id}
              staticData={staticData}
              translated={articles[i]}
              index={i}
            />
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-16 flex items-center gap-4"
          style={{ borderTop: "1px solid rgba(32,65,46,0.15)", paddingTop: "2rem" }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(32,65,46,0.45)" }}>
            {t("footer")}
          </span>
        </div>
      </div>
    </section>
  );
}


function ArticleRow({
  staticData,
  translated,
  index,
}: {
  staticData: (typeof articlesStatic)[0];
  translated: ArticleTranslated;
  index: number;
}) {
  const { ref, visible } = useInView(0.15);
  const [hovered, setHovered] = useState(false);
  const t = useTranslations("news");

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <a
        href={staticData.href}
        className="group block"
        target="_blank"
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
            <div className="flex items-center gap-4 mb-5">
              <span className="text-xl tracking-widest uppercase font-bold px-3 py-1"
                style={{ background: "rgba(32,65,46,0.1)", color: "#20412e" }}
              >
                {translated.category}
              </span>
              <span className="text-xl" style={{ color: "rgba(32,65,46,0.5)" }}>
                {translated.readTime}
              </span>
            </div>

            <div className="flex gap-5 items-start mb-5">
              <span
                className="text-5xl font-black leading-none shrink-0 mt-1 transition-all duration-300"
                style={{
                  color: hovered ? "rgba(32,65,46,0.2)" : "rgba(32,65,46,0.1)",
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1,
                }}
              >
                {staticData.index}
              </span>
              <h3
                className="text-xl md:text-2xl font-bold leading-snug transition-colors duration-300"
                style={{ color: hovered ? "#20412e" : "#2d5a3d" }}
              >
                {translated.title}
              </h3>
            </div>

            <p className="text-xl leading-relaxed mb-6 max-w-xl" style={{ color: "rgba(32,65,46,0.65)" }}>
              {translated.excerpt}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-[0.2em] uppercase transition-all duration-300" style={{ color: "#20412e" }}>
                {t("readMore")}
              </span>
              <span
                className="inline-block transition-transform duration-300"
                style={{ transform: hovered ? "translateX(6px)" : "translateX(0)", color: "#20412e", fontSize: "1rem" }}
              >
                →
              </span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block relative overflow-hidden mt-0" style={{ height: "220px", flexShrink: 0 }}>
            <img
              src={staticData.image}
              alt={translated.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hovered ? "scale(1.05)" : "scale(1)", filter: "sepia(12%) saturate(85%)" }}
            />
            <div className="absolute bottom-3 left-3 text-xl px-3 py-1 font-semibold tracking-wide"
              style={{ background: "#f3edd7", color: "#20412e" }}
            >
              {translated.tag}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}