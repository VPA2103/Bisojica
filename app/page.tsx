import Sections from "@/page/Trang-Chu/Gia-Tri-Cot-Loi";
import Hero from "@/page/Trang-Chu/Hero";
import Image from "next/image";
import LeadershipTeam from "./leadership/Leadership";
import ProductsHightlight from "@/components/main/ProductsHightlight";
import BisoYaiPromoBanner from "./phat-trien-nhan-tai/BisoYaiPromoBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Sections />
      <ProductsHightlight/>
      <BisoYaiPromoBanner/>
    </>
  );
}
