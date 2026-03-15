"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";

// ─── Types ───────────────────────────────────────────────
type PageId = 1 | 2 | 3 | 4 | 5 | 6;

// ─── Logo ────────────────────────────────────────────────
const Logo = () => (
  <div className="w-32 h-auto">
    <Image
      src="/logo.png"
      alt="BISO JICA"
      width={100}
      height={32}
      className="object-contain"
    />
  </div>
);

// ─── Divider ─────────────────────────────────────────────
const Divider = () => <div className="w-full h-px bg-[#1a2e4a] my-3" />;

// ─── Page 1 – Cover ──────────────────────────────────────
const Page1 = () => {
  const t = useTranslations("enzyme.page1");
  return (
    <div className="relative z-10 bg-white/92 backdrop-blur-sm px-8 py-8">
      <h1
        className="font-black text-[#1a2e4a] text-4xl uppercase leading-snug tracking-wide"
        style={{ fontWeight: 700 }}
      >
        {t("title")}
      </h1>
    </div>
  );
};

// ─── Page 2 – Enzyme Chất Xúc Tác ────────────────────────
const Page2 = () => {
  const t = useTranslations("enzyme.page2");
  const points = t.raw("points") as string[];

  return (
    <div className="bg-[#f5f0e8] w-full min-h-screen flex flex-col">
      <div className="p-6 pb-2">
        <Logo />
      </div>

      <div className="px-7 pt-4 max-w-[1024px] mx-auto w-full">
        <h2 className="font-black text-[#1a2e4a] text-4xl uppercase leading-snug" style={{ fontWeight: 700 }}>
          {t("title")}
        </h2>
        <Divider />
      </div>

      <div className="px-7 py-2 max-w-[1024px] mx-auto w-full">
        <p className="text-xl leading-relaxed text-[#2c2c2c]">{t("intro")}</p>
        <ul className="list-disc pl-5 mt-2 text-xl leading-relaxed text-[#2c2c2c] space-y-1">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="px-7 py-4 max-w-[1024px] mx-auto w-full">
        <div className="w-full h-px bg-[#c8bfa8] mb-4" />
        <p className="text-xl leading-relaxed text-[#2c2c2c]">{t("example1")}</p>
        <p className="text-xl leading-relaxed text-[#2c2c2c] mt-2">{t("example2")}</p>
      </div>

      <div className="px-7 py-4 max-w-[1024px] mx-auto w-full">
        <div className="w-full bg-linear-to-br from-[#2d4a1e] via-[#3d6028] to-[#1a3010] flex items-center justify-center">
          <Image
            src="/images/enzyme/anh-nam.png"
            alt="Anh nam"
            width={1024}
            height={512}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="bg-[#1a2e4a] px-7 py-6 max-w-[1024px] mx-auto w-full text-center">
        <p className="text-white text-xl font-bold uppercase tracking-widest leading-relaxed">
          {t("footer")}
        </p>
      </div>
    </div>
  );
};

