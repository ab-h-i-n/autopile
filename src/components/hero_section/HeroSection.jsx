import Image from "next/image";
import React from "react";
import Header from "./Header";
import Button from "../common/Button";
import MainPoints from "./MainPoints";

const HeroSection = () => {
  const mainPoints = [
    {
      src: "/images/items-1.svg",
      title: "Free Shipping",
      desc: "On all orders over 75$",
    },
    {
      src: "/images/items-2.svg",
      title: "Tested & Proven",
      desc: "Highest quality testing standards",
    },
    {
      src: "/images/items-3.svg",
      title: "Customer Service ",
      desc: "Available 24/7",
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden relative text-white">
      {/* background vedio  */}
      <div className="brightness-50 h-screen overflow-hidden">
        <video
          className="object-cover min-h-screen  pointer-events-none absolute top-0 "
          autoPlay
          loop
          muted
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* contents  */}
      <div className="absolute top-0 left-0 w-screen h-screen px-5 md:px-10 lg:px-14 xl:px-28">
        {/* header  */}
        <Header />

        {/* titles  */}
        <div className="h-full flex flex-col justify-center gap-5 translate-y-[-50px] ">
          {/* sub title  */}
          <p className="text-[1.3rem] md:text-[2rem]">Shop Our Premium Auto Parts</p>

          {/* main title  */}
          <div className="text-[1.9rem] font-bold max-w-[80%] md:text-[3rem] xl:text-[4rem]">
            <p>Build Your Dream Car Today.</p>
            <p>Now 15% Off On All Items. </p>
          </div>

          {/* button  */}
          <Button className={'my-3 md:my-5'}>Shop Now</Button>

          {/* main points  */}
          <div className="grid gap-7 md:grid-flow-col xl:w-[50%]">
            {mainPoints.map((point, index) => (
              <MainPoints
                key={index}
                src={point.src}
                title={point.title}
                desc={point.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
