/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useSEO } from "./hooks/useSEO";
import { RESUME_DATA } from "./constants";

export default function App() {
  useSEO();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Print Only Header */}
      <div className="hidden print:block border-b-2 border-brand-primary pb-8 mb-8">
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-2">{RESUME_DATA.name}</h1>
        <p className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">{RESUME_DATA.title}</p>
        <div className="grid grid-cols-2 gap-4 text-xs font-medium text-brand-secondary">
          <div>
            <p>Email: {RESUME_DATA.email}</p>
            <p>Official: {RESUME_DATA.officialEmail}</p>
          </div>
          <div className="text-right">
            <p>Phone: {RESUME_DATA.phone}</p>
            <p>{RESUME_DATA.address}</p>
          </div>
        </div>
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


