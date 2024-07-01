import { useRouter } from "next/navigation";
import React from "react";

const index = () => {
  const router = useRouter();
  return router.push("/shop");
};

export default index;
