import React from "react";

type Props = {
  emoji: string;
  content: string;
};

const ContentSummary = ({ emoji, content }: Props) => {
  return (
    <div className="p-1 px-3 bg_summary rounded-lg max-w-fit text-center">
      <span className="font-bold text-purple-800">
        {emoji}
        {content}
      </span>
    </div>
  );
};

export default ContentSummary;
