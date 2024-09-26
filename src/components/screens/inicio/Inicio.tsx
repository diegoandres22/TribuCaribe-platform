import { NavbarComponent, BrandCarousel, AdvertisingCarousel } from "@/components/sections";
import React from "react";

const Inicio: React.FC = () => {
  return (
    <div className="w-screen h-auto relative min-h-screen">
      <NavbarComponent></NavbarComponent>
      <BrandCarousel></BrandCarousel>
      <AdvertisingCarousel></AdvertisingCarousel>
    </div>
  );
};

export default Inicio;
