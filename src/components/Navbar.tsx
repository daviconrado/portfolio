import React, { useEffect, useState } from "react";

const Navbar = () => {
  const sections = ["home", "about", "projects", "skills", "contact"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, //60% da pagina
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => (e: any) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  const linkClass = (id: string) =>
    `${
      active === id ? "text-purple-700" : "text-gray-400 hover:text-white"
    } mx-3`;

  return (
    <header className="fixed w-full z-40 mt-3">
      <nav className="max-w-6xl  mx-auto py-3 px-6 flex items-center justify-between rounded-lg bg_navbar">
        <img src="/logo.svg" alt="" />
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={handleClick("home")}
            className={linkClass("home")}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleClick("about")}
            className={linkClass("about")}
          >
            Sobre mim
          </a>
          <a
            href="#projects"
            onClick={handleClick("projects")}
            className={linkClass("projects")}
          >
            Projetos
          </a>
          <a
            href="#skills"
            onClick={handleClick("skills")}
            className={linkClass("skills")}
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={handleClick("contact")}
            className={linkClass("contact")}
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
