import { Components, Theme } from "@mui/material";

const CssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: ({ unstable_sx, palette }) => {
    return unstable_sx({
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      ":root": {
        "--swiper-pagination-bullet-horizontal-gap": "15px",
        "--swiper-pagination-color": palette.primary.main,
        "--swiper-pagination-bullet-size": "12px",
      },
      ".swiper-pagination": {
        height: "var(--swiper-pagination-bullet-size)",
        minHeight: "var(--swiper-pagination-bullet-size)",
        mt: {
          xs: 7.5,
          md: 8,
        },
        position: "relative",
      },
    });
  },
};

export default CssBaseline;
