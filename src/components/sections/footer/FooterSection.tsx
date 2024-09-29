import React from "react";
import { TextFooter, ImagesFooter } from "@/components/elements";

export const FooterComponent: React.FC = () => {
  return (
    <div className="w-[100] overflow-x-hidden mt-20 p-3 shadow-xl rounded-t-2xl flex flex-col items-start justify-start md:items-center md:justify-center md:py-10 bg-white">
      <TextFooter /> {/* todo el texto que esta en el footer */}
      <ImagesFooter /> {/* todas las imagenes que estan en el footer */}
    </div>
  );
};
