"use client";
import { alpha, Avatar, Stack, Typography } from "@mui/material";
import ApproachSectionData from "@/data/Approach";

interface Card5Props {
  data: (typeof ApproachSectionData)["cards"][number];
}

const StepCard = (props: Card5Props) => {
  const {
    data: { title, description, avatar },
  } = props;
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        py: 4,
        width: 290,
        height: 315,
        borderRadius: 5,
        bgcolor: "background.paper",
        borderTop: (theme) => `4px solid ${theme.palette.primary.main}`,
        boxShadow: "0px 4px 9px 0px #0000001C",
        lineHeight: 1.2,
      }}
    >
      <Avatar
        sx={{
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.66),
          padding: 5.625,
          fontSize: 48,
          fontWeight: 700,
          mb: 3,
        }}
      >
        {avatar}
      </Avatar>
      <Typography
        fontWeight={700}
        whiteSpace={"nowrap"}
        color={"primary"}
        fontSize={"24px !important"}
        lineHeight={"inherit"}
        marginBottom={1}
      >
        {title}
      </Typography>
      <Typography
        variant={"body1"}
        lineHeight={"inherit"}
        fontSize={"20px !important"}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default StepCard;
