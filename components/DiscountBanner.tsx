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

    return (
        <>
            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes leafSway {
          0%, 100% { transform: rotate(-8deg) translateY(0px); }
          33% { transform: rotate(5deg) translateY(-4px); }
          66% { transform: rotate(-3deg) translateY(-2px); }
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .animate-blink { animation: blink 1s step-start infinite; }
        .animate-leaf { animation: leafSway 3s ease-in-out infinite; }
        .animate-dot { animation: dotPulse 2s ease-in-out infinite; }

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

                <div className="relative z-10 mx-auto max-w-xl">
                    {/* Title */}
                    <h2 className="mb-2.5 text-4xl font-extrabold leading-tight tracking-tight text-white">
                        {t("title1")}
                        <br />
                        <span
                            className={`animate-blink ${imperial.className} lg:text-8xl mb: text-6xl `}
                        >
                            {t("title2")}
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-3 text-base font-medium text-white mb:text-sm lg:text-3xl">
                        {t("subtitle")}{" "}
                        <strong className="text-white/90">{t("brand")}</strong>
                    </p>

                    {/* Tagline */}
                    <p className="mb-8 mt-1.5 flex items-center justify-center gap-1.5 text-base font-semibold text-white mb:text-sm lg:text-2xl">
                        <span className="animate-bounce inline-block text-xl">🌱</span>
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