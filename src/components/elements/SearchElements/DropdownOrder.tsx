'use client'


import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const DropdownOrder = () => {

    const [selectedOrder, setSelectedOrder] = useState<string>("");

    const handleSelection = (key: string | number) => {
        setSelectedOrder(key.toString());
    };
    const renderIcon = () => {
        if (selectedOrder === "priceUp") {
            return (
                <span className="flex items-center gap-1">
                    <p className="hidden sm:flex ">Mayor a menor</p>
                    <FaArrowDownWideShort className="text-xl" />
                </span>
            );
        } else if (selectedOrder === "priceDown") {
            return (
                <span className="flex items-center gap-1">
                    <p className="hidden sm:flex ">Menor a mayor</p>
                    <FaArrowDownShortWide className="text-xl" />
                </span>
            );
        }
        return (
            <span className="flex items-center gap-1">
                Ordenar <MdOutlineKeyboardArrowDown className="text-xl" />
            </span>
        );
    };

    return (
        <Dropdown >
            <DropdownTrigger>
                <Link color="foreground" className="cursor-pointer flex items-center">
                    {renderIcon()}
                </Link>
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Ordenar productos"
                variant="flat"
                onAction={(key) => handleSelection(key)}
            >
                <DropdownItem key="priceUp">Mayor precio</DropdownItem>
                <DropdownItem key="priceDown">Menor precio</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
