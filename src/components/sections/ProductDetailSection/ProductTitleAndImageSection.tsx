'use client'

import React from 'react';
import Image from 'next/image';
import { HeartFavorites } from "@/components/elements/";
import { ProductTitleAndImageSectionProps } from '@/types';
import { Share } from '@/components/elements/ReusableElements/Share';
import { closeSnackbar, enqueueSnackbar, SnackbarKey } from 'notistack';

export const ProductTitleAndImageSection: React.FC<ProductTitleAndImageSectionProps> = ({
  title,
  brand,
  imageSrc,
  imageAlt,
  isFavorite
}) => {

  const shar = 'La publicación ha sido publicada en tu muro de facebook'
  const Favorites = 'Producto agregado a Favoritos'

  const action = (snackbarId: SnackbarKey | undefined) => (
    <>

      <button className='text-lg font-bold text-red-500' onClick={() => { closeSnackbar(snackbarId) }}>
        Deshacer
      </button>
    </>
  );

  const handleShare = () => {
    return enqueueSnackbar(shar, { variant: 'success' })
  }
  const handleFavorite = () => {
    enqueueSnackbar(Favorites, {
      action,
    })
  }

  return (
    <div className="flex flex-col w-full lg:w-[50vw] justify-center m-auto ">

      <div className="flex flex-col ">
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
