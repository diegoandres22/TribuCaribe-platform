import React from "react";
import {
  Buttons,
  CantityOfProduct,
  PaymentsMetods,
  Price,
  Priceperquantity,
  Stock,
  TermsAndCondit,
  Variants,
} from "@/components/elements";
import { Divider } from "@nextui-org/react";

import data from "./../../../../public/LightningDeals/LightningDeals.json";

export const ProductActionSection = () => {
  const priceData = [
    { range: "1-50", amount: "$10" },
    { range: "50-100", amount: "$9" },
    { range: "100-500", amount: "$8" },
  ];
  const productoVariantes = [
    { id: 1, nombre: "Dark", imagen: data[0].image },
    { id: 2, nombre: "Con Leche", imagen: data[0].image },
    { id: 3, nombre: "Americano", imagen: data[0].image },
  ];

  return (
    <div className="lg:sticky lg:top-20 lg:pt-4 lg:rounded-xl lg:shadow-large lg:ml-4 lg:w-[30vw] 2xl:w-auto ">
      <Priceperquantity prices={priceData} />

      <a className="text-blue-600 text-xs ml-6 lg:ml-6" href="">
        Calcular envío
      </a>

      <Divider className="mt-2 w-[90%] m-auto" />

      <Price priceInDollars={12} />
      <Stock></Stock>
      <Variants variantes={productoVariantes} />
      <CantityOfProduct max={1000} />
      <Buttons />
      <TermsAndCondit />
      <PaymentsMetods />
    </div>
  );
};
