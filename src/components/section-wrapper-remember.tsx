// import {Box, BoxProps, styled, Typography} from "@mui/material";
//
// const SectionTitle = styled(Typography)(({theme}) => theme.unstable_sx({
//     fontWeight: 700,
//     color: theme.palette.primary.main,
//     letterSpacing: 1,
//     marginBottom: 4,
//     textAlign: "center",
// }));
//
// export type SectionWrapperProps = BoxProps & {
//     Title?: string
//     Description?: string
// }
//
// const SectionWrapper = styled((props:SectionWrapperProps)=>{
//     const {children,Title,Description, ...rest} = props;
//
//     return <Box {...rest}>
//         <SectionTitle>{Title}</SectionTitle>
//         <SectionTitle>{Description}</SectionTitle>
//         {children}
//     </Box>
//
// })(({theme}) => theme.unstable_sx({
//     padding: 6,
//     [`&. ${SectionTitle}`]: {
//
//     }
// }));