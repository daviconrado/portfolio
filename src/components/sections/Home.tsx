import ContentSummary from "../ContentSummary.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import TypingEffect from "../textAnimations/TypingEffect.tsx";
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
  return (
    <div className="grid min-h-screen grid-cols-1 place-items-center gap-8 p-8 lg:grid-cols-3 lg:gap-8">
      <div className="flex w-full justify-center lg:order-2">
        <div className="h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80">
          <motion.img
            src="avatar.svg"
            alt="Avatar de Davi Conrado"
            variants={avatarVariants}
            initial="hidden"
            animate={["show", "sway"]}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-left">
        <ContentSummary emoji="👋" content="Saudações" />
        <TypingEffect
          text={`Davi\nConrado`}
          className="text-4xl font-extrabold sm:text-5xl"
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
            className="rounded-full bg-blue-600 p-3 text-white transition-colors hover:bg-blue-500"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/daviconrado"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white transition-colors hover:bg-gray-700"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="flex w-full justify-center lg:order-3 lg:justify-end">
        <a
          href="/Currículo - Davi Conrado.pdf"
          download
          className="flex max-w-fit cursor-pointer items-center gap-2 rounded-lg border bg_summary border-purple-800 px-4 py-2 text-purple-900 transition-colors hover:border-purple-600 hover:text-purple-700"
        >
          <RiDownloadLine />
          Baixar CV
        </a>
      </div>
    </div>
  );
};

export default Home;
