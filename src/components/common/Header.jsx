"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerIcon from "./HamburgerIcon";
import { useCycle } from "framer-motion";

const Header = () => {
  const navItems = [
    {
      title: "Shop Parts",
      link: "/shop",
    },
    {
      title: "Wholesale",
      link: "#",
    },
    {
      title: "Reviews",
      link: "#",
    },
    {
      title: "Our Services",
      link: "#",
    },
  ];

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="flex items-center justify-between relative z-50 py-10 px-5 md:px-10 lg:px-14 xl:px-28">
      {/* logo  */}
      <Link
        href={"/"}
        className="flex items-center gap-x-2 select-none cursor-pointer"
      >
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={70}
          height={70}
          className="w-10"
        />
        <span className="font-bold text-2xl">autopile</span>
      </Link>

      {/* hamburger icon  */}
      <HamburgerIcon
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        className={"md:hidden"}
        color={"black"}
      />

      {/* backdrop for nav  */}
      <div
        className={`${
          isOpen ? "opacity-50" : "opacity-0"
        } fixed top-0 left-0 w-screen h-screen bg-black transition-all duration-300 z-30 lg:hidden pointer-events-none`}
      ></div>

      {/* nav  */}
      <nav
        className={`z-40 absolute top-0 right-0 w-[95vw] h-screen flex flex-col bg-primary py-10 px-5 gap-10 transition-all duration-300 ${
          !isOpen ? "translate-x-[110%]" : "translate-x-[10%]"
        } md:flex-row md:static md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:gap-5 md:p-0`}
      >
        {navItems.map((item, index) => (
          <Link
            onClick={toggleOpen}
            className="w-fit cursor-pointer hover:text-teritiary hover:brightness-125 transition-all font-medium p-3 hover:scale-125 duration-500"
            key={index}
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
