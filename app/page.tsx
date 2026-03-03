import Sections from "@/page/Trang-Chu/Gia-Tri-Cot-Loi";
import Hero from "@/page/Trang-Chu/Hero";
import Image from "next/image";
import LeadershipTeam from "./leadership/Leadership";

export default function Home() {
  return (
    <>
      <Hero />
      <Sections />
      <LeadershipTeam/>
    </>
  );
}
