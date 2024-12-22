import React from 'react';
import {Box, Grid2, Typography} from "@mui/material";
import ContentWrapper from "@/components/content-wrapper";
import {Section_3_Data} from "@/constants";
import Card3 from "@/sections/section-3/card-3";

const Section_3 = () => {
    const {heading, cards} = Section_3_Data;
    return (
        <Box
            sx={{
                bgcolor: "secondary.main",
                paddingY: 4
            }}
        >
            <ContentWrapper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                }}
            >
                <Typography variant={"h2"} textAlign={"center"}>&nbsp;&nbsp;{heading}&nbsp;&nbsp;</Typography>
                <Grid2 container spacing={2}>
                    {
                        cards.map((cardData, index) => {
                            return (
                                <Grid2 key={index} size={cardData.size}>
                                    <Card3 data={cardData} index={index}/>
                                </Grid2>
                            )
                        })
                    }
                </Grid2>
            </ContentWrapper>
        </Box>
    );
};

export default Section_3;