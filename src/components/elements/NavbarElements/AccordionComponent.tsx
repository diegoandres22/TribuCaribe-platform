'use client'

import React, { useState } from "react";
import Link from "next/link";
import data from "../../../../public/Categories.json";
import { OnlyClassNameProps } from "@/types";
import { Accordion, AccordionItem } from "@nextui-org/react";

export function AccordionComponent({ className }: OnlyClassNameProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleLinkClick = () => {
    setExpanded(false); 
  };

  return (
    <Accordion
      variant="light"
      className={` ${className ?? ""}`}
      selectedKeys={expanded ? ["1"] : []} 
      onSelectionChange={() => setExpanded(!expanded)} 
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Categorías"
        className="z-50 select-none"
      >
        <div className="w-60 rounded-2xl shadow-large z-50 bg-white p-5">
          {data.map((category, index) => (
            <div key={index} className="mb-3">
              <Link
                href={`/search?category=${category.slug}`}
                onClick={handleLinkClick}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}