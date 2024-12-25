"use client";
import {
  Box,
  BoxProps,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from "@mui/material";
import { sxToArray } from "@/styles/utils";
import { ReactNode } from "react";

interface ContentWrapperProps extends BoxProps {
  Tag?: ReactNode;
  TagTypographyProps?: TypographyProps;
  Title?: ReactNode;
  TitleTypographyProps?: TypographyProps;
  Description?: ReactNode;
  DescriptionTypographyProps?: TypographyProps;
  SectionProps?: Omit<BoxProps<"section">, "children">;
  titleUnderlined?: boolean;
}

const SectionWrapper = (props: ContentWrapperProps) => {
  const {
    children,
    Tag,
    TagTypographyProps,
    Title,
    Description,
    SectionProps,
    TitleTypographyProps,
    titleUnderlined,
    DescriptionTypographyProps,
    ...restBoxProps
  } = props;
  return (
    <Box
      component={"section"}
      {...SectionProps}
      sx={[sectionSx, ...sxToArray(SectionProps?.sx)]}
    >
      <Box {...restBoxProps} sx={[contentSx, ...sxToArray(restBoxProps.sx)]}>
        {Tag && (
          <Typography
            variant={"h5"}
            component={"span"}
            {...TagTypographyProps}
            sx={[tagSx, ...sxToArray(TagTypographyProps?.sx)]}
          >
            {Tag}
          </Typography>
        )}
        {Title && (
          <Typography
            variant={"h2"}
            component={"h2"}
            color={"primary"}
            {...TitleTypographyProps}
            sx={[
              {
                mb: Description ? 3 : 7,
                textDecoration: {
                  lg: titleUnderlined ? "underline" : "none",
                },
                textDecorationColor: (theme) => ({
                  lg: theme.palette.primary.light,
                }),
              },
              ...sxToArray(TitleTypographyProps?.sx),
            ]}
          >
            {titleUnderlined ? <>&nbsp;&nbsp;{Title}&nbsp;&nbsp;</> : Title}
          </Typography>
        )}
        {Description && (
          <Typography
            variant={"body1"}
            color={"textPrimary"}
            {...DescriptionTypographyProps}
          >
            {Description}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default SectionWrapper;

const sectionSx: SxProps<Theme> = {
  width: 1,
};

const contentSx: SxProps<Theme> = {
  px: {
    xs: 2,
    md: 3,
    lg: 12.5,
  },
  width: 1,
  mx: "auto",
  maxWidth: 1440,
  textAlign: "center",
};

const tagSx: SxProps<Theme> = {
  display: "block",
  mb: 1,
  lineHeight: 1,
};
