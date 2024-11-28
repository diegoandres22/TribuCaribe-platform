
import React from "react";
import { ResultsAndOrderProps } from "@/types";
import { DropdownOrder } from "@/components/elements";
import ProductsView from "@/components/elements/SearchElements/ProductsView";



export const ResultsAndOrder: React.FC<ResultsAndOrderProps> = ({ searchType, slug }) => {


    return (
        <div className="w-full xl:px-8 flex flex-col items-center ">

            <div className="flex w-11/12 justify-between ">

                <div>

                    <h4>{"345"} resultados</h4>
                    <p>
                        {searchType === 1
                            ? `Buscando: ${slug}`
                            : searchType === 2
                                ? `Categoría: ${slug}`
                                : "No se ha realizado una búsqueda."}
                    </p>
                </div>


                <DropdownOrder />
            </div>
            <ProductsView></ProductsView>
        </div>
    );
};

