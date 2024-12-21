import {Box, BoxProps, Stack, Typography} from "@mui/material";
import {CardItem} from "@/types";

interface Card2Props extends Omit<BoxProps, "children"> {
    data: CardItem,
}

const Card2 = (props: Card2Props) => {
    const {title, description, icon: Icon} = props.data;
    const {sx} = props;
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1,
                gap: 2,
                ...sx,
            }}
        >
            <Box
                sx={{
                    height: 80
                }}
            >
                {Icon && <Icon style={{
                    height: "inherit",
                    width: "inherit",
                    display: "flex",
                    justifyContent: "center",
                }}/>}
            </Box>
            <Stack
                sx={{
                    width: "65%",
                    gap:1
                }}
            > <Typography variant={"subtitle2"} fontWeight={700}>{title}</Typography>
                <Typography variant={"body2"} sx={{color:"grey.500"}}>{description}</Typography>
            </Stack>
        </Box>
    );
};

export default Card2;