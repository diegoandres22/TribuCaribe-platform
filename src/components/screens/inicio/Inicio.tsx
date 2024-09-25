import { NavbarComponent, BrandCarousel } from "@/components/sections";
import React from "react";

const Inicio: React.FC = () => {
  return (
    <div className="w-screen h-auto relative min-h-screen">
      <NavbarComponent></NavbarComponent>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default Inicio;
