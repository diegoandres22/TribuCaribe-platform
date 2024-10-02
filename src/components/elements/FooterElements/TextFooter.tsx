import React from "react";
import Link from "next/link";

export const TextFooter: React.FC = () => {
  return (
    <div className="w-full mt-4 flex flex-col text-sm md:text-base gap-2 md:gap-3 items-center justify-center text-center">
      <p>
        La privacidad de datos de nuestros clientes son prioridad para nosotros
        en cualquier momento puedo consultar nuestra{" "}
        <span className="text-[#0066FF] hover:underline">
          <Link href={"404"}>Política de privacidad</Link>
        </span>
      </p>
      <p>
        Al comprar cualquiera de nuestros productos estas aceptando nuestros{" "}
        <span className="text-[#0066FF] hover:underline">
          <Link href={"404"}>Términos y condiciones</Link>
        </span>
      </p>
      <p>
        Todos los derechos reservados por <strong>Tribu Caribe®</strong>
      </p>
    </div>
  );
};
