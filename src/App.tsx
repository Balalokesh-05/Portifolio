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
      {/* 1. Persistent Top Navbar */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main>
        {/* 2. Hero Section with Technical Visualization */}
        <Hero />

        {/* 3. Quick Profile Stats Strip (Strictly Verified) */}
        <Stats />

        {/* 4. About Me Section */}
        <About />

        {/* 5. Technical Skills Section */}
        <Skills />

        {/* 6. Featured Projects (Centerpiece) */}
        <Projects />

        {/* 7. Experience (Projects & Internship Presentation) */}
        <Experience />

        {/* 8. Professional Certifications */}
        <Certifications />

        {/* 9. Academic Education */}
        <Education />

        {/* 10. GitHub & Open Source Repositories */}
        <GitHub />

        {/* 11. Currently Learning (Active Interests) */}
        <CurrentlyLearning />

        {/* 12. Dedicated Resume Call to Action */}
        <ResumeCTA />

        {/* 13. Contact & Connectivity */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Floating Quick-Actions Dock */}
      <QuickDock />
    </div>
  );
}

export default App;
