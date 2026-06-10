import { useState } from "react";
import { About } from "./components/About";
import { AdditionalExperience } from "./components/AdditionalExperience";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Skills } from "./components/Skills";
import { Cursor } from "./components/ui/Cursor";
import { Preloader } from "./components/ui/Preloader";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { StatusBar } from "./components/ui/StatusBar";

export default function App() {
  // Hero choreography waits for the boot sequence to clear.
  const [ready, setReady] = useState(false);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <div className="noise" aria-hidden />
      <ScrollProgress />
      <Navigation />
      <main id="main" className="relative z-10">
        <Hero ready={ready} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <AdditionalExperience />
        <Contact />
      </main>
      <Footer />
      <StatusBar />
    </>
  );
}
