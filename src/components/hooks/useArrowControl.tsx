import { useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import {
  SampleNextArrowsForLightningDeals,
  SamplePrevArrowsForLightningDeals,
} from "../elements";
import { useArrowControlProps } from "@/types";

export const useArrowControl = ({
  totalSlides,
  itemsToShow = 4,
  autoplay = false,
  speed = 500,
}: useArrowControlProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isMobile = useAppSelector((state) => state.device.isMobile);
  const items = itemsToShow;

  const settings = {
    dots: false,
    infinite: false,
    speed,
    slidesToShow: items,
    slidesToScroll: 1,
    arrows: !isMobile,
    draggable: isMobile,
    autoplay,
    beforeChange: () => setIsDragging(true),
    afterChange: (current: number) => {
      setIsDragging(false);
      setCurrentSlide(current);
    },
    nextArrow:
      !isMobile && currentSlide < totalSlides - items ? (
        <SampleNextArrowsForLightningDeals style={{ background: "#000" }} />
      ) : undefined,
    prevArrow:
      !isMobile && currentSlide > 0 ? (
        <SamplePrevArrowsForLightningDeals />
      ) : undefined,
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  return { settings, handleLinkClick };
};
