import React from "react";
import Logo from "../ReusableElements/logo";
import Link from "next/link";

export const LogoWrapper: React.FC = () => {
  return (
    <div className="h-full w-16 relative">
      <Link href={"/"}>
        <Logo className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] "></Logo>
      </Link>
    </div>
  );
};
