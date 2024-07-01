import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SideNav from "@/components/Shop/SideNav";
import Header from "@/components/common/Header";
import { usePathname } from "next/navigation";
import Categories from "@/data/Categories";
import Products from "@/data/Products";
import ProductCard from "@/components/common/ProductCard";

const Shop = () => {
  const router = useRouter();
  const categories = Categories;
  const products = Products;
  const pathname = usePathname();
  var allProducts = products;

  const categoryTitle = categories.find((cat) => cat.href === pathname)?.title;

  useEffect(() => {
    if (!categoryTitle && pathname !== "/shop") {
      router.push("/shop");
    }
  }, [categoryTitle, pathname, router]);

  if (pathname !== "/shop") {
    allProducts = products.filter(
      (product) => product.category === categoryTitle
    );
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* main container  */}
      <div className="grid grid-cols-[15%,1fr] h-full mt-5 lg:mt-20 px-5 md:px-10 lg:px-14">
        {/* browses by */}
        <div>
          <SideNav />
        </div>

        {/* products display section  */}
        <section className="grid gap-5 lg:gap-20 pb-20">
          {/* title  */}
          <p className="text-4xl lg:text-5xl text-nowrap font-semibold capitalize">
            {categoryTitle ? categoryTitle : "All Products"}
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
    </main>
  );
};

export default Shop;
