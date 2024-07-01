import React from "react";
import Button from "../common/Button";

const ThirdSection = () => {
  const points = [
    "Free in-store or curbside pickup",
    "Personalized care including battery testing and installation",
    "Certified technicians only",
    "Get points for every purchase. Redeem points for rewards",
  ];

  return (
    <section className='min-h-screen text-white  bg-[url("/images/third-section-bg.webp")] bg-cover bg-no-repeat px-5 py-20 grid gap-5 md:px-10 lg:px-20'>
      {/* titles  */}
      <div className="grid gap-3">
        {/* title  */}
        <p className="text-3xl font-medium w-[80%] md:text-4xl lg:w-[50%] xl:text-5xl ">
          The One-Stop Shop for Automotive Enthusiasts
        </p>
        {/* description  */}
        <p className="text-lg md:text-xl md:w-[80%] xl:w-[50%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sint
          aliquam itaque impedit, dolorem ipsam ut est adipisci officia tempore
          corrupti possimus fuga quod labore molestias maiores nemo dignissimos
          quas.
        </p>
      </div>

      {/* table  */}
      <div className="mt-5 max-w-[500px] xl:max-w-[600px]">
        {points.map((point, index) => (
          <p
            key={index}
            className={`font-medium text-lg px-4 py-6 rounded border-2 lg:text-xl ${
              index !== 0 && "border-t-transparent"
            }`}
          >
            {point}
          </p>
        ))}
      </div>

      {/* learn more button  */}
      <div className="flex justify-center md:justify-start h-fit">
        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default ThirdSection;
