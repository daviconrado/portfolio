import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

import { motion, useScroll } from "motion/react";
import SectionLine from "./components/SectionLine";
import Contact from "./components/Contact";
import Career from "./components/Career";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg_dark overflow-hidden">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#7b4ae2",
        }}
      />
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <SectionLine />
        <section id="skills">
          <Skills />
        </section>

        <section id="career">
          <Career />
        </section>
        <SectionLine />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
