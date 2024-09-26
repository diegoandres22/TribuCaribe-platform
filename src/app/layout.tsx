import "./globals.css";
import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "@/redux/providers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <body>
        <Providers>
          <NextUIProvider>{children}</NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
