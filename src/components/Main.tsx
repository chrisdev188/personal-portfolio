import Divider from "./Divider";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./Projects";
import ToolsSection from "./ToolsSection";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <Divider />
      <FeaturedProjects />
      <Divider />
      <ToolsSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ContactSection />
    </main>
  );
};

export default Main;
