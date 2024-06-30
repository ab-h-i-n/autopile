import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";

const TopSellers = () => {
  const products = [
    {
      image: "/images/product.webp",
      name: "Product1",
    },
    {
      image: "/images/product2.webp",
      name: "Product2",
    },
    {
      image: "/images/product3.webp",
      name: "Product3",
    },
    {
      image: "/images/product4.webp",
      name: "Product4",
    },
  ];

  return (
    <section className="min-h-screen max-w-screen py-20">
      {/* title  */}
      <p className="text-3xl font-medium w-[80%] md:text-4xl lg:w-[50%] xl:text-5xl px-5 md:px-10 lg:px-20">
        Top Sellers
      </p>

      {/* products  */}
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full h-fit relative mt-10"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="w-full flex justify-center">
                <ProductCard name={product.name} image={product.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default TopSellers;
