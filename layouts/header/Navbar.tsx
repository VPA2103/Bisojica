"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTalentOpen, setIsTalentOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-[#20412E] text-[#fdfff0]">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-1 py-1 ">

        {/* LOGO + SLOGAN */}
        <Link href="/" className="flex items-center gap-4 no-underline">
          <div className="ml-5 max-w-md">
            {/* Logo + Tên + Slogan */}
            <div className="flex items-center gap-2 py-1">
              {/* Logo */}
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-amber-50 flex items-center justify-center">
                <Image
                  src={logo}
                  alt="BISO JICA"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Text thông tin */}
              <div className="leading-tight"
                style={{ fontFamily: "Montserrat " }}
              >
                <div className="font-bold text-xs tracking-wide">
                  Công nghệ enzyme cho
                </div>
                <div className="text-sm text-[#ffd05c] mt-1">
                   nền nông nghiệp bền vững.
                </div>
              </div>
            </div>

            {/* Mô tả thêm */}
            <div className="text-xs text-[#fdfff0]/80 leading-snug mt-1 "
              style={{ fontFamily: "Montserrat " }}
            >
              <p className="pl-5">
                Chúng tôi không chỉ tạo ra sản phẩm.
              </p>
              Chúng tôi xây dựng một thế hệ nông nghiệp mới.
            </div>
          </div>

        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 list-none">

          <li>
            <Link href="/" className="nav-link  font-medium hover:text-[#ffd05c] transition ">
              Trang chủ
            </Link>
          </li>

          <li>
            <Link href="/ve-chung-toi" className=" font-medium hover:text-[#ffd05c] transition">
              Về chúng tôi
            </Link>
          </li>

          <li>
            <Link href="/enzyme" className=" font-medium hover:text-[#ffd05c] transition">
              Thông tin về Enzyme
            </Link>
          </li>

          <li>
            <Link href="/products" className=" font-medium hover:text-[#ffd05c] transition">
              Sản phẩm
            </Link>
          </li>

          <li>
            <Link href="/bang-gia" className=" font-medium hover:text-[#ffd05c] transition">
              Bảng giá
            </Link>
          </li>

          <li>
            <Link href="/tin-tuc" className=" font-medium hover:text-[#ffd05c] transition">
              Tin tức
            </Link>
          </li>

          {/* DROPDOWN */}
          <li className="relative group">

            <span className=" font-medium cursor-pointer hover:text-[#ffd05c] transition">
              Phát triển nhân tài ▼
            </span>

            <ul className="absolute left-0 mt-3 w-52 bg-[#20412E] rounded-lg shadow-xl border border-[#fdfff0]/20 py-2 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">

              <li>
                <Link
                  href="/phat-trien-nhan-tai"
                  className="block px-4 py-2  hover:bg-[#2c5a43]"
                >
                  Phát triển nhân tài
                </Link>
              </li>

              <li>
                <Link
                  href="/tai-lieu"
                  className="block px-4 py-2  hover:bg-[#2c5a43]"
                >
                  Tài liệu
                </Link>
              </li>

            </ul>
          </li>

        </ul>

        <LanguageSwitcher />
        <div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-[#20412E] border-t border-[#fdfff0]/20">

          <ul className="flex flex-col">

            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="block py-3 text-base">
                Trang chủ
              </Link>
            </li>

            <li>
              <Link href="/ve-chung-toi" onClick={() => setIsOpen(false)} className="block py-3 text-base">
                Về chúng tôi
              </Link>
            </li>

            <li>
              <Link href="/enzyme" onClick={() => setIsOpen(false)} className="block py-3 text-base">
                Thông tin về Enzyme
              </Link>
            </li>

            <li>
              <Link href="/products" onClick={() => setIsOpen(false)} className="block py-3 text-base">
                Sản phẩm
              </Link>
            </li>

            <li>
              <Link href="/bang-gia" onClick={() => setIsOpen(false)} className="block py-3 text-base">
                Bảng giá
              </Link>
            </li>

            <li>
              <Link href="/tin-tuc" onClick={() => setIsOpen(false)} className="block py-3 text-base">
                Tin tức
              </Link>
            </li>

            {/* MOBILE DROPDOWN */}
            <li>

              <button
                onClick={() => setIsTalentOpen(!isTalentOpen)}
                className="w-full flex justify-between py-3 text-base"
              >
                Phát triển nhân tài
                <span className={`${isTalentOpen ? "rotate-180" : ""} transition`}>
                  ▼
                </span>
              </button>

              {isTalentOpen && (
                <ul className="pl-4">

                  <li>
                    <Link
                      href="/phat-trien-nhan-tai"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm"
                    >
                      Phát triển nhân tài
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/tai-lieu"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm"
                    >
                      Tài liệu
                    </Link>
                  </li>

                </ul>
              )}

            </li>

          </ul>

        </div>
      )}

    </header>
  );
};

export default Navbar;