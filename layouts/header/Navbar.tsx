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
    <header className="sticky top-0 z-50 shadow-lg bg-background"
    >
      {/* Main nav bar */}
      <nav
        className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden bg-amber-50 border-[#fdfff0] ">
            <Image src={logo} alt="BISO JICA" width={300} height={300} className="object-contain" />
          </div>
          <div className="leading-tight">
            <div
              className="biso-font font-bold text-xl tracking-widest"
              style={{ color: "var(--text-color)" }}
            >
              BISOJICA
            </div>
            <div
              className="biso-body text-[0.6rem] tracking-[0.3em] uppercase"
              style={{ color: "var(--text-color)" }}
            >
              Japan – Vietnam
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0 ">
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
                className="biso-body relative nav-link-underline text-(--text-color)  font-medium text-sm tracking-wide px-2 pb-1 transition-colors duration-200 no-underline"
              >
                {item.label}
              </Link>
              <span className="text-[#b2c693]/30 text-xs select-none">·</span>
            </li>
          ))}
          <li className="relative group pb-1.5">
            <span className="biso-body relative nav-link-underline text-(--text-color) font-medium text-sm tracking-wide px-2 pb-1 transition-colors  duration-200 no-underline">Phát triển Nhân tài ▼</span>

            <ul className="absolute left-0 mt-3 min-w-[180px] 
               bg-background 
               rounded-lg shadow-xl 
               border border-[#b2c693]/20
               py-2
               opacity-0 invisible
               translate-y-2
               transition-all duration-300
               group-hover:opacity-100
               group-hover:visible
               group-hover:translate-y-0">
              <li>
                <Link
                  href="/phat-trien-nhan-tai"
                  className="block px-4 py-2 
                 biso-body 
                 nav-link-underline
                 hover:bg-white
                 text-sm tracking-wide
                 transition-colors duration-200"
                >
                  Phát triển nhân tài
                </Link>
              </li>

              <li>
                <Link
                  href="/tuyen-dung"
                  className="block px-4 py-2 
                 biso-body 
                 nav-link-underline
                 hover:bg-white
                 text-sm tracking-wide
                 transition-colors duration-200"
                >
                  Tuyển dụng
                </Link>
              </li>

              <li>
                <Link
                  href="/tin-tuc"
                  className="block px-4 py-2 
                 biso-body 
                 nav-link-underline
                 hover:bg-white
                 text-sm tracking-wide
                 transition-colors duration-200"
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  href="/tai-lieu"
                  className="block px-4 py-2 
                 biso-body 
                 nav-link-underline
                 text-sm tracking-wide
                 hover:bg-white
                 transition-colors duration-200"
                >
                  Tài liệu
                </Link>
              </li>

            </ul>
          </li>
        </ul>

        <LanguageSwitcher />

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[bg-[var(--background)]] bg-transparent border-none cursor-pointer p-1 rounded-md hover:bg-[#b2c693]/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Bottom border */}
      <div className="h-px w-full bg-[#ffd05c]/30" />

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mobile-animate md:hidden px-6 pb-6 pt-3 "
          style={{ background: "bg-[var(--background)]", borderTop: "1px solid rgba(178,198,147,0.15)" }}
        >
          <ul className="flex flex-col list-none m-0 p-0 ">
            {[
              { label: "Trang chủ", href: "/" },
              { label: "Giới thiệu", href: "/about" },
              { label: "Sản phẩm", href: "/products" },
              { label: "Thành tựu", href: "/achievement" },
              { label: "Liên hệ", href: "/contact" },

            ].map((item) => (
              <li key={item.href} className="border-b border-[#b2c693]/10 ">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="biso-body block py-3 text-[text-(--text-color)] font-medium text-sm tracking-wide no-underline hover:text-[#ffd05c] hover:pl-2 transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-[#b2c693]/10">
              <button
                onClick={() => setIsOtherOpen(!isOtherOpen)}
                className="w-full flex justify-between items-center py-3  font-medium text-sm tracking-wide"
              >
                Khác
                <span
                  className={`transition-transform duration-300 ${isOtherOpen ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </button>

              {isOtherOpen && (
                <ul className="pl-4 pb-2 space-y-1">
                  <li>
                    <Link
                      href="/phat-trien-nhan-tai"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOtherOpen(false);
                      }}
                      className="block py-2 text-sm text-(--text-color) transition"
                    >
                      Phát triển nhân tài
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tuyen-dung"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOtherOpen(false);
                      }}
                      className="block py-2 text-sm text-(--text-color) transition"
                    >
                      Tuyển dụng
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/tin-tuc"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOtherOpen(false);
                      }}
                      className="block py-2 text-(--text-color) text-sm hover:text-[#ffd05c] transition"
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
                      className="block py-2 text-(--text-color) text-sm hover:text-[#ffd05c] transition"
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