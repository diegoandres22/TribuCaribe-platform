import {
  BrandCarousel,
  AdvertisingCarousel,
  HotCategories,
  MainBanner,
  LightningDeals,
} from "@/components/sections";
import React from "react";

const Inicio: React.FC = () => {
  return (
    <div className="w-screen h-auto relative min-h-screen flex flex-col justify-center align-center overflow-x-hidden">
      <MainBanner></MainBanner>
      <HotCategories></HotCategories>
      <BrandCarousel></BrandCarousel>
      <LightningDeals></LightningDeals>
      <AdvertisingCarousel></AdvertisingCarousel>
    </div>
  );
};

export default Inicio;
