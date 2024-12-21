import {Box, Button, Typography} from "@mui/material";
import ContentWrapper from "@/components/content-wrapper";
import {Section_4_Data} from "@/constants";

const Section_4 = () => {
    const {heading, button, backgroundImage, backgroundMask} = Section_4_Data;
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 1,
                position: "relative",
                "&:after": {
                    content: "''",
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -2,
                    backgroundRepeat: "no-repeat",
                },
                "&:before": {
                    content: "''",
                    position: "absolute",
                    inset: 0,
                    background: backgroundMask,
                    zIndex: -1,
                },
                minHeight: 590,
            }}
        >
            <ContentWrapper>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: 10,
                        gap: 6,
                        width: "90%",
                        marginX: "auto",
                    }}
                >
                    <Typography variant={"h1"} color={"secondary"} fontWeight={500}>{heading}</Typography>
                    <Button variant={"contained"} size={"large"} color={"primary"}>{button}</Button>
                </Box>
            </ContentWrapper>
        </Box>
    );
};

export default Section_4;