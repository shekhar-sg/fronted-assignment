import React from "react";
import { Card, CardProps } from "@mui/material";
import { CardItem6 } from "@/types";

interface Card6Props extends Omit<CardProps, "children"> {
  data: CardItem6;
}

const Card6 = (props: Card6Props) => {
  const { data, sx, ...restCardProps } = props;
  const {
    title,
    color,
    details: { name, date, location, avatar = "" },
    review: { rating, service, comment },
  } = data;
  return (
    <Card
      sx={{
        ...sx,
      }}
      {...restCardProps}
    ></Card>
  );
};

export default Card6;
