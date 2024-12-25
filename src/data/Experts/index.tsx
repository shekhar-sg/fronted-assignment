import vaishaliSharma from "./assets/vaishali-sharma.png";

const ExpertData = {
  name: "Dr. Vaishali sharma",
  profilePic: vaishaliSharma,
  ratings: 4.5,
  qualification: "Ayurveda Practitioner (BAMS, MD)",
  experience: "25 years of experience",
  speciality: "Skin Specialist",
  button: {
    title: "Book a session",
    href: "#",
  },
};

export const ExpertsSectionData = {
  heading: "Meet our Ayurveda experts",
  cards: Array<typeof ExpertData>(8).fill(ExpertData),
  button: {
    title: "Find more experts",
    href: "#",
  },
};

export default ExpertsSectionData;
