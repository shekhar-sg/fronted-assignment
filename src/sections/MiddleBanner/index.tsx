import SectionWrapper from "@/components/section-wrapper";
import MiddleBannerSectionData from "@/data/MiddleBanner";
import LinkButton from "@/components/link-button";

const { heading, backgroundImage, button } = MiddleBannerSectionData;
const MiddleBanner = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.59) 2.52%, rgba(0, 0, 0, 0.53) 22.87%, rgba(14, 14, 14, 0.4) 100%), url(${backgroundImage.src}) center/cover no-repeat, url(${backgroundImage.blurDataURL}) center/cover no-repeat`,
          paddingY: {
            xs: 12,
            sm: 15,
            md: 18,
          },
        },
      }}
      Title={heading}
      TitleTypographyProps={{
        variant: "h1",
        color: "secondary",
        lineHeight: 1.25,
        mx: "auto",
        width: {
          xs: 0.8,
          md: 856,
        },
        sx: {
          textShadow: "0px 4px 10.6px #0000004F",
          mb: {
            xs: 3.5,
            md: 6,
          },
        },
      }}
    >
      <LinkButton variant={"contained"} {...button} />
    </SectionWrapper>
  );
};

export default MiddleBanner;
