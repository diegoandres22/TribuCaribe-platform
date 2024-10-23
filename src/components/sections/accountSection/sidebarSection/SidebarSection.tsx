"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarSection: React.FC = () => {
  const pathname = usePathname();
  const menus = [
    { name: "Perfil", link: "/account/profile", icon: AiOutlineUser },
    { name: "Compras", link: "/404", icon: AiOutlineShopping },
    {
      name: "Preferencias",
      link: "/404",
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "Carrito", link: "/404", icon: FiShoppingCart },
    { name: "Favoritos", link: "/404", icon: AiOutlineHeart, margin: true },
    { name: "Contraseña", link: "/404", icon: MdLockOutline },
  ];
  const [open, setOpen] = useState(true);
  return pathname.includes("account") ? (
    <section className="flex gap-6 z-50">
      <div
        className={`bg-white min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-[#9E00FF] px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#9d00ffa8] hover:text-white rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-[#9E00FF] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};
