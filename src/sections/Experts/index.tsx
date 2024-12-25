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
        px: {
          xs: 0,
          lg: 12.5,
        },
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
              lg: "block",
            },
            mt: "15%",
            width: 70,
            height: 70,
            border: (theme) => `1px solid ${theme.palette.grey.A100}`,
            borderRadius: 100,
            color: "grey.A100",
          },
        }}
      >
        <IconButton
          centerRipple={false}
          color={"primary"}
          sx={{
            display: "flex !important",
            alignItems: "center",
          }}
          onClick={() => handleTransition("prev")}
        >
          <West />
        </IconButton>
        <Stack
          component={Swiper}
          onInit={(swiper) => setSwiper(swiper)}
          sx={{
            pb: 6.75,
            "& .swiper-wrapper": {
              px: { xs: 3, lg: 0 },
              "& .swiper-slide": {
                width: "auto",
                mr: 7,
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
          sx={{
            display: "flex !important",
            alignItems: "center",
          }}
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
