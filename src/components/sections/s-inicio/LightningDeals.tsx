"use client";
import { ThunderAnimation } from "@/components/elements/ReusableElements/FireReusalbe";
import React, { useState } from "react";
import Slider from "react-slick";
import data from "./../../../../public/LightningDeals/LightningDeals.json";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import {
  CardOfproduct,
  SampleNextArrowsForLightningDeals,
  SamplePrevArrowsForLightningDeals,
} from "@/components/elements/index";

export const LightningDeals = () => {
  const fatherDesktop = " md:mt-10 lg:mt-0 md:h-auto md:max:h-96";
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useAppSelector((state) => state.device.isMobile);
  const items = isMobile ? 2 : 4;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: items,
    slidesToScroll: 1,
    arrows: !isMobile,
    autoplay: true,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
    nextArrow: !isMobile ? (
      <SampleNextArrowsForLightningDeals style={{ background: "#000" }} />
    ) : undefined,
    prevArrow: !isMobile ? <SamplePrevArrowsForLightningDeals /> : undefined,
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`w-screen  ${fatherDesktop} flex justify-center items-center `}
    >
      <div className="slider-container bg-white h-auto lg:w-[75%] md:w-[80%] w-[90%] rounded-3xl shadow-2xl relative p-4 md:px-10 flex flex-col gap-9">
        <div className=" left-0 top-0 md:w-1/2 w-full flex justify-start items-end md:px-6 px-3 ">
          <h2 className="md:text-lg  font-bold ">Ofertas relampago</h2>
          <ThunderAnimation className="top-0 relative md:top-0 w-5 h-5 mx-3" />
        </div>
        <Slider {...settings} className="w-full">
          {data.map((item) => {
            return (
              <div
                key={item.ID}
                className={`rounded-3xl relative lg:p-32  p-14 lg:h-96 h-48`}
              >
                <Link href={"404"} onClick={handleLinkClick}>
                  <CardOfproduct
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    percent={item.percent}
                  ></CardOfproduct>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
