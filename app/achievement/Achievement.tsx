import Image from "next/image";

import ab1 from "@/public/images/achievement/giay-phep-dang-ky-f.png";
import ab2 from "@/public/images/achievement/giay-phep-dang-ky-b.png";
import ab3 from "@/public/images/achievement/chung-nhan-dang-ky1.png";
import ab4 from "@/public/images/achievement/chung-nhan-dang-ky2.png";
import ab5 from "@/public/images/achievement/giay-phep-an-toan-sp.png";
import ab6 from "@/public/images/achievement/doi-tac-chien-luoc.png";

export default function Achievement() {
  const images = [ab1, ab2, ab3, ab4, ab5, ab6];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src={img}
              alt={`about-image-${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}