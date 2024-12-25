import { createTheme } from "@mui/material";
import ButtonComponent from "./mui-components-configs/button.component";
import CssBaseline from "./mui-components-configs/cssbaseline.component";
import TypographyComponent from "./mui-components-configs/typography.component";
import { typography } from "@/styles/utils/typography";
import { breakpoints } from "@/styles/utils/breakpoint";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: "#3A643B",
      light: "#C3D0C4",
      "50": "#ECFEE7",
      "100": "#DBE3DC",
    },
    secondary: {
      main: "#FFF7E2",
      dark: "#FFF1CF",
    },
    warning: {
      main: "#951D1C",
      light: "#EEDE4D",
    },
    background: {
      paper: "#FFF7E2",
      default: "#FFFFFF",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
    action: {
      active: "#FF0000",
    },
    info: {
      main: "#ECE7FF",
    },
    grey: {
      50: "#E9E9E9",
      100: "#C9C9C9",
      200: "#838383",
      300: "#666666",
      400: "#515151",
      500: "#555555",
      600: "#414141",
      700: "#323232",
      800: "#2E2E2E",
      A100:"#BCBCBC"
    },
  },
  typography: typography,
  components: {
    MuiCssBaseline: CssBaseline,
    MuiButton: ButtonComponent,
    MuiTypography: TypographyComponent,
  },
  breakpoints: breakpoints,
});

export default materialTheme;
