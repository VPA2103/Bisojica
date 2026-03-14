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

  const changeLanguage = (lang: "vi" | "en") => {
    const value = `/vi/${lang}`;

    document.cookie = `googtrans=${value};path=/`;
    document.cookie = `googtrans=${value};domain=${window.location.hostname};path=/`;

    localStorage.setItem("site-language", lang);
    setActive(lang);

    window.location.reload();
  };

  return (
    <>
      <div className="flex gap-3 items-center relative z-50">
        <button
          onClick={() => changeLanguage("vi")}
          className={` notranslate text-xl text-[#fdfff0]
            }`}
        >
          VN
        </button>

        <button
          onClick={() => changeLanguage("en")}
          className={` notranslate text-xl text-[#fdfff0]
            }`}
        >
          EN
        </button>
      </div>

      <div id="google_translate_element" style={{ display: "none" }} />
    </>
  );
}