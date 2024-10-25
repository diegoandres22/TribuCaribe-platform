import {
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import data from "@/../public/PaymentsMethods/PaymentsMethods.json";
import { CiCircleQuestion } from "react-icons/ci";

export const PaymentsMetods = () => {
  return (
    <div className="w-full md:mt-4">
      <div className="flex w-full justify-center">
        <h3 className="font-bold ">Métodos de pago</h3>
        <Popover placement="right">
          <PopoverTrigger>
            <CiCircleQuestion className="mx-2 text-xl text-blue-600" />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-2 py-2">
              <div className="text-small font-bold">
                Consultar métodos de pagos
              </div>
              <div className="text-tiny max-w-80">
                puedes contactarnos por nuestros canales disponibles y un asesor
                te ayudará con los precios, métodos de pago y montos totales
                convertidos a tu moneda local.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <h3 className="font-bold md:ml-6 text-neutral-600">Efectivo:</h3>
      <div className="flex justify-evenly font-semibold ">
        <p>Dólares</p> <p>Bolívares</p>
      </div>

      <h3 className="font-bold  md:ml-6 -mb-4 text-neutral-600">
        Transferencias:
      </h3>
      <div className="flex items-center justify-evenly lg:px-4 flex-wrap 2xl:flex-nowrap ">
        <Image src={data[0].Image} alt={"amex"} width={60}></Image>
        <Image src={data[1].Image} alt={"visa"} width={90}></Image>
        <Image
          src={data[4].Image}
          alt={"binance"}
          height={100}
          width={120}
        ></Image>
        <Image src={data[6].Image} alt={"wester union"} width={90}></Image>
        <Image src={data[2].Image} alt={"master"} width={90}></Image>
        <Image src={data[3].Image} alt={"maestro"} width={90}></Image>
      </div>
    </div>
  );
};
