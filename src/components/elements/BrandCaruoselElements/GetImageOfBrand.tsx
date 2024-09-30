import React from "react";
import Image from "next/image";

interface getImgProps {
  src: string;
  alt: string;
}

export const GetImageOfBrand: React.FC<getImgProps> = ({ src, alt }) => {
  const absolute =
    "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0";

  const ofPics =
    "shadow-lg p-0 m-0 w-[100%] md:hover:scale-75 transition-all duration-300 scale-80 md:h-[150px] lg:h-[200px] h-[90px] rounded-2xl outline-none";

  return (
    <div className="relative h-[10vh] md:h-[20vh] ">
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
