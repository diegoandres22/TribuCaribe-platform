import React from "react";
import { MdOutlineCookie } from "react-icons/md";
import { FaWineBottle } from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { FaCandyCane } from "react-icons/fa6";

export const Cookie = () => {
  return (
    <div>
      <MdOutlineCookie />
    </div>
  );
};

export const Vino = () => {
  return (
    <div>
      <FaWineBottle />
    </div>
  );
};

export const Drink = () => {
  return (
    <div>
      <MdLocalDrink />
    </div>
  );
};

export const Candy = () => {
  return (
    <div>
      <FaCandyCane />
    </div>
  );
};
