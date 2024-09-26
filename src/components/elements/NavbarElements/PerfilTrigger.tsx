import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

export const PerfilTrigger: React.FC = () => {
  return (
    <div className="flex items-center aling-center justify-center w-16">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            color="secondary"
            as="button"
            className="transition-transform "
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="Mi cuenta">
            <Link href={"404"}>Mi cuenta</Link>
          </DropdownItem>
          <DropdownItem key="perfil">
            <Link href={"404"}>Perfil</Link>
          </DropdownItem>
          <DropdownItem key="creditos">
            <Link href={"404"}>Creditos</Link>
          </DropdownItem>
          <DropdownItem key="contrseña">
            <Link href={"404"}>Contraseña</Link>
          </DropdownItem>
          <DropdownItem key="favoritos">
            <Link href={"404"}>Favoritos</Link>
          </DropdownItem>
          <DropdownItem key="carrito">
            <Link href={"404"}>Carrito</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Cerrar sesion
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
