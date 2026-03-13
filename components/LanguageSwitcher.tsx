"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcher() {
  const [active, setActive] = useState("vi");

  useEffect(() => {
    const savedLang = localStorage.getItem("site-language") || "vi";
    setActive(savedLang);

    if (document.getElementById("google-translate-script")) return;

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "vi",
          includedLanguages: "vi,en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
    document.body.appendChild(script);
  }, []);

  const changeLanguage = (lang: string) => {
    const tryChange = () => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (!select) {
        // đợi google translate load
        setTimeout(tryChange, 200);
        return;
      }

      if (select.value === lang) return;

      select.value = lang;
      select.dispatchEvent(new Event("change"));

      setActive(lang);
      localStorage.setItem("site-language", lang);
    };

    tryChange();
  };

  return (
    <>
      <div className="flex gap-3 items-center relative z-50">
        <button
          onClick={() => changeLanguage("vi")}
          className={` notranslate text-xl text-[#fdfff0] ${active === "vi" ? "scale-110 opacity-100" : "opacity-50"
            }`}
        >
          VN
        </button>

        <button
          onClick={() => changeLanguage("en")}
          className={` notranslate text-xl text-[#fdfff0] ${active === "en" ? "scale-110 opacity-100" : "opacity-50"
            }`}
        >
          EN
        </button>
      </div>

      <div id="google_translate_element" style={{ display: "none" }} />
    </>
  );
}