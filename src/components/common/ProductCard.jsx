import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const ProductCard = ({ image, name, bestSeller, id }) => {
  return (
    <Link href={`/p/${id}`} className="w-[90%] aspect-[3/4.5] grid gap-3 relative rounded overflow-hidden cursor-pointer group">
      {/* bestseller tag  */}
      {bestSeller && (
        <div className="bg-teritiary px-5 py-2 absolute top-0 left-0 z-40 font-medium text-sm">
          Best Seller
        </div>
      )}

      {/* image  */}
      <div className="w-full aspect-[3/3.8] overflow-hidden rounded relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover w-full h-full group-hover:scale-125 transition-all duration-500"
        />
      </div>

      {/* name and button  */}
      <div className="flex items-center justify-between">
        {/* name  */}
        <p className="text-2xl font-semibold ">{name}</p>
        {/* button  */}
        <Button
          className={
            "text-xs lg:text-xs md:text-sm h-fit group-hover:bg-teritiary group-hover:border-transparent mr-3"
          }
          inverse={true}
        >
          Buy Now
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
