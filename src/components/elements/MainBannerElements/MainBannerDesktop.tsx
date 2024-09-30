"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import data from "../../../../public/PicsOfTheMainBanner/MainBanner.json";
import Link from "next/link";
import { useDragging } from "@/components/hooks/index";

export const MainBannerDesktop = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {};

  const { onLinkClick, settings } = useDragging(handleLinkClick);

  return (
    <div className="relative mt-40 w-screen h-[50vh] flex justify-center items-center">
      <Slider {...settings} className="w-screen">
        {data.map((item) => (
          <Link
            href={item.url}
            className="relative w-full h-[50vh]"
            onClick={onLinkClick}
            key={item.ID}
          >
            <div className="w-full h-[50vh] flex justify-center items-center">
              <Image
                src={item.Image}
                width={1920}
                height={1080}
                alt="Banner image"
                className="object-cover object-center w-screen h-[50vh]"
              />
            </div>
            <div className="absolute bg-gradient-to-b from-transparent via-transparent to-[#f1f1f1] top-0 w-full h-full pointer-events-none"></div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
