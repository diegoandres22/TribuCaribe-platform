"use client";
import React from "react";

interface ButtonProps {
  value: string;
  bg: string;
  color: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ value, bg, color, onClick }) => {
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


