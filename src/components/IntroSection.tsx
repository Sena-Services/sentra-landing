"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      "From the moment a customer inquires about a trip to the final reconciliation of accounts, Sentra handles every single workflow. Quote generation, booking management, payment processing, supplier coordination, document handling, customer communication, reporting, and financial reconciliation—all seamlessly integrated in one unified platform.",
    color: "text-sentra-apricot-jet",
    decorationColor: "decoration-sentra-apricot-jet",
  },
  {
    word: "AI-centred",
    definition:
      "Our advanced AI engine transforms how you work by intelligently drafting personalized itineraries, suggesting profitable upsells based on customer preferences, providing instant customer support responses, optimizing pricing strategies, and automating routine tasks. Think of it as having an expert travel consultant and business analyst working 24/7 alongside your team.",
    color: "text-sentra-ocean-route",
    decorationColor: "decoration-sentra-ocean-route",
  },
  {
    word: "B2B",
    definition:
      "Built specifically for travel agencies and tour operators, not generic consumers. We understand complex mark-up structures, multi-tier commission systems, custom branding requirements, white-label solutions, corporate travel policies, group booking dynamics, and the intricate relationships between agencies, suppliers, and corporate clients.",
    color: "text-sentra-apricot-jet",
    decorationColor: "decoration-sentra-apricot-jet",
  },
  {
    word: "all sizes",
    definition:
      "Whether you're a solo travel agent just starting out, a mid-size agency managing hundreds of bookings monthly, or an enterprise consolidator handling thousands of transactions, Sentra automatically scales with your business. Our flexible pricing, modular features, and infrastructure grow seamlessly as you expand without any platform migrations or disruptions.",
    color: "text-sentra-ocean-route",
    decorationColor: "decoration-sentra-ocean-route",
  },
] as const;

// Map Tailwind color classes to hex values
const tailwindToHexColorMap: { [key: string]: string } = {
  "text-sentra-ocean-route": "#4A868C", // Updated to match tailwind.config.ts
  "text-sentra-apricot-jet": "#E26F3C", // Updated to match tailwind.config.ts
  "text-sentra-midnight-deck": "#264653", // Unchanged
  "text-sentra-dune-mist": "#EFE7DC", // Updated to match tailwind.config.ts
  "text-sentra-travertine": "#E9C46A", // From tailwind.config.ts
  // text-orange-800 will use FALLBACK_UNDERLINE_COLOR
};
const FALLBACK_UNDERLINE_COLOR = "#E26F3C"; // This is now the same as text-sentra-apricot-jet

export default function IntroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lastHoveredIdx, setLastHoveredIdx] = useState(-1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % tokens.length);
      setLastHoveredIdx(-1);
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

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
    leftVertical: "mt-[3rem] lg:mt-[3rem] xl:mt-[4rem] 2xl:mt-[-4rem] ", // Move left content up/down: 'mt-[-4rem]' (up), 'mt-[2rem]' (down)
    leftHorizontal: "ml-0 lg:ml-[5rem] xl:ml-[1.5rem] 2xl:ml-[5rem]", // Move left content left/right: 'ml-[-2rem]' (left), 'ml-[2rem]' (right)

    // RIGHT IMAGE POSITIONING
    rightVertical: "mt-0 lg:mt-[-10rem] xl:mt-[-3.5rem] 2xl:mt-[-13rem]", // Move right image up/down: 'mt-[-4rem]' (up), 'mt-[2rem]' (down)
    rightHorizontal: "mr-[-2rem] xl:mr-[-13rem] 2xl:mr-[-15rem]", // Move image toward screen edge: increase negative values to push right

    // SECTION WIDTHS (must add up to 100%)
    leftWidth: "w-[50%] lg:w-[120%] xl:w-[125%] 2xl:w-[125%] ", // Left section width: 'lg:w-[40%]', 'lg:w-[50%]', etc.
    rightWidth: "lg:w-[80%]", // Right section width: 'lg:w-[60%]', 'lg:w-[50%]', etc.

    // LEFT CONTENT SIZES
    titleSize: "text-2xl md:text-6xl lg:text-4xl", // Main title size: 'text-3xl md:text-5xl lg:text-6xl' (smaller), 'text-5xl md:text-7xl lg:text-8xl' (larger)
    descriptionSize: "text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl", // Description text size: 'text-base md:text-xl lg:text-2xl' (smaller), 'text-xl md:text-3xl lg:text-4xl' (larger)
    definitionSize: "text-lg md:text-xl lg:text-2xl", // Definition text size: 'text-base md:text-lg lg:text-xl' (smaller), 'text-xl md:text-2xl lg:text-3xl' (larger)
    definitionKeywordSize: "text-xl lg:text-2xl", // DEPRECATED by direct styling, kept for reference
    definitionStyle: "font-medium", // REMOVED italic, kept for reference
    titleMargin: "mb-8 lg:mb-10", // Space after title: 'mb-4 lg:mb-6' (smaller), 'mb-12 lg:mb-16' (larger)
    descriptionMargin: "mb-8 lg:mb-10", // Space after description: 'mb-4 lg:mb-6' (smaller), 'mb-12 lg:mb-16' (larger)
    definitionSpacing: "mt-3", // Space between keyword and definition: 'mt-2' (smaller), 'mt-4' (larger)

    // IMAGE SIZES
    imageSize: "w-50 sm:w-50 lg:w-[800px] xl:w-[800px] 2xl:w-[800px]", // Responsive image sizes
    imagePadding: "p-2 lg:p-4", // E.g. \'p-1\', \'p-6\'
    contentPadding: "lg:pr-0", // E.g. \'lg:pr-8\', \'lg:pr-16\'
    answerLineHeight: "leading-relaxed", // E.g. leading-snug, leading-normal
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
    <section id="intro" className="relative isolate h-screen">
      <div className="h-full grid lg:grid-cols-2 items-start lg:items-center">
        <div
          className={`relative z-20 mx-auto max-w-7xl px-6 lg:pl-8 w-full ${MANUAL_CONTROLS.leftWidth}`}
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
                <span className="text-sentra-apricot-jet text-[1.8em]">
                  Sentra
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
                  <span className="font-rockwell">Sentra is a </span>
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
                    platform that caters to travel agencies of
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
              {/* Definition block is now INSIDE the relative div */}
              <div className="min-h-[12rem] lg:min-h-[16rem] xl:min-h-[22rem]">
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
            </div>{" "}
            {/* End of wrapper div for background pattern */}
          </div>
        </div>

        <div
          className={`relative z-10 flex justify-center lg:justify-end items-center h-full lg:pl-8 ${MANUAL_CONTROLS.rightWidth}`}
        >
          <div
            className={`bg-sentra-travertine rounded-full ${MANUAL_CONTROLS.imagePadding} ${MANUAL_CONTROLS.rightHorizontal} ${MANUAL_CONTROLS.rightVertical}`}
          >
            <Image
              src={`${MANUAL_CONTROLS.imageSrc}`}
              alt="Orange jet swooping over a teal globe"
              width={1500}
              height={1500}
              priority
              className={`${MANUAL_CONTROLS.imageSize} select-none pointer-events-none`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
