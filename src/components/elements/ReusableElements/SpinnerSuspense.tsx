import { Spinner } from '@nextui-org/react'
import React from 'react'

export const SpinnerSuspense = () => {
    return (
        <div className='w-[100vw] h-[100vh] absolute z-50 text-center bg-black/15'>
            <Spinner color="secondary" size="lg" className='mt-[50vh] ' />
        </div>
    )
}
