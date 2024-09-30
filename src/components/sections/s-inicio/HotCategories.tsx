"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import data from "./../../../../public/hotCategories/hotCategories.json";
import * as Icons from "./../../../../public/hotCategories/";
import { FireAnimation } from "@/components/elements/ReusableElements/FireReusalbe";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

export const HotCategories = () => {
  const fatherDesktop = " md:mt-0 lg:mt-0 md:h-auto md:max:h-96";
  const [isDragging, setIsDragging] = useState(false);
  const iconMapping: Record<string, React.FC> = Icons;
  const isMobile = useAppSelector((state) => state.device.isMobile);
  const items = isMobile ? 3 : 4;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: items,
    slidesToScroll: 4,
    arrows: false,
    autoplay: !isMobile,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`w-screen  ${fatherDesktop} flex justify-center items-center`}
    >
      <div className="slider-container bg-white h-auto lg:w-[60%] md:w-[80%] w-[90%] rounded-3xl shadow-2xl relative p-4 md:px-10 ">
        <div className=" left-0 top-0 md:w-1/2 w-full flex justify-start items-end md:px-6 px-3">
          <h2 className="md:text-lg  font-bold ">Categorías más buscadas</h2>
          <FireAnimation className="-top-1 relative md:top-0" />
        </div>
        <Slider {...settings} className="w-full">
          {data.map((item) => {
            const IconComponent = iconMapping[item.Icon];

            return (
              <div
                key={item.ID}
                className={`rounded-3xl relative lg:p-32  p-14`}
              >
                <Link href={"404"} onClick={handleLinkClick}>
                  <div
                    className={`lg:w-52 w-24 lg:h-52 h-24 bg-white md:shadow-lg shadow-md rounded-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center flex-col lg:gap-5 text-center lg:hover:scale-95 transition-all duration-300`}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="w-10 h-10 flex justify-center items-center lg:text-3xl text-lg">
                      {IconComponent && <IconComponent />}
                    </div>
                    <div className="lg:text-xl text-small">{item.nombre}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
