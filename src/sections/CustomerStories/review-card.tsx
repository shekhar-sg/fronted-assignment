import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  cardHeaderClasses,
  CardProps,
  Rating,
  ratingClasses,
  Typography,
} from "@mui/material";
import { sxToArray } from "@/styles/utils";
import { dm_sans, nexa, nunito } from "@/styles/font";
import CustomerStoriesSectionData from "@/data/CustomerStories";

interface ReviewCardProps extends Omit<CardProps, "children"> {
  data: (typeof CustomerStoriesSectionData)["cards"][0];
}

const ReviewCard = (props: ReviewCardProps) => {
  const { data, sx, ...restCardProps } = props;
  const {
    title,
    details: { name, date, location },
    review: { rating, service, comment },
  } = data;
  const isSkin = title.toLowerCase().includes("skin");
  return (
    <Card
      sx={[
        {
          height: 371,
          width: {
            xs: 304,
            sm: 388,
          },
          borderRadius: 5,
          bgcolor: "background.default",
          boxShadow: "0px 4px 17.1px 0px #00000021",
        },
        ...sxToArray(sx),
      ]}
      {...restCardProps}
    >
      <Box
        sx={{
          py: 2,
          px: 3,
          bgcolor: isSkin ? "info.main" : "primary.50",
          textAlign: "start",
          mb: 3.75,
        }}
      >
        <Typography {...nunito.style} variant={"body2"} fontWeight={700}>
          {title}
        </Typography>
      </Box>
      <CardHeader
        sx={{
          ...nexa.style,
          textAlign: "start",
          px: 3,
          py: 0,
          [`& .${cardHeaderClasses.action}`]: {
            m: 0,
            mt: 0.5,
          },
          [`& .${cardHeaderClasses.avatar}`]: {
            mr: 1.5,
          },
        }}
        avatar={
          <Avatar
            sx={{
              "--size": {
                xs: "50px",
                sm: "60px",
              },
              width: "var(--size)",
              height: "var(--size)",
            }}
          />
        }
        title={name}
        titleTypographyProps={{
          color: "textPrimary",
          fontWeight: 500,
          fontSize: { xs: 16, sm: 20 },
          display: "block",
        }}
        subheader={location}
        subheaderTypographyProps={{
          color: "textPrimary",
          fontSize: { xs: 15, sm: 18 },
          textAlign: "start",
          ...nexa.style,
        }}
        action={
          <Typography fontSize={{ xs: 12, sm: 16 }} {...nexa.style}>
            {date}
          </Typography>
        }
      />
      <CardContent
        sx={{
          padding: {
            xs: "28px 16px",
            sm: "20px 24px",
          },
          textAlign: "start",
          ...dm_sans.style,
        }}
      >
        <Rating
          name={"customer-rating"}
          readOnly
          value={rating}
          precision={0.5}
          size={"large"}
          sx={{
            [`&.${ratingClasses.root}`]: {
              color: (theme) => theme.palette.warning.light,
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "inherit",
            fontWeight: 700,
            fontSize: {
              xs: 20,
              sm: 22,
            },
            mb: 0.25,
          }}
        >
          {`"${service}"`}
        </Typography>
        <Typography variant={"body2"} fontFamily={"inherit"}>
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
