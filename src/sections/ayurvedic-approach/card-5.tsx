"use client";
import { CardItem5 } from "@/types";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

interface Card5Props {
  data: CardItem5;
}

const Card5 = (props: Card5Props) => {
  const {
    data: { title, description, avatar },
  } = props;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 1,
        width: 290,
        aspectRatio: 58 / 63,
        borderRadius: 5,
        bgcolor: "secondary.main",
        borderTop: (theme) => `4px solid ${theme.palette.primary.main}`,
        gap: 2,
      }}
    >
      <Avatar
        sx={{
          bgcolor: "primary.dark",
          padding: 5.625,
          fontSize: 48,
          fontWeight: 700,
          mt: 1,
        }}
      >
        {avatar}
      </Avatar>
      <CardContent
        sx={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          textAlign: "center",
          p: 0.5,
          gap: 0.5,
        }}
      >
        <Typography
          variant={"subtitle1"}
          fontWeight={700}
          whiteSpace={"nowrap"}
          color={"primary"}
        >
          {title}
        </Typography>
        <Typography variant={"body1"} lineHeight={1.4}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Card5;
