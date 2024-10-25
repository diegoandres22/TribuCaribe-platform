"use client";

import React from "react";
import { SnackbarProvider } from "notistack";

interface ClientNotistackProps {
  children: React.ReactNode;
}

export const ClientNotistack: React.FC<ClientNotistackProps> = ({
  children,
}) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
