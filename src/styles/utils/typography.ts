import {ThemeOptions} from "@mui/material";

import {Poppins} from "next/font/google"

const poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export const typography: ThemeOptions['typography'] = () => {
    return ({
        h1: {
            fontSize: 64,
        },
        h2: {
            fontSize: 48,
        },
        h3: {
            fontSize: 36,
        },
        h4: {
            fontSize: 32,
        },
        h5: {
            fontSize: 24,
        },
        h6: {
            fontSize: 28,
        },
        subtitle1: {
            fontSize: 24,
        },
        subtitle2: {
            fontSize: 20,
        },
        body1: {
            fontSize: 18,
        },
        body2: {
            fontSize: 16,
            lineHeight: "20px"
        },
        allVariants: {
            ...poppins.style
        }
    })
}