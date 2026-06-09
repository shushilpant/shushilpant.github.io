import { About } from "./components/About";
import { AdditionalExperience } from "./components/AdditionalExperience";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Skills } from "./components/Skills";
import { ScrollProgress } from "./components/ui/ScrollProgress";

export default function App() {
  return (
    <>
      <div className="paper-grain" aria-hidden />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <AdditionalExperience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
