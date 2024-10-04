"use client";
import { OnlyChildrenProps } from "@/types/index";
import { useState } from "react";

export const SliderContainer = ({ children }: OnlyChildrenProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div
      className={`slider-container lg:w-[65%] w-[85%] lg:mt-0 mt-0 ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
      onTouchStart={() => setIsGrabbing(true)}
      onTouchEnd={() => setIsGrabbing(false)}
    >
      {children}
    </div>
  );
};
