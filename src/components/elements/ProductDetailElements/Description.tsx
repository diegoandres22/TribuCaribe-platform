import React from 'react'
import { DescriptionProps } from '@/types'

export const Description: React.FC<DescriptionProps> = ({ text }) => {
    return (
        <div className='p-8 lg:pr-12'>
            <h4 className='text-2xl '>Descripción </h4>
            {text}
        </div>
    )
}
