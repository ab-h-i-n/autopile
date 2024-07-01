import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Shop",
      links: [
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
      ],
    },
    {
      title: "The Company",
      links: [
        {
          title: "About Us",
          link: "#",
        },
        {
          title: "Contact Us",
          link: "#",
        },
        {
          title: "Careers",
          link: "#",
        },
        {
          title: "Blog",
          link: "#",
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          title: "info@mysite.com",
          link: "#",
        },
        {
          title: "Tel: 123-456-7890",
          link: "#",
        },
        {
          title: "Add500 Terry Francine St.San Francisco,ress",
          link: "#",
        },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          title: "Facebook",
          link: "#",
        },
        {
          title: "Twitter",
          link: "#",
        },
        {
          title: "Instagram",
          link: "#",
        },
      ],
    },
  ];

  const policyLinks = [
    {
      title: "Privacy Policy",
      link: "#",
    },
    {
      title: "Terms of Service",
      link: "#",
    },
    {
      title: "Refund Policy",
      link: "#",
    },
    {
      title: "Support Policy",
      link: "#",
    },
    {
      title: "Shipping Policy",
      link: "#",
    },
  ];

  const paymentMethods = [
    {
      icon: "/images/payment/American Express.webp",
      alt: "American Express",
    },
    {
      icon: "/images/payment/China Union Pay.webp",
      alt: "China Union Pay",
    },
    {
      icon: "/images/payment/Diners.webp",
      alt: "Diners Club",
    },
    {
      icon: "/images/payment/Discover.webp",
      alt: "Discover",
    },
    {
      icon: "/images/payment/Master Card.webp",
      alt: "MasterCard",
    },
    {
      icon: "/images/payment/Visa.webp",
      alt: "Visa",
    },
  ];

  return (
    <footer className="py-20 px-10 xl:px-40 grid divide-y-[1px] divide-secondary divide-opacity-50 lg:py-10 z-10 bg-primary relative">
      {/* first section  */}
      <div className="grid place-items-center gap-10 lg:grid-flow-col py-5">
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

        {/* links  */}
        {links.map((link, index) => (
          <div
            key={link.title}
            className="text-center grid gap-2 lg:text-start lg:gap-5"
          >
            {/* title  */}
            <p className="font-medium lg:text-lg">{link.title}</p>

            {/* links  */}
            <div className="grid gap-1">
              {link.links.map((item, index) => (
                <Link
                  key={`${link.title}_${index}`}
                  href={item.link}
                  className="text-xs lg:text-base opacity-50 hover:opacity-70"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* second section  */}
      <div className="grid text-center gap-2 py-5 lg:grid-flow-col lg:py-10 ">
        {policyLinks.map((policy, index) => (
          <Link
            key={index}
            href={policy.link}
            className="hover:opacity-70 text-xs opacity-50 lg:text-base"
          >
            {policy.title}
          </Link>
        ))}
      </div>

      {/* third section  */}
      <div className="grid gap-5 py-5 lg:py-10 place-items-center lg:grid-cols-[min-content,1fr] lg:gap-10">
        {/* title  */}
        <p className="lg:text-lg font-medium text-nowrap">Payment Methods</p>
        <div className="grid place-items-center gap-5 lg:grid-flow-col w-full">
          {paymentMethods.map((payment, index) => (
            <Image
              key={index}
              src={payment.icon}
              alt={payment.alt}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>

      {/* copyright section  */}
      <div className="text-center py-5 lg:py-10">© 2035 By Autopile</div>
    </footer>
  );
};

export default Footer;
