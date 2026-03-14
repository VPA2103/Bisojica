import Image from "next/image";

import ab3 from "@/public/images/achievement/chung-nhan-dang-ky1.png";
import ab4 from "@/public/images/achievement/chung-nhan-dang-ky2.png";
import ab5 from "@/public/images/achievement/giay-phep-an-toan-sp.png";
import StrategicPartners from "./StrategicPartners";
import LeadershipTeam from "../leadership/Leadership";
import ProductDocuments from "../tai-lieu/ProductDocuments";
import VisionMission from "./VisionMission";

export default function Achievement() {
  const images = [ab3, ab4, ab5];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-6">
      <VisionMission />
        <LeadershipTeam />
        <StrategicPartners />
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl "
          >
            <Image
              src={img}
              alt={`about-image-${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
        <ProductDocuments />

      </div>
    </div>
  );
}