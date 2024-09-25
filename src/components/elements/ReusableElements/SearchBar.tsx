import { Input } from "@nextui-org/react";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBar: React.FC = () => {
  return (
    <Input
      classNames={{
        base: "max-w-full w-30 h-full flex aling-center justify-center",
        mainWrapper: "h-10",
        input: "text-small",
        inputWrapper:
          "h-10 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-3xl",
      }}
      placeholder="Buscar..."
      size="sm"
      startContent={<FaMagnifyingGlass />}
      type="search"
    />
  );
};
