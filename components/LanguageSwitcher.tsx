"use client";

import Image from "next/image";
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
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (!select) return;

    select.value = lang;
    select.dispatchEvent(new Event("change"));
    setActive(lang);
  };

  return (
    <>
      <div className="flex gap-3 items-center relative z-50">
      <div id="google_translate_element" style={{ display: "none" }} />

        <div>
          <button
            onClick={() => changeLanguage("vi")}
            className={`text-xl transition-all duration-200 text-[#fdfff0] hover:opacity-100 ${active === "vi"
              ? "scale-110 opacity-100"
              : "opacity-50 hover:scale-105"
              }`}
          >
            VN
          </button>
        </div>

        <div className="ml-2">
          <button
            onClick={() => changeLanguage("en")}
            className={`text-xl transition-all duration-200  text-[#fdfff0] hover:opacity-100 ${active === "en"
              ? "scale-110 opacity-100"
              : "opacity-50 hover:scale-105"
              }`}
          >
            EN
          </button>
        </div>

      </div>
    </>
  );
}