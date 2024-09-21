import "./globals.css";
import type { Metadata } from "next";
import { NextUIProvider } from '@nextui-org/react';

export const metadata: Metadata = {
  title: "Tribu Caribe",
  description: "Compras venezolanas al alcance de un click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body >

        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
