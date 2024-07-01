import React from "react";
import CatagoryCard from "./CatagoryCard";
import Button from "../../common/Button";
import Catagories from "@/data/Catagories";

const ShopByCatagory = () => {
  const catagories = Catagories;

  return (
    <section className="min-h-screen px-5 py-10 grid gap-10 xl:gap-0 lg:py-20 z-10 bg-primary relative">
      {/* hedear  */}
      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between md:px-10 h-fit">
        {/* title  */}
        <p className="text-3xl font-semibold lg:text-4xl">Shop by Category</p>
        {/* shop button  */}
        <Button inverse={true} className={"px-10"}>
          Shop
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

export default ShopByCatagory;
