import { Box, Button } from "@mui/material";
import { HeroSectionData } from "@/constants";
import SectionWrapper from "@/components/section-wrapper";
import { NexaFont } from "@/styles/font";

const { tag, title, description, button } = HeroSectionData;
const Title = title.split("Ayurveda");
const HeroSection = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          position: "relative",
          background: {
            xs: "linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%)",
            sm: "linear-gradient(90deg, rgba(18, 18, 18, 0.94) 1%, rgba(18, 18, 18, 0.94) 47%, rgba(1, 1, 1, 0) 70%), linear-gradient(90deg, #951D1C 1%, #951D1C 47%, rgba(1, 1, 1, 0) 47%)",
          },
          "&:before": {
            content: "''",
            position: "absolute",
            right: 0,
            height: "100%",
            zIndex: -1,
            width: {
              xs: "100%",
              md: "70%",
              lg: "53%",
            },
            backgroundImage: {
              xs: "url(/hero-images/hero-background-small.png)",
              sm: "url(/hero-images/hero-background-large.png)",
            },
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        },
      }}
      Tag={tag}
      TagTypographyProps={{
        sx: {
          ...NexaFont.style,
          lineHeight: {
            xs: "16px",
            md: "28px",
          },
        },
      }}
      Title={
        <>
          {Title[0].trim()}{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", color: "secondary.main" }}
          >
            Ayurveda
          </Box>
          <br />
          {Title[1]}
        </>
      }
      TitleTypographyProps={{
        sx: {
          mb: 2,
          lineHeight: {
            xs: "33.6px",
            md: "67.2px",
          },
        },
      }}
      Description={description}
      DescriptionTypographyProps={{
        sx: {
          mb: 6,
          maxWidth: 788,
          lineHeight: {
            xs: "19.6px",
            md: "28px",
          },
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
