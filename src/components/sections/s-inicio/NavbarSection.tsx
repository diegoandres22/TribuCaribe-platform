"use client";
import SearchBar from "@/components/elements/ReusableElements/SearchBar";
import PerfilTrigger from "../../elements/NavbarElements/PerfilTrigger";
import React from "react";
import LogoWrapper from "@/components/elements/NavbarElements/LogoWrapper";
import AccordionComponent from "@/components/elements/NavbarElements/AccordionComponent";

const NavbarComponent = () => {
  return (
    <div className="w-screen h-20 shadow-xl rounded-b-2xl fixed top-0 left-0 flex flex-col align-start justify-start hover:h-40 group duration-500  transition-all">
      <div className="w-screen h-20 flex align-center justify-around  duration-500 transition-all relative top-0">
        <LogoWrapper />
        <SearchBar />
        <PerfilTrigger />
      </div>

      <div className="w-screen h-0 flex align-center justify-start pl-20 group-hover:min-h-20 group-hover:h-20 duration-500 transition-all relative">
        <div className="w-0  h-[1px] bg-slate-400 rounded-full absolute top-0 left-[50%] translate-x-[-50%] group-hover:w-1/4 duration-500 transition-all"></div>
        <AccordionComponent className="opacity-0 h-0 w-0 group-hover:opacity-100  group-hover:w-40 duration-500 transition-all " />
      </div>
    </div>
  );
};

export default NavbarComponent;
