
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

interface AccordionProps {
  className?: string;
}

export function AccordionComponent({ className }: AccordionProps) {
  return (
    <Accordion variant="light" className={` ${className ?? ""}`}>
      <AccordionItem key="1" aria-label="Accordion 1" title="Categorias">
        <div className="h-96 w-80 rounded-3xl shadow-large  z-50 bg-white p-5">
          <Link href={"404"}>Dulces</Link>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
