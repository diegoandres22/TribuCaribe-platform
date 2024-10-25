import React from "react";
import { Avatar } from "@nextui-org/react";

export const LogoSection: React.FC = () => {
  return (
    <div className="w-full flex gap-2 md:gap-4 mb-8">
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-20 h-20 text-large"
      />
      <div>
        <h2 className="font-bold text-base md:text-lg">jjcris04</h2>
        <p className="text-sm md:text-base">example@gmail.com</p>
        <p className="text-sm md:text-base text-[#FF8717]">
          Email no verificado
        </p>
      </div>
    </div>
  );
};
