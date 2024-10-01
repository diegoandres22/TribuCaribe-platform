import React from "react";
import Link from "next/link";

export const TextFooter: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start md:items-center md:justify-center text-center">
      <div className="w-full flex flex-col  text-sm md:text-base gap-2 md:justify-center md:items-center md:gap-3 text-center ">
        <p>Todos los derechos reservados por Tribu Caribe®</p>
        <p>
          Al comprar cualquiera de nuestros productos estas aceptando nuestros{" "}
          <span className="text-[#0066FF] hover:underline">
            <Link href={"404"}>Términos y condiciones</Link>
          </span>
        </p>
        <p>
          La privacidad de datos de nuestros clientes son prioridad para
          nosotros en cualquier momento puedo consultar nuestra{" "}
          <span className="text-[#0066FF] hover:underline">
            <Link href={"404"}>Política de privacidad</Link>
          </span>
        </p>
      </div>
      <div className="w-full mt-4 flex flex-col gap-2 text-sm md:text-base justify-center items-center md:gap-3">
        <p className="text-[#666666]">
          <span className="hover:underline">
            <Link href={"404"}>Informar un error</Link>
          </span>{" "}
          |
          <span className="hover:underline">
            <Link href={"404"}> Ayuda</Link>
          </span>{" "}
          |
          <span className="hover:underline">
            <Link href={"404"}> Contacto</Link>
          </span>
        </p>
        <p className="text-[#666666]">Marcas asociadas</p>
      </div>
    </div>
  );
};
