import { FC, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

type BannerItem = {
  icon: FC<IconProps>;
  about: string;
};

export type HeroSectionDataType = {
  heading: string;
  description: string;
  caption: string;
  backgroundImage: string;
  backgroundMask: string;
  button: string;
  banner: BannerItem[];
};

export type CardItem2 = {
  title: string;
  description: string;
  image?: string;
  icon?: FC<IconProps>;
};

export type DiscoverAyurvedaSectionDataType = {
  heading: string;
  description: string;
  centerImage?: string;
  centerIcon?: FC<IconProps>;
  cards: CardItem2[];
};

export type CardItem3 = {
  title: string;
  size: number;
  description?: string;
  image?: string;
};

export type AyurvedicConsultationsSectionDataType = {
  heading: string;
  cards: CardItem3[];
};

export type RestoreHarmonySectionDataType = {
  heading: string;
  button: string;
  backgroundImage: string;
  backgroundMask: string;
};

export type CardItem5 = {
  title: string;
  description: string;
  avatar: string;
};

export type AyurvedicApproachSectionDataType = {
  heading: string;
  description: string;
  cards: CardItem5[];
};

export type CardItem6 = {
  title: string;
  color: string;
  details: {
    avatar?: string;
    name: string;
    location: string;
    date: string;
  };
  review: {
    rating: number;
    service: string;
    comment: string;
  };
};

export type CustomerStoriesSectionDataType = {
  heading: string;
  cards: CardItem6[];
};

export type CardItem7 = {
  avatar: string;
  ratings: number;
  name: string;
  qualification: string;
  experience: string;
  speciality: string;
};

export type AyurvedaExpertsSectionDataType = {
  heading: string;
  button: string;
  cards: CardItem7[];
};

export type AyurvedaAppSectionDataType = {
  heading: string;
  subtitle: string;
  description: string;
};

export type SocialItem = {
  platform: string;
  icon: FC<IconProps>;
};

export type FooterDataType = {
  follow_us: {
    email: string;
    address: string;
    phone: string;
    social: SocialItem[];
  };
  links: {
    title: string;
    url?: string;
  }[];
  subscribe: string;
};
