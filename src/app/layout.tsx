import { ReactNode } from "react";
import ThemeRegistry from "@/styles/theme-registry";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { Box } from "@mui/material";
import AppHeader from "@/components/layout/app-header";
import Footer from "@/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <Box component={"body"}>
          <AppHeader />
          {children}
          <Footer />
        </Box>
      </ThemeRegistry>
    </html>
  );
}
