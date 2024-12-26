import {
  alpha,
  Badge,
  badgeClasses,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { AttachFile, SchoolOutlined, Star } from "@mui/icons-material";
import { gothamRounded, inter, nunito } from "@/styles/font";
import ExpertsSectionData from "@/data/Experts";
import LinkButton from "@/components/link-button";
import Image from "next/image";

export interface ExpertDetailCardProps {
  data: (typeof ExpertsSectionData)["cards"][0];
}

const ExpertDetailCard = (props: ExpertDetailCardProps) => {
  const { data } = props;
  const {
    ratings,
    name,
    qualification,
    experience,
    speciality,
    profilePic,
    button,
  } = data;
  return (
    <Card
      sx={{
        width: 295,
        height: 446,
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3.5,
        pt: 5.25,
        boxShadow: "none",
          // mx:"auto"
      }}
    >
      <Badge
        anchorOrigin={{
          vertical: "bottom",
        }}
        badgeContent={
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: 0.5,
              background:
                "linear-gradient(180deg, #0B0B0B 0%, rgba(11, 11, 11, 0.79) 100%)",
              color: "text.secondary",
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 99,
              p: "6px 12px",
            }}
          >
            {ratings}
            <Star
              sx={{
                mr: 0,
                ml: 0,
                fill: (theme) => theme.palette.warning.light,
              }}
            />
          </Typography>
        }
        sx={{
          [`& .${badgeClasses.badge}`]: {
            right: "50%",
            bottom: -5,
            height: "fit-content",
            transform: "translate(50%,0)",
          },
        }}
      >
        <CardMedia
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={profilePic}
            alt={name}
            width={150}
            height={150}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </CardMedia>
      </Badge>
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          {...gothamRounded.style}
          fontSize={"20px !important"}
          fontWeight={"bold"}
          marginBottom={1}
          lineHeight={1}
          sx={{
              color:'common.black'
          }}
        >
          {name}
        </Typography>
        <Typography
          {...inter.style}
          fontSize={"15px !important"}
          fontWeight={500}
          sx={{ color: "grey.300", mb: 1.5 }}
          lineHeight={1}
        >
          {qualification}
        </Typography>
        <Chip
          icon={<SchoolOutlined color={"primary"} fontSize={"small"} />}
          label={experience}
          sx={{
            ...nunito.style,
            height: "min-content",
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 99,
            bgcolor: "transparent",
            width: "fit-content",
            mb: 1.5,
          }}
        />
        <Chip
          icon={
            <AttachFile
              color={"primary"}
              sx={{
                fontSize: "18px",
                transformOrigin: "center",
                transform: "rotate(45deg)",
              }}
            />
          }
          sx={{
            ...nunito.style,
            fontWeight: 600,
            fontSize: 16,
            paddingX: 1,
            borderRadius: 99,
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
            color: "primary.main",
            width: "fit-content",
          }}
          label={speciality}
        />
      </CardContent>
      <LinkButton
        variant={"contained"}
        sx={{
          ...nunito.style,
          padding: "24px !important",
          fontSize: "20px !important",
          fontWeight: 600,
          width: 1,
          borderRadius: "0px !important",
          textTransform: "none",
          mt: "auto",
        }}
        {...button}
      />
    </Card>
  );
};

export default ExpertDetailCard;
