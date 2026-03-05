"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-[#20412E] text-[#fdfff0]">

      {/* Main nav bar */}
      <nav className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden bg-amber-50">
            <Image src={logo} alt="BISO JICA" width={300} height={300} className="object-contain" />
          </div>

          <div className="leading-tight">
            <div className="biso-font font-bold text-xl tracking-widest text-[#fdfff0]">
              BISO JICA
            </div>

            <div className="biso-body text-[0.6rem] tracking-[0.3em] uppercase text-[#fdfff0]">
              Japan – Vietnam
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
          {[
            { label: "Trang chủ", href: "/" },
            { label: "Giới thiệu", href: "/about" },
            { label: "Sản phẩm", href: "/products" },
            { label: "Thành tựu", href: "/achievement" },
            { label: "Liên hệ", href: "/contact" },
          ].map((item) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link
                href={item.href}
                className="biso-body relative nav-link-underline text-[#fdfff0] font-medium text-sm tracking-wide px-2 pb-1 transition-colors duration-200 no-underline hover:text-[#ffd05c]"
              >
                {item.label}
              </Link>
              <span className="text-[#fdfff0]/30 text-xs select-none">·</span>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative group pb-1.5">
            <span className="biso-body relative nav-link-underline text-[#fdfff0] font-medium text-sm tracking-wide px-2 pb-1 transition-colors duration-200 cursor-pointer">
              Phát triển Nhân tài ▼
            </span>

            <ul
              className="absolute left-0 mt-3 min-w-[180px] 
              bg-[#20412E]
              rounded-lg shadow-xl 
              border border-[#fdfff0]/20
              py-2
              opacity-0 invisible
              translate-y-2
              transition-all duration-300
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0"
            >
              {[
                { label: "Phát triển nhân tài", href: "/phat-trien-nhan-tai" },
                // { label: "Tuyển dụng", href: "/tuyen-dung" },
                { label: "Tin tức", href: "/tin-tuc" },
                { label: "Tài liệu", href: "/tai-lieu" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-[#fdfff0] hover:bg-[#2c5a43] text-sm tracking-wide transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <LanguageSwitcher />

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#fdfff0] bg-transparent border-none cursor-pointer p-1 rounded-md hover:bg-[#fdfff0]/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Border */}
      <div className="h-px w-full bg-[#fdfff0]/20" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-3 bg-[#20412E] text-[#fdfff0] border-t border-[#fdfff0]/15">
          <ul className="flex flex-col list-none m-0 p-0">
            {[
              { label: "Trang chủ", href: "/" },
              { label: "Giới thiệu", href: "/about" },
              { label: "Sản phẩm", href: "/products" },
              { label: "Thành tựu", href: "/achievement" },
              { label: "Liên hệ", href: "/contact" },
            ].map((item) => (
              <li key={item.href} className="border-b border-[#fdfff0]/10">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-[#fdfff0] font-medium text-sm tracking-wide no-underline hover:text-[#ffd05c] transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-[#b2c693]/10 ">
              <button
                onClick={() => setIsOtherOpen(!isOtherOpen)}
                className="w-full flex justify-between items-center py-3  font-medium text-sm tracking-wide"
              >
                Phát triển nhân tài
                <span
                  className={`transition-transform duration-300 ${isOtherOpen ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </button>

              {isOtherOpen && (
                <ul className="pl-4 pb-2 space-y-1 ">
                  <li>
                    <Link
                      href="/phat-trien-nhan-tai"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOtherOpen(false);
                      }}
                      className="block py-2 text-sm text-[#fdfff0] transition"
                    >
                      Phát triển nhân tài
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/tuyen-dung"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOtherOpen(false);
                      }}
                      className="block py-2 text-sm text-[#fdfff0] transition"
                    >
                      Tuyển dụng
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      href="/tin-tuc"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOtherOpen(false);
                      }}
                      className="block py-2 text-[#fdfff0] text-sm hover:text-[#ffd05c] transition"
                    >
                      Tin tức
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tai-lieu"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOtherOpen(false);
                      }}
                      className="block py-2 text-[#fdfff0] text-sm hover:text-[#ffd05c] transition"
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