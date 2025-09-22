import { motion } from "motion/react";

type Props = {
  emoji: string;
  content: string;
};

const ContentSummary = ({ emoji, content }: Props) => {
  return (
    <div className="p-1 px-3 bg_summary rounded-lg max-w-fit text-center">
      <span className="font-bold text-purple-800">
        <motion.span
          className="inline-block"
          animate={{ rotate: [0, -15, 12, -8, 6, 0] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          {emoji}
        </motion.span>
        {content}
      </span>
    </div>
  );
};

export default ContentSummary;
