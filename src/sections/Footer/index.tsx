"use client";
import SectionWrapper from "@/components/section-wrapper";
import {
  alpha,
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { FooterData } from "@/data/Footer";
import NextLink from "next/link";

const { title, follow_us, otherLinkTitle, otherLinks, subscribeText } =
  FooterData;

const FooterTitle = styled(Typography)(({ theme }) => {
  return theme.unstable_sx({
    fontWeight: 700,
    color: "primary.main",
  });
});
const Footer = () => {
  return (
    <SectionWrapper
      SectionProps={{
        component: "footer",
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.18),
      }}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        flexWrap: {
          md: "wrap",
          lg: "nowrap",
        },
        fontSize: "body2.fontSize",
        pt: 5,
        pb: { xs: 21.75, md: 10 },
        columnGap: {
          md: 10,
          lg: 4,
        },
        rowGap: {
          md: 7.5,
        },
      }}
    >
      <Box
        width={{
          xs: 1,
          md: 0.4,
          lg: 1,
        }}
        marginBottom={{
          xs: 4.25,
          md: 0,
        }}
        textAlign={"left"}
        lineHeight={0.9}
      >
        <FooterTitle marginBottom={1.75}>{title}</FooterTitle>
        <Typography>{follow_us.email}</Typography>
        <br />
        <Typography>{follow_us.address}</Typography>
        <br />
        <Typography marginBottom={2.5}>{follow_us.phone}</Typography>
        <Stack direction={"row"} columnGap={1}>
          {follow_us.social.map((social) => {
            const { platform, icon: Icon, href } = social;
            return (
              <IconButton
                key={platform}
                href={href}
                sx={{
                  "--size": "40px",
                  width: "var(--size)",
                  height: "var(--size)",
                  bgcolor: "primary.main",
                }}
              >
                <Icon />
              </IconButton>
            );
          })}
        </Stack>
      </Box>
      <Box
        width={{
          xs: 1,
          md: "auto",
          lg: 1,
        }}
        marginBottom={{
          xs: 7.5,
          md: 0,
        }}
        textAlign={"left"}
      >
        <FooterTitle fontWeight={700} marginBottom={1}>
          {otherLinkTitle}
        </FooterTitle>
        {otherLinks.map((link) => {
          return (
            <Link
              component={NextLink}
              key={link.title}
              sx={{
                display: "block",
                color: "grey.A200",
                textDecoration: "none",
              }}
              {...link}
            >
              {link.title}
            </Link>
          );
        })}
      </Box>
      <Box width={1} textAlign={"left"}>
        <FooterTitle fontWeight={700} marginBottom={4}>
          {subscribeText}
        </FooterTitle>
        <TextField
          variant={"outlined"}
          placeholder={"Your Email Address"}
          sx={{
            borderRadius: 99,
            overflow: "hidden",
            color: "common.black",
            border: "1px solid",
            fontSize: "subtitle1.fontSize",
            fieldset: {
              display: "none",
            },
          }}
          slotProps={{
            htmlInput: {
              sx: {
                p: 0,
                px: 3,
                fontSize: "subtitle1.fontSize",
                "&::placeholder": {
                  opacity: 0.8,
                },
              },
            },
            input: {
              sx: {
                borderRadius: 99,
                p: 0,
              },
              endAdornment: (
                <Button
                  variant={"contained"}
                  sx={{
                    py: {
                      xs: 2,
                    },
                    minWidth: 120,
                    fontSize: "body2.fontSize",
                    fontWeight: 700,
                    borderRadius: "0 !important",
                    bgcolor: "common.black",
                  }}
                >
                  Subscribe
                </Button>
              ),
            },
          }}
        />
      </Box>
    </SectionWrapper>
  );
};

export default Footer;
