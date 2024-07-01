import React from "react";
import Button from "../common/Button";
import CatagoryCard from "../shop_by_catagory_section/CatagoryCard";

const OurServices = () => {
  const catagories = [
    {
      src: "/images/cat-1.webp",
      title: "Service 1",
      href: "#",
    },
    {
      src: "/images/cat-2.webp",
      title: "Service 2",
      href: "#",
    },
    {
      src: "/images/cat-3.webp",
      title: "Service 3",
      href: "#",
    },
    {
      src: "/images/cat-4.webp",
      title: "Service 4",
      href: "#",
    },
  ];

  return (
    <section className="min-h-screen px-5 py-10 grid gap-10 xl:gap-0 lg:py-20 z-10 bg-primary relative">
      {/* hedear  */}
      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between md:px-10 h-fit">
        {/* title  */}
        <p className="text-3xl font-semibold lg:text-4xl">Our Services</p>
        {/* shop button  */}
        <Button inverse={true} className={"px-10"}>
          View All Services
        </Button>
      </div>

      {/* catagory  */}
      <div className="grid gap-5 place-items-center md:grid-cols-2 xl:grid-cols-4">
        {catagories.map((cat, index) => (
          <CatagoryCard
            key={index}
            src={cat.src}
            href={cat.href}
            title={cat.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
