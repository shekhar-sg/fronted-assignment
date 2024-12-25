import { Card, CardProps, Typography } from "@mui/material";
import { sxToArray } from "@/styles/utils";
import ConsultationSectionData from "@/data/Consultation";
import Image from "next/image";

interface ConsultationCardProps extends Omit<CardProps, "children"> {
  data: (typeof ConsultationSectionData)["cards"][0];
}

const ConsultationCard = (props: ConsultationCardProps) => {
  const {
    data: { title, description, image },
    sx,
    ...restCardProps
  } = props;
  return (
    <Card
      sx={[
        {
          borderRadius: 5,
          height: "100%",
          boxShadow: "0px 4px 8.9px 0px #0000000F",
        },
        !image && {
          borderTop: 5,
          borderTopColor: "primary.main",
          py: 5,
          px: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          bgcolor: "background.default",
        },
        ...sxToArray(sx),
      ]}
      {...restCardProps}
    >
      {image ? (
        <Image
          alt={"Consultation Image"}
          src={image}
          width={370}
          height={285}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      ) : (
        <>
          <Typography
            fontSize={"24px !important"}
            lineHeight={1.25}
            fontWeight={700}
            color={"primary"}
            mb={2}
          >
            {title}
          </Typography>
          <Typography fontSize={"20px !important"} lineHeight={1.3}>
            {description}
          </Typography>
        </>
      )}
    </Card>
  );
};

export default ConsultationCard;
