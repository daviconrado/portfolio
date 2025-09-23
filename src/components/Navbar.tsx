import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaTools,
  FaEnvelope,
  FaSuitcase,
} from "react-icons/fa";
import { useMediaQuery } from "./hooks/useMediaQuery";

const sections = [
  "home",
  "about",
  "projects",
  "skills",
  "career",
  "contact",
] as const;
type Section = (typeof sections)[number];

const topNavLinkClass = (active: string, id: string) =>
  `${
    active === id ? "text-purple-600" : "text-gray-400 hover:text-white"
  } mx-3`;

export default function Navbar() {
  const [active, setActive] = useState<Section>("home");
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const homeEntry = entries.find((e) => e.target.id === "home");
      if (homeEntry && homeEntry.isIntersecting) {
        setActive("home");
        setCompact(false);
        return;
      }

      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort(
          (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
        );

      if (visible.length > 0) {
        const id = visible[0].target.id as Section;
        setActive(id);
        setCompact(id !== "home");
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    if (window.scrollY > 120) setCompact(true);

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: Section) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setCompact(id !== "home");
    }
  };

  const iconList: { id: Section; label: string; Icon: React.ElementType }[] = [
    { id: "home", label: "Home", Icon: FaHome },
    { id: "about", label: "Sobre mim", Icon: FaUser },
    { id: "projects", label: "Projetos", Icon: FaLaptopCode },
    { id: "skills", label: "Skills", Icon: FaTools },
    { id: "career", label: "Carreira", Icon: FaSuitcase },
    { id: "contact", label: "Contato", Icon: FaEnvelope },
  ];

  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <AnimatePresence>
        {!compact && !isMobile && (
          <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
            className="fixed w-full z-40 mt-3 pointer-events-auto"
            aria-hidden={compact}
          >
            <nav className="max-w-6xl mx-auto py-3 px-6 flex items-center justify-between rounded-lg bg_navbar backdrop-blur-sm">
              <img src="/logo.svg" alt="logo" className="h-8" />
              <div className="hidden md:flex items-center gap-3">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={handleClick(id as Section)}
                    className={topNavLinkClass(active, id)}
                    aria-current={active === id ? "page" : undefined}
                  >
                    {id === "home"
                      ? "Home"
                      : id === "about"
                      ? "Sobre mim"
                      : id === "projects"
                      ? "Projetos"
                      : id === "skills"
                      ? "Skills"
                      : id === "career"
                      ? "Carreira"
                      : "Contato"}
                  </a>
                ))}
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(compact || isMobile) && (
          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.28 }}
            className="fixed bottom-5 left-1/2 z-50 transform -translate-x-1/2"
            aria-label="navegação compacta"
          >
            <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/5 shadow-lg">
              {iconList.map(({ id, label, Icon }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={handleClick(id)}
                    aria-label={label}
                    aria-pressed={isActive}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform cursor-pointer ${
                      isActive
                        ? "bg-purple-600 text-white scale-105 shadow-md"
                        : "bg-white/5 text-gray-300 hover:scale-105"
                    }`}
                  >
                    <Icon />
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
