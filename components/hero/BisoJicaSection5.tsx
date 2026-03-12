import { useEffect, useState } from "react";

const features = [
  {
    icon: "🦠",
    title: "Trị nấm bệnh, tuyến trùng",
    desc: "Giúp kiểm soát nấm bệnh và tuyến trùng gây hại cho cây trồng",
  },
  {
    icon: "🧪",
    title: "Loại bỏ kim loại nặng",
    desc: "Khóa và loại bỏ kim loại nặng trong đất, giúp cây tăng sức đề kháng",
  },
  {
    icon: "🌱",
    title: "Giải độc & cải tạo đất",
    desc: "Giải độc đất và hoạt hóa vi sinh vật có lợi giúp đất tơi xốp và màu mỡ",
  },
];

export default function BisoJicaSection5() {
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);

    const check = () => {
      setMobile(window.innerWidth < 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F5F4F0",
        padding: mobile ? "60px 20px" : "80px 40px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1px 1fr",
          gap: mobile ? "40px" : "0 60px",
          alignItems: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* LEFT */}
        <div style={{ paddingRight: mobile ? 0 : 20 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(74,158,53,0.15)",
              border: "1px solid rgba(74,158,53,0.3)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#6fcf57",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Giải pháp canh tác bền vững
            </span>
          </div>

          <h1
            style={{
              margin: "0 0 24px",
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.1,
              textTransform: "uppercase",
              color: "var(--text-color)",
            }}
          >
            Sạch nấm, bóng trái
          </h1>

          <div
            style={{
              width: 64,
              height: 4,
              borderRadius: 2,
              background:
                "linear-gradient(90deg, #6fcf57, rgba(111,207,87,0.2))",
              marginBottom: 28,
            }}
          />

          <blockquote
            style={{
              margin: 0,
              padding: "20px 24px",
              borderLeft: "3px solid #6fcf57",
              background: "rgba(111,207,87,0.07)",
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "clamp(14px, 3.5vw, 18px)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              "Trái sạch - bóng đẹp - tươi lâu, chi phí lại càng nhẹ gánh"
            </p>
          </blockquote>
        </div>

        {/* Divider (ẩn mobile) */}
        {!mobile && (
          <div
            style={{
              width: 1,
              alignSelf: "stretch",
              background:
                "linear-gradient(180deg, transparent, rgba(111,207,87,0.3) 20%, rgba(111,207,87,0.3) 80%, transparent)",
            }}
          />
        )}

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            paddingLeft: mobile ? 0 : 20,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(111,207,87,0.12)",
                borderRadius: 16,
                padding: mobile ? "18px" : "22px 24px",
                backdropFilter: "blur(4px)",
              }}
            >
              

              <div>
                <div
                  style={{
                    fontSize: mobile ? 13 : 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {f.title}
                </div>

                <div
                  style={{
                    fontSize: mobile ? 13 : 15,
                    lineHeight: 1.6,
                  }}
                >
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}