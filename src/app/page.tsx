import Welcome from "@/sections/Welcome";
import Discover from "@/sections/Discover";
import Consultation from "@/sections/Consultation";
import MiddleBanner from "@/sections/MiddleBanner";
import Approach from "@/sections/Approach";
import CustomerStories from "@/sections/CustomerStories";
import Experts from "@/sections/Experts";
import MobileApp from "@/sections/MobileApp";

const Home = () => {
  return (
    <>
      <Welcome />
      <Discover />
      <Consultation />
      <MiddleBanner />
      <Approach />
      <CustomerStories />
      <Experts />
      <MobileApp />
    </>
  );
};

export default Home;
