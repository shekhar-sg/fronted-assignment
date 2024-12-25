import { alpha, Components, Theme } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

const ButtonComponent: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => {
      return theme.unstable_sx({
        textTransform: "none",
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
        lineHeight: 1,
        padding: {
          xs: "17px 28px",
          sm: "17px 34px",
          md: "25px 40px",
        },
      });
    },
    outlined: ({ theme }) => {
      return theme.unstable_sx({
        bgcolor: alpha(<string>(theme.palette.primary as ColorPartial)[100], 0.4),
        borderRadius: {
          xs: 2,
          md: 2,
        },
        padding: {
          xs: "14px 26px",
          sm: "14px 20px",
          md: "18px 24px",
        },


      });
    },
  },
};

export default ButtonComponent;
