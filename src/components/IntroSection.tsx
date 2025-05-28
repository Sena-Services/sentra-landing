'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Keyword } from './Keyword'

const tokens = [
  { 
    word: 'lightweight', 
    definition: 'Cloud-native architecture means zero installations, zero maintenance, and zero IT headaches. Our platform runs entirely in your browser with enterprise-grade security and performance. No servers to manage, no software to update, no complex integrations. Just instant access from anywhere in the world with nothing more than an internet connection.',
    color: 'text-sentra-ocean-route',
    decorationColor: 'decoration-sentra-ocean-route'
  },
  { 
    word: 'end-to-end', 
    definition: 'From the moment a customer inquires about a trip to the final reconciliation of accounts, Sentra handles every single workflow. Quote generation, booking management, payment processing, supplier coordination, document handling, customer communication, reporting, and financial reconciliation—all seamlessly integrated in one unified platform.',
    color: 'text-sentra-apricot-jet',
    decorationColor: 'decoration-sentra-apricot-jet'
  },
  { 
    word: 'AI-centred', 
    definition: 'Our advanced AI engine transforms how you work by intelligently drafting personalized itineraries, suggesting profitable upsells based on customer preferences, providing instant customer support responses, optimizing pricing strategies, and automating routine tasks. Think of it as having an expert travel consultant and business analyst working 24/7 alongside your team.',
    color: 'text-sentra-midnight-deck',
    decorationColor: 'decoration-sentra-midnight-deck'
  },
  { 
    word: 'B2B', 
    definition: 'Built specifically for travel agencies and tour operators, not generic consumers. We understand complex mark-up structures, multi-tier commission systems, custom branding requirements, white-label solutions, corporate travel policies, group booking dynamics, and the intricate relationships between agencies, suppliers, and corporate clients.',
    color: 'text-orange-800',
    decorationColor: 'decoration-orange-800'
  },
  { 
    word: 'all sizes', 
    definition: 'Whether you\'re a solo travel agent just starting out, a mid-size agency managing hundreds of bookings monthly, or an enterprise consolidator handling thousands of transactions, Sentra automatically scales with your business. Our flexible pricing, modular features, and infrastructure grow seamlessly as you expand without any platform migrations or disruptions.',
    color: 'text-sentra-ocean-route',
    decorationColor: 'decoration-sentra-ocean-route'
  },
] as const

