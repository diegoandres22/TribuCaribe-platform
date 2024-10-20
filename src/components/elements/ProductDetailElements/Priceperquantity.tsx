import React from "react";
import { PriceperquantityProps } from "@/types/";

export const Priceperquantity = ({ prices }: PriceperquantityProps) => {
  return (
    <div className="flex justify-evenly lg:justify-around ">
      {prices.map((price, index) => (
        <div key={index} className="flex flex-col items-center m-0">
          <p className="text-ColorTextGrey">{price.range}</p>
          <p className="-mt-2">{price.amount} c/u</p>
        </div>
      ))}
    </div>
  );
};
