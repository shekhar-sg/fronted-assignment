// type for section-1

import {FC} from "react";
import {IconProps} from "@/icons";

interface BannerItem {
    icon: FC<IconProps>,
    about: string
}

export interface Section_1_Interface {
    heading: string,
    description: string,
    caption: string,
    backgroundImage: string,
    backgroundMask: string,
    button: string,
    banner: BannerItem[]
}