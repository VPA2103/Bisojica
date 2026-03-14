"use client";

import { useTranslations } from "next-intl";
import { PriceProduct } from "@/data/priceData";

interface Props {
  products: PriceProduct[];
  descriptionNs: "industrial" | "agriculture"; // namespace trong pricePage
}

const format = (n: number, currency: string) =>
  new Intl.NumberFormat("vi-VN").format(n) + " " + currency;

export default function PriceTable({ products, descriptionNs }: Props) {
  const t = useTranslations("pricePage");

  return (
    <div className="overflow-x-auto border-2 border-black">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="border border-black p-3">{t("table.goods")}</th>
            <th className="border border-black p-3">{t("table.volume")}</th>
            <th className="border border-black p-3">{t("table.listedPrice")}</th>
            <th className="border border-black p-3">{t("table.discount")}</th>
            <th className="border border-black p-3">{t("table.finalPrice")}</th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-green-100 font-semibold">
            <td colSpan={5} className="border border-black p-2 text-center">
              {t("table.sectionLabel")}
            </td>
          </tr>

          {products.map((product) =>
            product.volumes.map((v, i) => (
              <tr key={product.key + i} className="text-center">
                {i === 0 && (
                  <td
                    rowSpan={product.volumes.length}
                    className="border border-black p-3 text-left"
                  >
                    <strong>{product.name}</strong>
                    <br />
                    {t(`${descriptionNs}.${product.key}`)}
                  </td>
                )}
                <td className="border border-black p-2">{v.size}</td>
                <td className="border border-black p-2 font-semibold">
                  {format(v.price, t("table.currency"))}
                </td>
                <td className="border border-black p-2">
                  {format(v.discount, t("table.currency"))}
                </td>
                <td className="border border-black p-2 font-semibold">
                  {format(v.final, t("table.currency"))}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}