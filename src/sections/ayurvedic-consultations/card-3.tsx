import React from "react";
import { Card, CardProps, Typography } from "@mui/material";
import { AyurvedicConsultationsSectionData } from "@/constants";
import { sxToArray } from "@/styles/utils";

interface Card3Props extends Omit<CardProps, "children"> {
  data: (typeof AyurvedicConsultationsSectionData)["cards"][0];
}

const Card3 = (props: Card3Props) => {
  const {
    data: { title, description, image },
    sx,
    ...restCardProps
  } = props;
  return (
    <Card
      sx={[
        {
          padding: "43px 24px 0",
          borderRadius: 5,
          borderTop: !image ? 5 : 0,
          borderTopColor: "primary.main",
          height: {
            xs: title ? 285 : "auto",
            md: 285,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          bgcolor: "background.default",
          boxShadow: "0px 4px 8.9px 0px #0000000F",
          backgroundImage: image ? `url(${image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        ...sxToArray(sx),
      ]}
      {...restCardProps}
    >
      {!image && (
        <Typography
          fontSize={"24px !important"}
          lineHeight={1.25}
          fontWeight={700}
          color={"primary"}
          whiteSpace={"pre-line"}
          mb={2}
        >
          {title}
        </Typography>
      )}
      {!image && (
        <Typography fontSize={"20px !important"} lineHeight={1.3}>
          {description}
        </Typography>
      )}
    </Card>
  );
};

export default Card3;
