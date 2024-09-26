"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ButtonLoginOrRegister = () => {
  const pathname = usePathname();

  const isLogin = pathname === "/auth/login";
  const isRegister = pathname === "/auth/register";

  return (
    <div className="inline-flex">
      <Link href="/auth/login">
        <button
          className={`px-20 py-1 border-4 border-gray-300 ${
            isLogin ? "bg-white text-black z-10" : "bg-gray-300 text-white"
          } rounded-l-xl ${isLogin ? "shadow-md" : ""}`}
          style={{
            marginRight: isLogin ? "-2px" : "0",
          }}
        >
          Ingresar
        </button>
      </Link>
      <Link href="/auth/register">
        <button
          className={`px-20 py-1 border-4 border-gray-300 ${
            isRegister ? "bg-white text-black z-10" : "bg-gray-300 text-white"
          } rounded-r-xl ${isRegister ? "shadow-md" : ""}`}
          style={{
            marginLeft: isRegister ? "-2px" : "0",
          }}
        >
          Registrarse
        </button>
      </Link>
    </div>
  );
};
