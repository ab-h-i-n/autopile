import FifthSection from "@/components/fifth_section/FifthSection";
import HeroSection from "@/components/hero_section/HeroSection";
import ProductReview from "@/components/product_review_section/ProductReview";
import ShopByCatagory from "@/components/shop_by_catagory_section/ShopByCatagory";
import ThirdSection from "@/components/third_section/ThirdSection";
import TopSellers from "@/components/top_sellers_section/TopSellers";

export default function Home() {
  return (
    <main className={`bg-primary text-secondary `}>
      <HeroSection />
      <ShopByCatagory />
      <ThirdSection />
      <TopSellers />
      <FifthSection />
      <ProductReview/>
    </main>
  );
}
