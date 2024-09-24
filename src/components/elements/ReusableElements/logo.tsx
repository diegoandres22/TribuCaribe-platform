import React from "react";
import Image from "next/image";
interface logoProps {
  className?: string;
}

const Logo: React.FC<logoProps> = ({ className }) => {
  return (
    <Image
      src="/logo_no_white.png"
      width={500}
      height={500}
      alt="Marca del sitio"
      className={`w-[55px] h-[55px] ${className}`}
    />
  );
};

export default Logo;
