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
      primary: "#474747",
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
      200: "#BCBCBC",
      300: "#838383",
      400: "#474747",
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
