
import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

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
            <button
              type="button"
              className="mx-2 text-xl text-blue-600 focus:outline-none"
            >
              <CiCircleQuestion />
            </button>
          </PopoverTrigger>
          <PopoverContent >
            <div className='p-2'>

              <div className="text-small font-bold left-0">Tasa de cambio</div>
              <div className="text-xs">
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
