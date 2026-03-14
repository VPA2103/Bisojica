"use client";
import { useLocale, useTranslations } from "next-intl";


type DocumentItem = {
  title: string;
  href: string;
};
export default function ProductDocuments() {

  const t = useTranslations("documents");
  const locale = useLocale();                              // ← thay dòng này
  const lang = (locale === "en" ? "en" : "vi") as "vi" | "en";

  const documents: Record<string, DocumentItem[]> = {
    vi: [
      {
        title: "TCCS 01 - MITAKA1000",
        href: "/files/pdf/vi/tccs-01-mitaka1000.pdf",
      },
      {
        title: "TCCS 02 - Daichi no Tomo",
        href: "/files/pdf/vi/tccs-02-daichi-no-tomo.pdf",
      },
      {
        title: "TCCS 03 - BF-NATURAL",
        href: "/files/pdf/vi/tccs-03-bf-natural.pdf",
      },
      {
        title: "TCCS 04 - Lake Power",
        href: "/files/pdf/vi/tccs-04-lake-power.pdf",
      },
      {
        title: "TCCS 05 - BK-OILBUSTER",
        href: "/files/pdf/vi/tccs-05-bk-oilbuster.pdf",
      },
      {
        title: "TCCS 06 - BK Partner",
        href: "/files/pdf/vi/tccs-06-bk-partner.pdf",
      },
      {
        title: "TCCS 07 - Daichi no Tomo 500",
        href: "/files/pdf/vi/tccs-07-daichi-no-tomo-500.pdf",
      },
      {
        title: "TCCS 08 - MITAKA3000",
        href: "/files/pdf/vi/tccs-08-mitaka3000.pdf",
      },
      {
        title: "TCCS 09 - NIOI ZERO",
        href: "/files/pdf/vi/tccs-09-nioi-zero.pdf",
      },
      {
        title: "TCCS 10 - SP 10-15-20",
        href: "/files/pdf/vi/tccs-10-sp-10-15-20.pdf",
      },
      {
        title: "TCCS 11 - S-Power",
        href: "/files/pdf/vi/tccs-11-s-power.pdf",
      },
      {
        title: "TCCS 12 - MITAKA1200",
        href: "/files/pdf/vi/tccs-12-mitaka1200.pdf",
      },
    ],

    en: [
      {
        title: "Product Declaration 01 - MITAKA1000",
        href: "/files/pdf/en/tccs-01-mitaka1000.pdf",
      },
      {
        title: "Product Declaration 02 - Daichi no Tomo",
        href: "/files/pdf/en/tccs-02-daichi-no-tomo.pdf",
      },
      {
        title: "Product Declaration 03 - BF-NATURAL",
        href: "/files/pdf/en/tccs-03-bf-natural.pdf",
      },
      {
        title: "Product Declaration 04 - Lake Power",
        href: "/files/pdf/en/tccs-04-lake-power.pdf",
      },
      {
        title: "Product Declaration 05 - BK-OILBUSTER",
        href: "/files/pdf/en/tccs-05-bk-oilbuster.pdf",
      },
      {
        title: "Product Declaration 06 - BK Partner",
        href: "/files/pdf/en/tccs-06-bk-partner.pdf",
      },
      {
        title: "Product Declaration 07 - Daichi no Tomo 500",
        href: "/files/pdf/en/tccs-07-daichi-no-tomo-500.pdf",
      },
      {
        title: "Product Declaration 08 - MITAKA3000",
        href: "/files/pdf/en/tccs-08-mitaka3000.pdf",
      },
      {
        title: "Product Declaration 09 - NIOI ZERO",
        href: "/files/pdf/en/tccs-09-nioi-zero.pdf",
      },
      {
        title: "Product Declaration 10 - SP 10-15-20",
        href: "/files/pdf/en/tccs-10-sp-10-15-20.pdf",
      },
      {
        title: "Product Declaration 11 - S-Power",
        href: "/files/pdf/en/tccs-11-s-power.pdf",
      },
      {
        title: "Product Declaration 12 - MITAKA1200",
        href: "/files/pdf/en/tccs-12-mitaka1200.pdf",
      },
    ],
  };

  const currentDocs = documents[lang] || documents.vi;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      {t("productDeclTitle")}
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {currentDocs.map((doc, index) => (
          <a
            key={index}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex justify-between">
              <span>{doc.title}</span>
              <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}