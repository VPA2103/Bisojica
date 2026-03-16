"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function VisionMission() {
    const t = useTranslations("visionMission");
    const values = t.raw("values.items");

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12 sm:space-y-16">

            {/* Vision */}
            <div className="space-y-3">
                <h1 className="text-4xl font-bold  flex items-center gap-2">
                    <span>{t("vision.title")}</span>
                </h1>
                <Image src={"/images/ve-chung-toi/tam-nhin.jpg"}
                    alt="vision"
                    width={1000}
                    height={1000} />
                <p className=" leading-relaxed text-xl sm:text-lg">
                    {t("vision.content")}
                </p>
            </div>

            {/* Mission */}
            <div className="space-y-3">
                <h2 className="text-4xl font-bold  flex items-center gap-2">
                    <span>{t("mission.title")}</span>
                </h2>
                <Image src={"/images/ve-chung-toi/su-menh.jpg"}
                    alt="vision"
                    width={1000}
                    height={1000} />
                <p className=" leading-relaxed text-xl sm:text-lg">
                    {t("mission.content")}
                </p>
                <h1 className="font-semibold mb-3 text-2xl">
                    {t("mission.commitTitle")}
                </h1>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2  text-xl sm:text-lg">
                    {t.raw("mission.commitments").map((item: string, i: number) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                </ul>
            </div>

            {/* Core Values */}
            <div className="space-y-6 sm:space-y-8">
                <h2 className="text-4xl font-bold  flex items-center gap-2">
                    <span>{t("values.title")}</span>
                </h2>
                <Image src={"/images/ve-chung-toi/gia-tri-cot-loi.png"}
                    alt="vision"
                    width={1000}
                    height={1000} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {values.map((value: any, index: number) => (
                        <div
                            key={index}
                            className="p-5 sm:p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <h3 className="font-semibold text-xl   mb-2 leading-snug">
                                {index + 1}. {value.title}
                            </h3>
                            <p className="text-gray-600 text-xl leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}