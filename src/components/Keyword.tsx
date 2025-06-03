import { motion } from "framer-motion";

interface KeywordProps {
  word: string;
  index: number;
  active: number;
  setActive: (i: number) => void;
  onMouseLeave: () => void;
  color: string;
  decorationColor: string;
}

export function Keyword({
  word,
  index,
  active,
  setActive,
  onMouseLeave,
  color,
  decorationColor,
}: KeywordProps) {
  const isActive = index === active;

  let keywordBgClass = "bg-transparent";
  if (isActive) {
    // Explicitly map text colors to background colors for Tailwind JIT
    if (color === "text-sentra-ocean-route")
      keywordBgClass = "bg-sentra-ocean-route";
    else if (color === "text-sentra-apricot-jet")
      keywordBgClass = "bg-sentra-apricot-jet";
    else if (color === "text-sentra-midnight-deck")
      keywordBgClass = "bg-sentra-midnight-deck";
    else if (color === "text-orange-800") keywordBgClass = "bg-orange-800";
    // 'all sizes' uses 'text-sentra-ocean-route', covered by the first condition.
  }

  return (
    <span
      onMouseEnter={() => setActive(index)}
      onMouseLeave={onMouseLeave}
      className={`relative inline-block cursor-pointer transition-colors duration-300 
        underline underline-offset-4 decoration-2 font-semibold
        ${color} ${decorationColor} 
        py-1 rounded-md align-baseline`}
    >
      {isActive && (
        <motion.span
          layoutId={`keyword-bg-${word}-${index}`}
          className={`absolute top-0 bottom-0 right-0 h-full ${keywordBgClass} rounded-md z-[-1]`}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          exit={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      )}
      <span className="relative z-[1] px-1">{word}</span>
    </span>
  );
}
