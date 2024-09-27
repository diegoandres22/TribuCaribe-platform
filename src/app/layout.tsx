import "./globals.css";
import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "@/redux/providers";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeviceDetector from "@/components/logicsFuntions/DeviceDetectorActions";

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
      <Head>
        {/* Meta etiqueta para evitar el zoom en dispositivos móviles */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body>
        <Providers>
          <DeviceDetector></DeviceDetector>
          <NextUIProvider>{children}</NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
