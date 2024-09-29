"use client";
import React from "react";
import {
  LogoWrapper,
  PerfilTrigger,
  AccordionComponent,
  SearchBar,
} from "@/components/elements";

export const NavbarComponent = () => {
  const fatherNavmd: string = "md:hover:h-40 md:h-20";
  const childrenTwomd: string =
    "md:pl-20 md:opacity-0 md:group-hover:w-40 md:w-0 md:group-hover:min-h-20 md:group-hover:h-20 md:h-0   opacity-1 h-0 group-hover:opacity-100 duration-500 transition-all";
  const linemd: string = "md:w-0 md:group-hover:w-1/4";

  return (
    <div
      className={`${fatherNavmd} w-screen h-40 shadow-xl rounded-b-2xl fixed top-0 left-0 flex flex-col align-start justify-start group duration-500 transition-all z-[9999] bg-white`}
    >
      <div className="w-full h-20 absolute top-0 flex align-center justify-around  duration-500 transition-all z-50">
        <LogoWrapper />
        <SearchBar />
        <PerfilTrigger />
      </div>

      <div
        className={`${childrenTwomd} w-full h-20 flex align-center justify-start  duration-500 transition-all absolute bottom-0 z-50`}
      >
        <div
          className={`${linemd} h-[1px] bg-slate-400 rounded-full fixed top-20 left-[50%] translate-x-[-50%] w-1/4 duration-500 transition-all`}
        ></div>
        <AccordionComponent className="w-40 h-full  justify-center align-center z-50 p-3 select-none" />
      </div>
    </div>
  );
};
