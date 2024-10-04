import Image from "next/image";
import { CardOfDealsProps } from "@/types/index";

export const CardOfDeals: React.FC<CardOfDealsProps> = ({
  imageSrc,
  discount,
  brand,
  description,
  ImageBrand,
}) => {
  return (
    <div className="relative bg-black rounded-xl shadow-lg overflow-hidden w-full h-full">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={brand}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent w-full">
        <div className="flex items-center  h-20 gap-2 justify-center">
          <div className=" h-auto w-1/4 bg-white  rounded-md p-2">
            <img
              src={ImageBrand}
              alt={brand}
              className="w-full h-auto object-cover object-center "
            />
          </div>
          <div className="text-white  w-3/4 h-3/4 flex flex-col justify-start items-start">
            <p className="text-sm font-bold">{discount}% OFF</p>
            <p className="text-xs overflow-hidden text-ellipsis w-full line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
