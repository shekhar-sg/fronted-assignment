import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import { CustomerStoriesSectionData } from "@/constants";
import { CardItem6 } from "@/types";
import Card6 from "@/sections/CustomerStories/card-6";

const { heading, cards } = CustomerStoriesSectionData;
const repeatedCards: CardItem6[] = Array(9).fill(cards[0]);

const Section_6 = () => {
  return (
    <Box
      component={"section"}
      sx={{
        bgcolor: "secondary.main",
        padding: 6,
      }}
    >
      <SectionWrapper
        sx={{
          display: "flex",
        }}
      >
        <Typography>{heading}</Typography>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            mx: "auto",
          }}
        >
          {repeatedCards.map((cardData, index) => {
            return <Card6 key={index} data={cardData} />;
          })}
        </Stack>
      </SectionWrapper>
    </Box>
  );
};

export default Section_6;
