import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Rating,
  Typography,
} from "@mui/material";
import { sxToArray } from "@/styles/utils";
import { CustomerStoriesSectionData } from "@/constants";
import { dm_sans, nexa, nunito } from "@/styles/font";

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
          padding: "17px 24px",
          bgcolor: "info.main",
          textAlign: "start",
        }}
      >
        <Typography
          {...nunito.style}
          fontSize={"18px !important"}
          fontWeight={700}
        >
          {title}
        </Typography>
      </Box>
      <CardHeader
        sx={{
          ...nexa.style,
          textAlign: "start",
          padding: "30px 23px 0",
          flexDirectionL: "column",
          "& .MuiCardHeader-action": {
            margin: "6px 0 0 0",
          },
        }}
        avatar={<Avatar sx={{ width: 60, height: 60 }} />}
        title={name}
        titleTypographyProps={{
          className: "reviewer",
          component: "p",
        }}
        subheader={location}
        subheaderTypographyProps={{
          color: "textPrimary",
          fontSize: { xs: 15, sm: 18 },
          sx: { color: "grey.600" },
          textAlign: "start",
          ...nexa.style,
          className: "reviewer",
        }}
        action={
          <Typography
            variant={"subtitle1"}
            fontSize={{ xs: 12, sm: 16 }}
            {...nexa.style}
          >
            {date}
          </Typography>
        }
      />
      <CardContent
        sx={{
          padding: {
            xs: "28px 16px",
            sm: "28px 24px",
          },
          ...dm_sans.style,
          textAlign: "start",
        }}
      >
        <Rating name="size-medium" defaultValue={rating} precision={0.5} />
        <Typography
          sx={{
            fontFamily: "inherit",
            fontWeight: 700,
            fontSize: {
              xs: 20,
              sm: 22,
            },
          }}
        >
          {service}
        </Typography>
        <Typography
          fontFamily={"inherit"}
          className={"reviewer"}
          sx={{ color: "grey.500" }}
        >
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
