import { motion } from "framer-motion";
import ScribbleUnderline from "./ScribbleUnderline";

interface KeywordProps {
  word: string;
  index: number;
  active: number;
  setActive: (i: number) => void;
  onMouseLeave: () => void;
  color: string;
  resolvedUnderlineColor: string;
}

export function Keyword({
  word,
  index,
  active,
  setActive,
  onMouseLeave,
  color,
  resolvedUnderlineColor,
}: KeywordProps) {
  const isActive = index === active;
  // const textSizeClass = isActive ? "text-4xl" : "text-3xl"; // Keep text size constant
  const underlineOpacity = isActive ? 0.9 : 0;

  // Commented out bg animation logic
  /* ... */

  return (
    <span
      onMouseEnter={() => setActive(index)}
      onMouseLeave={onMouseLeave}
      className={`relative inline-block cursor-pointer transition-opacity duration-200 // Changed transition target
        font-rockwell font-bold text-xl sm:text-2xl md:text-3xl // Responsive size
        ${color} 
        py-0.5 sm:py-1 rounded-md align-baseline bg-transparent`}
    >
      {/* Motion span for background animation is commented out */}
      <ScribbleUnderline
        style="rough"
        color={resolvedUnderlineColor}
        strokeWidth={6}
        opacity={underlineOpacity} // Conditional opacity
        className="pb-1 sm:pb-2"
        variant="keyword"
      >
        <span className="relative z-[2] px-0.5 sm:px-1">{word}</span>
      </ScribbleUnderline>
    </span>
  );
}
