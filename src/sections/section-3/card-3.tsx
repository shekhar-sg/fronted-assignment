import React from 'react';
import {Box, Card, Typography} from "@mui/material";
import {CardItem3} from "@/types";

interface Card3Props {
    data: CardItem3,
    index: number
}

const Card3 = (props: Card3Props) => {
    const {data: {title, description, image}, index} = props;
    return (
        <Card
            sx={{
                padding: !image ? 3 : 0,
                borderRadius: 5,
                textAlign: index === 0 ? "center" : "start",
                borderTop: !image ? 5 : 0,
                borderTopColor: "primary.main",
                height: 290,
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center"
            }}
        >
            {!image &&
                <Typography variant={index === 0 ? "h4" : "h5"} width={index === 0 ? "70%" : "100%"} color={"primary"}
                            sx={{
                                fontWeight: index === 0 ? 600 : 700,
                                marginTop: 2,
                                letterSpacing: index === 0 ? 3 : 0
                            }}
                            gutterBottom>
                    {title}
                </Typography>}
            {image && (
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{height: "100%", width: "100%", objectFit: "cover"}}
                />
            )}
            {!image && (
                <Typography variant={"body1"}>
                    {description}
                </Typography>
            )}
        </Card>
    );
};

export default Card3;