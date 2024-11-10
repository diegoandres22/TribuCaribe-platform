import React, { Suspense } from 'react'
import { SearchScreen } from '@/components/screens'

export default function page() {
    return (
        <Suspense fallback={<div style={{ color: 'blue', fontSize: '20px' }}>Cargando...</div>} >
            <SearchScreen />
        </Suspense>
    )
}
