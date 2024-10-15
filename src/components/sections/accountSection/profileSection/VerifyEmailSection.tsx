import React from "react";
import { ButtonReusable } from "@/components/elements";

export const VerifyEmailSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start rounded-2xl shadow-down gap-3 p-2 md:p-4 mb-8">
      <h2 className="text-lg md:text-xl font-bold">Email</h2>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-sm md:text-base">example@gmail.com</p>
          <p className="text-sm md:text-base text-[#FF8717]">
            No esta verificado
          </p>
        </div>
        <ButtonReusable
          value="verificar"
          bg="bg-[#9E00FF]"
          color="text-white"
        />
      </div>
    </div>
  );
};
