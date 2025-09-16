import { div, p } from "motion/react-client";
import React from "react";

const TechCardTag = ({ tech }: { tech: string }) => {
  return (
    <div className="flex">
      <p className="bg_summary p-1 px-2 rounded-full text-purple-700 font-bold text-sm">
        {tech}
      </p>
    </div>
  );
};

export default TechCardTag;
