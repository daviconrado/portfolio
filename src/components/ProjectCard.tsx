import React from "react";
import TechInfoLabel from "./TechCardTag";
import TechCardTag from "./TechCardTag";

const ProjectCard = ({
  header,
  content,
  imgUrl,
}: {
  header: string;
  content: string;
  imgUrl: string;
  imgAlt: string | null;
}) => {
  return (
    <div className="flex border border-purple-600 h-100 rounded-xl flex-col p-4 gap-5">
      <header className="font-bold text-xl">{header}</header>
      <p className="text-sm">{content}</p>
      <TechCardTag tech="Typescript" />
      <div className="flex-grow overflow-hidden rounded">
        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProjectCard;
