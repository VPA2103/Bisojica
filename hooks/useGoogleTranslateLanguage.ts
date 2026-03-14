"use client";
import { useEffect, useState } from "react";

export default function useGoogleTranslateLanguage() {
  const [lang, setLang] = useState<"vi" | "en">("vi");

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/vi\/(en|vi)/);

    if (match) {
      setLang(match[1] as "vi" | "en");
    }
  }, []);

  return lang;
}