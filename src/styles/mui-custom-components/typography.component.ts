import { Components, Theme } from "@mui/material";
import { DinProFont } from "@/styles/font";

const TypographyComponent: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    h1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "h4.fontSize",
          sm: "h3.fontSize",
          md: "h2.fontSize",
          lg: "h1.fontSize",
        },
      });
    },
    h2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "h4.fontSize",
          md: "h3.fontSize",
          lg: "h2.fontSize",
        },
        fontWeight: 700,
      });
    },
    h3: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "h4.fontSize",
          md: "h3.fontSize",
        },
        letterSpacing: 1,
      });
    },
    h4: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "h5.fontSize",
          md: "h4.fontSize",
        },
        letterSpacing: 1,
        fontWeight: 800,
      });
    },
    h5: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "body1.fontSize",
          mobile: "subtitle2.fontSize",
          sm: "subtitle1.fontSize",
          md: "h6.fontsize",
          lg: "h5.fontSize",
        },
      });
    },
    subtitle1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "caption.fontSize",
          mobile: "body1.fontSize",
          sm: "subtitle2.fontSize",
          md: "subtitle1.fontSize",
        },
      });
    },
    subtitle2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "body2.fontSize",
          sm: "body1.fontSize",
          md: "subtitle1.fontSize",
        },
      });
    },
    body1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "caption.fontSize",
          sm: "body2.fontSize",
          md: "body1.fontSize",
        },
        lineHeight: 1.4,
        color: "grey.700",
      });
    },
    body2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: "body2.fontsize",
        lineHeight: 1.2,
      });
    },
  },
  variants: [
    {
      props: { className: "hero-section-text-large" },
      style: ({ theme }) =>
        theme.unstable_sx({
          fontSize: {
            xs: "h6.fontSize",
            mobile: "h5.fontSize",
            sm: "h4.fontSize",
            md: "h3.fontSize",
            lg: "h2.fontSize",
          },
          fontWeight: 700,
        }),
    },
  ],
};

export default TypographyComponent;
