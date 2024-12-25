import { Doctor, Prescription, ShieldIcon, SpeechIcon } from "@/icons";
import heroBgSmall from "./assets/hero-background-small.png";
import heroBgMedium from "./assets/hero-background-medium.png";
import heroBgLarge from "./assets/hero-background-large.png";

const WelcomeSectionData = {
  tag: "Namaste, Welcome to Amrutam",
  banner: {
    sm: heroBgSmall,
    md: heroBgMedium,
    lg: heroBgLarge,
  },
  title:
    "Step into Holistic Healing with Ayurveda Book Consultation with certified Experts.",
  description:
    "Dive into the world of Ayurveda and experience personalized health solutions and holistic guidance from trusted Ayurvedic doctors anytime, anywhere.",
  button: {
    title: "Book an Appointment",
    href: "#",
  },
  features: [
    {
      icon: SpeechIcon,
      about: "convenient online & In-clinic consultations",
    },
    {
      icon: ShieldIcon,
      about: "Safe and effective treatment",
    },
    {
      icon: Doctor,
      about: "Experienced Ayurvedic Practitioners",
    },
    {
      icon: Prescription,
      about: "personalized Treatment Plans & Guidance",
    },
  ],
};
export default WelcomeSectionData;
