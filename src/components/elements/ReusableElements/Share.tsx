import React from "react";
import { ShareProps } from "@/types";
import { FaShareAlt } from "react-icons/fa";

export const Share: React.FC<ShareProps> = ({ onClick }) => {
  return (
    <button
      className="text-xl bg-transparent border-none cursor-pointer" // Estilos de botón
      onClick={onClick} // Llama a la función onClick cuando se hace clic
      aria-label="Compartir" // Añadir accesibilidad
    >
      <FaShareAlt />
    </button>
  );
};
