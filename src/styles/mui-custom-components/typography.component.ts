import {ThemeOptions} from "@mui/material";

const typographyComponent: NonNullable<ThemeOptions["components"]>["MuiTypography"] = {
    styleOverrides: {
        h1: ({theme}) => {
            return theme.unstable_sx({
                fontSize: {
                    xs: "h4.fontSize",
                    sm: "h3.fontSize",
                    md: "h2.fontSize",
                    lg: "h1.fontSize",
                },
                letterSpacing: 1,
                color: "text.secondary",
            })
        },
        h2: ({theme}) => {
            return theme.unstable_sx({
                fontSize: {
                    xs: "h3.fontSize",
                    md: "h2.fontSize",
                },
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "underline",
                textDecorationColor: theme.palette.primary.light,
                textDecorationThickness: 6,
            })
        },
        h3: ({theme}) => {
            return theme.unstable_sx({
                fontSize: {
                    xs: "h6.fontSize",
                    sm: "h5.fontSize",
                    md: "h4.fontSize",
                },
                letterSpacing: 1,
                color: "text.secondary",
            })
        },
        h4: ({theme}) => {
            return theme.unstable_sx({
                fontSize: {
                    xs: "h6.fontSize",
                    md: "h5.fontSize",
                },
                letterSpacing: 1,
                color: "text.secondary",
            })
        },
        h5: ({theme}) => {
            return theme.unstable_sx({
                fontSize: {
                    xs: "subtitle1.fontSize",
                    md: "h6.fontSize",
                },
                fontWeight: "bolder",
                color: "text.secondary",
            })
        },
        subtitle2: ({theme}) => {
            return theme.unstable_sx({
                fontSize: {
                    xs: "body1.fontSize",
                    md: "subtitle2.fontSize",
                },
                lineHeight: 1.4,
            })
        },
        body2: ({theme}) => {
            return theme.unstable_sx({
                fontSize: "subtitle2.fontsize",
                lineHeight: 1.2,
            })
        },
    },
};

export default typographyComponent;