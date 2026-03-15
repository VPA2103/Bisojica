"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (lang: "vi" | "en") => {
    // Thay phần locale trong URL
    // VD: /vi/about → /en/about
    const segments = pathname.split("/");
    segments[1] = lang; // index 1 là [locale]
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="flex gap-3 items-center relative z-50">
      <button
        onClick={() => changeLanguage("vi")}
        disabled={isPending}
        className={`text-xl transition-opacity ${locale === "vi"
            ? "text-white font-bold"
            : "text-white/60 hover:text-white"
          }`}
      >
        Tiếng Việt
      </button>

      <span className="text-white/40">|</span>

      <button
        onClick={() => changeLanguage("en")}
        disabled={isPending}
        className={`text-xl transition-opacity ${locale === "en"
            ? "text-white font-bold"
            : "text-white/60 hover:text-white"
          }`}
      >
        English
      </button>
    </div>
  );
}