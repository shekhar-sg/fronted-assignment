import SectionWrapper from "@/components/section-wrapper";
import { RestoreHarmonySectionData } from "@/constants";
import { Button } from "@mui/material";

const { heading, button } = RestoreHarmonySectionData;
const RestoreHarmony = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.59) 2.52%, rgba(0, 0, 0, 0.53) 22.87%, rgba(14, 14, 14, 0.4) 100%), url(/restore-harmony-images/restore-harmony-background.png)  center/cover no-repeat",
          paddingY: {
            xs: 12,
            sm: 15,
            md: 18,
          },
          paddingX: {
            xs: 4.5,
            md: 10,
            lg: 23,
          },
        },
      }}
      Title={heading}
      TitleTypographyProps={{
        variant: "h1",
        color: "secondary",
        lineHeight: 1.25,
        sx: {
          textShadow: "0px 4px 10.6px #0000004F",
          mb: {
            xs: 3.5,
            md: 6,
          },
        },
      }}
    >
      <Button variant={"contained"}>{button}</Button>
    </SectionWrapper>
  );
};

export default RestoreHarmony;
