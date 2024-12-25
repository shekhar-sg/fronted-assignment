"use client";
import { Stack } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import ReviewCard from "./review-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CustomerStoriesSectionData from "@/data/CustomerStories";

const { heading, cards } = CustomerStoriesSectionData;

const CustomerStories = () => {
  return (
    <SectionWrapper
      Title={heading}
      TitleTypographyProps={{
        textTransform: "capitalize",
      }}
      titleUnderlined
      SectionProps={{
        bgcolor: "background.paper",
      }}
      sx={{
        overflow: "hidden",
        py: {
          xs: 8,
          md: 7,
        },
      }}
    >
      <Stack
        component={Swiper}
        sx={{
          overflow: "visible",
          "& .swiper-wrapper": {
            px: 1,
            "& .swiper-slide": {
              width: "auto",
              mr: { xs: 2, md: 4 },
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
        {cards.map((cardData, index) => {
          return (
            <SwiperSlide key={`${cardData.title}-${index}`}>
              <ReviewCard data={cardData} />
            </SwiperSlide>
          );
        })}
      </Stack>
    </SectionWrapper>
  );
};

export default CustomerStories;
