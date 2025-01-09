import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Promo from "@/components/Promo";
import Topnav from "@/components/Topnav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Topnav></Topnav>
      <Banner message="A CUSTOM GOLF CLUB FITTING.YOUR GAME’S GAME-CHANGER." backgroundImage="https://via.placeholder.com/1500x500" />
      <Promo message="" backgroundImage="/assets/100-full-bag-2025.svg" />
      <Footer></Footer>
    </>
  );
}
