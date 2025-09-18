import React from "react";
import TechInfoLabel from "./TechCardTag";
import TechCardTag from "./TechCardTag";
import { motion, rgba } from "framer-motion";

const ProjectCard = ({
  header,
  content,
  imgUrl,
  techs,
}: {
  header: string;
  content: string;
  imgUrl: string;
  imgAlt: string | null;
  techs: string[];
}) => {
  return (
    <motion.div
      className="flex border border-purple-600 h-100 rounded-xl flex-col p-4 gap-5"
      whileHover={{ scale: 1.02 }}
    >
      <header className="font-bold text-xl">{header}</header>
      <p className="text-sm">{content}</p>
      <div className="flex gap-2 flex-wrap">
        {techs.map((tech, i) => (
          <TechCardTag tech={tech} key={`${tech}-${i}`} />
        ))}
      </div>
      <div className="flex-grow overflow-hidden rounded">
        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
