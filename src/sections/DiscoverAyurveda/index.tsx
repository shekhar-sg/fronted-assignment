"use client";
import { DiscoverAyurvedaSectionData } from "@/constants";
import { Box, Stack } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import Yoga from "@/sections/DiscoverAyurveda/icons/yoga";
import Card2 from "@/sections/DiscoverAyurveda/card-2";

const { heading, description, cards } = DiscoverAyurvedaSectionData;
const DiscoverAyurveda = () => {
  return (
    <SectionWrapper
      titleUnderlined
      Title={heading}
      Description={description}
      DescriptionTypographyProps={{
        sx: {
          maxWidth: 670,
          mx: "auto",
          mb: 5,
        },
      }}
      sx={{
        py: "60px",
      }}
    >
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          columnGap: 2,
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Stack
          sx={{
            width: {
              xs: 1,
              lg: 0.3,
            },
            gap: {
              xs: 2,
              lg: 9,
            },
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            flexWrap: "wrap",
          }}
        >
          {cards.slice(0, 3).map((card, index) => {
            return (
              <Card2
                data={card}
                key={card.title}
                sx={{
                  flexDirection: {
                    xs: "column",
                    lg: index < 3 ? "row-reverse" : "row",
                  },
                  textAlign: {
                    xs: "center",
                    lg: index < 3 ? "right" : "left",
                  },
                  marginLeft:
                    index % 2
                      ? 0
                      : {
                          xs: 0,
                          lg: 6,
                        },
                }}
              />
            );
          })}
        </Stack>
        <Box
          sx={{
            width: 0.4,
            maxWidth: 505,
            aspectRatio: 1,
            order: {
              xs: -1,
              lg: 0,
            },
          }}
        >
          <Yoga
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Stack
          sx={{
            width: {
              xs: 1,
              lg: 0.3,
            },
            gap: {
              xs: 2,
              lg: 9,
            },
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            flexWrap: "wrap",
          }}
        >
          {cards.slice(3).map((card, index) => {
            return (
              <Card2
                data={card}
                key={card.title}
                sx={{
                  marginLeft:
                    index % 2
                      ? 0
                      : {
                          xs: 0,
                          lg: -6,
                        },
                  flexDirection: {
                    xs: "column",
                    lg: "row",
                  },
                  textAlign: {
                    xs: "center",
                    lg: "initial",
                  },
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default DiscoverAyurveda;
