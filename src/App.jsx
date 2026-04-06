import { LangProvider } from "./context/LangContext";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
