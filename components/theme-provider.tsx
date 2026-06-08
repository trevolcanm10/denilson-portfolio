"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // E2: habilitar View Transitions API al alternar tema.
  // Cast: el tipado público de next-themes 0.4.6 no expone enableViewTransition.
  const extraProps = { enableViewTransition: true } as unknown as Record<string, unknown>;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...extraProps}
    >
      {children}
    </NextThemesProvider>
  );
}
