import {
  LightningDeals,
  ProductActionSection,
  ProductInfoSection,
  ProductTitleAndImageSection,
} from "@/components/sections";

import data from "./../../../../public/LightningDeals/LightningDeals.json";
import data2 from "./../../../../public/LightningDeals/LightningDeals2.json";
import data3 from "./../../../../public/LightningDeals/LightningDeals3.json";

import React from "react";
import { IdCopy, Stars } from "@/components/elements";
import { Link } from "@nextui-org/react";

export const ProductDetailScreen = () => {
  const _ID_ = "875452"
  return (
    <div className="">
      <div className="flex flex-col mt-44 lg:mt-48 px-6 w-screen bg-bagwite lg:bg-transparent mb-2 ">
        <div className="flex flex-col lg:flex-row justify-center ">
          {/* Sección de Título e Imagen */}
          <div className="flex flex-col lg:w-[60%] lg:rounded-xl lg:shadow-large p-2 bg-bagwite">
            <div className="flex justify-end items-center lg:mr-8 " >
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
            {/* Se ve sólo en desktop*/}
            <div className="hidden lg:flex flex-col">

              <ProductInfoSection />
            </div>
          </div>

          <div className="lg:w-[25%] ">
            <ProductActionSection />
          </div>
        </div>

        {/* Se ve sólo en Mobile */}
        <div className="flex lg:hidden bg-bagwite">

          <ProductInfoSection />

        </div>

      </div>
      <div className="flex w-screen justify-end pr-4 sm:pr-8 lg:hidden mb-2">
        <IdCopy id={_ID_} ></IdCopy>
      </div>
      <LightningDeals dealsData={data}
        showAnimation={false}
        title="Productos símilares" />
      <br />
      <LightningDeals dealsData={data2}
        showAnimation={false}
        title="Productos del mismo fabricante" />
      <br />
      <LightningDeals dealsData={data3}
        showAnimation={false}
        title="Otros también compraron" />
      <br />
    </div>
  );
};
