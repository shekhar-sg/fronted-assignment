import {Section_1_Interface, Section_2_Interface, Section_3_Interface} from "@/types";
import {
    AyurvedaIcon, CirclePattern,
    CustomChatIcon,
    CustomSecureIcon,
    Doctor,
    Guidance,
    HeartBeatIcon,
    LotusPositionIcon, ProtectionIcon,
    RibbonIcon, StrongIcon
} from "@/icons";

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

export const Section_2_Data: Section_2_Interface = {
    heading: "Discover Ayurveda’s magic with us",
    description: "Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a better life.",
    centerIcon: CirclePattern,
    cards: [
        {
            title: "Personalized Wellness",
            description: "Get treatments made just for you based on your individual doshas ( body type)",
            icon: HeartBeatIcon
        },
        {
            title: "Focus on prevention",
            description: "Stop problems even before they start.",
            icon: RibbonIcon
        },
        {
            title: "Mind-Body Connection",
            description: "Keep your mind and body in sync for a happy life.",
            icon: LotusPositionIcon
        },
        {
            title: "Holistic Healing",
            description: "Fix the root problem for long-lasting health.",
            icon: ProtectionIcon
        },
        {
            title: "Natural Remedies",
            description: "Using herbs and natural therapies for healing.",
            icon: AyurvedaIcon
        },
        {
            title: "Boosting immunity",
            description: "Stay strong and healthy for life, not just for today.",
            icon: StrongIcon
        },
    ]
}

export const Section_3_Data: Section_3_Interface = {
    heading: "What sets Ayurvedic consultations apart?",
    cards: [
        {
            title: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।",
            description: "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
            size: 5.2
        },
        {
            title: "image-1",
            image: "section-3-images/a2.png",
            size: 3.8
        },
        {
            title: "precise diagnosis",
            description: "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
            size: 3
        },
        {
            title: "Zero side-effects",
            description: "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs",
            size: 3
        },
        {
            title: "image-2",
            image: "section-3-images/a1.png",
            size: 3
        },
        {
            title: "Individual Treatment\n",
            description: "all Treatments are personalized based on a person's unique constitution and health concerns.",
            size: 3
        },
        {
            title: "image-3",
            image: "section-3-images/a3.png",
            size: 3
        }
    ]
}