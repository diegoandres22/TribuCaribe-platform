import {
  ProductActionSection,
  ProductInfoSection,
  ProductTitleAndImageSection,
} from "@/components/sections";

import React from "react";

export const ProductDetailScreen = () => {
  return (
    <div className="flex mt-40">
      <ProductTitleAndImageSection />
      <ProductActionSection />
      <ProductInfoSection />
    </div>
  );
};
