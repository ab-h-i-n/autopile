import Catagories from "@/data/Catagories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = () => {
  var categories = Catagories;
  if (!categories.some((category) => category.title === "all products")) {
    categories.unshift({
      title: "all products",
      href: "/shop",
    });
  }
  const pathname = usePathname();

  return (
    <div className="lg:grid gap-5 hidden ">
      {/* TITLE  */}
      <p className="text-2xl font-medium">Browse by</p>
      {/* catagories */}
      <div className="grid gap-1">
        {categories.map((cat, index) => (
          <Link
            className={`text-lg ${
              pathname === cat.href &&
              "underline underline-offset-2 text-teritiary font-medium"
            } transition-all duration-500 hover:text-teritiary capitalize`}
            href={cat.href}
            key={`catagorie_${index}`}
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
