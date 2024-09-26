"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import data from "../../../../public/advertisingCoruosel/advertisingCaruosel.json";
import { GetImgAdvertising } from "@/components/elements";
import Link from "next/link";

export const AdvertisingCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const handleLinkClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault(); 
    }
  };
  return (
    <div className="w-scren h-auto flex justify-center align-center mt-40">
      <Slider {...settings} className="w-[40%]">
        {data.map((item) => (
          <Link href={"404"} onClick={handleLinkClick}>
            <GetImgAdvertising
              src={item.Image}
              alt={item.nombre}
              key={item.ID}
            ></GetImgAdvertising>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
