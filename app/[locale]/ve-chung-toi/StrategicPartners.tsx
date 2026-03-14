import Image from "next/image";
import { useTranslations } from "next-intl";

export default function StrategicPartners() {
  const t = useTranslations("partners");

  return (
    <section className="w-full bg-[#ffffff] py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-[#20412e] mb-8 border-l-4 border-[#20412e] pl-3">
          {t("title")}
        </h2>

        {/* Partner 1 */}
        <div className="mb-10">
          <h3 className="font-semibold text-2xl text-[#20412e] mb-2">
            {t("partner1.heading")}
          </h3>
          <p className="text-gray-700 text-xl leading-relaxed mb-5">
            {t("partner1.desc")}
          </p>
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md h-56 rounded-xl overflow-hidden">
              <Image
                src="/images/doi-tac-chien-luoc/anh-minh-chu-tich-hiep-hoi-nong-nghiep-huu-co-vn.png"
                alt={t("partner1.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-[#20412e] mt-3 font-medium">
              {t("partner1.caption")}
            </p>
          </div>
        </div>

        {/* Partner 2 */}
        <div className="mb-10">
          <h3 className="font-semibold text-2xl text-[#20412e] mb-2">
            {t("partner2.heading")}
          </h3>
          <p className="text-gray-700 text-xl leading-relaxed mb-5">
            {t("partner2.desc")}
          </p>
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md h-56 rounded-xl overflow-hidden">
              <Image
                src="/images/doi-tac-chien-luoc/lam-viec-dinh-khac-dinh-ho-gam.png"
                alt={t("partner2.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-[#20412e] mt-3 font-medium">
              {t("partner2.caption")}
            </p>
          </div>
        </div>

        {/* Partner 3 */}
        <div>
          <h3 className="font-semibold text-2xl text-[#20412e] mb-2">
            {t("partner3.heading")}
          </h3>
          <p className="text-gray-700 text-xl leading-relaxed">
            {t("partner3.desc")}
          </p>
        </div>

      </div>
    </section>
  );
}