import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { GitHub } from './components/GitHub';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickDock } from './components/QuickDock';

export function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <GitHub />
        <CurrentlyLearning />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
      <QuickDock />
    </div>
  );
}

export default App;
