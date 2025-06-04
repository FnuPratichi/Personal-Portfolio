import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Journey from './components/Journey';
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";

import LOR from './components/LettersOfRecommendation';
import Blog from './components/Blog';




function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>
        <About />
        <Education />
        <Journey />
        <Projects />
        <Blog/>
        <LOR/>
        <Publications />
        <Certifications />
        <Achievements/>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
