import { HeartFavoritesProps } from '@/types';
import React from 'react';
import { FaHeart } from "react-icons/fa";


export const HeartFavorites: React.FC<HeartFavoritesProps> = ({ isFavorite }) => {
    return (
        <div className={isFavorite ? 'text-red-600 text-xl' : 'text-ColorTextGrey text-xl'}>
            <FaHeart />
        </div>
    );
}
