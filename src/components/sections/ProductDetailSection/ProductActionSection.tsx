'use client'
import React from "react";
import {
  Buttons,
  CantityOfProduct,
  IdCopy,
  PaymentsMetods,
  Price,
  Priceperquantity,
  Stock,
  TermsAndCondit,
  Variants,
} from "@/components/elements";
import { Divider } from "@nextui-org/react";

import data from "./../../../../public/LightningDeals/LightningDeals.json";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const ProductActionSection = () => {

  const isScrollingUpOrAtTop = useSelector(
    (state: RootState) => state.scroll.isScrollingUpOrAtTop
  );

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
  const _ID_ = "235542"

  return (
    <div className={`lg:sticky ${isScrollingUpOrAtTop ? 'lg:top-44' : 'lg:top-28'} lg:pt-4 lg:rounded-xl lg:shadow-large lg:ml-4 lg:w-[30vw] 2xl:w-auto transition-all duration-700 ease-in-out bg-bagwite`}>
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

      <div className="hidden h-full justify-center lg:flex ">
        <IdCopy id={_ID_} ></IdCopy>
      </div>
    </div>
  );
};
