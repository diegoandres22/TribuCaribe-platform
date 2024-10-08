"use client";
import { Search } from "@/components/logicsFuntions/Search";
import { Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBar: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("keypress", (e) => Search(e, inputRef));
  }, []);

  return (
    <Input
      classNames={{
        base: "max-w-full lg:w-60 w-30 h-full flex aling-center justify-center",
        mainWrapper: "h-10",
        input: "text-medium",
        inputWrapper:
          "h-10 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-3xl",
      }}
      placeholder="Buscar..."
      size="sm"
      startContent={<FaMagnifyingGlass cursor={"pointer"} />}
      ref={inputRef}
      type="search"
    />
  );
};
