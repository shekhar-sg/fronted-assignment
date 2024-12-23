import { Components, Theme } from "@mui/material";

const ButtonComponent: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => {
      return theme.unstable_sx({
        borderRadius: {
          xs: 2.5,
          md: 4,
        },
        fontSize: {
          xs: "caption.fontSize",
          sm: "subtitle1.fontSize",
          md: "body1.fontSize",
        },
        fontWeight: 500,
        lineHeight:1,
        padding: {
          xs: "17px 28px",
          sm: "17px 34px",
          md: "25px 40px",
        },
      });
    },
  },
};

export default ButtonComponent;
