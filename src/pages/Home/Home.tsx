import Divider from "../../components/Divider";
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
      <ContactSection />
    </main>
  );
};

export default Home;
