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
        title: "TCCS 01 - MITAKA 1000",
        href: "/files/pdf/vi/tccs-01-mitaka1000.pdf",
      },
      {
        title: "TCCS 02 - DAICHI NO TOMO",
        href: "/files/pdf/vi/tccs-02-daichi-no-tomo.pdf",
      },
      {
        title: "TCCS 03 - BF-NATURAL",
        href: "/files/pdf/vi/tccs-03-bf-natural.pdf",
      },
      {
        title: "TCCS 04 - LAKE POWER",
        href: "/files/pdf/vi/tccs-04-lake-power.pdf",
      },
      {
        title: "TCCS 05 - BK-OILBUSTER",
        href: "/files/pdf/vi/tccs-05-bk-oilbuster.pdf",
      },
      {
        title: "TCCS 06 - BK PARTNER",
        href: "/files/pdf/vi/tccs-06-bk-partner.pdf",
      },
      {
        title: "TCCS 07 - DAICHI NO TOMO 500",
        href: "/files/pdf/vi/tccs-07-daichi-no-tomo-500.pdf",
      },
      {
        title: "TCCS 08 - MITAKA 3000",
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
        title: "TCCS 11 - BK-PARTNER",
        href: "/files/pdf/vi/tccs-11-s-power.pdf",
      },
      {
        title: "TCCS 12 - MITAKA 1200",
        href: "/files/pdf/vi/tccs-12-mitaka1200.pdf",
      },
    ],

    en: [
      {
        title: "PRODUCT DECLARATION 01 - MITAKA 1000",
        href: "/files/pdf/en/tccs-01-mitaka1000.pdf",
      },
      {
        title: "PRODUCT DECLARATION 02 - DAICHI NO TOMO",
        href: "/files/pdf/en/tccs-02-daichi-no-tomo.pdf",
      },
      {
        title: "PRODUCT DECLARATION 03 - BF-NATURAL",
        href: "/files/pdf/en/tccs-03-bf-natural.pdf",
      },
      {
        title: "PRODUCT DECLARATION 04 - LAKE POWER",
        href: "/files/pdf/en/tccs-04-lake-power.pdf",
      },
      {
        title: "PRODUCT DECLARATION 05 - BK-OILBUSTER",
        href: "/files/pdf/en/tccs-05-bk-oilbuster.pdf",
      },
      {
        title: "PRODUCT DECLARATION 06 - BK PARTNER",
        href: "/files/pdf/en/tccs-06-bk-partner.pdf",
      },
      {
        title: "PRODUCT DECLARATION 07 - DAICHI NO TOMO 500",
        href: "/files/pdf/en/tccs-07-daichi-no-tomo-500.pdf",
      },
      {
        title: "PRODUCT DECLARATION 08 - MITAKA 3000",
        href: "/files/pdf/en/tccs-08-mitaka3000.pdf",
      },
      {
        title: "PRODUCT DECLARATION 09 - NIOI ZERO",
        href: "/files/pdf/en/tccs-09-nioi-zero.pdf",
      },
      {
        title: "PRODUCT DECLARATION 10 - SP 10-15-20",
        href: "/files/pdf/en/tccs-10-sp-10-15-20.pdf",
      },
      {
        title: "PRODUCT DECLARATION 11 - BK-PARTNER",
        href: "/files/pdf/en/tccs-11-s-power.pdf",
      },
      {
        title: "PRODUCT DECLARATION 12 - MITAKA 1200",
        href: "/files/pdf/en/tccs-12-mitaka1200.pdf",
      },
    ],
  };

  const currentDocs = documents[lang] || documents.vi;

  return (
    <section className="max-w-7xl mx-auto py-10">
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
              <span className="text-base md:text-lg lg:text-2xl">{doc.title}</span>
              <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}