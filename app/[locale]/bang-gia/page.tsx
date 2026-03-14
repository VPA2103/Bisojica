import { useTranslations } from "next-intl";
import PriceTable from "./PriceTable";
import { industrialPrices, agriculturePrices } from "@/data/priceData";

export default function Page() {
  const t = useTranslations("pricePage");

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[--text-color] mb-10 uppercase">
        {t("title")}
      </h1>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-[--text-color] border-b-2 border-blue-200 pb-2">
          {t("section1Title")}
        </h2>
        <div className="max-w-6xl mx-auto py-10">
          <PriceTable products={industrialPrices} descriptionNs="industrial" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-[--text-color] border-b-2 border-green-200 pb-2">
          {t("section2Title")}
        </h2>
        <div className="max-w-7xl mx-auto py-10">
          <PriceTable products={agriculturePrices} descriptionNs="agriculture" />
        </div>
      </section>
    </div>
  );
}