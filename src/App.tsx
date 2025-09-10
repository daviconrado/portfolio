import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg_dark min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <section id="home" className="pt-20">
          <Home />
        </section>
      </main>
    </div>
  );
}

export default App;
