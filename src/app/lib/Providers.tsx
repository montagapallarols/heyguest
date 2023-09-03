"use client";

import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { theme } from "@/styles/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
