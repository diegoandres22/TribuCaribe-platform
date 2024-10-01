"use client";
import Slider from "react-slick";
import React from "react";
import { GetImageOfBrand, SliderContainer } from "@/components/elements";
import data from "./../../../../public/carousel/carouselItems.json";

export const BrandCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div className="w-screen h-40 justify-center md:h-60 lg:h-96 relative mt-10 lg:mt-20 flex flex-col ">
      <h2 className="md:text-xl font-semibold lg:px-96 md:px-10 pt-0 px-10 absolute top-0 ">
        Nuestras marcas ®
      </h2>
      <div className="w-screen flex justify-center items-center ">
        <SliderContainer>
          <Slider {...settings} className="rounded-3xl ">
            {data.map((item) => (
              <GetImageOfBrand
                src={item.Image}
                alt={item.nombre}
                key={item.ID}
              ></GetImageOfBrand>
            ))}
          </Slider>
        </SliderContainer>
      </div>
    </div>
  );
};
