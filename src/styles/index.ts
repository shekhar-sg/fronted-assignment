import { createTheme } from "@mui/material";
import TypographyComponent from "@/styles/mui-custom-components/typography.component";
import { typography } from "@/styles/utils/typography";
import ButtonComponent from "@/styles/mui-custom-components/button.component";
import { breakpoint } from "@/styles/utils/breakpoint";
import CssBaseline from "@/styles/mui-custom-components/cssbaseline.component";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: "#3A643B",
      light: "#C3D0C4",
      dark: "#3A643BA8",
    },
    warning: {
      main: "#951D1C",
    },
    secondary: {
      main: "#FFF7E2",
      dark: "#FFF1CF",
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
      // 100: "#F8F8F8",
      // 200: "#E0E0E0",
      // 200: "#A0A0A0",
      50: "#E9E9E9",
      100: "#C9C9C9",
      200: "#838383",
      300: "#666666",
      400: "#515151",
      500: "#555555",
      600: "#414141",
      700: "#323232",
      800: "#2E2E2E",
    },
  },
  typography: typography,
  components: {
    MuiCssBaseline: CssBaseline,
    MuiButton: ButtonComponent,
    MuiTypography: TypographyComponent,
  },
  breakpoints: breakpoint(),
});

export default materialTheme;
