"use client";

import { Link } from "@/i18n/navigation";
import { Imperial_Script } from "next/font/google";
import { useTranslations } from "next-intl";

const imperial = Imperial_Script({
    subsets: ["latin"],
    weight: "400",
});

export default function DiscountBanner() {
    const t = useTranslations("discountBanner");

    const benefits = [
        { emoji: "🌱", key: "benefit1" },
        { emoji: "💧", key: "benefit2" },
        { emoji: "📈", key: "benefit3" },
    ] as const;

    return (
        <>
            <style>{`
        @keyframes leafSway {
          0%, 100% { transform: rotate(-8deg) translateY(0px); }
          33% { transform: rotate(5deg) translateY(-4px); }
          66% { transform: rotate(-3deg) translateY(-2px); }
        }

        .animate-leaf { animation: leafSway 3s ease-in-out infinite; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animate-blink { animation: blink 1s step-start infinite; }

        .arrow-icon {
          transition: transform 0.22s cubic-bezier(0.22,1,0.36,1);
        }

        .btn-hover:hover .arrow-icon {
          transform: translateX(4px);
        }

        .btn-hover:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 32px rgba(0,229,160,0.35);
          background: #1aedab;
        }

        .btn-hover:active {
          transform: scale(0.97);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
        }

        .benefit-emoji {
          font-size: 1.25rem;
          flex-shrink: 0;
        }
      `}</style>

            <section
                className="font-sora relative overflow-hidden px-10 py-12 text-center"
                style={{
                    background:
                        "linear-gradient(135deg, #003d2b 0%, #005c40 50%, #003d2b 100%)",
                }}
            >
                {/* Glow */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,160,0.12) 0%, transparent 70%)",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-2xl">
                    {/* Title */}
                    <h2 className="text-xl md:text-6xl lg:text-6xl animate-blink mb-1 font-extrabold leading-tight tracking-tight text-white">
                        {t("title1")}
                    </h2>

                    {/* Subtitle title */}
                    <p
                        className={`${imperial.className} mb-6 text-5xl lg:text-7xl`}
                        style={{ color: "#00e5a0" }}
                    >
                        {t("title2")}
                    </p>

                    {/* Intro line */}
                    <p className="mb-4 text-base font-semibold text-white/90 lg:text-xl">
                        {t("intro")}{" "}
                        {/* <strong className="text-white">{t("brand")}</strong>{" "} */}
                        {t("introSuffix")}
                    </p>

                    {/* Benefits list */}
                    <div className="mb-6 mx-auto inline-flex flex-col gap-3 text-left">
                        {benefits.map(({ emoji, key }) => (
                            <div key={key} className="benefit-item">
                                <span className="benefit-emoji">{emoji}</span>
                                <span className="text-sm font-medium text-white/90 lg:text-base">
                                    {t(key)}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Tagline */}
                    <p className="animate-blink mb-8 flex items-center justify-center gap-2 text-xl font-bold text-white/80 lg:text-2xl ">
                        <span>👉</span>
                        {t("tagline")}
                    </p>

                    {/* Button (Link) */}
                    <Link
                        href="/products"
                        className="btn-hover inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200"
                        style={{ background: "#00e5a0", color: "#003d2b" }}
                    >
                        {t("cta")}
                        <svg
                            className="arrow-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M3 8h10M9 4l4 4-4 4"
                                stroke="#003d2b"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}