import {
  ProductActionSection,
  ProductInfoSection,
  ProductTitleAndImageSection,
} from "@/components/sections";

import React from "react";

export const ProductDetailScreen = () => {
  return (
    <div className="flex flex-col mt-48 bg-white">
      <ProductTitleAndImageSection />
      <ProductActionSection />
      <ProductInfoSection />
    </div>
  );
};
