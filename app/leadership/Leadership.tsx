"use client"
import { useState } from "react";

const leaders = [
  {
    name: "Mr. Ngô Khánh Linh",
    title: "Người sáng lập và Chủ tịch Hội đồng thành viên",
    image: "/images/leaders/nkl.png",
    accentColor: "#3d7a35",
    points: [
      "Là người tiên phong tại Việt Nam trong lĩnh vực nông nghiệp tuần hoàn, Mr. Linh có hơn 15 năm kinh nghiệm tư vấn và triển khai mô hình nông nghiệp hữu cơ, giảm phát thải carbon và pháp lý đất nông nghiệp.",
      "Dưới vai trò là Người sáng lập và là Chủ tịch Hội đồng thành viên, Mr. Linh là người khởi xướng chiến lược nhập khẩu và ứng dụng enzyme vi sinh Nhật Bản trong canh tác thực tế, góp phần phục hồi đất, tăng năng suất và hỗ trợ sản xuất nông nghiệp bền vững.",
      "Mr. Linh cũng là chuyên gia tư vấn các tiêu chuẩn quốc tế như USDA Organic, GlobalG.A.P., GACC… giúp doanh nghiệp nông sản tiếp cận thị trường xuất khẩu và tín chỉ carbon.",
    ],
  },
  {
    name: "Ms. Nguyễn Phước Hương Thảo",
    title: "Giám đốc Điều hành",
    image: "/images/leaders/NPHT.png",
    accentColor: "#5a9e50",
    points: [
      "Ms. Hương Thảo từng giữ các vị trí quản lý cấp cao tại KFC, Starbucks, Dairy Queen, The Coffee House, The Coffee Bean & Tea Leaf, MK Restaurant, và hệ thống Food Court.",
      "Hiện tại, Ms. Hương Thảo là General Manager của VFBS, điều hành thương hiệu Popeyes Việt Nam – chuỗi gà ran nổi tiếng toàn cầu từ Hoa Kỳ.",
      "Ms. Hương Thảo được biết đến như một chuyên gia chiến lược có khả năng tái cấu trúc, phát triển đội ngũ và mở rộng hệ thống hiệu quả, đặc biệt trong các dự án nhượng quyền quốc tế và phát triển thị trường F&B tại Việt Nam.",
      "Với hơn 20 năm kinh nghiệm quản trị đa ngành từ F&B, bất động sản, in ấn đến nông nghiệp, Ms. Hương Thảo luôn đồng hành cùng doanh nghiệp kiến tạo giá trị bền vững và phát triển dài lâu.",
    ],
  },
];

interface Leader {
  name: string;
  title: string;
  image: string;
  accentColor: string;
  points: string[];
}

interface LeaderCardProps {
  leader: Leader;
  index: number;
}

function LeaderCard({ leader, index }: LeaderCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="leader-card"
      style={{
        background: "#fff",
        borderRadius: "2px",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 60px rgba(61,122,53,0.18)"
          : "0 4px 24px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
      }}
    >
      {/* Left / Top panel */}
      <div
        className="leader-left-panel"
        style={{
          background: `linear-gradient(160deg, #1e4620 0%, #3d7a35 60%, #5a9e50 100%)`,
          padding: "40px 28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -30, right: -30,
          width: 120, height: 120, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }} />
        <div style={{
          position: "absolute", bottom: 20, left: -20,
          width: 80, height: 80, borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
        }} />

        <div style={{
          width: 110, height: 110,
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.35)",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          flexShrink: 0,
        }}>
          <img
            src={leader.image}
            alt={leader.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#fff",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.4,
            marginBottom: "6px",
          }}>
            {leader.name}
          </div>
          <div style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: "rgba(255,255,255,0.72)",
            fontSize: "16px",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}>
            {leader.title}
          </div>
        </div>

        {/* Index badge */}
        <div style={{
          position: "absolute", top: 14, left: 14,
          width: 28, height: 28, borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Playfair Display', serif",
          color: "rgba(255,255,255,0.8)",
          fontSize: "13px",
          fontWeight: 700,
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Right / Bottom panel */}
      <div
        className="leader-right-panel"
        style={{
          padding: "36px 40px",
          background: "#fafaf8",
        }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "22px",
        }}>
          <div style={{
            width: 32, height: 2,
            background: "linear-gradient(90deg, #3d7a35, #5a9e50)",
          }} />
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase" as const,
            color: "#3d7a35",
          }}>
            Giới thiệu tóm tắt năng lực
          </span>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
          {leader.points.map((point, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#3d7a35",
                marginTop: "7px",
                flexShrink: 0,
              }} />
              <p style={{
                margin: 0,
                fontFamily: "'Source Sans 3', 'Noto Sans', sans-serif",
                fontSize: "18px",
                color: "#444",
                lineHeight: 1.75,
              }}>
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function LeadershipTeam() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; }

        /* Desktop: side-by-side layout */
        .leader-card {
          display: grid;
          grid-template-columns: 220px 1fr;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .leader-card {
            grid-template-columns: 1fr !important;
          }
          .leader-left-panel {
            padding: 32px 20px !important;
            flex-direction: row !important;
            justify-content: flex-start !important;
            align-items: center !important;
            gap: 20px !important;
            text-align: left !important;
          }
          .leader-left-panel > div:last-of-type {
            text-align: left !important;
          }
          .leader-right-panel {
            padding: 28px 24px !important;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .leader-left-panel {
            flex-direction: column !important;
            align-items: center !important;
            padding: 28px 16px !important;
            text-align: center !important;
          }
          .leader-left-panel > div:last-of-type {
            text-align: center !important;
          }
          .leader-right-panel {
            padding: 24px 16px !important;
          }
        }
      `}</style>
      <div style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "60px 20px",
        fontFamily: "'Source Sans 3', sans-serif",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: "52px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "6px",
            }}>
              <div style={{
                width: 4, height: 44,
                background: "linear-gradient(180deg, #1e4620, #5a9e50)",
                borderRadius: 2,
                flexShrink: 0,
              }} />
              <h1 style={{
                margin: 0,
                fontFamily: "'Arial', Georgia, serif",
                fontSize: "clamp(24px, 5vw, 42px)",
                fontWeight: 700,
                color: "#1e4620",
                letterSpacing: "-0.5px",
              }}>
                ĐỘI NGŨ LÃNH ĐẠO
              </h1>
            </div>
            <div style={{
              width: 120, height: 2,
              marginLeft: 20,
              background: "linear-gradient(90deg, #3d7a35, transparent)",
            }} />
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {leaders.map((leader, i) => (
              <LeaderCard key={i} leader={leader} index={i} />
            ))}
          </div>

          {/* Footer accent */}
          <div style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
            opacity: 0.4,
          }}>
            <div style={{ flex: 1, height: 1, background: "#3d7a35" }} />
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#3d7a35",
            }} />
            <div style={{ flex: 1, height: 1, background: "#3d7a35" }} />
          </div>
        </div>
      </div>
    </>
  );
}