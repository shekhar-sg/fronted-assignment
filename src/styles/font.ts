import localFont from "next/font/local";

import { DM_Sans, Inter, Nunito } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
});
export const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});
export const dm_sans = DM_Sans({
  preload: true,
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
});

export const dinPro = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "./fonts/DIN Pro 400.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/DIN Pro Medium 500.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/DIN Pro Bold 700.otf",
      style: "normal",
      weight: "700",
    },
  ],
});

export const nexa = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "./fonts/Nexa Light.otf",
      style: "normal",
      weight: "200",
    },
  ],
});

export const gothamRounded = localFont({
  display: "swap",
  preload: true,
  src: [
    {
      path: "./fonts/Gotham Rounded Book.otf",
      style: "normal",
      weight: "350",
    },
  ],
});
