import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";

const TopSellers = () => {
  var swiperRef = useRef();
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
    {
      image: "/images/product4.webp",
      name: "Product5",
    },
  ];

  return ( 
    <section className="h-auto max-w-screen pt-20 pb-28 z-10 bg-primary relative">
      {/* title  */}
      <p className="text-3xl font-medium w-[80%] md:text-4xl lg:w-[50%] xl:text-5xl px-5 md:px-10 lg:px-20">
        Top Sellers
      </p>

      {/* products  */}
      <div className="relative lg:mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper w-full md:w-[80%] h-fit relative mt-10 "
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="w-full flex justify-center">
                <ProductCard name={product.name} image={product.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swipe-btn-next" onClick={()=>swiperRef.current.slideNext()} ></button>
        <button className="swipe-btn-prev" onClick={()=>swiperRef.current.slidePrev()} ></button>
      </div>
    </section>
  );
};

export default TopSellers;
