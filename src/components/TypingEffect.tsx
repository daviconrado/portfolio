import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  text: string;
  className?: string;
};

export default function TypingEffect({ as, text, className }: Props) {
  const Tag: any = as || "h2";
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const lines = text.split("\n");

  let globalIndex = 0;

  return (
    <Tag
      ref={ref as any}
      s
      className={`${className ?? ""} whitespace-pre-line`}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split("").map((char) => {
            const idx = globalIndex++;
            const displayChar = char === " " ? "\u00A0" : char;

            return (
              <motion.span
                key={`${li}-${idx}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.18, delay: idx * 0.06 }}
                style={{ display: "inline-block" }}
              >
                {displayChar}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
