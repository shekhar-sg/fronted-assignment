import { Components, Theme } from "@mui/material";

const TypographyComponent: Components<Theme>["MuiTypography"] = {
  defaultProps: {
    variant: "inherit",
  },
  styleOverrides: {
    root: ({ theme }) => {
      return theme.unstable_sx({
        lineHeight: 1.5,
      });
    },
    h1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "h4.fontSize",
          sm: "h2.fontSize",
          md: "h1.fontSize",
        },
        fontWeight: 700,
      });
    },
    h2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "h6.fontSize",
          sm: "h4.fontSize",
          md: "h2.fontSize",
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
      });
    },
    h4: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs:"body1.fontSize",
          sm: "h5.fontSize",
          md: "h4.fontSize",
        },
      });
    },
    h5: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "subtitle1.fontSize",
          sm: "body1.fontSize",
          md: "h5.fontSize",
        },
      });
    },
    h6: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "body1.fontSize",
          sm: "h6.fontSize",
        },
      });
    },
    body1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "caption.fontSize",
          sm: "subtitle1.fontSize",
          md: "body1.fontSize",
        },
      });
    },
    body2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "subtitle1.fontSize",
          sm: "body2.fontSize",
        },
      });
    },
    subtitle1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "caption.fontSize",
          sm: "subtitle2.fontSize",
          md: "subtitle1.fontSize",
        },
      });
    },
    subtitle2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: {
          xs: "caption.fontSize",
          sm: "subtitle2.fontSize",
        },
      });
    },
  },
};

export default TypographyComponent;
