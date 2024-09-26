'use client'
import { useState, ReactNode } from "react";

interface SliderContainerProps {
  children: ReactNode;
}

export const SliderContainer = ({ children }: SliderContainerProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div
      className={`slider-container lg:w-[65%] w-[85%] lg:mt-20 mt-2 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"
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
