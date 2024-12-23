import { Components, Theme } from "@mui/material";

const CssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: ({ unstable_sx }) => {
    return unstable_sx({
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
    });
  },
};

export default CssBaseline;
