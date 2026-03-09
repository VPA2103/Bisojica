"use client";

import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const footerLinks = {
  "Sản Phẩm": [
    { label: "Sản phẩm", href: "/products" },
    { label: "Bảng giá", href: "/bang-gia" },
  ],
  "Công Ty": [
    { label: "Về chúng tôi", href: "/ve-chung-toi" },
    { label: "Thông tin về enzyme", href: "/enzyme" },
  ],
  "Hỗ Trợ": [
    { label: "Tài liệu", href: "/tai-lieu" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "Phát triển nhân tài", href: "/phat-trien-nhan-tai" },
  ],
};

const socials = [
  { label: "ZL", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#20412E] text-white relative overflow-hidden">

      {/* Background grid */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffd700] tracking-widest uppercase">
              Thông Tin Liên Hệ
            </h3>

            <div className="space-y-3 text-white/70 text-sm">
              <p>
                <span className="font-medium text-white">Địa chỉ: </span>
                1145 Nguyễn Thị Định, P. Cát Lái, TP. Thủ Đức
              </p>

              <p>
                <span className="font-medium text-white">Điện thoại: </span>
                092 8899 939
              </p>

              <p>
                <span className="font-medium text-white">Email: </span>
                bisojica@gmail.com
              </p>
            </div>

            {/* QR */}
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <Image
                  src="/images/contact/qr.png"
                  alt="QR liên hệ"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <p className="text-xs mt-2 text-white/60">Quét để liên hệ</p>
              </div>

              <div className="text-center">
                <Image
                  src="/images/contact/qrzl.png"
                  alt="QR thông tin"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <p className="text-xs mt-2 text-white/60">Quét để xem</p>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:col-span-2">

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm text-[#ffd700] mb-6 tracking-widest uppercase pl-2">
                  {title}
                </h4>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition flex items-center gap-2"
                      >
                        <span className="text-[#ffd700] opacity-0 group-hover:opacity-100">
                          ›
                        </span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-linear-to-r from-transparent via-yellow-400/30 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-white/40 tracking-widest">
            © 2026 BISO JICA
          </p>
          <div
            className={`text-3xl text-center  max-w-xl mx-auto leading-relaxed ${dancing.className}`}
            style={{ fontFamily: "Dancing Script"}}
          >
            <p>Chúng tôi không chỉ tạo ra sản phẩm.</p>
            <p>Chúng tôi xây dựng một thế hệ nông nghiệp mới.</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 border border-yellow-400/20 px-4 py-2 bg-yellow-400/5 mb-6">
            <span className="text-yellow-400 text-xs">◉</span>
            <span className="text-xs tracking-widest text-white/40 uppercase ">
              Hồ Chí Minh, Việt Nam
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const dancing = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});