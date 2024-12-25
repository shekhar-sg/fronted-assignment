"use client";
import SectionWrapper from "@/components/section-wrapper";
import StepCard from "./step-card";
import { Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ApproachSectionData from "@/data/Approach";

const { heading, description, cards } = ApproachSectionData;
const Approach = () => {
  return (
    <SectionWrapper
      Title={heading}
      TitleTypographyProps={{
        textTransform: "capitalize",
      }}
      titleUnderlined
      Description={description}
      DescriptionTypographyProps={{
        sx: {
          maxWidth: 720,
          mx: "auto",
          mb: 5,
        },
      }}
      sx={{
        py: {
          xs: 8,
          md: 12,
        },
      }}
    >
      <Stack
        component={Swiper}
        sx={{
          overflow: "visible",
          "& .swiper-wrapper": {
            "& .swiper-slide": {
              width: "auto",
              mr: { xs: 2, md: 3 },
              "&:last-of-type": {
                mr: 0,
              },
            },
          },
        }}
        slidesPerView={"auto"}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {cards.map((cardData) => {
          return (
            <SwiperSlide key={cardData.title}>
              <StepCard data={cardData} />
            </SwiperSlide>
          );
        })}
      </Stack>
    </SectionWrapper>
  );
};

export default Approach;
