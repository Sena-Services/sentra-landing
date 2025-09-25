"use client";

import { useState, useEffect, useRef } from "react";
import { Keyword } from "./Keyword";
import ScribbleUnderline from "./ScribbleUnderline";

const tokens = [
  {
    word: `lightweight`,
    definition:
      "Cloud-native architecture means zero installations, zero maintenance, and zero IT headaches. Our platform runs entirely in your browser with enterprise-grade security and performance. No servers to manage, no software to update, no complex integrations. Just instant access from anywhere in the world with nothing more than an internet connection.",
    color: "text-sentra-ocean-route",
    decorationColor: "decoration-sentra-ocean-route",
  },
  {
    word: "end-to-end",
    definition:
      "From initial customer inquiry to final account reconciliation, Waygent handles every single business workflow. Customer management, order processing, inventory tracking, payment processing, supplier coordination, document handling, customer communication, reporting, and financial reconciliation—all seamlessly integrated in one unified platform.",
    color: "text-sentra-ocean-route",
    decorationColor: "decoration-sentra-ocean-route",
  },
  {
    word: "AI-centred",
    definition:
      "Our advanced AI engine transforms how you work by intelligently analyzing customer data, suggesting profitable upsells based on customer preferences, providing instant customer support responses, optimizing pricing strategies, and automating routine tasks. Think of it as having an expert business analyst and operations manager working 24/7 alongside your team.",
    color: "text-sentra-ocean-route",
    decorationColor: "decoration-sentra-ocean-route",
  },
  {
    word: "ERP",
    definition:
      "Enterprise Resource Planning system that integrates all core business processes including finance, human resources, supply chain, manufacturing, and customer relationship management. Built specifically for companies that need comprehensive business management, not just basic tools. We understand complex organizational structures, multi-department workflows, and enterprise-level requirements.",
    color: "text-sentra-ocean-route",
    decorationColor: "decoration-sentra-ocean-route",
  },
  {
    word: "all sizes",
    definition:
      "Whether you're a startup just getting off the ground, a mid-size company managing hundreds of transactions monthly, or an enterprise handling thousands of operations, Waygent automatically scales with your business. Our flexible pricing, modular features, and infrastructure grow seamlessly as you expand without any platform migrations or disruptions.",
    color: "text-sentra-ocean-route",
    decorationColor: "decoration-sentra-ocean-route",
  },
] as const;

// Map Tailwind color classes to hex values
const tailwindToHexColorMap: { [key: string]: string } = {
  // New Waygent colors
  "text-waygent-blue": "#3b82f6",
  "text-waygent-orange": "#f59e0b",
  "text-waygent-text-primary": "#000000",
  "text-waygent-text-secondary": "rgba(0, 0, 0, 0.7)",
  "text-waygent-text-muted": "#6B7280",
  
  // Legacy colors (mapped to new values)
  "text-sentra-ocean-route": "#3b82f6", // Maps to waygent-blue
  "text-sentra-apricot-jet": "#f59e0b", // Maps to waygent-orange
  "text-sentra-midnight-deck": "#000000", // Maps to waygent-text-primary
  "text-sentra-dune-mist": "#FAF9F5", // Maps to waygent-cream
  "text-sentra-travertine": "#FAF9F5", // Maps to waygent-cream
};
const FALLBACK_UNDERLINE_COLOR = "#f59e0b"; // This is now the same as waygent-orange

