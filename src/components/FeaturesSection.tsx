'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
  Puzzle, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Workflow 
} from 'lucide-react'

const features = [
  {
    id: 'integrations',
    name: 'Lead Generation',
    icon: Puzzle,
    description: 'Connect with all your favorite tools',
    imageSrc: '/features1.png'
  },
  {
    id: 'automation',
    name: 'AUTOMATION',
    icon: Users,
    description: 'Streamline repetitive tasks',
    imageSrc: '/features2.png'
  },
  {
    id: 'communication',
    name: 'COMMUNICATION',
    icon: MessageSquare,
    description: 'Unified messaging platform',
    imageSrc: null
  },
  {
    id: 'reporting',
    name: 'REPORTING',
    icon: BarChart3,
    description: 'Data-driven insights',
    imageSrc: null
  },
  {
    id: 'workflows',
    name: 'WORKFLOWS',
    icon: Workflow,
    description: 'Automated business processes',
    imageSrc: null
  }
]

export default function FeaturesSection() {
  const MANUAL_CONTROLS = {
    leftWidth: 'w-[25%]',
    rightWidth: 'w-[75%]',
    sidebarPadding: 'px-[6rem] py-8',
    sidebarSpacing: 'space-y-1',
    itemPadding: 'px-4 py-6',
    itemSpacing: 'mb-2',
    iconSize: 'w-6 h-6',
    textSize: 'text-sm font-semibold tracking-wide',
    activeItemBg: 'bg-sentra-apricot-jet text-white',
    inactiveItemBg: 'bg-transparent text-sentra-midnight-deck hover:bg-sentra-dune-mist',
    activeIconColor: 'text-white',
    inactiveIconColor: 'text-sentra-ocean-route',
    imageMaxWidth: 'max-w-[150%]',
    imageMaxHeight: 'max-h-[100%]',
  }

  const [activeFeature, setActiveFeature] = useState(features[0].id)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const activeIndex = features.findIndex(f => f.id === activeFeature)
    if (scrollContainerRef.current && featureRefs.current[activeIndex]) {
      const container = scrollContainerRef.current
      const targetElement = featureRefs.current[activeIndex]
      if (targetElement) {
        const scrollLeft = targetElement.offsetLeft - container.offsetLeft
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        })
      }
    }
  }, [activeFeature])

  return (
    <section 
      id="features" 
      className="h-[90vh] bg-sentra-travertine flex flex-col overflow-hidden pt-8 pb-8"
    >
      <div className="flex flex-1 h-full">
        {/* LEFT SIDEBAR: Features List */}
        <div className={`${MANUAL_CONTROLS.leftWidth} bg-sentra-travertine border-r border-sentra-dune-mist flex-shrink-0 h-full overflow-y-auto`}>
          <div className={`${MANUAL_CONTROLS.sidebarPadding}`}>
            <div className="mb-8">
              <h2 className="text-sentra-midnight-deck font-bold text-lg tracking-wide mb-2">
                FEATURES
              </h2>
            </div>
            <div className={`${MANUAL_CONTROLS.sidebarSpacing}`}>
              {features.map((feature) => {
                const Icon = feature.icon
                const isActive = activeFeature === feature.id
                
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`
                      ${MANUAL_CONTROLS.itemPadding} 
                      ${MANUAL_CONTROLS.itemSpacing}
                      ${isActive ? MANUAL_CONTROLS.activeItemBg : MANUAL_CONTROLS.inactiveItemBg}
                      rounded-lg cursor-pointer transition-all duration-300 ease-in-out
                      group
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        className={`
                          ${MANUAL_CONTROLS.iconSize} 
                          ${isActive ? MANUAL_CONTROLS.activeIconColor : MANUAL_CONTROLS.inactiveIconColor}
                          transition-colors duration-300
                        `} 
                      />
                      <span className={`${MANUAL_CONTROLS.textSize}`}>
                        {feature.name}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT AREA: Horizontal Scroller for Feature Details */}
        <div 
          ref={scrollContainerRef}
          className={`${MANUAL_CONTROLS.rightWidth} bg-sentra-travertine flex overflow-x-auto scroll-smooth snap-x snap-mandatory h-full`}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => { featureRefs.current[index] = el; }}
              className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center p-4"
            >
              {feature.imageSrc ? (
                <img 
                  src={feature.imageSrc} 
                  alt={`${feature.name} Data Flow`} 
                  className={`${MANUAL_CONTROLS.imageMaxWidth} ${MANUAL_CONTROLS.imageMaxHeight} object-contain`} 
                />
              ) : (
                <div className="text-center text-sentra-midnight-deck/40">
                  <p className="text-xl font-medium">
                    {feature.name} - Data Flow Diagram Area
                  </p>
                  <p className="text-sm mt-2">
                    (Content Coming Soon)
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 