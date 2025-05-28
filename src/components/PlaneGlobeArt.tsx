interface PlaneGlobeArtProps {
  className?: string
}

export default function PlaneGlobeArt({ className = "" }: PlaneGlobeArtProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Globe background */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="#4A868C"
          opacity="0.1"
          className="animate-pulse"
        />
        
        {/* Globe outline */}
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#4A868C"
          strokeWidth="2"
        />
        
        {/* Globe grid lines */}
        <path
          d="M 80 200 Q 200 150 320 200 Q 200 250 80 200"
          fill="none"
          stroke="#4A868C"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M 200 80 Q 250 200 200 320 Q 150 200 200 80"
          fill="none"
          stroke="#4A868C"
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Continents simplified */}
        <path
          d="M 150 160 Q 180 140 220 160 Q 240 180 220 200 Q 180 220 150 200 Z"
          fill="#4A868C"
          opacity="0.3"
        />
        <path
          d="M 160 220 Q 190 210 210 230 Q 200 250 170 240 Z"
          fill="#4A868C"
          opacity="0.3"
        />
        
        {/* Airplane */}
        <g transform="translate(320, 120) rotate(45)">
          {/* Airplane body */}
          <path
            d="M 0 0 L 40 5 L 45 0 L 40 -5 Z"
            fill="#E26F3C"
          />
          {/* Wings */}
          <path
            d="M 15 -15 L 25 -5 L 35 -5 L 25 -15 Z"
            fill="#E26F3C"
          />
          <path
            d="M 15 15 L 25 5 L 35 5 L 25 15 Z"
            fill="#E26F3C"
          />
          {/* Tail */}
          <path
            d="M -5 -8 L 5 -3 L 5 3 L -5 8 Z"
            fill="#E26F3C"
          />
        </g>
        
        {/* Flight path */}
        <path
          d="M 100 100 Q 200 80 300 120"
          fill="none"
          stroke="#E26F3C"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.6"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-20"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        
        {/* Decorative dots around the globe */}
        <circle cx="120" cy="120" r="3" fill="#E26F3C" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="180" r="3" fill="#E26F3C" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="160" cy="300" r="3" fill="#E26F3C" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
    </div>
  )
} 