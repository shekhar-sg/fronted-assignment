import { ThemeOptions } from "@mui/material";
import { dinPro } from "@/styles/font";

export const typography: ThemeOptions["typography"] = () => {
  return {
    fontFamily: dinPro.style.fontFamily,
    h1: {
      fontSize: 64,
    },
    h2: {
      fontSize: 48,
    },
    h3: {
      fontSize: 36,
    },
    h4: {
      fontSize: 32,
    },
    h5: {
      fontSize: 28,
    },
    h6: {
      fontSize: 24,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 15,
    },
    caption: {
      fontSize: 14,
    },
  };
};
