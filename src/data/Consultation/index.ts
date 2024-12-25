import image1 from "./assets/image-1.png";
import image2 from "./assets/image-2.png";
import image3 from "./assets/image-3.png";

export const ConsultationSectionData = {
  heading: "What sets Ayurvedic consultations apart?",
  cards: [
    {
      title: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।",
      description:
        "[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]",
      size: {
        xs: 12,
        lg: 5.5,
      },
      order: 1,
    },
    {
      title: "image-1",
      image: image1,
      size: {
        xs: 12,
        sm: 4,
        lg: 3.5,
      },
      order: 2,
    },
    {
      title: "Precise diagnosis",
      description:
        "Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
      size: {
        xs: 12,
        sm: 8,
        lg: 3,
      },
      order: 3,
    },
    {
      title: "Zero side-effects",
      description:
        "Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs",
      size: {
        xs: 12,
        sm: 8,
        lg: 3,
      },
      order: {
        xs: 5,
        lg: 4,
      },
    },
    {
      title: "image-2",
      image: image2,
      size: {
        xs: 12,
        sm: 4,
        lg: 3,
      },
      order: {
        xs: 4,
        lg: 5,
      },
    },
    {
      title: "Individual Treatment",
      description:
        "all Treatments are personalized based on a person's unique constitution and health concerns.",
      size: {
        xs: 12,
        sm: 8,
        lg: 3,
      },
      order: {
        xs: 7,
        lg: 6,
      },
    },
    {
      title: "image-3",
      image: image3,
      size: {
        xs: 12,
        sm: 4,
        lg: 3,
      },
      order: {
        xs: 6,
        lg: 7,
      },
    },
  ],
};

export default ConsultationSectionData;
