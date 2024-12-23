// "use server";
import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { CardItem2 } from "@/types";

interface Card2Props extends Omit<BoxProps, "children"> {
  data: CardItem2;
}

const Card2 = (props: Card2Props) => {
  const { title, description, icon: Icon } = props.data;
  const { sx } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: {
          xs: "start",
          lg: "center",
        },
        paddingTop: {
          xs: 2,
          lg: 0,
        },
        width: 1,
        height: {
          xs: 218,
          sm: "auto",
        },
        gap: {
          xs: 2,
          lg: 2,
        },
        border: {
          xs: "1px solid",
          md: "none",
        },
        borderColor: "grey.50",
        borderRadius: "12px",
        boxShadow: {
          xs: `0 0 10px 0 grey`,
          lg: "none",
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          height: {
            xs: 60,
            sm: 70,
            md: 80,
            lg: 100,
          },
          // width: 100,
        }}
      >
        {Icon && (
          <Icon
            style={{
              height: "inherit",
              width: "inherit",
              display: "flex",
              justifyContent: "center",
            }}
          />
        )}
      </Box>
      <Stack
        sx={{
          width: "65%",
          gap: 1,
        }}
      >
        <Typography variant={"body1"} lineHeight={1.25} fontWeight={700}>
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
            lineHeight: 1.25,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Card2;
