"use client";
import { ButtonProps } from "@/types";
import React from "react";

export const ButtonReusable: React.FC<ButtonProps> = ({
  value,
  bg,
  color,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`p-3 ${bg} rounded-xl ${color} shadow-lg hover:scale-95 transition-all`}
      >
        {value}
      </button>
    </div>
  );
};
