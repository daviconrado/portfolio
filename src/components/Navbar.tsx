import React from "react";

const Navbar = () => {
  return (
    <header className="fixed w-full z-40 mt-3">
      <nav className="max-w-11/12  mx-auto py-3 px-6 flex items-center justify-between rounded-lg bg_navbar">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="text-purple-700 hover:text-purple-500 mx-3"
          >
            Home
          </a>
          <a href="#about" className="text-gray-400 hover:text-white mx-3">
            Sobre mim
          </a>
          <a href="#projects" className="text-gray-400 hover:text-white mx-3">
            Projetos
          </a>
          <a href="#skills" className="text-gray-400 hover:text-white mx-3">
            Skills
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-3">
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
