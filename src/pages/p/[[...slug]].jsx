
import Products from "@/data/Products";
import { usePathname } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const products = Products;
  const pathname = usePathname();
  var product = products.find((product) => pathname === `/p/${product.id}`);

  return (
    <main className="min-h-screen">
      <h1>Current Pathname: {product?.name}</h1>
    </main>
  );
};

export default ProductPage;
