'use client'

import { Variante, VariantesProps } from '@/types';
import React, { useState } from 'react';

export const Variants: React.FC<VariantesProps> = ({ variantes }) => {

    const [varianteSeleccionada, setVarianteSeleccionada] = useState<Variante | null>(null);

    const manejarSeleccionVariante = (variante: Variante) => {
        setVarianteSeleccionada(variante);
    };

    return (
        <div className=" w-72 rounded-lg shadow-md bg-gray-100 lg:w-full m-auto 2xl:w-72">
            <h3 className="text-center font-semibold mb-4">Variantes</h3>
            <div className="flex justify-center">
                {variantes.map((variante) => (
                    <div
                        key={variante.id}
                        onClick={() => manejarSeleccionVariante(variante)}
                        className={`cursor-pointer m-1 rounded-lg ${varianteSeleccionada?.id === variante.id ? 'ring-2 ring-ColorTextGrey' : 'hover:ring-2 hover:ring-gray-400'}`}
                    >
                        <img src={variante.imagen} alt={variante.nombre} className="w-20 h-20 object-cover rounded-xl" />
                    </div>
                ))}
            </div>
            {varianteSeleccionada && (
                <div className="mt-4 text-center">
                    <p className="font-semibold">Variante seleccionada:</p>
                    <p>{varianteSeleccionada.nombre}</p>
                </div>
            )}
        </div>
    );
};


