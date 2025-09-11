import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

import { motion, useScroll } from "motion/react";
import SectionLine from "./components/SectionLine";

function App() {
  return (
    <div className="bg_dark">
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <section id="home">
          <Home />
        </section>
        <SectionLine />
        <section id="about">
          <AboutMe />
        </section>
        <SectionLine />
        <section id="skills">
          <Skills />
        </section>
      </main>
    </div>
  );
}

export default App;
