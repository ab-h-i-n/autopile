import Image from "next/image";
import React from "react";
import Button from "../common/Button";

const ProductCard = ({ image, name }) => {
  return (
    <div className="w-[70%] h-[500px] md:w-[300px] xl:w-[400px] grid gap-2 relative rounded overflow-hidden">
      {/* bestseller tag  */}
      <div className="bg-teritiary px-5 py-2 absolute top-0 left-0 z-40 font-medium text-sm">
        Best Seller
      </div>

      {/* image  */}
      <div className="w-full h-[400px] overflow-hidden rounded relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* name and button  */}
      <div className="flex items-center justify-between">
        {/* name  */}
        <p className="text-2xl font-semibold ">{name}</p>
        {/* button  */}
        <Button className={"text-xs md:text-sm lg:text-sm h-fit"} inverse={true}>
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
