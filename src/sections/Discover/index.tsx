"use client";
import { Stack, type Theme, useMediaQuery } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import YogaCards from "./yoga-cards";
import DiscoverSectionData from "@/data/Discover";
import Image from "next/image";

const { heading, description, image, cards } = DiscoverSectionData;
const Discover = () => {
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
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
          rowGap: 1,
          flexWrap: "nowrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            order: {
              xs: 1,
              lg: 0,
            },
            width: {
              xs: 1,
              lg: 0.3,
            },
            columnGap: 2.5,
            rowGap: {
              xs: 3,
              md: 0,
              lg: 9,
            },
            flexDirection: {
              xs: "row",
              md: "column",
            },
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
          {(isLg ? cards.slice(0, 3) : cards).map((card, index) => {
            return (
              <YogaCards
                data={card}
                key={card.title}
                sx={{
                  flexDirection: {
                    xs: "column",
                    md: index % 2 ? "row-reverse" : "row",
                    lg: index < 3 ? "row-reverse" : "row",
                  },
                  textAlign: {
                    xs: "center",
                    md: index % 2 ? "right" : "left",
                    lg: index < 3 ? "right" : "left",
                  },
                  width: {
                    xs: "calc((100% - 20px)/2)",
                    md: 0.55,
                  },
                  marginLeft: {
                    xs: 0,
                    md: index % 2 ? "auto" : 0,
                    lg: index % 2 ? 0 : 6,
                  },
                }}
              />
            );
          })}
        </Stack>
        <Stack
          sx={{
            width: {
              xs: "max(210px, 60%)",
              lg: 0.4,
            },
            maxWidth: 505,
            aspectRatio: 1,
            order: {
              xs: 0,
              lg: 1,
            },
          }}
        >
          <Image
            src={image}
            alt={heading}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Stack>
        {isLg && (
          <Stack
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              order: 2,
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
                <YogaCards
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
        )}
      </Stack>
    </SectionWrapper>
  );
};

export default Discover;
