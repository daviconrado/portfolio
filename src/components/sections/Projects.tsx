import ContentSummary from "../ContentSummary";
import ProjectCard from "../cards/ProjectCard";
import cartoonPadlock from "../../assets/cartoonPadlock.svg";
import TypingEffect from "../textAnimations/TypingEffect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Project = {
  header: string;
  content: string;
  imgUrl: string;
  imgAlt: string | null;
  techs: string[];
};

const projects: Project[] = [
  {
    header: "Livechat",
    content:
      "Um livechat com Spring Boot e React.js feito para exercitar os conceitos de websocket e containerização utilizando o Docker.",
    imgUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Código em um monitor",
    techs: ["Spring boot", "React.js", "Docker", "JPA/Hibernate", "JWT"],
  },
  {
    header: "Portfolio pessoal",
    content:
      "Site responsivo construído para exibir projetos e meu processo de desenvolvimento. Foi utilizado React.js para componentização, TailwindCSS para estilização e a biblioteca Motion para animações.",
    imgUrl: "https://i.ibb.co/5h55mWsQ/image.png",
    imgAlt: "Imagem do portfolio pessoal",
    techs: ["React.js", "TailwindCSS", "Typescript"],
  },
  {
    header: "Projeto estágio (Confidencial)",
    content:
      "Projeto realizado durante o estágio. Resumo público: trabalho em equipe (6 pessoas), design, desenvolvimento full-stack, containers e revisão/merge de PRs.",
    imgUrl: cartoonPadlock,
    imgAlt: "Cadeado confidencial",
    techs: [
      "Spring Boot",
      "React.js",
      "Typescript",
      "Postgresql",
      "Docker",
      "JWT",
      "JPA/Hibernate",
      "Figma",
    ],
  },
  {
    header: "Url Shortener",
    content:
      "Um encurtador de URL feito com Node.js e React.js com o objetivo de praticar os conceitos estudados.",
    imgUrl: "https://i.ibb.co/fVbNLQk5/Captura-de-tela-2025-03-29-020156.png",
    imgAlt: "Imagem do encurtador de URL",
    techs: [
      "Typescript",
      "Node.js",
      "React.js",
      "Postgresql",
      "Bootstrap",
      "Prisma",
    ],
  },
  {
    header: "Event API",
    content:
      "API Restful desenvolvida para gerenciar eventos e ingressos. O projeto foi criado com fins de estudo, visando aprimorar habilidades em modelagem de dados com MongoDB, segurança com JWT e validação de dados com Zod.",
    imgUrl: "https://i.ibb.co/ZpdTyFrC/imagem-2025-09-16-211443734.png",
    imgAlt: "Imagem da API de eventos",
    techs: ["Typescript", "Node.js", "Zod", "MongoDB", "JWT", "Prisma"],
  },
];

const Projects = () => {
  return (
    <div className="max-w-full mx-auto h-full py-10 flex flex-col gap-5 items-center lg:items-start">
      <ContentSummary emoji="🔗" content="Portfolio" />
      <TypingEffect
        text="Trabalhos e projetos"
        className="font-extrabold text-4xl"
      />
      <p className="text-sm text-gray-500">
        Alguns projetos que podem ser compartilhados.
      </p>

      <div className="hidden lg:grid lg:grid-cols-3 md:grid-cols-2 grid-rows-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.header}
            header={project.header}
            content={project.content}
            imgUrl={project.imgUrl}
            imgAlt={project.imgAlt}
            techs={project.techs}
          />
        ))}
      </div>

      <div className="block lg:hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full max-w-sm md:max-w-3xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-90 md:basis-1/2">
                {" "}
                <div className="p-1">
                  <ProjectCard
                    header={project.header}
                    content={project.content}
                    imgUrl={project.imgUrl}
                    imgAlt={project.imgAlt}
                    techs={project.techs}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
