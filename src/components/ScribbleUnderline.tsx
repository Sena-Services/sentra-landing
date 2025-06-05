interface ScribbleUnderlineProps {
  children: React.ReactNode;
  style?:
    | "wavy"
    | "zigzag"
    | "rough"
    | "smooth"
    | "sketchy"
    | "playful"
    | "loopy";
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  className?: string;
  variant?: "default" | "keyword" | "features";
}

const scribblePaths = {
  wavy: "M8,20 q15,-8 30,2 q15,8 30,-2 q15,-8 30,2 q15,8 30,-2 q15,-8 30,2 q15,8 32,-2",
  zigzag:
    "M5,15 L25,25 L45,10 L65,22 L85,8 L105,20 L125,12 L145,24 L165,14 L185,26 L200,18",
  rough:
    "M6,18 q8,-5 16,1 q12,7 24,-3 q8,-4 16,2 q14,6 28,-2 q10,-6 18,1 q16,8 32,-1 q12,-4 20,3 q8,5 16,-1",
  smooth: "M5,20 Q40,15 80,18 Q120,21 160,18 Q180,16 200,19",
  sketchy:
    "M8,20 q3,-2 6,0 q4,3 8,-1 q5,-3 10,1 q6,4 12,-2 q4,-2 8,1 q7,3 14,-1 q5,-4 10,2 q6,3 12,-1 q4,-3 8,1 q5,2 10,-1 q6,-3 12,1 q4,2 8,-1 q5,-2 10,1 q6,3 12,-1 q4,-2 8,1",
  playful:
    "M5,20 Q20,12 35,18 Q50,24 65,16 Q80,8 95,20 Q110,32 125,18 Q140,4 155,22 Q170,30 185,16 Q195,12 200,18",
  loopy:
    "M5,18 Q15,10 25,18 Q35,26 45,18 Q55,10 65,18 C75,25 85,25 95,18 Q105,10 115,18 C125,8 135,8 145,18 Q155,26 165,18 Q175,10 185,18 Q195,14 200,18",
};

export default function ScribbleUnderline({
  children,
  style = "wavy",
  color = "#E26F3C",
  strokeWidth = 3,
  opacity = 0.8,
  className = "",
  variant = "default",
}: ScribbleUnderlineProps) {
  const svgClassName =
    variant === "keyword"
      ? "absolute -bottom-[-.05rem] -left-1 w-[115%] h-[0.35em] pointer-events-none"
      : variant === "features"
      ? "absolute -bottom-2 -left-2 w-[115%] h-[0.25em] pointer-events-none"
      : "absolute -bottom-3 -left-2 w-[140%] h-[0.4em] pointer-events-none";

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className={svgClassName}
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
      >
        <path
          d={scribblePaths[style]}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        />
      </svg>
    </span>
  );
}
