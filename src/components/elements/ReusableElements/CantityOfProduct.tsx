'use client'
import { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { FaPlus, FaMinus } from "react-icons/fa";
interface QuantityInputProps {
    max: number;
}

export const CantityOfProduct: React.FC<QuantityInputProps> = ({ max }) => {
    const [value, setValue] = useState<number>(1);

    const handleIncrement = () => {
        if (value < max) {
            setValue(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= max) {
            setValue(newValue);
        }
    };

    return (
        <div className="flex items-center justify-center w-full my-4">

            <Button isIconOnly color="secondary" variant="faded" onClick={handleDecrement}>
                <FaMinus />
            </Button>
            <Input
                type="number"
                value={value.toString()}
                onChange={handleInputChange}
                min={1}
                max={max}
                aria-label="Cantidad"
                width="70px"
                className="mx-2 max-w-[100px] "
            />

            <Button isIconOnly color="secondary" variant="faded" onClick={handleIncrement}>
                <FaPlus />
            </Button>
        </div>
    );
};
