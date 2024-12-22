import React from 'react';
import {Box, Grid2, Stack, Typography} from "@mui/material";
import ContentWrapper from "@/components/content-wrapper";
import {Section_5_Data} from "@/constants";
import Card5 from "@/sections/section-5/card-5";

const {heading, description, cards} = Section_5_Data;

const Section_5 = () => {
    return (
        <Box component={"section"}
             sx={{
                 padding: 6,
             }}
        >
            <ContentWrapper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    gap: 8
                }}
            >
                <Stack
                    sx={{
                        width: "65%",
                        mx: "auto",
                        gap: 5
                    }}
                >
                    <Typography variant={"h2"}>&nbsp;&nbsp;{heading}&nbsp;&nbsp;</Typography>
                    <Typography variant={"subtitle2"}>{description}</Typography>
                </Stack>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    {
                        cards.map((cardData, index) => {
                            return (
                                <Card5 data={cardData} key={index}/>
                            )
                        })
                    }
                </Stack>
            </ContentWrapper>
        </Box>
    );
};

export default Section_5;