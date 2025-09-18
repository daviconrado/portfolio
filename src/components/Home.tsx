import React, { useEffect, useState } from "react";
import ContentSummary from "./ContentSummary.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import TypingEffect from "./TypingEffect.tsx";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const avatarVariants: Variants = {
  hidden: {
    scale: 0,
  },

  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  sway: {
    scale: 1,
    rotate: [-2, 2, -2],
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const Home = () => {
  const [animation, setAnimation] = useState("hidden");
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation("show");
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="flex flex-col justify-center gap-5">
        <ContentSummary emoji="👋" content="Saudações" />
        <TypingEffect
          text={`Davi\nConrado`}
          className="font-extrabold text-5xl text-wrap"
        />
        <TypingEffect
          text="Full-stack developer · Software Engineer"
          className="font-light"
          as="p"
        />

        <div className="flex gap-3">
          <a
            href="https://linkedin.com/in/daviconrado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors max-w-fit"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/daviconrado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors max-w-fit"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-62 h-62 md:w-84 md:h-84 lg:w-100 lg:h-100 rounded-full overflow-hidden">
          <motion.img
            src="avatar.svg"
            alt=""
            variants={avatarVariants}
            initial="hidden"
            animate={animation}
            onAnimationComplete={(definition) => {
              if (definition == "show") {
                setAnimation("sway");
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-end gap-4">
        <a
          href="/curriculo.pdf"
          download
          className="flex items-center gap-2 cursor-pointer text-purple-900 hover:text-purple-700 transition-colors border border-purple-800 hover:border-purple-600 px-4 py-2 rounded-lg max-w-fit"
        >
          <RiDownloadLine />
          Baixar CV
        </a>
      </div>
    </div>
  );
};

export default Home;
