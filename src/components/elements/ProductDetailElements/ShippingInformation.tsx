import React from 'react'
import data from "./../../../../public/ShippingInformation/ShippingInformation.json";
import Image from "next/image";


export const ShippingInformation = () => {
  return (
    <div>
      <h5 className="text-2xl ml-8">Información de envío</h5>
      <div className="flex flex-col md:flex-row justify-evenly">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <p>{item.nombre}</p>
            <Image
              src={item.Image}
              alt={item.nombre}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
