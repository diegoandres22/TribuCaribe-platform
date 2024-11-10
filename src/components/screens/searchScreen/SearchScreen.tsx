'use client'

import React from 'react';
import { ResultsAndOrder } from "@/components/sections";
import { useSearchParams } from 'next/navigation';

export const SearchScreen = () => {

    const searchParams = useSearchParams();

    const slugQuery = searchParams.get("query");
    const slugCategory = searchParams.get("category");

    let searchType: number | null = null;
    let slug: string = "";

    if (slugQuery?.length) {
        slug = slugQuery;
        searchType = 1;
    } else if (slugCategory?.length) {
        slug = slugCategory;
        searchType = 2;
    }

    return (
        <div className='mt-40 w-full flex flex-col items-center'>
            <ResultsAndOrder searchType={searchType} slug={slug as string} />
        </div>
    );
};