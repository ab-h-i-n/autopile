import Image from "next/image";
import React from "react";

const MainPoints = ({ src, title, desc }) => {
  return (
    <div className="grid grid-cols-[min-content,1fr] w-fit divide-x-2 divide-teritiary">
      {/* icon  */}
      <div className="w-[50px] aspect-square px-2">
        <Image src={src} alt="icon" width={50} height={50} className="invert" />
      </div>

      {/* contents  */}
      <div className="px-3">
        {/* title  */}
        <p className="font-medium">{title}</p>
        {/* desc  */}
        <p className="text-[0.9rem] font-light">{desc}</p>
      </div>
    </div>
  );
};

export default MainPoints;
