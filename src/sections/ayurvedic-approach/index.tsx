"use client";
import SectionWrapper from "@/components/section-wrapper";
import { AyurvedicApproachSectionData } from "@/constants";
import ApproachCard from "@/sections/ayurvedic-approach/approach-card";
import { Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const { heading, description, cards } = AyurvedicApproachSectionData;
const AyurvedicApproach = () => {
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
      SectionProps={{
        sx: {
          padding: {
            xs: "45px 0",
            sm: "45px 0",
          },
        },
      }}
    >
      <Stack
        component={Swiper}
        sx={{
          "& .swiper-wrapper": {
            padding: {
              xs: 0,
              sm: 1,
            },
            marginBottom: {
              xs: 8,
              sm: 12,
            },
            "& .swiper-slide": {
              width: "fit-content",
            },
          },
          "& .swiper-pagination": {
            bottom: {
              xs: 0,
              sm: 25,
            },
          },
        }}
        slidesPerView={"auto"}
        spaceBetween={12}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
          600: {
            centeredSlides: true,
          },
          960: {
            centeredSlides: false,
          },
        }}
        pagination={{
          clickable: true,
        }}
      >
        {cards.map((cardData, index) => {
          return (
            <SwiperSlide key={index}>
              <ApproachCard data={cardData} />
            </SwiperSlide>
          );
        })}
      </Stack>
    </SectionWrapper>
  );
};

export default AyurvedicApproach;
