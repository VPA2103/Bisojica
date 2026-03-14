import { useTranslations } from "next-intl";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

export default function Footer() {

  const t = useTranslations("footer");

  // Sửa lại cấu trúc link dựa trên đúng key trong JSON
  const footerLinks = [
    {
      title: t("sections.0.title"), // Hoặc dùng t("sections.0.title") nếu có trong JSON
      links: [
        { label: t("sections.0.links.0.label"), href: "/products" }, // Hoặc hardcode "Sản phẩm"
        { label: t("sections.0.links.1.label"), href: "/bang-gia" },
      ]
    },
    {
      title: t("sections.1.title"),
      links: [
        { label: t("sections.1.links.0.label"), href: "/ve-chu-toi" },
        { label: t("sections.1.links.1.label"), href: "/enzyme" },
      ]
    },
    {
      title: t("sections.2.title"),
      links: [
        { label: t("sections.2.links.0.label"), href: "/tai-lieu" },
        { label: t("sections.2.links.1.label"), href: "/tin-tuc" },
        { label: t("sections.2.links.2.label"), href: "/phat-trien-nhan-tai" },
      ]
    }
  ];

  return (
    <footer className="bg-[#20412E] text-white relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
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
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#ffd700] tracking-widest uppercase">
              {t("contact.badge")}
            </h3>

            <div className="space-y-3 text-white/70 text-sm">
              <p>
                <span className="font-medium text-white">{t("contact.addressLabel")}: </span>
                {t("contact.address")}
              </p>
              <p>
                <span className="font-medium text-white">{t("contact.phoneLabel")}: </span>
                {t("contact.phone")}
              </p>
              <p>
                <span className="font-medium text-white">Email: </span>
                {t("contact.email")}
              </p>
            </div>

            {/* QR CODES */}
            <div className="flex gap-6 mt-6">
              <div className="text-center group">
                <div className="bg-white p-1 rounded-md transition-transform group-hover:scale-105">
                  <Image
                    src="/images/contact/qr.png"
                    alt="QR Contact"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-[10px] mt-2 text-white/60 uppercase tracking-tighter">
                  {t("contact.qr.contact")}
                </p>
              </div>

              <div className="text-center group">
                <div className="bg-white p-1 rounded-md transition-transform group-hover:scale-105">
                  <Image
                    src="/images/contact/qrzl.png"
                    alt="QR Info"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-[10px] mt-2 text-white/60 uppercase tracking-tighter">
                  {t("contact.qr.info")}
                </p>
              </div>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm text-[#ffd700] mb-6 tracking-widest uppercase">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                      >
                        <span className="text-[#ffd700] opacity-0 -ml-2 group-hover:opacity-100 transition-all">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] text-white/40 tracking-[0.2em] order-3 md:order-1">
            © 2026 BISO JICA
          </p>

          <div 
            className={`text-xl md:text-2xl text-center leading-relaxed text-white/90 order-1 md:order-2 ${dancing.className}`}
          >
            <p>{t("quote.line1")}</p>
            <p>{t("quote.line2")}</p>
          </div>

          <div className="flex items-center gap-2 border border-yellow-400/20 px-4 py-2 bg-yellow-400/5 order-2 md:order-3">
            <span className="animate-pulse text-yellow-400 text-xs">◉</span>
            <span className="text-[10px] tracking-widest text-white/60 uppercase">
              {t("location")}
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