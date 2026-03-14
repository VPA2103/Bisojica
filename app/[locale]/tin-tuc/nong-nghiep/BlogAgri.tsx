"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

type Feature = { icon: string; text: string };

export default function BlogAgri() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("blogAgri");

  const features = t.raw("section1.features") as Feature[];
  const safetyPoints = t.raw("section2.points") as string[];
  const certifications = t.raw("section3.certifications") as string[];

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
        style={{ backgroundImage: `radial-gradient(circle at 85% 10%, rgba(32,65,46,0.07) 0%, transparent 50%)` }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-20">

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 border text-xl tracking-[0.3em] uppercase px-10 py-4 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ borderColor: "#20412e", color: "#20412e" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#20412e" }} />
          {t("badge")}
        </div>

        {/* Title */}
        <div className={`transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-3" style={{ color: "#20412e" }}>
            {t("titleLine1")}
            <br />
            <span className="italic" style={{ color: "#3a6e4a" }}>{t("titleLine2")}</span>
          </h1>
          <p className="text-2xl mb-2" style={{ color: "#3a6e4a", lineHeight: "1.8" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Hero Image */}
        <div
          className={`relative w-full mb-14 overflow-hidden transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ height: "400px" }}
        >
          <img
            src="/images/nong-nghiep.png"
            alt={t("imageAlt")}
            className="w-full h-full object-cover"
            style={{ filter: "sepia(15%) saturate(85%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(32,65,46,0.35) 0%, transparent 55%)" }}
          />
          <span className="absolute bottom-5 left-6 text-xl tracking-widest uppercase" style={{ color: "#ffffff", opacity: 0.9 }}>
            {t("imageCaption")}
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
          className={`text-2xl leading-8 mb-8 max-w-5xl transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ color: "#20412e" }}
        >
          {t("intro")}
        </p>

        {/* Section 1 */}
        <section className={`mb-16 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#20412e" }}>{t("section1.title")}</h2>
          <div className="w-16 h-0.5 mb-6" style={{ background: "#20412e" }} />
          <p className="mb-8 leading-relaxed text-2xl" style={{ color: "#20412e" }}>
            {t("section1.desc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5"
                style={{ border: "1px solid rgba(32,65,46,0.22)", background: "rgba(32,65,46,0.04)" }}
              >
                <span className="text-2xl">{f.icon}</span>
                <span className="text-xl leading-relaxed" style={{ color: "#20412e" }}>{f.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 italic text-2xl pl-4" style={{ borderLeft: "2px solid #20412e", color: "#3a6e4a" }}>
            {t("section1.quote")}
          </p>
        </section>

        {/* Section 2 */}
        <section className={`mb-16 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-4xl font-bold mb-2" style={{ color: "#20412e" }}>{t("section2.title")}</h2>
          <div className="w-16 h-0.5 mb-6" style={{ background: "#20412e" }} />
          <p className="mb-6 leading-relaxed text-2xl" style={{ color: "#20412e" }}>
            {t("section2.desc")}
          </p>
          <div className="space-y-3">
            {safetyPoints.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-bold" style={{ color: "#20412e" }}>→</span>
                <span className="text-2xl" style={{ color: "#20412e" }}>{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className={`transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-4xl font-bold mb-2" style={{ color: "#20412e" }}>{t("section3.title")}</h2>
          <div className="w-16 h-0.5 mb-6" style={{ background: "#20412e" }} />
          <p className="mb-8 leading-relaxed text-2xl" style={{ color: "#20412e" }}>
            {t("section3.desc")}
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
          <p className="mt-8 italic text-2xl pl-4" style={{ borderLeft: "2px solid #20412e", color: "#3a6e4a" }}>
            {t("section3.quote")}
          </p>
        </section>

      </div>
    </article>
  );
}