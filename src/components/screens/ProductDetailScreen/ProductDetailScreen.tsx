import {
  ProductActionSection,
  ProductInfoSection,
  ProductTitleAndImageSection,
} from "@/components/sections";

import data from "./../../../../public/LightningDeals/LightningDeals.json";

import React from "react";
import { Stars } from "@/components/elements";
import { Link } from "@nextui-org/react";

export const ProductDetailScreen = () => {
  return (
    <div className="flex flex-col mt-48 px-6 bg-bagwite ">
      <div className="flex flex-col lg:flex-row justify-center">
        {/* Sección de Título e Imagen */}
        <div className="flex flex-col lg:w-[60%] lg:rounded-xl lg:shadow-large lg:py-2 ">
          <div className="flex justify-end items-center lg:mr-8
          ">
            <Link href="#">
              <Stars rating={2} />
              <p className="text-xs text-ColorTextGrey">(8)</p>
            </Link>

          </div>
          <ProductTitleAndImageSection
            title={"Kit Kat 90gr"}
            brand={"Nestle"}
            imageSrc={data[0].image}
            imageAlt={"kit kat"}
            isFavorite={true}
          />
        </div>

        <div className="lg:w-[25%]">
          <ProductActionSection />
        </div>
      </div>

      <ProductInfoSection />
    </div>
  );
};

