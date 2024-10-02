import React from "react";
import Link from "next/link";

export const LinksFooter: React.FC = () => {
  return (
    <div className="hidden w-full mt-5 md:flex justify-around items-start">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Ayuda</h4>
        <div className="flex flex-col gap-1">
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Contacto</Link>
          </p>
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Ayuda</Link>
          </p>
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Soporte</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Garantía</h4>
        <div className="flex flex-col gap-1">
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Preguntas y respuestas</Link>
          </p>
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Política de devoluciones</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Comprar</h4>
        <div className="flex flex-col gap-1">
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Solicitud de cotización</Link>
          </p>
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Logística</Link>
          </p>
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Impuestos sobre las ventas e IVA</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Oportunidades</h4>
        <div className="flex flex-col gap-1">
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Cómo ser vendedor</Link>
          </p>
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Panel de vendedores</Link>
          </p>
          <p className="text-[#666666] hover:underline">
            <Link href={"404"}>Cómo asociar tu marca</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Conocenos</h4>
        <p className="text-[#666666] hover:underline">
          <Link href={"404"}>Acerca de TribuCaribe.com</Link>
        </p>
      </div>
    </div>
  );
};
