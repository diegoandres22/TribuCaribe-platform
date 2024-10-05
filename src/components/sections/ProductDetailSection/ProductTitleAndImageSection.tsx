'use client'

import React from 'react';
import Image from 'next/image';
import { HeartFavorites, Stars } from "@/components/elements/";
import { ProductTitleAndImageSectionProps } from '@/types';
import { Share } from '@/components/elements/ReusableElements/Share';

export const ProductTitleAndImageSection: React.FC<ProductTitleAndImageSectionProps> = ({
  title,
  brand,
  imageSrc,
  imageAlt,
  isFavorite
}) => {
  function handleShare(): void {
    alert("Hola pipe, seguro querés compartir esto? ")
  }
  function handleFavorite(): void {
    alert("Hola pipe, Te gustó mucho esto? ")
  }

  return (
    <div className="flex flex-col w-full lg:w-[60vw] justify-center m-auto">

      <div className="flex flex-col">
        <h2 className="text-lg">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xs">
            Por <a href="#" className="text-blue-500">{brand}</a>
          </p>
          <div className="flex gap-4 items-center">

            <Share onClick={(handleShare)} />
            <HeartFavorites isFavorite={isFavorite} onClick={(handleFavorite)} />
          </div>
        </div>
      </div>


      <div className="relative w-full h-48 md:h-96 lg:h-[500px] xl:h-[600px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="contain"
          className="w-full h-full"
        />
      </div>


    </div>
  );
};
