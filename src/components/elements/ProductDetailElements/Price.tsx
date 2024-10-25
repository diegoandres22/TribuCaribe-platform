import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React from "react";
import { CiCircleQuestion } from "react-icons/ci";

interface PriceProps {
  priceInDollars: number;
}

export const Price: React.FC<PriceProps> = ({ priceInDollars }) => {
  const exchangeRate = 36; // Tasa de cambio
  const priceInBolivars = priceInDollars * exchangeRate;

  return (
    <div className="p-4 flex flex-col ">
      <div className="text-2xl font-bold flex">
        US$ {priceInDollars}
        <sup className="text-xs top-1 ml-1">80</sup>
        <Popover placement="right">
          <PopoverTrigger>
            <CiCircleQuestion className="mx-2 text-xl text-blue-600" />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-2 py-2">
              <div className="text-small font-bold">Tasa de cambio</div>
              <div className="text-tiny">
                La tasa de cambio utilizada es de <strong>36 Bs.</strong> por
                cada dólar.
                <br />
                Fuente: Banco Central de Venezuela (BCV)
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="text-sm text-gray-500">
        Bs. {priceInBolivars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>
    </div>
  );
};
