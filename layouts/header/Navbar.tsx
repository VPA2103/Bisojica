"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Dancing_Script } from "next/font/google";
import { useTranslations } from "next-intl";

const dancing = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTalentOpen, setIsTalentOpen] = useState(false);

  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-[#20412E] text-[#fdfff0]">
      <nav className="flex items-center justify-between px-1 py-1">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 no-underline">
          <div className="ml-5 max-w-md">

            <div className="items-center gap-2 py-1">

              <div className="w-20 h-20 rounded-xl overflow-hidden bg-amber-50 flex items-center justify-center ml-2">
                <Image
                  src={logo}
                  alt="BISO JICA"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div
                className="leading-tight"
                style={{ fontFamily: "Montserrat" }}
              >
                <div
                  className={`font-bold text-xs text-[#ffd05c] tracking-wide ${dancing.className}`}
                >
                  {t("slogan1")}
                </div>

                <div
                  className={`text-sm text-[#ffd05c] mt-1 ${dancing.className}`}
                >
                  {t("slogan2")}
                </div>
              </div>
            </div>

          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 list-none">

          <li>
            <Link href="/" className="font-medium hover:text-[#ffd05c]">
              {t("home")}
            </Link>
          </li>

          <li>
            <Link href="/ve-chung-toi" className="font-medium hover:text-[#ffd05c]">
              {t("about")}
            </Link>
          </li>

          <li>
            <Link href="/tai-lieu" className="font-medium hover:text-[#ffd05c]">
              {t("documents")}
            </Link>
          </li>

          <li>
            <Link href="/products" className="font-medium hover:text-[#ffd05c]">
              {t("products")}
            </Link>
          </li>

          <li>
            <Link href="/bang-gia" className="font-medium hover:text-[#ffd05c]">
              {t("priceList")}
            </Link>
          </li>

          <li>
            <Link href="/tin-tuc" className="font-medium hover:text-[#ffd05c]">
              {t("news")}
            </Link>
          </li>

          <li className="relative group">

            <span className="font-medium cursor-pointer hover:text-[#ffd05c]">
              {t("talent")} ▼
            </span>

            <ul className="absolute left-0 mt-3 w-52 bg-[#20412E] rounded-lg shadow-xl border border-[#fdfff0]/20 py-2 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">

              <li>
                <Link
                  href="/phat-trien-nhan-tai"
                  className="block px-4 py-2 hover:bg-[#2c5a43]"
                >
                  {t("talent")}
                </Link>
              </li>

            </ul>

          </li>

        </ul>

        <div className="flex items-center mt-14">

          <LanguageSwitcher />

          <button
            className="md:hidden ml-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-[#20412E] border-t border-[#fdfff0]/20">

          <ul className="flex flex-col">

            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="block py-3">
                {t("home")}
              </Link>
            </li>

            <li>
              <Link href="/ve-chung-toi" onClick={() => setIsOpen(false)} className="block py-3">
                {t("about")}
              </Link>
            </li>

            <li>
              <Link href="/tai-lieu" onClick={() => setIsOpen(false)} className="block py-3">
                {t("documents")}
              </Link>
            </li>

            <li>
              <Link href="/products" onClick={() => setIsOpen(false)} className="block py-3">
                {t("products")}
              </Link>
            </li>

            <li>
              <Link href="/bang-gia" onClick={() => setIsOpen(false)} className="block py-3">
                {t("priceList")}
              </Link>
            </li>

            <li>
              <Link href="/tin-tuc" onClick={() => setIsOpen(false)} className="block py-3">
                {t("news")}
              </Link>
            </li>

          </ul>

        </div>
      )}

    </header>
  );
};

export default Navbar;