// ─── Page 3 – Enzyme Giúp Gì Cho Nông Dân? ───────────────
const Page3 = () => {
  const t = useTranslations("enzyme.page3");
  const sections = t.raw("sections") as { heading: string; points: string[] }[];

  return (
    <div className="bg-[#f5f0e8] w-full min-h-screen">
      <div className="p-4 md:p-6 pb-2">
        <Logo />
      </div>

      <div className="px-4 md:px-7 pt-2 pb-4">
        <h2 className="font-bold text-[#1a2e4a] text-2xl md:text-4xl uppercase leading-snug">
          {t("title")}
        </h2>
      </div>

      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex justify-center md:block">
          <Image
            src="/images/enzyme/soil.png"
            alt="Soil"
            width={300}
            height={80}
            className="object-contain w-64 md:w-[300px]"
          />
        </div>

        <div className="flex-1 px-4 md:px-5">
          {sections.slice(0, 2).map((section, i) => (
            <div key={i} className={i > 0 ? "mt-4" : ""}>
              <h3 className="font-bold text-[#1a2e4a] text-lg md:text-xl mb-1">
                {section.heading}
              </h3>
              <div className="w-full h-px bg-[#c8bfa8] mb-2" />
              <ul className="list-disc pl-5 text-lg md:text-xl leading-relaxed text-[#2c2c2c] space-y-1">
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="flex-1 px-4 md:px-7">
          {sections.slice(2).map((section, i) => (
            <div key={i} className={i > 0 ? "mt-4" : ""}>
              <h3 className="font-bold text-[#1a2e4a] text-lg md:text-2xl mb-1">
                {section.heading}
              </h3>
              <div className="w-full h-px bg-[#c8bfa8] mb-2" />
              <ul className="list-disc pl-5 text-lg md:text-2xl leading-relaxed text-[#2c2c2c] space-y-1">
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:block">
          <Image
            src="/images/enzyme/cabbage.png"
            alt="Cabbage"
            width={300}
            height={120}
            className="object-contain w-64 md:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

// ─── Page 4 – Vậy Enzyme Diệu Kỳ Là Gì? ─────────────────
const Page4 = () => {
  const t = useTranslations("enzyme.page4");

  return (
    <div className="bg-[#f5f0e8] w-full min-h-screen">
      <div className="p-6 pb-2">
        <Logo />
      </div>

      <div className="relative mx-7 mb-0 rounded-sm overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src="/images/enzyme/anh-vi-khuan.png"
            alt="Enzyme molecule"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-[#1a2e4a] px-6 py-5">
          <h2 className="font-black text-white text-4xl uppercase leading-snug" style={{ fontWeight: 700 }}>
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="px-7 py-5 space-y-4">
        <p className="text-2xl leading-relaxed text-[#2c2c2c]">{t("body1")}</p>
        <p className="text-2xl leading-relaxed text-[#2c2c2c]">{t("body2")}</p>
      </div>
    </div>
  );
};

// ─── Page 5 – Comparison Table ───────────────────────────
const Page5 = () => {
  const t = useTranslations("enzyme.page5");
  const rows = t.raw("rows") as { label: string; normal: string; miracle: string }[];

  return (
    <div className="bg-[#f5f0e8] w-full min-h-screen">
      <div className="p-6 pb-2">
        <Logo />
      </div>

      <div className="bg-[#1a2e4a] px-7 py-5 mb-6">
        <h2 className="font-black text-white text-4xl uppercase leading-snug" style={{ fontWeight: 700 }}>
          {t("title")}
        </h2>
      </div>

      <div className="px-7">
        <div className="grid grid-cols-[100px_1fr_1fr] mb-1">
          <div />
          <div className="text-center text-xl font-semibold text-[#1a2e4a] pb-2 pr-2">
            {t("colNormal")}
          </div>
          <div className="text-center text-xl font-semibold text-[#1a2e4a] pb-2 pl-2">
            {t("colMiracle")}
          </div>
        </div>

        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[100px_1fr_1fr] mb-1 items-stretch min-h-[60px]">
            <div className="flex items-center pr-3">
              <p className="text-xl font-bold text-[#1a2e4a] underline decoration-[#1a2e4a] underline-offset-2">
                {row.label}
              </p>
            </div>
            <div className={`flex items-center px-3 py-2 text-xl leading-relaxed ${i % 2 === 0 ? "bg-[#f5f0e8] text-[#2c2c2c]" : "bg-[#1a2e4a] text-white"}`}>
              {row.normal}
            </div>
            <div className={`flex items-center px-3 py-2 text-xl leading-relaxed ${i % 2 === 0 ? "bg-[#1a2e4a] text-white" : "bg-[#f5f0e8] text-[#2c2c2c]"}`}>
              {row.miracle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 6 – Vì Sao Nên Dùng Enzyme? ────────────────────
const Page6 = () => {
  const t = useTranslations("enzyme.page6");
  const points = t.raw("points") as string[];

  return (
    <div className="bg-[#f5f0e8] w-full min-h-screen">
      <div className="p-6 pb-2">
        <Logo />
      </div>

      <div className="bg-[#1a2e4a] px-7 py-5 mb-5">
        <h2 className="font-black text-white text-4xl uppercase leading-snug" style={{ fontWeight: 700 }}>
          {t("title")}
        </h2>
      </div>

      <div className="px-7 mb-4">
        <ul className="list-disc pl-5 text-xl leading-relaxed text-[#2c2c2c] space-y-2">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="relative h-64 w-full">
        <Image
          src="/images/enzyme/anh-canh-dong.png"
          alt="Cánh đồng"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-[#1a2e4a] px-7 py-6 text-center">
        <p className="text-white text-xl italic leading-relaxed">{t("quote")}</p>
      </div>
    </div>
  );
};

// ─── Page registry ────────────────────────────────────────
const pageComponents: { id: PageId; component: React.FC }[] = [
  { id: 1, component: Page1 },
  { id: 2, component: Page2 },
  { id: 3, component: Page3 },
  { id: 4, component: Page4 },
  { id: 5, component: Page5 },
  { id: 6, component: Page6 },
];

// ─── Main Component ───────────────────────────────────────
export default function EnzymeBisoJica() {
  return (
    <div className="w-full bg-stone-200 flex flex-col items-center" style={{ fontWeight: 700 }}>
      {pageComponents.map((p) => {
        const Component = p.component;
        return (
          <section key={p.id} className="w-full flex justify-center">
            <div className="w-full max-w-[1024px]">
              <Component />
            </div>
          </section>
        );
      })}
    </div>
  );
}