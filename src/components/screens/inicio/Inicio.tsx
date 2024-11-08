import {
  BrandCarousel,
  AdvertisingCarousel,
  HotCategories,
  MainBanner,
  LightningDeals,
  Deals,
} from "@/components/sections";
import React from "react";
import data from "./../../../../public/LightningDeals/LightningDeals.json";

const Inicio: React.FC = () => {
  return (
    <div className="w-screen h-auto relative min-h-screen flex flex-col justify-center align-center overflow-x-hidden">
      <MainBanner />
      <HotCategories />
      <BrandCarousel />
      <LightningDeals dealsData={data}
        showAnimation={true} 
        title="Ofertas Especiales del Día" />
      <Deals />
      <AdvertisingCarousel />
    </div>
  );
};

export default Inicio;
