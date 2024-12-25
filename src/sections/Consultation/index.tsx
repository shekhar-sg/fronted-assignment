import React from "react";
import { Grid2 } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import ConsultationCard from "./consultation-card";
import ConsultationSectionData from "@/data/Consultation";

const { heading, cards } = ConsultationSectionData;
const Consultation = () => {
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
            <Grid2
              key={index}
              size={cardData.size}
              order={cardData.order}
              height={{
                xs: cardData.image ? 265 : "auto",
                sm: 200,
                lg: 285,
              }}
            >
              <ConsultationCard
                data={cardData}
                sx={{
                  textAlign: index === 0 ? "center" : "start",
                  color: index === 0 ? "primary.main" : undefined,
                }}
              />
            </Grid2>
          );
        })}
      </Grid2>
    </SectionWrapper>
  );
};

export default Consultation;
