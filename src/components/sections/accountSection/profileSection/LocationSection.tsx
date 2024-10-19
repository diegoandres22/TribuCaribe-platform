import React from "react";
import { Textarea } from "@nextui-org/react";

export const LocationSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start rounded-2xl shadow-down gap-3 p-2 md:p-4 mb-8">
      <h2 className="text-lg md:text-xl font-bold">Dirección</h2>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/4 mb-2 md:mb-0">
          <p className="text-sm md:text-base">
            <strong>País:</strong> Venezuela
          </p>
          <p className="text-sm md:text-base">
            <strong>Ciudad / Estado:</strong> Caracas
          </p>
          <p className="text-sm md:text-base">
            <strong>Localidad:</strong> Las Mercedes
          </p>
          <p className="text-sm md:text-base">
            <strong>Código Postal:</strong> 1234
          </p>
          <p className="text-sm md:text-base">
            <strong>Altura:</strong> 942 m.s.m
          </p>
          <p className="text-sm md:text-base">
            <strong>Detalles:</strong>
          </p>
          <Textarea
            isReadOnly
            variant="flat"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
            className="max-w-xs"
          />
        </div>
        <div className="w-full md:w-2/4 justify-center items-center p-2">
          <iframe
            className="w-full h-3/4 rounded-2xl shadow-down"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125549.0225703004!2d-66.97276701821694!3d10.468549974824674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58adcd824807%3A0x93dd2eae0a998483!2sCaracas%2C%20Distrito%20Capital!5e0!3m2!1ses!2sve!4v1728863025372!5m2!1ses!2sve"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
