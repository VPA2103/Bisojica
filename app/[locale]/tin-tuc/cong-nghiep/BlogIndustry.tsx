"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

type Stat = { val: string; label: string };
type Section = { icon: string; title: string; body: string; tags: string[] };

export default function BlogIndustry() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("blogIndustry");

  const stats = t.raw("stats") as Stat[];
  const sections = t.raw("sections") as Section[];

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
      className="relative min-h-screen bg-white overflow-hidden"
      style={{ color: "#20412e", fontFamily: "'Lato', serif" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 90% 5%, rgba(32,65,46,0.08) 0%, transparent 45%)` }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-20">

        {/* Badge */}
        <div className={`inline-flex items-center gap-3 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="w-10 h-0.5" style={{ background: "#20412e" }} />
          <span className="text-xl tracking-[0.4em] uppercase font-semibold" style={{ color: "#20412e" }}>
            {t("badge")}
          </span>
        </div>

        {/* Title */}
        <div className={`mb-10 transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-6xl font-black leading-none mb-4" style={{ color: "#20412e", letterSpacing: "-0.02em" }}>
            {t("titleLine1")}
            <br />
            <span className="text-3xl md:text-4xl font-light italic" style={{ color: "#3a6e4a" }}>
              {t("titleLine2")}
            </span>
          </h1>
          <p className="max-w-4xl leading-relaxed text-2xl" style={{ color: "#20412e" }}>
            {t("intro")}
          </p>
        </div>

        {/* Hero Image */}
        <div
          className={`relative w-full mb-14 overflow-hidden transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ height: "400px" }}
        >
          <img
            src="/images/cong-nghiep.png"
            alt={t("imageAlt")}
            className="w-full h-full object-cover"
            style={{ filter: "sepia(15%) saturate(80%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(32,65,46,0.35) 0%, transparent 55%)" }}
          />
          <span className="absolute bottom-5 left-6 text-xl tracking-widest uppercase" style={{ color: "#ffffff", opacity: 0.9 }}>
            {t("imageCaption")}
          </span>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 mb-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {stats.map((s, i) => (
            <div key={i} className="p-5" style={{ borderTop: "3px solid #20412e", background: "#ffffff" }}>
              <div className="text-4xl font-black mb-1" style={{ color: "#20412e" }}>{s.val}</div>
              <div className="text-xl uppercase tracking-wider" style={{ color: "#3a6e4a" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`group gap-6 p-8 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                border: "1px solid rgba(32,65,46,0.22)",
                background: "rgba(32,65,46,0.03)",
                transitionDelay: `${400 + i * 150}ms`,
              }}
            >
              <div className="flex">
                <div className="pr-2 mt-2">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center text-2xl" style={{ border: "2px solid #20412e" }}>
                    {s.icon}
                  </div>
                </div>
                <h2 className="text-3xl font-bold" style={{ color: "#20412e" }}>{s.title}</h2>
              </div>
              <div>
                <p className="text-xl leading-relaxed mb-4" style={{ color: "#20412e" }}>{s.body}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xl px-3 py-1 font-semibold tracking-wide"
                      style={{ background: "rgba(32,65,46,0.1)", color: "#20412e" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer callout */}
        <div
          className={`mt-16 p-8 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ background: "#ffffff", color: "#20412e" }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🌿</span>
            <div>
              <h3 className="text-4xl font-bold mb-2">{t("callout.title")}</h3>
              <p className="text-2xl leading-relaxed" style={{ color: "#20412e" }}>
                {t("callout.desc")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}