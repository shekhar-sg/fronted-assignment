import {Box, Button, Stack, Typography} from "@mui/material";
import {Section_1_Data} from "@/constants";
import ContentWrapper from "@/components/content-wrapper";

const Section_1 = () => {
    const {backgroundImage, backgroundMask, heading, description, caption, button, banner} = Section_1_Data;
    return (
        <Stack>
            <Stack
                sx={{
                    position: "relative",
                    width: "100%",
                    height: 640,
                    aspectRatio: {
                        xs: 1,
                        sm: 20 / 8,
                    },
                }}
            >
                <Stack
                    sx={{
                        flexDirection: "row",
                        position: "absolute",
                        inset: 0,
                        zIndex: -1,
                    }}
                >
                    <Box sx={{
                        background: backgroundMask,
                        position: "absolute",
                        inset: 0,
                        left: 0,
                    }}/>
                    <Box sx={{
                        flex: {
                            xs: 0,
                            sm: 0.9,
                        },
                        background: "#951D1C",
                    }}/>
                    <Box component={"img"} src={"section-1-images/section-1-background.png"}
                         sx={{
                             flex: 1,
                             aspectRatio: {
                                 xs: 1,
                                 md: 2 / 3,
                             },
                             objectFit: "cover",
                         }}
                    />
                </Stack>
                <ContentWrapper>
                    <Stack
                        sx={{
                            color: "white",
                            maxWidth: "940px",
                            maxHeight: "370px",
                            gap: 1.5,
                            mt: 6
                        }}
                    >
                        <Typography variant={"h6"} fontSize={28}>{heading}</Typography>
                        <Typography variant={"h3"} fontWeight={"bold"} lineHeight={1.5}>
                            {description.split(/Ayurveda\./)[0]}
                            <Box component="span" sx={{textDecoration: "underline"}}>Ayurveda</Box>
                            {description.split(/Ayurveda\./)[1]}
                        </Typography>
                        <Typography variant={"subtitle1"} fontSize={20}>{caption}</Typography>
                        <Button variant={"contained"} sx={{
                            width: "fit-content",
                            background: "#3A643B",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                            padding: "20px 40px",
                            borderRadius: "16px",
                            fontSize: 20,
                            mt: 4
                        }}>{button}</Button>
                    </Stack>
                </ContentWrapper>
            </Stack>
            <Box sx={{
                background: "#FFF7E2",
            }}>
                <ContentWrapper
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        paddingY: 2,
                    }}
                >
                    {banner.map(({icon: Icon, about}, index) => (
                        <Stack key={index}
                               sx={{
                                   flexDirection: "row",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   width: 332,
                                   gap: 0.5,
                               }}
                        >
                            <Icon
                                style={{
                                    paddingTop: "8px",
                                    width: 100,
                                    aspectRatio: 1,
                                    flexShrink: 0,
                                }}/>
                            <Typography variant={"caption"} textTransform={"capitalize"} lineHeight={"normal"}
                                        color={"#3A643B"}
                                        fontWeight={"bold"} fontSize={18}>{about}</Typography>
                        </Stack>
                    ))}
                </ContentWrapper>
            </Box>
        </Stack>
    );
};

export default Section_1;

// export default SectionWrapper(Section_1, "hero")
//
//{/*<Box sx={{*/}
//{/*    width: "50%",*/}
//{/*}}>*/}
//{/*    <Image src={"/section-1-background.png"} alt={"background"}*/}
//{/*           layout={"responsive"} width={100} height={100} objectFit={"cover"}/>*/}
//{/*</Box>*/}

// <>
//     <Stack sx={{
//         pt: "80px",
//         height: "calc(100vh - 80px)",
//     }}>
//         <Stack
//             sx={{
//                 justifyContent: "center",
//                 position: "relative",
//                 height: "100%",
//             }}
//         >
//             <Stack
//                 sx={{
//                     gap: {
//                         xs: 1.5,
//                         sm: 2,
//                         md: 3
//                     },
//                     width: {
//                         xs: "100%",
//                         sm: "90%",
//                         md: "80%",
//                         lg: "70%",
//                         xl: "60%",
//                     },
//                     justifyContent: "start"
//                 }}
//             >
//                 <Typography color={"#FFF7E2"} variant={"body1"}>{heading}</Typography>
//                 <Typography color={"#FFFFFF"} variant={"h5"} fontSize={"48px"} fontWeight={"bold"}>
//                     {description.split("Ayurveda")[0]}
//                     <Box component="span" sx={{textDecoration: "underline"}}>Ayurveda</Box>
//                     {description.split("Ayurveda")[1]}
//                 </Typography>
//                 <Typography color={"#FFF7E2"} variant={"caption"} fontSize={"20px"}>{caption}</Typography>
//                 <Button variant={"contained"} sx={{
//                     width: "fit-content",
//                     background: "#3A643B",
//                     color: "#FFFFFF",
//                     textTransform: "uppercase",
//                     padding: "10px 30px",
//                     borderRadius: "8px",
//                 }}>{button}</Button>
//             </Stack>
//             <Stack
//                 sx={{
//                     flexDirection: "row",
//                     inset: 0,
//                     position: "absolute",
//                     justifyContent: "center",
//                     zIndex: -1,
//                 }}
//             >
//                 <Box
//                     sx={{
//                         width: "50%",
//                         aspectRatio: 1,
//                         background: "#951D1C"
//                     }}
//                 />
//                 <Box
//                     component={"img"}
//                     src={backgroundImage}
//                     sx={{
//                         width: "50%",
//                         aspectRatio: 1,
//                         objectFit: "cover",
//                         transform: "scaleX(-1)"
//                     }}
//                 />
//                 <Box
//                     sx={{
//                         background: backgroundMask,
//                         position: "absolute",
//                         inset: 0,
//                     }}
//                 />
//             </Stack>
//         </Stack>
//         <Stack sx={{
//             flexDirection: "row",
//             background: "#FFF7E2",
//             gap: 2,
//             justifyContent: "space-around",
//             paddingX: 5,
//         }}>
//             {banner.map(({icon: Icon, about}, index) => (
//                 <Stack key={index}
//                        sx={{
//                            flexDirection: "row",
//                            justifyContent: "center",
//                            alignItems: "center",
//                        }}
//                 >
//                     <Icon style={{
//                         height: "80px",
//                         paddingTop: "8px",
//                         aspectRatio: 1,
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}/>
//                     <Typography variant={"caption"}>{about}</Typography>
//                 </Stack>
//             ))}
//         </Stack>
//     </Stack>
// </>
