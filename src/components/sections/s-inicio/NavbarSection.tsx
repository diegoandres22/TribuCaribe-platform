"use client";
import React from "react";
import { LogoWrapper, PerfilTrigger, AccordionComponent, SearchBar } from '@/components/elements'

export const NavbarComponent = () => {
  return (
    <div className="w-screen h-20 shadow-xl rounded-b-2xl fixed top-0 left-0 flex flex-col align-start justify-start hover:h-40 group duration-500  transition-all">
      <div className="w-screen h-20 absolute top-0 flex align-center justify-around  duration-500 transition-all">
        <LogoWrapper />
        <SearchBar />
        <PerfilTrigger />
      </div>

      <div className="w-screen h-0 flex align-center justify-start pl-20 group-hover:min-h-20 group-hover:h-20 duration-500 transition-all absolute bottom-0">
        <div className="w-0  h-[1px] bg-slate-400 rounded-full fixed top-20 left-[50%] translate-x-[-50%] group-hover:w-1/4 duration-500 transition-all"></div>
        <AccordionComponent className="opacity-0 h-0 w-0 group-hover:opacity-100  group-hover:w-40 duration-500 transition-all " />
      </div>
    </div>
  );
};


