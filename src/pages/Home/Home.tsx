import Divider from "../../components/Divider";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ToolsSection from "./ToolsSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ToolsSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ContactSection />
    </main>
  );
};

export default Home;
