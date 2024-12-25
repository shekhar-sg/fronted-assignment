import { Avatar, Stack, Typography } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";
import { nexa } from "@/styles/font";
import WelcomeSectionData from "@/data/Welcome";
import LinkButton from "@/components/link-button";

const { tag, title, description, banner, button, features } =
  WelcomeSectionData;
const Title = title.split("Ayurveda");
const Welcome = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            px: {
              xs: 0.5,
              sm: 0,
            },
            position: "relative",
            background: {
              xs: `linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%), url(${banner.sm.src}) right/cover no-repeat, url(${banner.sm.blurDataURL}) right/cover no-repeat`,
              sm: `linear-gradient(90deg, rgba(18, 18, 18, 0.94) 1%, rgba(18, 18, 18, 0.94) 30%, rgba(1, 1, 1, 0) 85%), url(${banner.md.src}) top/cover no-repeat, url(${banner.md.blurDataURL}) top/cover no-repeat`,
              lg: "linear-gradient(90deg, rgba(18, 18, 18, 0.94) 1%, rgba(18, 18, 18, 0.94) 47%, rgba(1, 1, 1, 0) 70%), linear-gradient(90deg, #951D1C 1%, #951D1C 47%, rgba(1, 1, 1, 0) 47%)",
            },
            "&:before": {
              content: "''",
              position: "absolute",
              right: 0,
              height: "100%",
              zIndex: -1,
              width: {
                xs: 1,
                lg: 0.53,
              },
              background: {
                lg: `url(${banner.lg.src}) center/cover no-repeat, url(${banner.lg.blurDataURL}) center/cover no-repeat`,
              },
            },
          },
        }}
        Tag={tag}
        TagTypographyProps={{
          color: "secondary",
          sx: {
            ...nexa.style,
          },
        }}
        Title={
          <>
            {Title[0].trim()}{" "}
            <Typography
              variant={"inherit"}
              component="span"
              color={"secondary"}
              sx={{ textDecoration: "underline" }}
            >
              Ayurveda
            </Typography>
            <br />
            {Title[1]}
          </>
        }
        TitleTypographyProps={{
          component: "h1",
          color: "textSecondary",
          sx: {
            mb: 2,
          },
        }}
        Description={description}
        DescriptionTypographyProps={{
          sx: {
            width: {
              xs: 0.97,
              sm: 1,
            },
            color: "grey.100",
            fontWeight: 500,
            mb: {
              xs: 5,
              md: 6,
            },
            maxWidth: 788,
          },
        }}
        sx={{
          textAlign: "start",
          pt: {
            xs: 12,
            md: 15.5,
          },
          pb: {
            xs: 10.5,
            md: 18.25,
          },
        }}
      >
        <LinkButton
          variant={"contained"}
          sx={{
            textTransform: "uppercase",
          }}
          {...button}
        />
      </SectionWrapper>
      <SectionWrapper
        SectionProps={{
          bgcolor: "secondary.main",
        }}
        sx={{
          display: "flex",
          alignItems: "stretch",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          px: {
            xs: 0,
            sm: 3,
            lg: 12.5,
          },
        }}
      >
        {features.map((feature) => {
          const { about, icon: Icon } = feature;
          return (
            <Stack
              key={about}
              direction={"row"}
              alignItems={"center"}
              textAlign={"left"}
              columnGap={{ xs: 2, sm: 1.5 }}
              fontWeight={700}
              fontSize={"body2.fontSize"}
              color={"primary.main"}
              textTransform={"capitalize"}
              px={{
                xs: 2.5,
                lg: 1,
              }}
              py={{
                xs: 3.25,
                sm: 4,
                lg: 5,
              }}
              border={"1px solid"}
              borderColor={{
                xs: "grey.50",
                lg: "secondary.dark",
              }}
              width={{
                xs: 1,
                sm: 0.5,
                lg: "fit-content",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "common.white",
                  "--size": "70px",
                  width: "var(--size)",
                  height: "var(--size)",
                  border: "1px solid",
                  borderColor: "primary.main",
                }}
              >
                <Icon />
              </Avatar>
              {about}
            </Stack>
          );
        })}
      </SectionWrapper>
    </>
  );
};

export default Welcome;
