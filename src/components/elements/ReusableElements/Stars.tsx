import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { StarsProps } from "@/types";

export const Stars: React.FC<StarsProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex">
      {Array.from({ length: maxStars }, (_, index) => (
        <LiaStarSolid
          key={index}
          className={index < rating ? "text-ColorBrandPrimary" : "text-ColorTextGrey"}
        />
      ))}
    </div>
  );
};
