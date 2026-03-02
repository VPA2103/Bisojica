"use client"
import { useState } from "react";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#16A34A" fillOpacity="0.15" />
    <path d="M5 9l3 3 5-5" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const FlaskIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6M9 3v8l-4.5 9A1 1 0 0 0 5.4 21h13.2a1 1 0 0 0 .9-1.45L15 11V3" />
    <path d="M6.5 12.5h11" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const SproutIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-9.5" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-2-3.6C7 7.5 9.5 9.4 9.5 9.4z" />
    <path d="M14.1 6c-.1 2-.9 3.3-2.3 4.1 1.6.7 3.2.8 4.6.2 1.3-.5 2.5-1.9 2.3-3.7C16.7 3.9 14.1 6 14.1 6z" />
  </svg>
);

const WaterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </svg>
);

const FactoryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1M12 18h1M7 18h1" />
  </svg>
);

const FishIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6Z" />
    <path d="M18 12v.5" />
    <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
    <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 3.98-.68 8.07.27 9 .98.94 4 1.97 4 1.97" />
    <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
  </svg>
);

const coreValues = [
  {
    icon: <LeafIcon />,
    title: "Hiệu quả sinh học vượt trội",
    desc: "Phù hợp với thực tiễn nông nghiệp và môi trường Việt Nam, mang lại kết quả rõ rệt.",
    accent: "#16A34A",
  },
  {
    icon: <FlaskIcon />,
    title: "An toàn tuyệt đối",
    desc: "100% phân hủy sinh học, an toàn cho con người, vật nuôi và toàn bộ hệ sinh thái.",
    accent: "#0284C7",
  },
  {
    icon: <GlobeIcon />,
    title: "Công nghệ Nhật Bản",
    desc: "Đạt chuẩn quốc tế USDA, GlobalG.A.P. và các tiêu chuẩn xuất khẩu hàng đầu thế giới.",
    accent: "#7C3AED",
  },
];

const fields = [
  {
    icon: <SproutIcon />,
    label: "Nông Nghiệp",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.07)",
    border: "rgba(22,163,74,0.2)",
    items: [
      "Cải tạo và phục hồi đất nông nghiệp",
      "Trị nấm bệnh, sâu hại hiệu quả",
      "Tăng năng suất và chất lượng nông sản",
    ],
  },
  {
    icon: <FactoryIcon />,
    label: "Công Nghiệp",
    color: "#0284C7",
    bg: "rgba(2,132,199,0.07)",
    border: "rgba(2,132,199,0.2)",
    items: [
      "Xử lý nước thải (BOD, COD)",
      "Khử mùi hôi chuồng trại & bãi rác",
      "Chất tẩy rửa sinh học thân thiện môi trường",
    ],
  },
  {
    icon: <FishIcon />,
    label: "Thủy Sản",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.07)",
    border: "rgba(8,145,178,0.2)",
    items: [
      "Cải thiện môi trường ao nuôi",
      "Giảm khí độc H₂S, NH₃",
      "Tăng sức đề kháng cho tôm cá",
    ],
  },
];

