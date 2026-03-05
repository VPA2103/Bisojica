"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  { icon: "🌱", text: "Cải tạo và phục hồi đất nông nghiệp" },
  { icon: "🧪", text: "Phân giải tồn dư hữu cơ và hóa chất" },
  { icon: "🛡️", text: "Hỗ trợ kiểm soát nấm bệnh, sâu hại" },
  { icon: "📈", text: "Tăng năng suất và chất lượng nông sản" },
];

const safetyPoints = [
  "100% phân hủy sinh học",
  "Không gây tồn dư độc hại",
  "An toàn cho người sử dụng và vật nuôi",
  "Không làm ô nhiễm nguồn nước và đất",
];

const certifications = ["USDA", "GlobalG.A.P.", "Tiêu chuẩn Nhật Bản"];

export default function BlogAgri() {
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
      style={{ background: "#ffffff", color: "#20412e", fontFamily: "'Lato', serif" }}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 85% 10%, rgba(32,65,46,0.07) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-20">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 border text-xs tracking-[0.3em] uppercase px-4 py-2 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ borderColor: "#20412e", color: "#20412e" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#20412e" }} />
          Nông Nghiệp Bền Vững
        </div>

        {/* Title */}
        <div className={`transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-3" style={{ color: "#20412e" }}>
            Công Nghệ
            <br />
            <span className="italic" style={{ color: "#3a6e4a" }}>Enzyme Sinh Học</span>
          </h1>
          <p className="text-lg mb-10" style={{ color: "#3a6e4a", lineHeight: "1.8" }}>
            Giải Pháp Bền Vững Cho Nông Nghiệp Việt Nam
          </p>
        </div>

        {/* Hero Image */}
        <div
          className={`relative w-full mb-14 overflow-hidden transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ height: "400px" }}
        >
          <img
            src="/images/nong-nghiep.png"
            alt="Nông nghiệp xanh Việt Nam"
            className="w-full h-full object-cover"
            style={{ filter: "sepia(15%) saturate(85%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(32,65,46,0.35) 0%, transparent 55%)" }}
          />
          <span
            className="absolute bottom-5 left-6 text-xs tracking-widest uppercase"
            style={{ color: "#f3edd7", opacity: 0.9 }}
          >
            Canh tác bền vững với enzyme sinh học
          </span>
        </div>

        {/* Divider */}
        <div className={`my-10 flex items-center gap-4 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(32,65,46,0.5), transparent)" }} />
          <span style={{ color: "#20412e" }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(32,65,46,0.5), transparent)" }} />
        </div>

        {/* Intro */}
        <p
          className={`text-base leading-8 mb-16 max-w-3xl transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ color: "#20412e" }}
        >
          Trong bối cảnh nông nghiệp Việt Nam đang đối mặt với tình trạng thoái hóa đất, sâu bệnh gia tăng
          và áp lực từ tiêu chuẩn xuất khẩu, công nghệ enzyme sinh học nổi lên như một giải pháp toàn diện
          và bền vững.
        </p>

        {/* Section 1 */}
        <section className={`mb-16 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#20412e" }}>Hiệu quả sinh học vượt trội</h2>
          <div className="w-16 h-0.5 mb-6" style={{ background: "#20412e" }} />
          <p className="mb-8 leading-relaxed" style={{ color: "#20412e" }}>
            Enzyme sinh học được nghiên cứu để phù hợp với điều kiện khí hậu, thổ nhưỡng và thực tiễn canh tác
            tại Việt Nam. Nhờ cơ chế tác động tự nhiên, sản phẩm mang lại nhiều lợi ích vượt trội.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5"
                style={{ border: "1px solid rgba(32,65,46,0.22)", background: "rgba(32,65,46,0.04)" }}
              >
                <span className="text-2xl">{f.icon}</span>
                <span className="text-sm leading-relaxed" style={{ color: "#20412e" }}>{f.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 italic text-sm pl-4" style={{ borderLeft: "2px solid #20412e", color: "#3a6e4a" }}>
            Không chỉ giúp cây trồng phát triển khỏe mạnh, giải pháp sinh học còn cải thiện hệ vi sinh vật đất –
            yếu tố cốt lõi của một nền nông nghiệp bền vững.
          </p>
        </section>

        {/* Section 2 */}
        <section className={`mb-16 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#20412e" }}>An toàn tuyệt đối cho hệ sinh thái</h2>
          <div className="w-16 h-0.5 mb-6" style={{ background: "#20412e" }} />
          <p className="mb-6 leading-relaxed" style={{ color: "#20412e" }}>
            Khác với hóa chất nông nghiệp truyền thống, enzyme sinh học được thiết kế với tiêu chí an toàn tối đa.
          </p>
          <div className="space-y-3">
            {safetyPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-bold" style={{ color: "#20412e" }}>→</span>
                <span className="text-sm" style={{ color: "#20412e" }}>{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className={`transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#20412e" }}>Đạt chuẩn quốc tế</h2>
          <div className="w-16 h-0.5 mb-6" style={{ background: "#20412e" }} />
          <p className="mb-8 leading-relaxed" style={{ color: "#20412e" }}>
            Ứng dụng công nghệ Nhật Bản, sản phẩm đáp ứng các tiêu chuẩn khắt khe của thị trường toàn cầu.
          </p>
          <div className="flex flex-wrap gap-4">
            {certifications.map((c, i) => (
              <div
                key={i}
                className="px-6 py-3 text-sm font-semibold tracking-widest uppercase"
                style={{ border: "1px solid #20412e", color: "#20412e", background: "rgba(32,65,46,0.06)" }}
              >
                {c}
              </div>
            ))}
          </div>
          <p className="mt-8 italic text-sm pl-4" style={{ borderLeft: "2px solid #20412e", color: "#3a6e4a" }}>
            Sử dụng enzyme sinh học không chỉ giúp nâng cao hiệu quả canh tác mà còn mở rộng cơ hội tiếp cận
            thị trường toàn cầu.
          </p>
        </section>
      </div>
    </article>
  );
}