import {ThemeOptions} from "@mui/material";

const buttonComponent: NonNullable<ThemeOptions["components"]>["MuiButton"] = {
    variants: [
        {
            props: {variant: "contained"},
            style: {
                width: "fit-content",
                background: "#3A643B",
                color: "#FFFFFF",
                textTransform: "capitalize",
                padding: "20px 40px",
                borderRadius: "16px",
                fontSize: 20,
            }
        }
    ]
}

export default buttonComponent;