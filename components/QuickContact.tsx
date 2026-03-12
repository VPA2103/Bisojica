"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function QuickContact() {
  return (
    <div
      className="
        fixed z-50
        bottom-0 inset-x-0
        w-full max-w-full
        flex justify-around items-center
        bg-white  py-3

        md:bg-transparent
        md:right-5 md:left-auto md:w-auto
        md:bottom-24
        md:flex-col md:gap-3 md:py-0
      "
    >

      {/* Điện thoại */}
      <div className="relative group flex justify-center">
        <a
          href="tel:0928899939"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition"
        >
          <Phone size={22} />
        </a>

        <span className="hidden md:block absolute right-14 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          092 8899 939
        </span>
      </div>

      {/* Zalo */}
      <div className="relative group flex justify-center">
        <a
          href="https://zalo.me/0928899939"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:scale-110 transition"
        >
          <Image src="/icons/zalo.png" alt="Zalo" width={26} height={26} />
        </a>

        <span className="hidden md:block absolute right-14 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Chat Zalo
        </span>
      </div>
      <div className="relative group flex justify-center">
        <a
          href="https://zalo.me/2469997295755147479?src=qr"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:scale-110 transition"
        >
          <Image src="/icons/zalo-view.jpg" alt="Zalo" width={30} height={26} />
        </a>

        <span className="hidden md:block absolute right-14 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Xem Zalo
        </span>
      </div>

      {/* Email */}
      <div className="relative group flex justify-center">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bisojica@gmail.com"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:scale-110 transition"
        >
          <Mail size={22} />
        </a>

        <span className="hidden md:block absolute right-14 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          bisojica@gmail.com
        </span>
      </div>

      {/* Địa chỉ */}
      <div className="relative group flex justify-center">
        <a
          href="https://maps.app.goo.gl/fSBr15jthZDYZdgV9"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white shadow-lg hover:scale-110 transition"
        >
          <MapPin size={22} />
        </a>

        <span className="hidden md:block absolute right-14 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Số 16, đường D4, phường Cát Lái, Phường Cát Lái, Thành phố Hồ Chí Minh
        </span>
      </div>

    </div>
  );
}