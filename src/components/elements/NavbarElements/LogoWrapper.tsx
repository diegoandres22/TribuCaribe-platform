import React from "react";
import Logo from "../ReusableElements/logo";

const LogoWrapper: React.FC = () => {
  return (
    <div className="h-full w-16 relative">
      <Logo className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></Logo>
    </div>
  );
};

export default LogoWrapper;
