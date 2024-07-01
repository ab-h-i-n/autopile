import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import ReviewCard from "./ReviewCard";
const ProductReview = () => {
  var swiperRef = useRef();
  const reviews = [
    {
      user: "User1",
      createdAt: "June 5,2023",
      image: "/images/product.webp",
      product: "Product1",
      reviews:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo",
    },
    {
      user: "User2",
      createdAt: "June 5,2023",
      image: "/images/product2.webp",
      product: "Product2",
      reviews:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo",
    },
    {
      user: "User3",
      createdAt: "June 5,2023",
      image: "/images/product3.webp",
      product: "Product3",
      reviews:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo",
    },
    {
        user: "User3",
        createdAt: "June 5,2023",
        image: "/images/product3.webp",
        product: "Product3",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo",
      },
      {
        user: "User3",
        createdAt: "June 5,2023",
        image: "/images/product3.webp",
        product: "Product3",
        reviews:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo",
      },
  ];

  return (
    <section className="h-auto max-w-screen pt-20 pb-28">
      {/* title  */}
      <p className="text-3xl font-medium w-[80%] md:text-4xl lg:w-[50%] xl:text-5xl px-5 md:px-10 lg:px-20">
        Product Reviews
      </p>

      {/* reviews  */}
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
            }
          }}
          modules={[Navigation]}
          className="mySwiper w-full md:w-[80%] h-fit relative mt-10 "
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="w-full flex justify-center">
                <ReviewCard
                  user={review.user}
                  createdAt={review.createdAt}
                  image={review.image}
                  product={review.product}
                  review={review.reviews}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="review swipe-btn-next"
          onClick={() => swiperRef.current.slideNext()}
        ></button>
        <button
          className="review swipe-btn-prev"
          onClick={() => swiperRef.current.slidePrev()}
        ></button>
      </div>
    </section>
  );
};

export default ProductReview;
