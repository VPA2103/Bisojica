import Sections from "@/page/Trang-Chu/Gia-Tri-Cot-Loi";
import Hero from "@/page/Trang-Chu/Hero";
import Image from "next/image";
import ProductsHightlight from "@/components/main/ProductsHightlight";
import BisoYaiPromoBanner from "./phat-trien-nhan-tai/BisoYaiPromoBanner";
import VerticalVideo from "@/components/main/VerticalVideo";
import DiscountBanner from "@/components/DiscountBanner";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <VerticalVideo/> */}
      <Sections />
      <DiscountBanner/>
      <ProductsHightlight/>
      <BisoYaiPromoBanner/>
    </>
  );
}
