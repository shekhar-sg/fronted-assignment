import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { AyurvedaExpertsSectionData } from "@/constants";
import { AttachFile, SchoolOutlined, Star } from "@mui/icons-material";
import { gothamRounded, inter, nunito } from "@/styles/font";

export interface ExpertDetailCardProps {
  data: (typeof AyurvedaExpertsSectionData)["cards"][0];
}

const ExpertDetailCard = (props: ExpertDetailCardProps) => {
  const { data } = props;
  const { ratings, name, qualification, experience, speciality, cardButton } =
    data;
  return (
    <Card
      sx={{
        width: 295,
        height: 446,
        overflow: "hidden",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        padding: "43px 0 0",
        boxShadow: "none",
        // alignItems: "center",
      }}
    >
      <CardMedia>
        <Box
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            background:
              "url(/experts-section-images/expert-avatar.png) center/cover no-repeat",
            position: "relative",
            mx: "auto",
          }}
        >
          <Chip
            component={"span"}
            label={ratings}
            icon={<Star sx={{ fontSize: 18, fill: "#EFDA3B" }} />}
            sx={{
              position: "absolute",
              right: "50%",
              bottom: 0,
              background:
                "linear-gradient(180deg, #0B0B0B 0%, rgba(11, 11, 11, 0.79) 100%)",
              color: "text.secondary",
              fontWeight: 700,
              fontSize: 16,
              zIndex: 1,
              paddingX: 0.3,
              borderRadius: 99,
              transform: "translateX(50%) translateY(20%)",
            }}
          />
        </Box>
      </CardMedia>
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.2,
        }}
      >
        <Typography
          {...gothamRounded.style}
          fontSize={"20px !important"}
          fontWeight={"bold"}
        >
          {name}
        </Typography>
        <Typography
          {...inter.style}
          fontSize={"15px !important"}
          fontWeight={"medium"}
          sx={{ color: "grey.200" }}
        >
          {qualification}
        </Typography>
        <Chip
          icon={<SchoolOutlined color={"primary"} fontSize={"medium"} />}
          label={experience}
          sx={{
            ...nunito.style,
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 99,
            bgcolor: "transparent",
            width: "fit-content",
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
            zIndex: 1,
            paddingX: 1,
            borderRadius: 99,
            bgcolor: "#3A643B1F",
            color: "primary.main",
            width: "fit-content",
            mt: 1.2,
          }}
          label={speciality}
        />
      </CardContent>
      <Button
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
      >
        {cardButton}
      </Button>
    </Card>
  );
};

export default ExpertDetailCard;

// const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: 0,
//     // top: 0,
//     bottom: 0,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }));
