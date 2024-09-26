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
    <div className="w-screen h-96 relative mt-40">
      <h2 className="lg:text-2xl font-bold lg:px-52 pt-10 px-10">
        Nuestras marcas
      </h2>
      <div className="w-screen flex justify-center align-center">
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
