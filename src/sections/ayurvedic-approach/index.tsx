import React from "react";
import { Stack } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import { AyurvedicApproachSectionData } from "@/constants";
import Card5 from "@/sections/ayurvedic-approach/card-5";

const { heading, description, cards } = AyurvedicApproachSectionData;

const AyurvedicApproach = () => {
  return (
    <SectionWrapper Title={heading} Description={description}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {cards.map((cardData, index) => {
          return <Card5 data={cardData} key={index} />;
        })}
      </Stack>
    </SectionWrapper>
  );
};

export default AyurvedicApproach;
