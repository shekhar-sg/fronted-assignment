import { Components, Theme } from "@mui/material";

const ButtonComponent: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => {
      return theme.unstable_sx({
        borderRadius: {
          xs: 1.25,
          md: 2,
        },
        fontSize: 20,
        fontWeight: 500,
        padding: "17.5px 40px",
      });
    },
  },
};

export default ButtonComponent;
