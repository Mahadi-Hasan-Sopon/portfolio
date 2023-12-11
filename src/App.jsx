import About from "./components/About";
import ContainerDiv from "./components/ContainerDiv";
import Experience from "./components/Experience";
import GmailRight from "./components/GmailRight";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-bgNavy">
      <ContainerDiv>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SocialLinks />
        <GmailRight />
      </ContainerDiv>
    </div>
  );
};

export default App;
