import { Section_1_Interface } from "@/types";
import { CustomChatIcon, CustomSecureIcon, Doctor, Guidance } from "@/icons";

export const Section_1_Data: Section_1_Interface = {
    heading: "Namaste, Welcome to Amrutam",
    description: "Step into Holistic Healing with Ayurveda. Book Consultation with certified Experts.",
    caption: "Dive into the world of Ayurveda and experience personalized health solutions and holistic guidance from trusted Ayurvedic doctors anytime, anywhere.",
    button: "Book an Appointment",
    backgroundImage: "https://s3-alpha-sig.figma.com/img/c1af/953f/807faed30071845860b212ed47717559?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyIWbUo6BPdQO7MdUsklKzvRCi~wBxGDBAwnu5CUaQRmsmpYgNtZaESzkRIVrStwjnYvARl1Py29UG~a~36bPXmASt37GDcReKOdguKF789Ix1rA6n-9I29FaO72eMrOHo-l7RNkSaxitkuqX5HO3IDDGQwKdStFYv8N~L7Z2VlVGMZmtjfk-mzD4GxfduzhbwG3~l80iBCCTVSnXTMH-BAwuhcsgaYuyXkA~dnN6sTiBIYnj6BVlCnAw8GdudNhCNXa-nq6gVSNDMFksLXvA-3Q0LHRH3AUTgD1WPl7eElXx9TfizggFkXc6WUsldsVDwuqZjUrGJTo5042XyteGg__",
    backgroundMask: "linear-gradient(90.17deg, rgba(18, 18, 18, 0.91) 1.03%, rgba(18, 18, 18, 0.94) 47.43%, rgba(1, 1, 1, 0) 95.15%)",
    banner: [
        {
            icon: CustomChatIcon,
            about: "convenient online & In-clinic consultations",
        },
        {
            icon: CustomSecureIcon,
            about: "Safe and effective treatment",
        },
        {
            icon: Doctor,
            about: "Experienced Ayurvedic Practitioners",
        },
        {
            icon: Guidance,
            about: "personalized Treatment Plans & Guidance",
        }
    ]
};