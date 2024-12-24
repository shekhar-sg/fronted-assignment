import { Button, Typography } from "@mui/material";
import { HeroSectionData } from "@/constants";
import SectionWrapper from "@/components/section-wrapper";
import { nexa } from "@/styles/font";

const { tag, title, description, button } = HeroSectionData;
const Title = title.split("Ayurveda");
const HeroSection = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          px: {
            xs: 0.5,
            sm: 0,
          },
          position: "relative",
          background: {
            xs: "linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%), url(/hero-images/hero-background-small.png) right/cover no-repeat",
            sm: "linear-gradient(90deg, rgba(18, 18, 18, 0.94) 1%, rgba(18, 18, 18, 0.94) 30%, rgba(1, 1, 1, 0) 85%), url(/hero-images/hero-background-medium.png)  top/cover no-repeat",
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
            backgroundImage: {
              lg: "url(/hero-images/hero-background-large.png)",
            },
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
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
        color: "textSecondary",
        sx: {
          mb: 2,
        },
      }}
      Description={description}
      DescriptionTypographyProps={{
        sx: {
          width:{
            xs:0.97,
            sm:1
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
      <Button variant={"contained"} color={"primary"}>
        {button}
      </Button>
    </SectionWrapper>
  );
};

export default HeroSection;
