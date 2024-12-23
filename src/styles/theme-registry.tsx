"use client";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import materialTheme from "@/styles/index";

interface ThemeRegistryProps {
  children: ReactNode;
}

const ThemeRegistry = (props: ThemeRegistryProps) => {
  const { children } = props;
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeRegistry;
