'use client'

import React, { useState } from 'react'
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
    name: 'INTEGRATIONS',
    icon: Puzzle,
    description: 'Connect with all your favorite tools'
  },
  {
    id: 'automation',
    name: 'AUTOMATION',
    icon: Users,
    description: 'Streamline repetitive tasks'
  },
  {
    id: 'communication',
    name: 'COMMUNICATION',
    icon: MessageSquare,
    description: 'Unified messaging platform'
  },
  {
    id: 'reporting',
    name: 'REPORTING',
    icon: BarChart3,
    description: 'Data-driven insights'
  },
  {
    id: 'workflows',
    name: 'WORKFLOWS',
    icon: Workflow,
    description: 'Automated business processes'
  }
]

export default function FeaturesSection() {
  // 🎯 MANUAL CONTROLS - Adjust these values to control positioning and sizing
  const MANUAL_CONTROLS = {
    // SECTION LAYOUT
    leftWidth: 'w-[25%]',           // Left sidebar width (adjustable as requested)
    rightWidth: 'w-[75%]',          // Right content area width
    
    // SIDEBAR STYLING
    sidebarPadding: 'px-[6rem] py-8',
    sidebarSpacing: 'space-y-1',
    
    // FEATURE ITEM STYLING
    itemPadding: 'px-4 py-6',
    itemSpacing: 'mb-2',
    iconSize: 'w-6 h-6',
    textSize: 'text-sm font-semibold tracking-wide',
    
    // COLORS & STATES
    activeItemBg: 'bg-sentra-apricot-jet text-white',
    inactiveItemBg: 'bg-transparent text-sentra-midnight-deck hover:bg-sentra-dune-mist',
    activeIconColor: 'text-white',
    inactiveIconColor: 'text-sentra-ocean-route'
  }

  const [activeFeature, setActiveFeature] = useState('workflows')

  return (
    <section 
      id="features" 
      className="min-h-screen bg-sentra-travertine"
    >
      <div className="h-full flex">
        {/* LEFT SIDEBAR: Features List */}
        <div className={`${MANUAL_CONTROLS.leftWidth} bg-sentra-travertine border-r border-sentra-dune-mist`}>
          <div className={`${MANUAL_CONTROLS.sidebarPadding}`}>
            {/* Features Header */}
            <div className="mb-8">
              <h2 className="text-sentra-midnight-deck font-bold text-lg tracking-wide mb-2">
                FEATURES
              </h2>
            </div>
            
            {/* Features List */}
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

        {/* RIGHT CONTENT AREA: Blank for now (future data flow diagrams) */}
        <div className={`${MANUAL_CONTROLS.rightWidth} bg-sentra-travertine`}>
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-sentra-midnight-deck/40">
              <p className="text-xl font-medium">
                Data Flow Diagram Area
              </p>
              <p className="text-sm mt-2">
                (Coming Soon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 