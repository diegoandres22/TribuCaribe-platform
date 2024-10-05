import {
  ProductActionSection,
  ProductInfoSection,
  ProductTitleAndImageSection,
} from "@/components/sections";

import data from "./../../../../public/LightningDeals/LightningDeals.json";

import React from "react";
import { Stars } from "@/components/elements";

export const ProductDetailScreen = () => {
  return (
    <div className="flex flex-col mt-48 px-6 bg-white">

      <div className="flex flex-col lg:flex-row">

        <div className="flex flex-col">
          <div className="flex justify-end items-center mr-6">
            <Stars rating={2} />
            <p className="text-xs text-ColorTextGrey">(8)</p>
          </div>
          <ProductTitleAndImageSection
            title={"Kit Kat 90gr"}
            brand={"Nestle"}
            imageSrc={data[0].image}
            imageAlt={"kit kat"}
            isFavorite={true}
          />
        </div>


        <ProductActionSection />
      </div>

      <ProductInfoSection />





    </div>

  );
};
