"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import data from "../../../../public/advertisingCoruosel/advertisingCaruosel.json";
import { GetImgAdvertising } from "@/components/elements";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

export const AdvertisingCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useAppSelector((state) => state.device.isMobile);

  const settings = {
    dots: !isMobile,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    arrows: false,

    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault();
    }
  };
  return (
    <div className="w-scren h-auto md:h-auto flex flex-col justify-center items-center md:mt-20 md:mb-14 mb-0 sm:mt-20 mt-5 ">
      <div className="w-1/2 lg:w-1/4 h-[0.5px] bg-slate-500 rounded-full mb-1 md:mb-5"></div>
      <Slider {...settings} className={`w-[90%] md:w-[80%] lg:w-[40%]`}>
        {data.map((item) => (
          <Link href={"404"} onClick={handleLinkClick} key={item.ID}>
            <GetImgAdvertising
              src={item.Image}
              alt={item.nombre}
            ></GetImgAdvertising>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
