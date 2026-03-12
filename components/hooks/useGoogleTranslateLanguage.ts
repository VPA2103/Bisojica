"use client";
import { useEffect, useState } from "react";

export default function useGoogleTranslateLanguage() {
  const [lang, setLang] = useState<"vi" | "en">("vi");

  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (!select) return;

      let value = select.value;

      if (!value) return;

      // Google Translate có thể trả về vi|en
      if (value.includes("|")) {
        value = value.split("|")[1];
      }

      if (value === "en") setLang("en");
      else setLang("vi");
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return lang;
}