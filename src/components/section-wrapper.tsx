import React, {ComponentProps, ComponentType} from 'react';
import {Box} from "@mui/material";

const SectionWrapper = <C extends ComponentType<any>, P extends ComponentProps<C>>(Component: C, id: string) => {

    const Wrapper = (props: P) => (
        <Box
            component={"section"}
            id={id}
            sx={{
                width: "100vw",
            }}>
            <Box
                sx={{
                    width: 1440,
                    marginX: "auto",
                }}
            >
                <Component {...props}/>
            </Box>
        </Box>
    );

    Wrapper.displayName = `SectionWrapper(${Component.displayName || Component.name})`;

    return Wrapper;
};

export default SectionWrapper;