export default function IntroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lastHoveredIdx, setLastHoveredIdx] = useState(-1);
  const [definitionMaxHeight, setDefinitionMaxHeight] = useState(0);
  const hiddenRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % tokens.length);
      setLastHoveredIdx(-1);
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const measure = () => {
      const max = hiddenRefs.current.reduce((acc, el) => {
        const h = el?.offsetHeight ?? 0;
        return h > acc ? h : acc;
      }, 0);
      if (max > 0) setDefinitionMaxHeight(max);
    };
    // initial measure after fonts render
    const t = setTimeout(measure, 0);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const activeToken = activeIdx >= 0 ? tokens[activeIdx] : null;

  //   | Prefix | Min Width (px) |
  // | :----: | :------------: |
  // |   sm   |      640px     |
  // |   md   |      768px     |
  // |   lg   |     1024px     |
  // |   xl   |     1280px     |
  // |   2xl  |     1536px     |

  const MANUAL_CONTROLS = {
    imageSrc: "/hero2.png",
    // LEFT CONTENT POSITIONING
    leftVertical: "mt-0 md:mt-0 lg:mt-0", // Avoid negative offset to not tuck under navbar
    leftHorizontal: "ml-0 lg:ml-[5rem] xl:ml-[1.5rem] 2xl:ml-[5rem]", // Move left content left/right: 'ml-[-2rem]' (left), 'ml-[2rem]' (right)

    // RIGHT IMAGE POSITIONING
    rightVertical: "mt-0 lg:mt-[-10rem] xl:mt-[-3.5rem] 2xl:mt-[-13rem]", // Move right image up/down: 'mt-[-4rem]' (up), 'mt-[2rem]' (down)
    rightHorizontal: "mr-[-2rem] xl:mr-[-13rem] 2xl:mr-[-15rem]", // Move image toward screen edge: increase negative values to push right

    // SECTION WIDTHS (must add up to 100%)
    leftWidth: "w-[50%] lg:w-[120%] xl:w-[125%] 2xl:w-[125%] ", // Left section width: 'lg:w-[40%]', 'lg:w-[50%]', etc.
    rightWidth: "lg:w-[80%]", // Right section width: 'lg:w-[60%]', 'lg:w-[50%]', etc.

    // LEFT CONTENT SIZES
    titleSize: "text-base sm:text-3xl md:text-4xl lg:text-5xl", // Smaller default, scales up progressively
    descriptionSize: "text-base sm:text-lg md:text-2xl lg:text-3xl", // Responsive description sizes
    definitionSize: "text-base sm:text-lg md:text-xl lg:text-2xl", // Responsive definition sizes
    definitionKeywordSize: "text-xl lg:text-2xl", // DEPRECATED by direct styling, kept for reference
    definitionStyle: "font-medium", // REMOVED italic, kept for reference
    titleMargin: "mb-4 md:mb-6 lg:mb-8", // Tighter to reduce top whitespace
    descriptionMargin: "mt-4 mb-4 md:mt-6 md:mb-6 lg:mt-8 lg:mb-8", // Balanced spacing
    definitionSpacing: "mt-2 md:mt-3", // Slightly tighter on mobile

    // IMAGE SIZES
    imageSize: "w-50 sm:w-50 lg:w-[800px] xl:w-[800px] 2xl:w-[800px]", // Responsive image sizes
    imagePadding: "p-2 lg:p-4", // E.g. \'p-1\', \'p-6\'
    contentPadding: "lg:pr-0", // E.g. \'lg:pr-8\', \'lg:pr-16\'
    answerLineHeight: "leading-normal sm:leading-relaxed", // Tighter on mobile, relaxed above
  };

  const handleKeywordHover = (index: number) => {
    setActiveIdx(index);
    setLastHoveredIdx(index);
    setPaused(true);
  };

  const handleKeywordLeave = () => {
    setPaused(false);
    // Keep the last hovered keyword active until timer takes over
    if (lastHoveredIdx >= 0) {
      // setActiveIdx(lastHoveredIdx); // Optional: keep last hovered active immediately
    }
  };

  return (
    <section id="intro" className="relative isolate h-full overflow-hidden pt-14 sm:pt-16 scroll-mt-16 sm:scroll-mt-20">
      <div className="h-full flex items-start sm:items-center justify-center w-full">
        <div
          className={`relative z-20 mx-auto px-6 w-full text-center md:text-center max-w-5xl lg:max-w-6xl xl:max-w-7xl`}
        >
          <div
            className={`${MANUAL_CONTROLS.contentPadding} ${MANUAL_CONTROLS.leftVertical} ${MANUAL_CONTROLS.leftHorizontal}`}
          >
            {/* Font Comparison - Rockybilly */}
            <h1
              className={`${MANUAL_CONTROLS.titleSize} text-sentra-midnight-deck ${MANUAL_CONTROLS.titleMargin} font-semibold font-rockybilly bg-transparent`}
            >
              what is{" "}
              <ScribbleUnderline
                style="rough"
                color="#E26F3C"
                strokeWidth={7}
                opacity={0.9}
                className="pb-2"
                variant="default"
              >
                <span className="text-sentra-apricot-jet text-[clamp(2.25rem,8vw,4.5rem)] md:text-[clamp(2.75rem,6vw,5rem)] lg:text-[clamp(3rem,5vw,5.25rem)] xl:text-[clamp(3.25rem,4.5vw,5.5rem)] whitespace-nowrap leading-tight">
                  Waygent
                </span>
              </ScribbleUnderline>
              <span className="text-sentra-apricot-jet">?</span>
            </h1>
            {/* Wrap answer and definition in a new div for background pattern */}
            <div className="relative">
              <div
                className={`${MANUAL_CONTROLS.descriptionSize} text-sentra-midnight-deck ${MANUAL_CONTROLS.descriptionMargin} font-medium`}
              >
                <p
                  className={`${MANUAL_CONTROLS.answerLineHeight} font-rockwell`}
                >
                  <span className="font-rockwell">Waygent is a </span>
                  <Keyword
                    word={tokens[0].word}
                    index={0}
                    active={activeIdx}
                    setActive={handleKeywordHover}
                    onMouseLeave={handleKeywordLeave}
                    color={tokens[0].color}
                    resolvedUnderlineColor={
                      tailwindToHexColorMap[tokens[0].color] ||
                      FALLBACK_UNDERLINE_COLOR
                    }
                  />
                  {", "}
                  <Keyword
                    word={tokens[1].word}
                    index={1}
                    active={activeIdx}
                    setActive={handleKeywordHover}
                    onMouseLeave={handleKeywordLeave}
                    color={tokens[1].color}
                    resolvedUnderlineColor={
                      tailwindToHexColorMap[tokens[1].color] ||
                      FALLBACK_UNDERLINE_COLOR
                    }
                  />
                  {", "}
                  <Keyword
                    word={tokens[2].word}
                    index={2}
                    active={activeIdx}
                    setActive={handleKeywordHover}
                    onMouseLeave={handleKeywordLeave}
                    color={tokens[2].color}
                    resolvedUnderlineColor={
                      tailwindToHexColorMap[tokens[2].color] ||
                      FALLBACK_UNDERLINE_COLOR
                    }
                  />
                  {", "}
                  <Keyword
                    word={tokens[3].word}
                    index={3}
                    active={activeIdx}
                    setActive={handleKeywordHover}
                    onMouseLeave={handleKeywordLeave}
                    color={tokens[3].color}
                    resolvedUnderlineColor={
                      tailwindToHexColorMap[tokens[3].color] ||
                      FALLBACK_UNDERLINE_COLOR
                    }
                  />
                  {", "}
                  <span className="font-rockwell">
                    for companies of
                  </span>{" "}
                  <Keyword
                    word={tokens[4].word}
                    index={4}
                    active={activeIdx}
                    setActive={handleKeywordHover}
                    onMouseLeave={handleKeywordLeave}
                    color={tokens[4].color}
                    resolvedUnderlineColor={
                      tailwindToHexColorMap[tokens[4].color] ||
                      FALLBACK_UNDERLINE_COLOR
                    }
                  />
                  <span className="font-rockwell">!</span>
                </p>
              </div>
              {/* Definition block with fixed wrapper height to prevent layout shift */}
              <div
                className="relative min-h-[6rem] lg:min-h-[8rem] xl:min-h-[10rem]"
                style={{ height: definitionMaxHeight ? `${definitionMaxHeight}px` : undefined }}
              >
                <div className="absolute inset-0">
                  {activeToken && (
                    <div
                      className={`${MANUAL_CONTROLS.definitionSize} leading-relaxed`}
                    >
                      <ScribbleUnderline
                        style="rough"
                        color={
                          tailwindToHexColorMap[activeToken.color] ||
                          FALLBACK_UNDERLINE_COLOR
                        }
                        strokeWidth={10}
                        opacity={0.9}
                        className="pb-1"
                        variant="keyword"
                      >
                        <span
                          className={`${activeToken.color} font-rockwell font-bold text-3xl`}
                        >
                          {activeToken.word}:
                        </span>
                      </ScribbleUnderline>
                      <p
                        className={`text-sentra-midnight-deck ${MANUAL_CONTROLS.definitionSpacing} font-medium leading-relaxed font-rockwell bg-transparent`}
                      >
                        {activeToken.definition}
                      </p>
                    </div>
                  )}
                </div>

                {/* Hidden measurer to compute the tallest definition for the current viewport */}
                <div
                  className="absolute opacity-0 pointer-events-none -z-10 inset-0"
                  aria-hidden
                >
                  {tokens.map((t, i) => (
                    <div
                      key={t.word}
                      ref={(el) => {
                        hiddenRefs.current[i] = el;
                      }}
                      className={`${MANUAL_CONTROLS.definitionSize} leading-relaxed`}
                    >
                      <ScribbleUnderline
                        style="rough"
                        color={
                          tailwindToHexColorMap[t.color] || FALLBACK_UNDERLINE_COLOR
                        }
                        strokeWidth={10}
                        opacity={0.9}
                        className="pb-1"
                        variant="keyword"
                      >
                        <span
                          className={`${t.color} font-rockwell font-bold text-3xl`}
                        >
                          {t.word}:
                        </span>
                      </ScribbleUnderline>
                      <p
                        className={`text-sentra-midnight-deck ${MANUAL_CONTROLS.definitionSpacing} font-medium leading-relaxed font-rockwell bg-transparent`}
                      >
                        {t.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>{" "}
            {/* End of wrapper div for background pattern */}
          </div>
        </div>
      </div>
    </section>
  );
}
