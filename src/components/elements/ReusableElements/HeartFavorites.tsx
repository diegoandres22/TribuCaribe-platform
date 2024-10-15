
import { HeartFavoritesProps } from '@/types';
import React from 'react';
import { FaHeart } from "react-icons/fa";

export const HeartFavorites: React.FC<HeartFavoritesProps> = ({ isFavorite, onClick }) => {
    return (
        <button
            className={isFavorite ? 'text-red-600 text-xl' : 'text-ColorTextGrey text-xl'}
            onClick={onClick} 
            aria-label={isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"} 
        >
            <FaHeart />
        </button>
    );
};
