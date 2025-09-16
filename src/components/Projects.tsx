import React from "react";
import ContentSummary from "./ContentSummary";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="max-w-full mx-auto h-full py-10 flex flex-col gap-5">
      <ContentSummary emoji="🔗" content="Porfolio" />
      <h1 className="font-extrabold text-4xl">Trabalhos e projetos</h1>
      <p className="text-sm text-gray-500">
        Alguns projetos que posso compartilhar.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-10"></div>
    </div>
  );
};

export default Projects;
