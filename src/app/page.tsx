import HeroSection from "../sections/hero-section";
import DiscoverAyurveda from "../sections/DiscoverAyurveda";
import AyurvedicConsultation from "@/sections/ayurvedic-consultations";
import RestoreHarmony from "../sections/restore-harmony";
import AyurvedicApproach from "@/sections/ayurvedic-approach";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DiscoverAyurveda />
      <AyurvedicConsultation />
      <RestoreHarmony />
      <AyurvedicApproach />
    </>
  );
};

export default Home;
