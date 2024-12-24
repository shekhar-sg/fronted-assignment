import React from "react";
import { Grid2 } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import { AyurvedicConsultationsSectionData } from "@/constants";
import Card3 from "@/sections/ayurvedic-consultations/card-3";

const AyurvedicConsultation = () => {
  const { heading, cards } = AyurvedicConsultationsSectionData;
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          bgcolor: "background.paper",
        },
      }}
      Title={heading}
      titleUnderlined
      sx={{
        pt: {
          xs: 7.5,
          md: 10,
        },
        pb: {
          xs: 10,
          md: 12.5,
        },
      }}
    >
      <Grid2 container spacing={2} alignItems={"center"}>
        {cards.map((cardData, index) => {
          return (
            <Grid2 key={index} size={cardData.size} order={index}>
              <Card3
                data={cardData}
                sx={{
                  textAlign: index === 0 ? "center" : "start",
                }}
              />
            </Grid2>
          );
        })}
      </Grid2>
    </SectionWrapper>
  );
};

export default AyurvedicConsultation;
