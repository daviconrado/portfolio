import React from "react";
import ContentSummary from "../ContentSummary";
import fotoPessoal from "../../assets/fotoPessoal.jpg";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const itemText: Variants = {
  hidden: { y: 12, opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariant: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 14, duration: 0.7 },
  },
};

const imgVariants: Variants = {
  hidden: { scale: 0.98, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      repeatDelay: 2,
    },
  },
  bubble: {
    scale: [1, 1.02, 1],
    opacity: [1, 0.98, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const AboutMe: React.FC = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -50% 0px",
  });

  return (
    <motion.section
      ref={ref}
      className="grid min-h-screen grid-cols-1 place-items-center gap-6 p-8 lg:grid-cols-3 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <motion.div className="flex items-center justify-center">
        <motion.img
          src={fotoPessoal}
          alt="Foto de Davi Conrado Neto no espelho"
          className="object-cover rounded-full w-full max-w-xs aspect-square mx-auto"
          variants={imgVariants}
          initial="hidden"
          animate={isInView ? ["show", "float", "bubble"] : "hidden"}
          style={{ willChange: "transform, opacity" }}
        />
      </motion.div>

      <div className="col-span-2 flex flex-col justify-center gap-5">
        <motion.div variants={itemText}>
          <ContentSummary emoji="🧐" content="Sobre mim" />
        </motion.div>

        <motion.h2
          variants={headingVariant}
          className="font-extrabold text-5xl"
        >
          Davi Conrado Neto
        </motion.h2>

        <motion.p variants={itemText}>
          👋 Me chamo Davi Conrado Neto mas pode me chamar apenas de Davi.
          Prazer!
        </motion.p>

        <motion.p variants={itemText}>
          👨‍💻 Há mais de 1 ano desenvolvendo e programando interfaces com
          Typescript, Spring Boot, React.js, Node.js.
          <br /> 🎓 Acadêmico de Engenharia de Software na UTFPR em Dois
          Vizinhos - PR. <br />
          💡 Meus interesses se concentram na criação de soluções de ponta a
          ponta para a web, abrangendo desde a interação do usuário até a
          complexidade dos sistemas de dados.
        </motion.p>

        <motion.p variants={itemText}>
          🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
