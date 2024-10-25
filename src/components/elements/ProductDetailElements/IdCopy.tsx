'use client'

import React from 'react';
import Link from "next/link";
import { MdContentCopy } from "react-icons/md";
import { Divider } from '@nextui-org/react';
import { IdCopyProps } from '@/types';
import { useSnackbar } from 'notistack';



export const IdCopy: React.FC<IdCopyProps> = ({ id }) => {

  const { enqueueSnackbar } = useSnackbar();

    const handleCopy = () => {

        navigator.clipboard.writeText(String(id))
            .then(() => {
                enqueueSnackbar('ID copiado', { variant: 'success' });
            })
            .catch(() => {
                enqueueSnackbar('Error al copiar el ID', { variant: 'error' });
            });
    };

    return (
        <div className='flex text-stone-700 items-center gap-2 h-6'>
            <p className='opacity-80'>Publicación # <strong>{id}</strong></p>
            <Divider className=' opacity-80' orientation="vertical" />
            <Link href={""} onClick={handleCopy}>
                <MdContentCopy />
            </Link>
        </div>
    );
};
