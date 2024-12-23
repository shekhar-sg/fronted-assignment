import { ThemeOptions } from "@mui/material";

export const breakpoint = (): ThemeOptions["breakpoints"] => ({
  values: {
    xs: 0,
    mobile: 362,
    sm: 560,
    md: 808,
    lg: 1288,
    xl: 1536,
  },
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
  }
}
