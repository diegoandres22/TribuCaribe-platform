"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import data from "./../../../../public/deals/Deals.json";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { DealsAnimation } from "@/components/elements/ReusableElements/FireReusalbe";
import {
  SampleNextArrowsForLightningDeals,
  SamplePrevArrowsForLightningDeals,
} from "@/components/elements/index";
import { CardOfDeals } from "@/components/elements/index";

export const Deals = () => {
  const fatherDesktop = "mt-0 md:mt-10 lg:mt-0 md:h-auto md:max:h-96";
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useAppSelector((state) => state.device.isMobile);
  const items = isMobile ? 1 : 3;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: items,
    slidesToScroll: 1,
    arrows: !isMobile,
    autoplay: false,
    draggable: isMobile ? true : false,
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
      <div className="slider-container bg-white h-auto lg:w-[75%] md:w-[80%] w-[90%] rounded-3xl shadow-2xl relative p-4 md:px-10 flex flex-col gap-2 mt-10 lg:mt-20">
        <div className=" left-0 top-0 md:w-1/2 w-full flex justify-start items-center md:px-6 px-3 ">
          <h2 className="md:text-lg  font-bold ">Ofertas</h2>
          <DealsAnimation className="top-0 relative md:top-0 w-5 md:w-7 h-5 md:h-7 mx-2" />
        </div>
        <Slider {...settings} className="w-full">
          {data.map((item) => {
            return (
              <div
                key={item.ID}
                className={`rounded-3xl relative p-7 lg:h-80 h-48 `}
              >
                <Link
                  href={"404"}
                  onClick={handleLinkClick}
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] h-full lg:w-96 lg:h-3/4 md:w-[90%] md:h-3/4 flex justify-center items-center"
                >
                  <CardOfDeals
                    imageSrc={item.imageSrc}
                    discount={item.discount}
                    brand={item.brand}
                    description={item.description}
                    ImageBrand={item.ImageBrand}
                  />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
