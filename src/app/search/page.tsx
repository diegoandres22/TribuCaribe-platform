import React, { Suspense } from 'react'
import { SearchScreen } from '@/components/screens'
import { SpinnerSuspense } from '@/components/elements/'

export default function page() {
    return (
        <Suspense fallback={<SpinnerSuspense/>} >
            <SearchScreen />
        </Suspense>

    )
}
