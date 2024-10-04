// import React from "react";
// import { HeartFavorites, Stars } from "@/components/elements/";
// import Image from "next/image";


// export const ProductTitleAndImageSection = () => {
//   return (
//     <div className="flex flex-col w-screen p-5">
//       <div className="flex items-center justify-end">
//         <Stars rating={3}></Stars>
//         <p className="text-ColorTextGrey">(4)</p>
//       </div>
//       <div className="flex flex-col ">
//         <h2 className="text-lg">Kit kat 90 gr</h2>
//         <div className="flex justify-between items-center">
//           <p className="text-xs"> Por <a href="" className="text-blue-500"> Savoy</a></p>
//           <HeartFavorites isFavorite={false} />
//         </div>
//       </div>
//       <div className="relative w-full h-48">
//         <Image
//           src={data[0].image}
//           alt={"si"}
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };
import React from 'react';
import Image from 'next/image';
import { HeartFavorites, Stars } from "@/components/elements/";
import { ProductTitleAndImageSectionProps } from '@/types';

export const ProductTitleAndImageSection: React.FC<ProductTitleAndImageSectionProps> = ({
  rating,
  reviewsCount,
  title,
  brand,
  imageSrc,
  imageAlt,
  isFavorite
}) => {
  return (
    <div className="flex flex-col w-screen p-5">
      {/* Sección de estrellas y cantidad de calificaciones */}
      <div className="flex items-center justify-end">
        <Stars rating={rating} />
        <p className="text-ColorTextGrey">({reviewsCount})</p>
      </div>

      {/* Título y corazón de favoritos */}
      <div className="flex flex-col">
        <h2 className="text-lg">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xs">
            Por <a href="#" className="text-blue-500">{brand}</a>
          </p>
          <HeartFavorites isFavorite={isFavorite} />
        </div>
      </div>

      {/* Imagen del producto */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
