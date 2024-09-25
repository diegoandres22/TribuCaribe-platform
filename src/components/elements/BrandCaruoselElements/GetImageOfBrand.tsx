import React from "react";
import Image from "next/image";

interface getImgProps {
  src: string;
  alt: string;
}

var absolute =
  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0";
var ofPics =
  "shadow-lg p-0 m-0 w-[100%] lg:hover:scale-75 transition-all duration-300 scale-80 lg:h-[200px] h-[100px] rounded-2xl outline-none";

export const GetImageOfBrand: React.FC<getImgProps> = ({ src, alt }) => {
  return (
    <div className="relative h-[20vh] ">
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
