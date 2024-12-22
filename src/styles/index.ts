import {createTheme} from "@mui/material";
import typographyComponent from "@/styles/mui-custom-components/typography.component";
import {typography} from "@/styles/utils/typography";
import buttonComponent from "@/styles/mui-custom-components/button.component";

const materialTheme = createTheme({
    palette: {
        primary: {
            main: "#3A643B",
            light: "#C3D0C4",
            dark:"#3A643BA8",
        },
        warning: {
            main: "#951D1C",
        },
        secondary: {
            main: "#FFF7E2",
        },
        text: {
            primary: "#000000",
            secondary: "#FFFFFF",
        },
        action: {
            active: "#FF0000",
        },
        info: {
            main: "#ECE7FF"
        },
        grey: {
            100: "#F8F8F8",
            200: "#E0E0E0",
            300: "#C0C0C0",
            400: "#A0A0A0",
            500: "#808080",
            600: "#606060",
            700: "#404040",
            800: "#202020",
            900: "#101010",
        }
    },
    typography: typography,
    components: {
        MuiButton: buttonComponent,
        MuiTypography: typographyComponent
    },
})

export default materialTheme;