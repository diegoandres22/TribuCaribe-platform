import {
  BrandCarousel,
  AdvertisingCarousel,
  HotCategories,
} from "@/components/sections";
import React from "react";

const Inicio: React.FC = () => {
  return (
    <div className="w-screen h-auto relative min-h-screen flex flex-col justify-center align-center">
      <BrandCarousel></BrandCarousel>
      <HotCategories></HotCategories>
      <AdvertisingCarousel></AdvertisingCarousel>
    </div>
  );
};

export default Inicio;
