"use client";
import React from "react";
import { ProductFeatures } from "@/components/elements";

export const ProductInfoSection = () => {
  const productData = [
    { name: "Marca", role: "Rolex" },
    { name: "Modelo", role: "Camaro" },
    { name: "Color", role: "Beige" },
    { name: "Ciudad", role: "New York" },
    { name: "Precio", role: "$50,000" },
    { name: "Año", role: "2020" },
    { name: "Kilometraje", role: "15,000 km" },
    { name: "Estado", role: "Usado" },
    { name: "Marca", role: "Rolex" },
    { name: "Precio", role: "$50,000" },
    { name: "Año", role: "2020" },
    { name: "Kilometraje", role: "15,000 km" },
  ];

  return (
    <div className="flex flex-col w-full ">
      <h3 className="pl-6 text-2xl">Características del producto</h3>

      <div className="flex flex-col justify-center sm:flex-row sm:gap-x-4 sm:justify-evenly md:gap-x-10 lg:px-6 xl:px-10 2xl:px-20">
        <ProductFeatures data={productData.slice(0, 6)} />
        <ProductFeatures data={productData.slice(6, 20)} />
      </div>
    </div>
  );
};
