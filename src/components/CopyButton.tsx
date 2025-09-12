import React, { useState, useRef, useEffect } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CopyButton({
  text = "",
  size = 20,
  className = "",
  tooltip = "Copiar",
  timeout = 1500,
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleCopy = async (e: any) => {
    e && e.preventDefault();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timerRef.current!);
      timerRef.current = setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand("copy");
        setCopied(true);
        clearTimeout(timerRef.current!);
        timerRef.current = setTimeout(() => setCopied(false), timeout);
      } catch (err2) {
        console.error("Não foi possível copiar", err2);
      }

      document.body.removeChild(textarea);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current!);
  }, []);

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={tooltip}
      aria-label={tooltip}
      className={`inline-flex items-center justify-center p-2 rounded-md  transition ${className}`}
    >
      {copied ? (
        <FiCheck size={size} aria-hidden="true" />
      ) : (
        <FiCopy size={size} aria-hidden="true" />
      )}
    </button>
  );
}
