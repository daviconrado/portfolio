import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="bg_dark">
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutMe />
        </section>
      </main>
    </div>
  );
}

export default App;