export default function Sections() {
  const [hoveredField, setHoveredField] = useState<number | null>(null);

  return (
    <div
      style={{
        fontFamily: "'Be Vietnam Pro', 'Nunito', sans-serif",
        background: "#F0F7F2",
        minHeight: "100vh",
        padding: "0",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ── SECTION 1: Core Values ── */}
      <section
        style={{
          background: "linear-gradient(145deg, #0A2615 0%, #0D3B1E 60%, #0F4A24 100%)",
          padding: "80px 24px 90px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 20% 50%, #4ADE80 0%, transparent 50%), radial-gradient(circle at 80% 20%, #86EFAC 0%, transparent 40%)",
        }} />
        <div style={{
          position: "absolute", top: -60, right: -60, width: 280, height: 280,
          borderRadius: "50%", border: "1px solid rgba(74,222,128,0.08)",
        }} />
        <div style={{
          position: "absolute", top: -20, right: -20, width: 180, height: 180,
          borderRadius: "50%", border: "1px solid rgba(74,222,128,0.12)",
        }} />

        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>
          {/* Vision pill */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)",
              borderRadius: 100, padding: "8px 20px",
            }}>
              <span style={{ fontSize: 14, color: "#86EFAC", letterSpacing: "0.08em", fontWeight: 600 }}>
                TẦM NHÌN
              </span>
            </div>
          </div>

          <h2 style={{
            textAlign: "center", color: "#FFFFFF",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800,
            lineHeight: 1.25, marginBottom: 16, letterSpacing: "-0.02em",
          }}>
            Dẫn đầu Đông Nam Á về{" "}
            <span style={{ color: "#4ADE80" }}>Enzyme Hữu Cơ</span>
          </h2>
          <p style={{
            textAlign: "center", color: "rgba(255,255,255,0.55)",
            fontSize: 16, maxWidth: 520, margin: "0 auto 60px", lineHeight: 1.7,
          }}>
            Thúc đẩy nền kinh tế xanh bền vững — vì một tương lai tốt đẹp hơn cho hệ sinh thái và con người.
          </p>

          {/* Values grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}>
            {coreValues.map((v, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20, padding: "32px 28px",
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${v.accent}22`,
                  border: `1px solid ${v.accent}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: v.accent, marginBottom: 20,
                }}>
                  {v.icon}
                </div>
                <h3 style={{
                  color: "#FFFFFF", fontWeight: 700,
                  fontSize: 17, marginBottom: 10, letterSpacing: "-0.01em",
                }}>
                  {v.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Fields ── */}
      <section style={{ padding: "80px 24px 100px", background: "#F0F7F2" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.2)",
              borderRadius: 100, padding: "8px 20px", marginBottom: 20,
            }}>
              <span style={{ fontSize: 14, color: "#16A34A", letterSpacing: "0.08em", fontWeight: 600 }}>
                LĨNH VỰC HOẠT ĐỘNG
              </span>
            </div>
            <h2 style={{
              color: "#0A2615", fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: 14,
            }}>
              3 Mảng Ứng Dụng Chính
            </h2>
            <p style={{
              color: "#5A7A62", fontSize: 16, maxWidth: 480,
              margin: "0 auto", lineHeight: 1.7,
            }}>
              Giải pháp enzyme sinh học toàn diện, từ ruộng đồng đến nhà máy và ao nuôi.
            </p>
          </div>

          {/* Fields grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 24,
          }}>
            {fields.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredField(i)}
                onMouseLeave={() => setHoveredField(null)}
                style={{
                  background: "#FFFFFF",
                  border: `1.5px solid ${hoveredField === i ? f.color : "rgba(0,0,0,0.07)"}`,
                  borderRadius: 24, padding: "36px 30px",
                  transition: "all 0.25s ease",
                  transform: hoveredField === i ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: hoveredField === i
                    ? `0 20px 40px ${f.color}18`
                    : "0 2px 12px rgba(0,0,0,0.05)",
                  cursor: "default",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: f.bg, border: `1.5px solid ${f.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: f.color, marginBottom: 24,
                  transition: "all 0.25s ease",
                  transform: hoveredField === i ? "scale(1.08)" : "scale(1)",
                }}>
                  {f.icon}
                </div>

                {/* Label */}
                <h3 style={{
                  color: "#0A2615", fontWeight: 800,
                  fontSize: 20, marginBottom: 20, letterSpacing: "-0.02em",
                }}>
                  {f.label}
                </h3>

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {f.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ marginTop: 2, flexShrink: 0 }}>
                        <CheckIcon />
                      </div>
                      <span style={{
                        color: "#3D5940", fontSize: 14.5,
                        lineHeight: 1.55, fontWeight: 450,
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <div style={{ marginTop: 28 }}>
                  <button style={{
                    background: "none", border: "none", padding: 0,
                    color: f.color, fontWeight: 700, fontSize: 14,
                    cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
                    fontFamily: "inherit",
                    letterSpacing: "0.01em",
                  }}>
                    Xem giải pháp
                    <span style={{
                      display: "inline-block",
                      transition: "transform 0.2s",
                      transform: hoveredField === i ? "translateX(4px)" : "translateX(0)",
                    }}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}