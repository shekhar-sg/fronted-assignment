import React from 'react';
import {Section_2_Data} from "@/constants";
import {Box, Stack, Typography} from "@mui/material";
import Card2 from "@/sections/section-2/card-2";
import {SittingPosition} from "@/icons";
import ContentWrapper from "@/components/content-wrapper";

const Section_2 = () => {
    const {heading, description, cards, centerIcon: CenterIcon} = Section_2_Data;

    return (
        <ContentWrapper
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
            }}
        >
            <Stack
                sx={{
                    width: "70%",
                    gap: 4,
                    textAlign: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant={"h2"}>&nbsp;&nbsp;&nbsp;&nbsp;{heading}&nbsp;&nbsp;</Typography>
                <Typography variant={"subtitle2"}
                            sx={{
                                width: "83%",
                                color: "grey.600",
                                wordSpacing: 2
                            }}>{description}
                </Typography>
            </Stack>
            <Stack
                sx={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%"
                }}
            >
                <Stack
                    sx={{
                        gap: 12,
                        flex: 1,
                    }}
                >
                    {
                        cards.slice(0, 3).map((card, index) => {
                            return (
                                <Card2 data={card} key={index}
                                       sx={{
                                           flexDirection: index < 3 ? "row-reverse" : "row",
                                           textAlign: index < 3 ? "right" : "left",
                                           marginLeft: index % 2 ? 0 : 6,
                                       }}
                                />
                            );
                        })
                    }
                </Stack>
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "fit-content",
                        },
                        order: {
                            xs: -1,
                            md: 0,
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        marginX:4
                    }}
                >
                    {CenterIcon && <CenterIcon/>}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: -20,
                            left: -4,
                        }}
                    >
                        <SittingPosition/>
                    </Box>
                </Box>
                <Stack
                    sx={{
                        gap: 12,
                        flex: 1,
                    }}
                >
                    {
                        cards.slice(3).map((card, index) => {
                            return (
                                <Card2 data={card} key={index}
                                       sx={{
                                           marginLeft: index % 2 ? 0 : -6,
                                       }}
                                />
                            );
                        })
                    }
                </Stack>
            </Stack>
        </ContentWrapper>
    );
};

export default Section_2;