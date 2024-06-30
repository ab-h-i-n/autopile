import HeroSection from "@/components/hero_section/HeroSection";
import ShopByCatagory from "@/components/shop_by_catagory_section/ShopByCatagory";
import ThirdSection from "@/components/third_section/ThirdSection";

export default function Home() {
  return (
    <main className={`bg-primary text-secondary `}>
      <HeroSection />
      <ShopByCatagory />
      <ThirdSection/>
    </main>
  );
}
