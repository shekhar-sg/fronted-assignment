import React, {ReactNode} from 'react';
import {Box, BoxProps} from "@mui/material";

interface ContentWrapperProps extends Omit<BoxProps, "children"> {
    children: ReactNode;
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const {children, sx, ...restBoxProps} = props;
    return (
        <Box
            sx={{
                padding: 6,
                maxWidth: 1392,
                width: "100%",
                marginX: "auto",
                ...sx,
            }}
            {...restBoxProps}
        >
            {children}
        </Box>
    );
};

export default ContentWrapper;