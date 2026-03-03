import Image from "next/image";

import ab1 from "@/public/images/about/ab1.png";
import ab2 from "@/public/images/about/ab2.png";
import ab3 from "@/public/images/about/ab3.png";
import ab4 from "@/public/images/about/ab4.png";
import ab5 from "@/public/images/about/ab5.png";
import ab6 from "@/public/images/about/ab6.png";

export default function AboutGallery() {
  const images = [ab1, ab2, ab3, ab4, ab5, ab6];

  return (
    <>
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-black">
          Tác dụng của enzyme
        </h1>
      </div>
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
    </>
  );
}