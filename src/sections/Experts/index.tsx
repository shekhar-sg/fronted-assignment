"use client";
import SectionWrapper from "@/components/section-wrapper";
import { IconButton, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertDetailCard from "./expert-detail-card";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronRight, East, West } from "@mui/icons-material";
import ExpertsSectionData from "@/data/Experts";
import LinkButton from "@/components/link-button";
import { useCallback, useState } from "react";
import type { Swiper as SwiperClass } from "swiper/types";

const { heading, cards, button } = ExpertsSectionData;

const Experts = () => {
  const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined);

  const handleTransition = useCallback(
    (direction: "next" | "prev") => {
      if (swiper) {
        swiper[direction === "next" ? "slideNext" : "slidePrev"]();
      }
    },
    [swiper],
  );

  return (
    <SectionWrapper
      Title={heading}
      titleUnderlined
      sx={{
        py: {
          xs: 10,
          md: 7,
        },
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          columnGap: 6.25,
          button: {
            display: {
              xs: "none",
              lg: "flex",
            },
            alignItems: "center",
            mt: "15%",
            width: 70,
            height: 70,
            border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            borderRadius: 100,
            color: "grey.200",
          },
        }}
      >
        <IconButton
          centerRipple={false}
          color={"primary"}
          onClick={() => handleTransition("prev")}
        >
          <West />
        </IconButton>
        <Stack
          component={Swiper}
          onInit={(swiper) => setSwiper(swiper)}
          sx={{
            pb: 6.75,
            width: 1,
            maxWidth: 295 * 3 + 48 * 2,
            overflow: { xs: "visible", lg: "hidden" },
            "& .swiper-wrapper": {
              "& .swiper-slide": {
                width: "auto",
                mr: 6,
                "&:last-of-type": {
                  mr: 0,
                },
              },
            },
          }}
          slidesPerView={"auto"}
          loop
          autoplay
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {cards.map((cardData, index) => {
            return (
              <SwiperSlide key={index}>
                <ExpertDetailCard data={cardData} />
              </SwiperSlide>
            );
          })}
        </Stack>
        <IconButton
          centerRipple={false}
          color={"primary"}
          onClick={() => handleTransition("next")}
        >
          <East />
        </IconButton>
      </Stack>
      <LinkButton
        variant={"outlined"}
        sx={{
          gap: 2,
          fontSize: "24px !important",
          display: {
            xs: "none",
            md: "inline-flex",
          },
        }}
        {...button}
      >
        {button.title}
        <ChevronRight fontSize={"large"} />
      </LinkButton>
    </SectionWrapper>
  );
};

export default Experts;
