"use client";
import React from "react";
import {
  LogoWrapper,
  PerfilTrigger,
  AccordionComponent,
  SearchBar,
} from "@/components/elements";
import { useSelector } from "react-redux";
import useScroll from "@/components/hooks/UseScroll";
import { RootState } from "@/redux/store";

export const NavbarComponent = () => {
 
  useScroll();  // Inicializa la lógica de scroll dentro del Navbar

  const isScrollingUpOrAtTop = useSelector(
    (state: RootState) => state.scroll.isScrollingUpOrAtTop
  );

  const fatherNavmd: string = "md:h-20";
  const childrenTwomd: string = "md:pl-20 md:w-0 md:min-h-0 md:h-0 opacity-0";
  const linemd: string = "md:w-0";

  return (
    <div
      className={`${fatherNavmd} w-screen h-20 shadow-xl rounded-b-2xl fixed top-0 left-0 flex flex-col align-start justify-start 
      group duration-500 transition-all z-50 bg-white ${isScrollingUpOrAtTop ? "md:h-40 h-40" : ""
        }`}
    >
      <div className="w-full h-20 absolute top-0 flex align-center justify-around  duration-500 transition-all z-50">
        <LogoWrapper />
        <SearchBar />
        <PerfilTrigger />
      </div>

      <div
        className={`${childrenTwomd} w-full h-20 flex align-center justify-start duration-500 transition-all absolute bottom-0 z-50 ${isScrollingUpOrAtTop ? "md:w-40 md:h-20 opacity-100" : ""
          }`}
      >
        <div
          className={`${linemd} h-[1px] bg-slate-400 rounded-full fixed top-20 left-[50%] translate-x-[-50%] w-1/4 duration-500 transition-all ${isScrollingUpOrAtTop ? "md:w-1/4" : ""
            }`}
        ></div>
        <AccordionComponent className="w-40 h-full justify-center align-center z-50 p-3 select-none " />
      </div>
    </div>
  );
};
