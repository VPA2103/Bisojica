"use client"
import { useState } from "react";

const companyImages = [
  "/logo.png",
  "/images/products/NIOI - ZERO.jpg",
  "/images/products/MITAKA 3000.jpg",

];

const highlights = [
  "BISO – Thương hiệu enzyme hàng đầu tại Nhật Bản.",
  "JICA – Tổ chức Hợp tác Quốc tế Nhật Bản (thuộc Chính phủ Nhật).",
];

const benefits = [
  "Sinh học hóa quy trình sản xuất.",
  "Thân thiện với môi trường.",
  "Tối ưu chi phí và hiệu quả kinh tế.",
];

const companyInfo = [
  { label: "Tên công ty", value: "CÔNG TY TNHH BISO JICA JAPAN - VIỆT NAM", bold: true },
  { label: "Tên thương hiệu", value: "BISO JICA", bold: true },
  { label: "Trụ sở chính", value: "1145 Nguyễn Thị Định, P. Cát Lái, TP. Thủ Đức", bold: true },
  { label: "Ngày thành lập", value: "16/03/2024" },
  { label: "Website", value: "https://www.bisojica.vn/", isLink: true },
  { label: "Email", value: "bisojica@gmail.com", isEmail: true },
  { label: "Hotline", value: "092 8899 939", bold: true },
  { label: "Mã số doanh nghiệp", value: "0317885457" },
];

export default function BisoJicaInfo() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Mulish:wght@400;500;600;700&display=swap');
        .biso-card { font-family: 'Mulish', sans-serif; }
        .biso-title { font-family: 'Playfair Display', serif; }
        .img-hover { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .img-hover:hover { transform: scale(1.03); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
        .info-row { transition: background 0.2s; }
        .info-row:hover { background: rgba(255,255,255,0.12); }
        .fade-in { animation: fadeInUp 0.7s ease both; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #4a7c59; flex-shrink: 0; margin-top: 6px; }
      `}</style>

      <div className="biso-card w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl fade-in">
        
        {/* Header */}
        <div className="bg-stone-100 px-6 py-5 border-b border-stone-200">
          <h1 className="biso-title text-2xl sm:text-3xl font-bold text-stone-800 tracking-wide uppercase">
            Thông Tin Công Ty
          </h1>
          <div className="mt-1 h-0.5 w-16 bg-green-700 rounded-full"></div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-stone-200">
          {companyImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded aspect-video">
              <img
                src={src}
                alt={`Company image ${i + 1}`}
                className="w-full h-full object-cover img-hover"
                // onError={(e) => {
                //   e.target.src = `https://placehold.co/400x250/4a7c59/ffffff?text=BISO+JICA`;
                // }}
              />
            </div>
          ))}
        </div>

        {/* Body text */}
        <div className="px-6 py-5 space-y-4">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-stone-900">BISO JICA</span> là doanh nghiệp tiên phong tại Việt Nam trong lĩnh vực nghiên cứu và phân phối enzyme sinh học hữu cơ ứng dụng trong nông nghiệp – công nghiệp – thủy sản.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Công ty được thành lập dựa trên hợp tác chiến lược giữa:
          </p>
          <ul className="space-y-2 pl-1">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-stone-700">
                <span className="dot mt-1.5"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Kết hợp giữa công nghệ sinh học Nhật Bản và hiểu biết sâu sắc về điều kiện sản xuất tại Việt Nam, Biso Jica mang đến giải pháp:
          </p>
          <ul className="space-y-2 pl-1">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-stone-700">
                <span className="dot mt-1.5"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Info block */}
        <div className="bg-green-900 text-white mx-0 rounded-b-2xl">
          <div className="px-6 py-5 divide-y divide-green-700/50">
            {companyInfo.map(({ label, value, bold, isLink, isEmail }, i) => (
              <div
                key={i}
                className="info-row flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 py-2.5 rounded px-1 -mx-1"
              >
                <span className="text-green-300 text-xs sm:text-sm whitespace-nowrap min-w-[160px]">
                  {label}:
                </span>
                {isLink ? (
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 text-sm underline underline-offset-2 hover:text-white transition-colors"
                  >
                    {value}
                  </a>
                ) : isEmail ? (
                  <a
                    href={`mailto:${value}`}
                    className="text-green-100 text-sm underline underline-offset-2 hover:text-white transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className={`text-sm sm:text-base ${bold ? "font-bold text-white" : "text-green-100"}`}>
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}