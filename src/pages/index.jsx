import HeroSection from "@/components/hero_section/HeroSection";
import ShopByCatagory from "@/components/shop_by_catagory_section/ShopByCatagory";

export default function Home() {
  return (
    <main className={`bg-primary text-secondary `}>
      <HeroSection />
      <ShopByCatagory />
    </main>
  );
}
