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
      link: "#",
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
      title: "Premium Area",
      link: "#",
    },
  ];

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="flex items-center justify-between relative z-50 py-10">
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
          className="invert w-10"
        />
        <span className="font-bold text-2xl">autopile</span>
      </Link>

      {/* hamburger icon  */}
      <HamburgerIcon
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        className={"md:hidden"}
        color={isOpen ? 'black' : 'white'}
      />

      {/* nav  */}
      <nav
        className={`z-40 absolute top-0 right-0 w-[95vw] h-screen flex flex-col text-black md:text-primary bg-primary py-10 px-5 gap-10 transition-all ${
          !isOpen ? "translate-x-[110%]" : 'translate-x-[10%]'
        } md:flex-row md:static md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:gap-5 md:p-0`}
      >
        {navItems.map((item, index) => (
          <Link
            onClick={toggleOpen}
            className="w-fit cursor-pointer hover:text-teritiary hover:brightness-125 transition-all font-medium p-3"
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
