import { ReactNode } from "react";
import ThemeRegistry from "@/styles/theme-registry";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <Box component={"body"}>{children}</Box>
      </ThemeRegistry>
    </html>
  );
}
