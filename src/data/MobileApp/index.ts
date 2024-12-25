import googlePlayStore from "./assets/google-play-store.png";
import appleStore from "./assets/apple-store.png";
import mobileAppMd from "./assets/mobile-app-md.png";
import mobileAppSx from "./assets/mobile-app-sm.png";

export const MobileAppSectionData = {
  heading: "Amrutam home App",
  image: {
    xs: mobileAppSx,
    md: mobileAppMd,
  },
  subtitle:
    "Get a diet & lifestyle consultation with ayurvedic experts across the globe ",
  description:
    "The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.",
  titleForMobileApp: "Get The App Now",
  mobileAppLink: [
    {
      title: "Google Play",
      image: googlePlayStore,
      href: "#",
    },
    {
      title: "Apple Store",
      image: appleStore,
      href: "#",
    },
  ],
};

export default MobileAppSectionData;
