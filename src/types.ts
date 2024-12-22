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


export interface CardItem2 {
    title: string,
    description: string,
    image?: string,
    icon?: FC<IconProps>
}

export interface Section_2_Interface {
    heading: string,
    description: string,
    centerImage?: string,
    centerIcon?: FC<IconProps>,
    cards: CardItem2[]
}

export interface CardItem3 {
    title: string,
    size: number
    description?: string,
    image?: string,
}

export interface Section_3_Interface {
    heading: string,
    cards: CardItem3[];
}

export interface Section_4_interface {
    heading: string,
    button: string,
    backgroundImage: string,
    backgroundMask: string,
}

export interface CardItem5 {
    title: string,
    description: string,
    avatar: string
}

export interface Section_5_interface {
    heading: string,
    description: string,
    cards: CardItem5[]
}