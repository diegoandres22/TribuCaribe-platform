import React from "react";
import Image from "next/image";
import { getImgProps } from "@/types";

export const GetImgAdvertising: React.FC<getImgProps> = ({ src, alt }) => {
  const absolute =
    "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0";

  const ofPics =
    "p-0 m-0 w-[100%] transition-all duration-300 lg:hover:scale-95 cursor-pointer md:h-44 h-[125px] rounded-2xl outline-none";

  return (
    <div className="relative h-44 bg-transparent rounded-3xl h-">
      <div className=""></div>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={150}
        className={`${src === "/carousel/Mondelez-Logo-1536x864.png" ? "bg-white" : "inactivo"} ${ofPics} ${absolute}`}
      />
    </div>
  );
};
