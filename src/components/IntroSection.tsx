'use client'

import { useState, useEffect } from 'react'
import { Keyword } from './Keyword'
import PlaneGlobeArt from './PlaneGlobeArt'

const tokens = [
  { word: 'lightweight', definition: 'Cloud-native, zero-install—runs entirely in your browser.' },
  { word: 'end-to-end', definition: 'Covers every workflow from quotation to reconciliation.' },
  { word: 'AI-centred', definition: 'Uses generative AI for itinerary drafting, upsell suggestions & support.' },
  { word: 'B2B', definition: 'Built for agencies; supports complex mark-ups, overrides, sub-brands.' },
  { word: 'all sizes', definition: 'From solo agents to enterprise consolidators—auto-scales with you.' },
] as const

export default function IntroSection() {
  const [activeIdx, setActiveIdx] = useState(0)        // which token is glowing
  const [paused, setPaused] = useState(false)          // true when hovering

  // rotate every 4 seconds
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActiveIdx(i => (i + 1) % tokens.length), 4000)
    return () => clearInterval(id)
  }, [paused])

  // show definition
  const activeDefinition = tokens[activeIdx]?.definition

  return (
    <section 
      id="intro" 
      className="relative flex flex-col-reverse lg:flex-row items-center gap-10 py-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen"
    >
      {/* LEFT: copy block */}
      <div className="w-full lg:w-6/12">
        <h1 className="text-5xl font-black text-sentra-midnightDeck mb-8">
          What is Sentra?
        </h1>

        {/* Answer line with animated keywords */}
        <div 
          className="text-xl leading-relaxed text-sentra-midnightDeck"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span>Sentra is a </span>
          <Keyword 
            word={tokens[0].word} 
            definition={tokens[0].definition}
            index={0} 
            active={activeIdx} 
            setActive={setActiveIdx}
          />
          <span>, </span>
          <Keyword 
            word={tokens[1].word} 
            definition={tokens[1].definition}
            index={1} 
            active={activeIdx} 
            setActive={setActiveIdx}
          />
          <span>, </span>
          <Keyword 
            word={tokens[2].word} 
            definition={tokens[2].definition}
            index={2} 
            active={activeIdx} 
            setActive={setActiveIdx}
          />
          <span> </span>
          <Keyword 
            word={tokens[3].word} 
            definition={tokens[3].definition}
            index={3} 
            active={activeIdx} 
            setActive={setActiveIdx}
          />
          <span> travel platform that caters to travel agencies of </span>
          <Keyword 
            word={tokens[4].word} 
            definition={tokens[4].definition}
            index={4} 
            active={activeIdx} 
            setActive={setActiveIdx}
          />
          <span>.</span>
        </div>

        {/* Dynamic definition slot */}
        <div className="mt-6 text-lg text-sentra-oceanRoute min-h-[5rem] transition-all duration-300">
          {activeDefinition && (
            <p className="animate-fade-in">
              {activeDefinition}
            </p>
          )}
        </div>
      </div>

      {/* RIGHT: plane + globe illustration */}
      <div className="w-full lg:w-6/12 flex justify-center">
        <PlaneGlobeArt className="w-60 lg:w-80" />
      </div>
    </section>
  )
} 