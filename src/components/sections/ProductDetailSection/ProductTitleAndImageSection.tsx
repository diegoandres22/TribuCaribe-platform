import { Stars } from "@/components/elements/";
import React from "react";

export const ProductTitleAndImageSection = () => {
  return (
    <div className="flex w-screen justify-end">
      <div className="flex mr-5 items-center">
        <Stars rating={3}></Stars>
        <p className="text-ColorTextGrey">(4)</p>
      </div>
    </div>
  );
};
