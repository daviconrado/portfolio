import ContentSummary from "./ContentSummary";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import IconWithTooltip from "./IconWithTooltip";
import { TbBrandCSharp } from "react-icons/tb";
import TypingEffect from "./TypingEffect";

const Skills = () => {
  const mostUsedtechs = [
    { Icon: FaJava, label: "Java" },
    { Icon: SiSpring, label: "Spring boot" },
    { Icon: SiReact, label: "React" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: SiHtml5, label: "HTML5" },
    { Icon: SiCss3, label: "CSS3" },
    { Icon: SiGit, label: "Git" },
    { Icon: SiGithub, label: "GitHub" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiDocker, label: "Docker" },
  ];

  const otherTechs = [
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiExpress, label: "Express.js" },
    { Icon: TbBrandCSharp, label: "C Sharp" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiBootstrap, label: "Bootstrap" },
    { Icon: SiFigma, label: "Figma" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: FaAws, label: "AWS" },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-120 gap-8">
      <div className="flex flex-col justify-center items-center gap-4 mb-3">
        <ContentSummary emoji="💻" content=" Skills · Experiências" />
        <TypingEffect
          text="Tecnologias e habilidades"
          className="font-extrabold text-3xl"
        />
      </div>
      <div className="flex flex-col gap-6 max-w-4xl text-center">
        <p>Tecnologias que utilizo no dia a dia:</p>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {mostUsedtechs.map((t) => (
            <IconWithTooltip key={t.label} Icon={t.Icon} label={t.label} />
          ))}
        </div>
        <p>Tecnologias que já utilizei em projetos:</p>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {otherTechs.map((t) => (
            <IconWithTooltip key={t.label} Icon={t.Icon} label={t.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
