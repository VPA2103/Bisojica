"use client"
import React from 'react';
import {
    Leaf,
    Sprout,
    MapPin,
    BarChart3,
    Users,
    Target,
    CheckCircle2,
    GraduationCap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const experienceIcons = [Sprout, Leaf, MapPin, BarChart3, Users];

type TrackItem = { duration: string; track: string; items: string[] };
type ExperienceItem = { title: string; desc: string };

const PhatTrienNhanTai: React.FC = () => {
    const t = useTranslations("talent");

    // Sử dụng || [] để tránh lỗi .map() nếu dữ liệu i18n chưa kịp load hoặc thiếu key
    const experienceItems = (t.raw("experience.items") as ExperienceItem[]) || [];
    const tracks = (t.raw("roadmap.tracks") as TrackItem[]) || [];
    const lookingItems = (t.raw("recruit.lookingItems") as string[]) || [];
    const opportunityItems = (t.raw("recruit.opportunityItems") as string[]) || [];
    const profileItems = (t.raw("register.profileItems") as string[]) || [];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen text-[#20412e] bg-white font-sans">
            
            {/* ── HERO ── */}
            <section id="phat-trien-nhan-tai" className="relative py-24 px-6 overflow-hidden bg-[#20412e]">
                {/* Background Decor */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
                />
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-[#f3edd7]" />

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
                    <span className="inline-block py-1 px-4 rounded-full text-sm font-semibold tracking-widest uppercase bg-[#f3edd7] text-[#20412e]">
                        {t("hero.badge")}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#f3edd7]">
                        {t("hero.title")}
                    </h1>
                    <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-[#f3edd7] opacity-85">
                        {t("hero.subtitle")}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => scrollToSection("dang-ky-ngay")}
                            className="font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105 bg-[#f3edd7] text-[#20412e]"
                        >
                            {t("hero.ctaPrimary")}
                        </button>
                        <button
                            className="font-bold py-3 px-8 rounded-lg border-2 transition-all hover:bg-[#f3edd7]/10 border-[#f3edd7] text-[#f3edd7]"
                            onClick={() => scrollToSection("video-section")}
                        >
                            {t("hero.ctaSecondary")}
                        </button>
                    </div>
                </div>
            </section>

            {/* ── VÌ SAO BISO ── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-[#20412e]">{t("why.title")}</h2>
                    <div className="text-xl space-y-4 text-[#20412e]">
                        <p className="text-2xl">{t("why.line1")}</p>
                        <p className="font-semibold">{t("why.line2")}</p>
                        <div className="mt-8 p-8 rounded-2xl shadow-sm border border-[#20412e]/15 bg-[#fcfbf4]">
                            <p className="italic text-[#20412e] opacity-85">{t("why.quote")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRẢI NGHIỆM ── */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#20412e] mb-12">
                        {t("experience.title")}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experienceItems.map((item, i) => {
                            const Icon = experienceIcons[i] || Leaf;
                            return (
                                <div key={i} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                                    <Icon className="w-10 h-10 mb-4 text-[#20412e]" />
                                    <h3 className="text-xl font-bold mb-2 text-[#20412e]">{item.title}</h3>
                                    <p className="text-[#20412e]/70 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-center text-xl font-medium text-[#20412e] mt-12 opacity-80">
                        {t("experience.footer")}
                    </p>
                </div>
            </section>

            {/* ── LỘ TRÌNH ── */}
            <section className="py-20 px-6 bg-[#20412e]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#f3edd7]">
                        {t("roadmap.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {tracks.map((track, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-[#f3edd7]/20 bg-[#f3edd7]/5 backdrop-blur-sm">
                                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 bg-[#f3edd7] text-[#20412e]">
                                    {track.duration}
                                </span>
                                <h3 className="text-2xl font-bold mb-6 text-[#f3edd7]">{track.track}</h3>
                                <ul className="space-y-4">
                                    {track.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-[#f3edd7]/70" />
                                            <span className="text-[#f3edd7]/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TÌM KIẾM & CƠ HỘI ── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#20412e]">
                            <GraduationCap className="w-8 h-8" />
                            {t("recruit.lookingTitle")}
                        </h2>
                        <ul className="space-y-3">
                            {lookingItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-2">
                                    <div className="w-2 h-2 rounded-full shrink-0 bg-[#20412e]" />
                                    <span className="text-lg leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#20412e]">
                            <Target className="w-8 h-8" />
                            {t("recruit.opportunityTitle")}
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {opportunityItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl text-center border-2 border-[#20412e]/10 transition-all hover:bg-[#20412e] hover:text-[#f3edd7] group cursor-default"
                                >
                                    <p className="font-bold group-hover:text-white transition-colors">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ĐĂNG KÝ ── */}
            <section id="dang-ky-ngay" className="py-20 px-6 bg-[#fcfbf4]">
                <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl shadow-xl border border-[#20412e]/5 bg-white">
                    <div className="text-center mb-10 space-y-2">
                        <h2 className="text-3xl font-bold text-[#20412e]">{t("register.title")}</h2>
                        <p className="text-[#20412e]/65">{t("register.subtitle")}</p>
                    </div>

                    <div className="p-6 rounded-2xl mb-8 border border-[#20412e]/10 bg-[#f9fafb]">
                        <h3 className="font-bold mb-3 text-[#20412e] text-lg">{t("register.profileTitle")}</h3>
                        <ul className="list-disc list-inside space-y-2 mb-4 text-[#20412e]/85">
                            {profileItems.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <p className="italic font-semibold text-[#20412e] mt-4 px-4 border-l-4 border-[#20412e]">
                            {t("essayPrompt")}
                        </p>

                        <div className="mt-8 pt-6 border-t border-[#20412e]/10 space-y-4">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-[#20412e]/50 font-bold">{t("register.emailLabel")}</p>
                                <p className="font-bold text-xl text-[#20412e] break-all">{t("register.email")}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-[#20412e]/50 font-bold">{t("register.subjectLabel")}</p>
                                <p className="mt-1 font-mono inline-block px-4 py-2 border rounded-lg text-[#20412e] bg-white border-[#20412e]/20">
                                    {t("register.subject")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhatTrienNhanTai;