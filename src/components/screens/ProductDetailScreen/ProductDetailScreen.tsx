import {
  ProductActionSection,
  ProductInfoSection,
  ProductTitleAndImageSection,
} from "@/components/sections";

import data from "./../../../../public/LightningDeals/LightningDeals.json";

import React from "react";

export const ProductDetailScreen = () => {
  return (
    <div className="flex flex-col mt-48 bg-white">
      <ProductTitleAndImageSection rating={2} reviewsCount={8} title={"Kit Kat 90gr"} brand={"Nestle"} imageSrc={data[0].image} imageAlt={"kit kat"} isFavorite={true} />

      <ProductActionSection />
      <ProductInfoSection />
    </div>
  );
};
