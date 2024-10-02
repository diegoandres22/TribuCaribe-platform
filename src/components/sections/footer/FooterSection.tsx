import React from "react";
import {
  TextFooter,
  ImagesFooter,
  LinksFooter,
  SocialNetworksFooter,
} from "@/components/elements";

export const FooterComponent: React.FC = () => {
  return (
    <div className="w-[100] overflow-x-hidden p-3 shadow-up rounded-t-2xl flex flex-col items-center justify-center md:py-10 bg-white text-center">
      <ImagesFooter /> {/* todas las imagenes que estan en el footer */}
      <LinksFooter /> {/* todos los links que estan en el footer */}
      <SocialNetworksFooter />{" "}
      {/* Iconos de redes sociales que estan en el footer */}
      <TextFooter /> {/* todo el texto que esta en el footer */}
    </div>
  );
};
