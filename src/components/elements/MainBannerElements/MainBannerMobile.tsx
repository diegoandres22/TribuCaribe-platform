"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import data from "../../../../public/PicsOfTheMainBanner/MainBanner.json";
import { useDragging } from "@/components/hooks";

export const MainBannerMobile = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {};

  const { onLinkClick, settings } = useDragging(handleLinkClick);

  return (
    <div className="relative mt-40 w-screen h-[25vh] ">
      <Slider
        {...settings}
        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  h-40 w-screen sm:h-44"
      >
        {data.map((item) => (
          <Link
            href={item.url}
            className="relative w-screen h-40 sm:h-44"
            onClick={onLinkClick}
          >
            <div className="w-[90%] h-40 sm:h-44 flex justify-center items-center rounded-xl overflow-hidden absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Image
                src={item.Image}
                width={1920}
                height={1080}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="absolute bg-gradient-to-b from-transparent via-transparent to-[#f1f1f1] top-0 w-full h-full pointer-events-none "></div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
