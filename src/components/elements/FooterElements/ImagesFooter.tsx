import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoPrueba from "../../../../public/carousel/Ferrero-logo_web.png";

export const ImagesFooter: React.FC = () => {
  return (
    <div className="w-full mt-4 flex justify-center items-center gap-2 md:gap-5">
      <Link href={"404"}>
        <Image
          src={logoPrueba}
          alt="logoPrueba"
          className="w-10 h-10 md:w-20 md:h-20 rounded-full border-zinc-500 border-2"
        />
      </Link>
      <Link href={"404"}>
        <Image
          src={logoPrueba}
          alt="logoPrueba"
          className="w-10 h-10 md:w-20 md:h-20 rounded-full border-zinc-500 border-2"
        />
      </Link>
      <Link href={"404"}>
        <Image
          src={logoPrueba}
          alt="logoPrueba"
          className="w-10 h-10 md:w-20 md:h-20 rounded-full border-zinc-500 border-2"
        />
      </Link>
      <Link href={"404"}>
        <Image
          src={logoPrueba}
          alt="logoPrueba"
          className="w-10 h-10 md:w-20 md:h-20 rounded-full border-zinc-500 border-2"
        />
      </Link>
      <Link href={"404"}>
        <Image
          src={logoPrueba}
          alt="logoPrueba"
          className="w-10 h-10 md:w-20 md:h-20 rounded-full border-zinc-500 border-2"
        />
      </Link>
    </div>
  );
};
