import SectionWrapper from "@/components/section-wrapper";
import { Box, Stack, Typography } from "@mui/material";
import MobileAppSectionData from "@/data/MobileApp";
import Link from "next/link";
import Image from "next/image";

const {
  heading,
  description,
  subtitle,
  image,
  titleForMobileApp,
  mobileAppLink,
} = MobileAppSectionData;
const MobileApp = () => {
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "background.paper",
      }}
      sx={{
        py: 12.5,
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Stack
        width={{
          xs: 1,
          md: 0.5,
        }}
        textAlign={{
          md: "left",
        }}
        alignItems={{
          xs: "center",
          md: "flex-start",
        }}
      >
        <Typography
          variant={"h2"}
          color={"primary"}
          fontSize={{
            xs: "h4.fontSize",
            sm: "h3.fontSize",
            md: "h2.fontSize",
          }}
          marginBottom={2}
        >
          {heading}
        </Typography>
        <Typography
          variant={"subtitle1"}
          sx={{
            color: "grey.300",
            mb: { md: 3 },
            width: {
              xs: 0.8,
              md: "auto",
            },
          }}
        >
          {description}
        </Typography>
        <Box
          component={Image}
          src={image.xs}
          alt={heading}
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
            width: "100%",
            height: "80vw",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
        <Typography
          variant={"h4"}
          lineHeight={1.35}
          textTransform={"capitalize"}
          fontWeight={500}
          marginBottom={{ xs: 4, md: 8 }}
          width={{
            xs: 0.8,
            md: "auto",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          fontWeight={700}
          fontSize={"36px !important"}
          sx={{
            marginBottom: 3.5,
          }}
          textTransform={"capitalize"}
        >
          {titleForMobileApp}
        </Typography>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            columnGap: 2,
            rowGap: 3.5,
            alignItems: "center",
          }}
        >
          {mobileAppLink.map((app) => {
            return (
              <Box
                component={Link}
                key={app.title}
                href={app.href}
                sx={{
                  display: "flex",
                  width: "fit-content",
                }}
              >
                <Image src={app.image} alt={app.title} />
              </Box>
            );
          })}
        </Stack>
      </Stack>
      <Box
        component={Image}
        src={image.md}
        alt={heading}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: "50%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </SectionWrapper>
  );
};

export default MobileApp;
