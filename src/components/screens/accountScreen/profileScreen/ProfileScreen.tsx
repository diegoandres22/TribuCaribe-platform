import React from "react";
import {
  LogoSection,
  InformationSection,
  LocationSection,
  VerifyEmailSection,
} from "@/components/sections";
import Link from "next/link";

export const ProfileScreen: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center p-2 md:p-0 mb-8">
      <div className="w-full md:w-1/2 h-auto bg-white flex flex-col p-2 md:p-8 rounded-2xl shadow-down">
        <LogoSection />
        <InformationSection />
        <LocationSection />
        <VerifyEmailSection />
        <p className="text-center text-sm">
          Todos los datos proporcionados por nuestros clientes están protegidos
          por nuestro equipo. Si tiene alguna duda puede consultar nuestra{" "}
          <span className="text-[#0066FF] hover:underline">
            <Link href={"/404"}>política de privacidad</Link>
          </span>{" "}
          o ponerse en contacto con nosotros
        </p>
      </div>
    </div>
  );
};
