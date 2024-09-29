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
    <div className="w-scren h-36 md:h-auto flex justify-center align-center md:mt-40 mb-14 mt-0 ">
      <Slider {...settings} className={`w-[80%] md:w-[40%] `}>
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
