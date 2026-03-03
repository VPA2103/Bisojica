"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg"
      style={{ background: "linear-gradient(135deg, #20412e 0%, #2a5a3f 60%, #20412e 100%)" }}
    >
      {/* Main nav bar */}
      <nav
        className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden bg-amber-50 border-[#fdfff0] ">
            <Image src={logo} alt="BISO JICA" width={300} height={300} className="object-contain" />
          </div>
          <div className="leading-tight">
            <div
              className="biso-font font-bold text-xl tracking-widest"
              style={{ color: "#ffd05c" }}
            >
              BISOJICA
            </div>
            <div
              className="biso-body text-[0.6rem] tracking-[0.3em] uppercase"
              style={{ color: "#b2c693" }}
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
            { label: "Tài liệu", href: "/tai-lieu" },
            { label: "Thành tựu", href: "/achievement" },
            { label: "Liên hệ", href: "/contact" },

          ].map((item) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link
                href={item.href}
                className="biso-body relative nav-link-underline text-[#d6e1c5] hover:text-[#fdfff0] font-medium text-sm tracking-wide px-2 pb-1 transition-colors duration-200 no-underline"
              >
                {item.label}
              </Link>
              <span className="text-[#b2c693]/30 text-xs select-none">·</span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#ffd05c] bg-transparent border-none cursor-pointer p-1 rounded-md hover:bg-[#b2c693]/10 transition-colors"
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
          className="mobile-animate md:hidden px-6 pb-6 pt-3"
          style={{ background: "#162e1f", borderTop: "1px solid rgba(178,198,147,0.15)" }}
        >
          <ul className="flex flex-col list-none m-0 p-0">
            {[
              { label: "Trang chủ", href: "/" },
              { label: "Giới thiệu", href: "/about" },
              { label: "Sản phẩm", href: "/products" },
              { label: "Tài liệu", href: "/tai-lieu" },
              { label: "Thành tựu", href: "/achievement" },
              { label: "Liên hệ", href: "/contact" },

            ].map((item) => (
              <li key={item.href} className="border-b border-[#b2c693]/10">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="biso-body block py-3 text-[#d6e1c5] font-medium text-sm tracking-wide no-underline hover:text-[#ffd05c] hover:pl-2 transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;