"use client"
import { useState } from "react";

const footerLinks = {
  "Sản Phẩm": ["Tính Năng", "Bảng Giá", "Cập Nhật", "Lộ Trình"],
  "Công Ty": ["Về Chúng Tôi", "Blog", "Tuyển Dụng", "Báo Chí"],
  "Hỗ Trợ": ["Tài Liệu", "API", "Cộng Đồng", "Liên Hệ"],
  "Pháp Lý": ["Quyền Riêng Tư", "Điều Khoản", "Cookie", "Bảo Mật"],
};

const socials = [
  { label: "TW", href: "#" },
  { label: "IG", href: "#" },
  { label: "GH", href: "#" },
  { label: "LI", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #20412e 0%, #20412e 50%, #20412e 100%)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,220,100,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,220,100,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10"
        style={{
          background:
            "conic-gradient(from 45deg, transparent 0deg, #ffd700 90deg, transparent 180deg)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span
                className="text-4xl font-black tracking-tighter"
                style={{
                  color: "#ffd700",
                  fontFamily: "'Georgia', serif",
                  letterSpacing: "-2px",
                }}
              >
                BISO
              </span>
              <span
                className="text-4xl font-thin tracking-widest"
                style={{ color: "#ffffff80", letterSpacing: "6px" }}
              >
                JICA
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-8 max-w-xs"
              style={{ color: "#ffffff60", letterSpacing: "0.02em", lineHeight: "1.8" }}
            >
              Chúng tôi xây dựng những trải nghiệm kỹ thuật số đặc biệt — nơi sự sáng tạo gặp gỡ công nghệ.
            </p>

            {/* Newsletter */}
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#ffd70080", letterSpacing: "4px" }}
              >
                Bản Tin
              </p>
              {subscribed ? (
                <p className="text-sm" style={{ color: "#ffd700" }}>
                  ✦ Đã đăng ký thành công!
                </p>
              ) : (
                <div className="flex gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@của bạn"
                    className="flex-1 bg-transparent text-sm px-4 py-3 outline-none placeholder-white/20"
                    style={{
                      border: "1px solid rgba(255,215,0,0.2)",
                      borderRight: "none",
                      color: "#fff",
                      fontFamily: "inherit",
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-5 py-3 text-xs uppercase tracking-widest transition-all duration-300 hover:opacity-80"
                    style={{
                      background: "#ffd700",
                      color: "#0a0a0f",
                      fontFamily: "inherit",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-xs uppercase mb-6"
                  style={{
                    color: "#ffd700",
                    letterSpacing: "4px",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-200 hover:translate-x-1 inline-block group"
                        style={{ color: "#ffffff50" }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "#ffffff")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color = "#ffffff50")
                        }
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#ffd700" }}>
                          ›
                        </span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: "#ffffff30", letterSpacing: "2px" }}
          >
            © 2026 BISO JICA
          </p>

          {/* Location badge */}
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{
              border: "1px solid rgba(255,215,0,0.15)",
              background: "rgba(255,215,0,0.03)",
            }}
          >
            <span style={{ color: "#ffd70060", fontSize: "10px" }}>◉</span>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#ffffff30", letterSpacing: "3px" }}
            >
              Hồ Chí Minh, Việt Nam
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="w-9 h-9 flex items-center justify-center text-xs transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,215,0,0.2)",
                  color: "#ffffff40",
                  letterSpacing: "1px",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#ffd700";
                  el.style.color = "#0a0a0f";
                  el.style.borderColor = "#ffd700";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "#ffffff40";
                  el.style.borderColor = "rgba(255,215,0,0.2)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}