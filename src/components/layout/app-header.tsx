import React from "react";
import SectionWrapper from "@/components/section-wrapper";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import appLogo from "./assets/app-logo.png";
import Image from "next/image";
import { Menu } from "@mui/icons-material";

const Title = "AMRUTAM";

const AppHeader = () => {
  return (
    <SectionWrapper
      SectionProps={{
        component: AppBar,
        bgcolor: "secondary.main",
        color: "primary.main",
        fontWeight: 700,
        position: "sticky",
      }}
      component={Toolbar}
    >
      <IconButton
        color={"primary"}
        sx={{
          position: "absolute",
          display: {
            xs: "flex",
            sm: "none",
          },
        }}
      >
        <Menu fontSize={"large"} />
      </IconButton>
      <Image
        src={appLogo}
        alt={Title}
        height={24}
        style={{
          marginInline: "auto",
        }}
      />
    </SectionWrapper>
  );
};

export default AppHeader;
