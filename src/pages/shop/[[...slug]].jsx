import React from "react";
import SideNav from "@/components/Shop/SideNav";
import Header from "@/components/common/Header";
import { usePathname } from "next/navigation";
import Catagories from "@/data/Catagories";
import Products from "@/data/Products";
import ProductCard from "@/components/common/ProductCard";
import Footer from "@/components/common/Footer";

const Shop = () => {
  const catagories = Catagories;
  const products = Products;
  const pathname = usePathname();
  var allProducts = products;

  const catagorieTitle = catagories.find((cat) => cat.href === pathname)?.title;

  if (pathname !== "/shop") {
    allProducts = products.filter(
      (product) => product.category === catagorieTitle
    );

    console.log('not sop' , allProducts);
  }

  return (
    <main className=" min-h-screen overflow-hidden">
      <Header />

      {/* main container  */}
      <div className="grid grid-cols-[15%,1fr] h-full mt-5 lg:mt-20 px-5 md:px-10 lg:px-14">
        {/* browses by */}
        <div>
          <SideNav />
        </div>

        {/* products disply section  */}
        <section className="grid gap-5 lg:gap-20 pb-20">
          {/* title  */}
          <p className="text-4xl lg:text-5xl text-nowrap font-semibold capitalize">
            {catagorieTitle ? catagorieTitle : "Catagorie Not Found!"}
          </p>

          {/* products container  */}
          <div className="grid lg:grid-cols-4 gap-x-5 gap-y-10">
            {allProducts.map((product, index) => (
              <ProductCard
                bestSeller={product.bestSeller}
                id={product.id}
                image={product.image}
                name={product.name}
                key={`product_${index}`}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer/>
    </main>
  );
};

export default Shop;