export default function IntroSection() {
  // 🎯 MANUAL CONTROLS - Adjust these values to control all positioning and sizing
  const MANUAL_CONTROLS = {
    imageSrc: '/hero2.png',
    // LEFT CONTENT POSITIONING
    leftVertical: 'mt-[-2rem] lg:mt-[-10rem]',     // Move left content up/down: 'mt-[-4rem]' (up), 'mt-[2rem]' (down)
    leftHorizontal: 'ml-0 lg:ml-[5rem]',                // Move left content left/right: 'ml-[-2rem]' (left), 'ml-[2rem]' (right)
    
    // RIGHT IMAGE POSITIONING  
    rightVertical: 'mt-0 lg:mt-[-10rem]',                 // Move right image up/down: 'mt-[-4rem]' (up), 'mt-[2rem]' (down)
    rightHorizontal: 'mr-[-2rem] xl:mr-[-10rem] 2xl:mr-[-6rem]', // Move image toward screen edge: increase negative values to push right
    
    // SECTION WIDTHS (must add up to 100%)
    leftWidth: 'lg:w-[100%]',                       // Left section width: 'lg:w-[40%]', 'lg:w-[50%]', etc.
    rightWidth: 'lg:w-[80%]',                      // Right section width: 'lg:w-[60%]', 'lg:w-[50%]', etc.
    
    // LEFT CONTENT SIZES
    titleSize: 'text-2xl md:text-6xl lg:text-6xl', // Main title size: 'text-3xl md:text-5xl lg:text-6xl' (smaller), 'text-5xl md:text-7xl lg:text-8xl' (larger)
    descriptionSize: 'text-lg md:text-2xl lg:text-2xl', // Description text size: 'text-base md:text-xl lg:text-2xl' (smaller), 'text-xl md:text-3xl lg:text-4xl' (larger)
    definitionSize: 'text-lg md:text-xl lg:text-2xl', // Definition text size: 'text-base md:text-lg lg:text-xl' (smaller), 'text-xl md:text-2xl lg:text-3xl' (larger)
    definitionKeywordSize: 'text-xl lg:text-2xl',   // Size of keyword in definition: 'text-lg lg:text-xl' (smaller), 'text-2xl lg:text-3xl' (larger)
    definitionStyle: 'font-medium italic',          // Definition text style: 'font-normal' (regular), 'font-bold' (bold), 'font-light italic' (light italic)
    titleMargin: 'mb-8 lg:mb-10',                  // Space after title: 'mb-4 lg:mb-6' (smaller), 'mb-12 lg:mb-16' (larger)
    descriptionMargin: 'mb-8 lg:mb-10',           // Space after description: 'mb-4 lg:mb-6' (smaller), 'mb-12 lg:mb-16' (larger)
    definitionSpacing: 'mt-3',                     // Space between keyword and definition: 'mt-2' (smaller), 'mt-4' (larger)
    
    // IMAGE SIZES
    imageSize: 'w-80 sm:w-96 lg:w-[750px] xl:w-[1500px] 2xl:w-[1000px]', // Responsive image sizes
    imagePadding: 'p-2 lg:p-4',                    // Padding around image in circle: 'p-1', 'p-6', etc.
    
    // CONTENT SPACING
    contentPadding: 'lg:pr-0',                     // Right padding on left content: 'lg:pr-8', 'lg:pr-16', etc.
  }
  
  const [activeIdx, setActiveIdx] = useState(0)        // which token is glowing
  const [paused, setPaused] = useState(false)          // true when hovering
  const [lastHoveredIdx, setLastHoveredIdx] = useState(-1) // track last hovered for sticky behavior

  // rotate every 4 seconds
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActiveIdx(i => (i + 1) % tokens.length)
      setLastHoveredIdx(-1) // reset when timer continues
    }, 4000)
    return () => clearInterval(id)
  }, [paused])

  // show definition - add safety check for valid index
  const activeToken = activeIdx >= 0 ? tokens[activeIdx] : null

  const handleKeywordHover = (index: number) => {
    setActiveIdx(index)
    setLastHoveredIdx(index)
    setPaused(true)
  }

  const handleKeywordLeave = () => {
    setPaused(false)
    // Keep the last hovered keyword active until timer takes over
    if (lastHoveredIdx >= 0) {
      setActiveIdx(lastHoveredIdx)
    }
  }

  return (
    <section 
      id="intro" 
      className="relative isolate h-screen"
    >
      <div className="h-full grid lg:grid-cols-2 items-start lg:items-center">
        {/* LEFT: copy block */}
        <div className={`mx-auto max-w-7xl px-6 lg:pl-8 w-full ${MANUAL_CONTROLS.leftWidth}`}>
          <div className={`${MANUAL_CONTROLS.contentPadding} ${MANUAL_CONTROLS.leftVertical} ${MANUAL_CONTROLS.leftHorizontal}`}>
            <h1 className={`${MANUAL_CONTROLS.titleSize} font-black text-sentra-midnight-deck ${MANUAL_CONTROLS.titleMargin}`}>
              What is Sentra?
            </h1>

            {/* Answer line with animated keywords - Split into 2 lines */}
            <div className={`${MANUAL_CONTROLS.contentPadding} ${MANUAL_CONTROLS.descriptionSize} leading-relaxed text-sentra-midnight-deck ${MANUAL_CONTROLS.descriptionMargin}`}>
              {/* Line 1 */}
              <p className="flex flex-wrap gap-1 mb-2">
                <span>Sentra is a </span>
                <Keyword 
                  word={tokens[0].word} 
                  index={0} 
                  active={activeIdx} 
                  setActive={handleKeywordHover}
                  onMouseLeave={handleKeywordLeave}
                  color={tokens[0].color}
                  decorationColor={tokens[0].decorationColor}
                />
                <span>, </span>
                <Keyword 
                  word={tokens[1].word} 
                  index={1} 
                  active={activeIdx} 
                  setActive={handleKeywordHover}
                  onMouseLeave={handleKeywordLeave}
                  color={tokens[1].color}
                  decorationColor={tokens[1].decorationColor}
                />
                <span>, </span>
                <Keyword 
                  word={tokens[2].word} 
                  index={2} 
                  active={activeIdx} 
                  setActive={handleKeywordHover}
                  onMouseLeave={handleKeywordLeave}
                  color={tokens[2].color}
                  decorationColor={tokens[2].decorationColor}
                />
                <span> </span>
                <Keyword 
                  word={tokens[3].word} 
                  index={3} 
                  active={activeIdx} 
                  setActive={handleKeywordHover}
                  onMouseLeave={handleKeywordLeave}
                  color={tokens[3].color}
                  decorationColor={tokens[3].decorationColor}
                />
              </p>
              
              {/* Line 2 */}
              <p className="flex flex-wrap gap-1">
                <span>travel platform that caters to travel agencies of </span>
                <Keyword 
                  word={tokens[4].word} 
                  index={4} 
                  active={activeIdx} 
                  setActive={handleKeywordHover}
                  onMouseLeave={handleKeywordLeave}
                  color={tokens[4].color}
                  decorationColor={tokens[4].decorationColor}
                />
                <span>.</span>
              </p>
            </div>

            {/* Dynamic definition slot with keyword label - ALWAYS reserve space to prevent jitter */}
            <div className="min-h-[8rem] lg:min-h-[10rem]">
              {activeToken && (
                <div className={`${MANUAL_CONTROLS.definitionSize} leading-relaxed`}>
                  <span className={`${activeToken.color} font-bold underline underline-offset-4 decoration-2 ${activeToken.decorationColor} ${MANUAL_CONTROLS.definitionKeywordSize}`}>
                    {activeToken.word}:
                  </span>
                  <p className={`${activeToken.color} ${MANUAL_CONTROLS.definitionSpacing} ${MANUAL_CONTROLS.definitionStyle} leading-relaxed`}>
                    {activeToken.definition}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: hero image - extends to screen edge */}
        <div className={`flex justify-center lg:justify-end items-center h-full lg:pl-8 ${MANUAL_CONTROLS.rightWidth}`}>
          <div className={`bg-sentra-travertine rounded-full ${MANUAL_CONTROLS.imagePadding} ${MANUAL_CONTROLS.rightHorizontal} ${MANUAL_CONTROLS.rightVertical}`}>
            <Image
              src={`${MANUAL_CONTROLS.imageSrc}`}
              alt="Orange jet swooping over a teal globe"
              width={1400}
              height={1400}
              priority
              className={`${MANUAL_CONTROLS.imageSize} select-none pointer-events-none`}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 