"use client";
import { Stack } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import { CustomerStoriesSectionData } from "@/constants";
import { CardItem6 } from "@/types";
import ReviewCard from "@/sections/customers-review/review-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const { heading, cards } = CustomerStoriesSectionData;
const repeatedCards: CardItem6[] = Array(5).fill(cards[0]);

const CustomersReview = () => {
  return (
    <SectionWrapper
      Title={heading}
      TitleTypographyProps={{
        textTransform: "capitalize",
      }}
      titleUnderlined
      SectionProps={{
        sx: {
          bgcolor: "background.paper",
          padding: "45px 0",
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
            display: "flex",
            flexDirection: "row",
            gap: 3.75,
            justifyContent: "center",
            "& .swiper-pagination-bullet": {
              height: 12,
              width: 12,
            },
            "& .swiper-pagination-bullet-active": {
              bgcolor: "primary.main",
            },
          },
        }}
        slidesPerView={"auto"}
        spaceBetween={16}
        centeredSlides={true}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
          600: {
            centeredSlides: true,
            spaceBetween: 32,
          },
          960: {
            spaceBetween: 32,
            centeredSlides: false,
          },
        }}
      >
        {repeatedCards.map((cardData, index) => {
          return (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <ReviewCard data={cardData} />
            </SwiperSlide>
          );
        })}
      </Stack>
    </SectionWrapper>
  );
};

export default CustomersReview;
