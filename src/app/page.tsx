import HeroSection from "../sections/hero-section";
import DiscoverAyurveda from "../sections/DiscoverAyurveda";
import AyurvedicConsultation from "@/sections/ayurvedic-consultations";
import RestoreHarmony from "../sections/restore-harmony";
import AyurvedicApproach from "@/sections/ayurvedic-approach";
import CustomersReview from "@/sections/customers-review";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DiscoverAyurveda />
      <AyurvedicConsultation />
      <RestoreHarmony />
      <AyurvedicApproach />
      <CustomersReview />
    </>
  );
};

export default Home;
