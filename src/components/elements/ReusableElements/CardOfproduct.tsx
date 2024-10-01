import React from "react";
import Image from "next/image";
import { PiSealPercentFill } from "react-icons/pi";

interface prodectsProps {
  image: string;
  name: string;
  percent?: number;
  price: number;
  description: string;
}

export const CardOfproduct: React.FC<prodectsProps> = ({
  image,
  name,
  percent,
  price,
  description,
}) => {
  return (
    <div
      className={`lg:w-60 lg:h-80 sm:w-32 sm:h-44 w-32 bg-white md:shadow-lg shadow-md rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center flex-col text-center lg:hover:scale-95 transition-all duration-300 p-3 `}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      <div className=" h-[80%] w-full flex justify-center items-center ">
        <Image
          alt=""
          src={image}
          width={200}
          height={200}
          className="w-[90%]"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col justify-end items-start text-sm">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap w-full text-start">
          {name}
        </h2>
        <h3 className="font-semibold">{price} $</h3>
        <p className="text-[#a5a5a5] overflow-hidden text-ellipsis whitespace-nowrap w-full">
          {description}
        </p>
      </div>
      {percent && (
        <div className="w-10 h-10 rounded-full p-1 absolute -top-2 -right-3 flex justify-center items-center">
          <h2 className="text-xs text-white z-10 bg-red-600 p-1 rounded-full">
            {percent}%
          </h2>
          <PiSealPercentFill className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full fill-red-600" />
        </div>
      )}
    </div>
  );
};
