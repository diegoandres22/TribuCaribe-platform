// hooks/useDragging.ts (o .js)
import { useState } from "react";
import { SampleNextArrow, SamplePrevArrow } from "../elements";
import { useAppSelector } from "@/redux/hooks";

export const useDragging = (
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
) => {
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useAppSelector((state) => state.device.isMobile);

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleLinkClick(e);
    if (isDragging) {
      e.preventDefault();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
    nextArrow: !isMobile ? <SampleNextArrow /> : undefined,
    prevArrow: !isMobile ? <SamplePrevArrow /> : undefined,
  };

  return { isDragging, onLinkClick, settings };
};
