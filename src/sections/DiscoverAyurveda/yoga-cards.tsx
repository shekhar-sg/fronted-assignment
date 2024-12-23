"use client";
import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { DiscoverAyurvedaSectionData } from "@/constants";
import { sxToArray } from "@/styles/utils";

interface YogaCardsProps extends Omit<BoxProps, "children"> {
  data: (typeof DiscoverAyurvedaSectionData.cards)[number];
}

const YogaCards = (props: YogaCardsProps) => {
  const { title, description, icon: Icon } = props.data;
  const { sx } = props;
  return (
    <Box
      sx={[
        {
          display: "flex",
          alignItems: "center",
          py: {
            xs: 2,
            lg: 0,
          },
          px: {
            xs: 2,
            md: 0,
          },
          width: 1,
          minWidth: {
            lg: 350,
          },
          height: 'auto',
          gap: 2,
          border: (theme) => ({
            xs: `1px solid ${theme.palette.grey[50]}`,
            md: "none",
          }),
          borderRadius: "12px",
        },
        ...sxToArray(sx),
      ]}
    >
      <Box
        sx={{
          height: {
            xs: 60,
            sm: 70,
            md: 100,
          },
        }}
      >
        <Icon
          style={{
            height: "inherit",
            width: "inherit",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Box>
      <Stack
        sx={{
          gap: 1,
        }}
      >
        <Typography variant={"body1"} fontWeight={700}>
          {title}
        </Typography>
        <Typography
          variant={"subtitle1"}
          sx={{
            color: "grey.500",
            fontWeight: {
              xs: 500,
              md: 400,
            },
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default YogaCards;
