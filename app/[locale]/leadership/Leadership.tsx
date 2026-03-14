"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";

const leadersStatic = [
  {
    image: "/images/leaders/nkl.png",
    accentColor: "#3d7a35",
  },
  {
    image: "/images/leaders/NPHT.png",
    accentColor: "#5a9e50",
  },
];

interface LeaderCardProps {
  name: string;
  title: string;
  points: string[];
  image: string;
  accentColor: string;
  index: number;
  sectionLabel: string;
}

function LeaderCard({ name, title, points, image, index, sectionLabel }: LeaderCardProps) {
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
      {/* Left panel */}
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
        <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: 20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <div style={{ width: 110, height: 110, borderRadius: "50%", border: "3px solid rgba(255,255,255,0.35)", overflow: "hidden", position: "relative", zIndex: 1, boxShadow: "0 8px 32px rgba(0,0,0,0.3)", flexShrink: 0 }}>
          <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ color: "#fff", fontSize: "18px", fontWeight: 700, lineHeight: 1.4, marginBottom: "6px" }}>
            {name}
          </div>
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: "16px", lineHeight: 1.5, fontStyle: "italic" }}>
            {title}
          </div>
        </div>

        <div style={{ position: "absolute", top: 14, left: 14, width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700 }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Right panel */}
      <div className="leader-right-panel" style={{ padding: "36px 40px", background: "#fafaf8" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
          <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, #3d7a35, #5a9e50)" }} />
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#3d7a35" }}>
            {sectionLabel}
          </span>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
          {points.map((point, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3d7a35", marginTop: "7px", flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "18px", color: "#444", lineHeight: 1.75 }}>
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
  const t = useTranslations("leadership");
  const leaders = t.raw("leaders") as { name: string; title: string; points: string[] }[];

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

<div style={{ minHeight: "100vh", background: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "6px" }}>
              <div style={{ width: 4, height: 44, background: "linear-gradient(180deg, #1e4620, #5a9e50)", borderRadius: 2, flexShrink: 0 }} />
              <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, color: "#1e4620", letterSpacing: "-0.5px" }}>
                {t("title")}
              </h1>
            </div>
            <div style={{ width: 120, height: 2, marginLeft: 20, background: "linear-gradient(90deg, #3d7a35, transparent)" }} />
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {leaders.map((leader, i) => (
              <LeaderCard
                key={i}
                index={i}
                name={leader.name}
                title={leader.title}
                points={leader.points}
                image={leadersStatic[i].image}
                accentColor={leadersStatic[i].accentColor}
                sectionLabel={t("sectionLabel")}
              />
            ))}
          </div>

          {/* Footer accent */}
          <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 12, opacity: 0.4 }}>
            <div style={{ flex: 1, height: 1, background: "#3d7a35" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3d7a35" }} />
            <div style={{ flex: 1, height: 1, background: "#3d7a35" }} />
          </div>

        </div>
      </div>
    </>
  );
}