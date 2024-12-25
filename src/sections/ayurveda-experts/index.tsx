"use client";
import SectionWrapper from "@/components/section-wrapper";
import { Button, IconButton, Stack, SxProps, Theme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { AyurvedaExpertsSectionData } from "@/constants";
import ExpertDetailCard, {
  ExpertDetailCardProps,
} from "@/sections/ayurveda-experts/expert-detail-card";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronRight, East, West } from "@mui/icons-material";

const { heading, cards, sectionButton } = AyurvedaExpertsSectionData;
const repeatedCards: ExpertDetailCardProps["data"][] = Array(5).fill(cards[0]);

const AyurvedaExperts = () => {
  return (
    <SectionWrapper
      Title={heading}
      titleUnderlined
      SectionProps={{
        sx: {
          padding: "45px 0",
        },
      }}
    >
      <Stack
        component={Swiper}
        sx={swiperSx}
        slidesPerView={"auto"}
        spaceBetween={16}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
          prevEl: ".prev-button",
          nextEl: ".next-button",
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
            spaceBetween: 48,
            centeredSlides: false,
          },
        }}
      >
        {repeatedCards.map((cardData, index) => {
          return (
            <SwiperSlide key={index}>
              <ExpertDetailCard data={cardData} />
            </SwiperSlide>
          );
        })}
        <IconButton className={"prev-button"} disableRipple>
          <West
            sx={{
              color: "#BCBCBC",
            }}
          />
        </IconButton>
        <IconButton size={"large"} className={"next-button"} disableRipple>
          <East
            sx={{
              color: "#BCBCBC",
            }}
          />
        </IconButton>
      </Stack>
      <Button
        variant={"outlined"}
        sx={{
          border: "1px solid #3A643B",
          gap: 2,
          borderRadius: 1,
          textTransform: "none",
          fontSize: "24px !important",
          display: {
            xs: "none",
            md: "inline-flex",
          },
          mt: 3,
          bgcolor: "#C5E5C963",
        }}
      >
        {sectionButton}
        <ChevronRight fontSize={"large"} />
      </Button>
    </SectionWrapper>
  );
};

export default AyurvedaExperts;

const swiperSx: SxProps<Theme> = () => {
  return {
    maxWidth: 990,
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingBottom: "30px",
    width: 1,

    "& .swiper-wrapper": {
      padding: {
        xs: 0,
        sm: 2,
      },
      marginBottom: {
        xs: 4,
        sm: 6,
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

    ".prev-button,.next-button": {
      zIndex: 9,
      borderRadius: 99,
      position: "absolute",
      border: "1px solid #BCBCBC",
      width: 70,
      height: 70,
      transition: "all 0.5s linear",
      top: "30%",
    },
    ".prev-button": {
      left: "0",
      transform: "translateX(-200%)",
      "&.swiper-button-disabled": {
        transform: "translateX(-200%) !important",
      },
    },
    ".next-button": {
      right: "0",
      transform: "translateX(200%)",
      "&.swiper-button-disabled": {
        transform: "translateX(200%) !important",
      },
    },
    "&:hover": {
      ".next-button, .prev-button": {
        transform: "translateX(0)",
      },
    },
  };
};
