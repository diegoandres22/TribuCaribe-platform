import React from "react";

export const InformationSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start rounded-2xl shadow-down gap-3 p-2 md:p-4 mb-8">
      <h2 className="text-lg md:text-xl font-bold">Información</h2>
      <div>
        <p className="text-sm md:text-base">
          <strong>Nombre completo:</strong> Juan Jose Cristino
        </p>
        <p className="text-sm md:text-base">
          <strong>Usuario:</strong> jjcris04
        </p>
        <p className="text-sm md:text-base">
          <strong>Documento:</strong> 29.111.222
        </p>
        <p className="text-sm md:text-base">
          <strong>Celular:</strong> +58 4241234567
        </p>
      </div>
    </div>
  );
};
