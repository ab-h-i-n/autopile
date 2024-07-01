import { usePathname } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const pathname = usePathname();
  return <main>ProductPage</main>;
};

export default ProductPage;
