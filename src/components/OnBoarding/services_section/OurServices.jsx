import React from "react";
import Button from "../../common/Button";
import ServiceCard from "./ServiceCard";
import Services from "@/data/Services";

const OurServices = () => {
  const services = Services;

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
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            src={service.src}
            href={service.href}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
