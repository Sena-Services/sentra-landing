interface KeywordProps {
  word: string
  index: number
  active: number
  setActive: (i: number) => void
  onMouseLeave: () => void
  color: string
  decorationColor: string
}

export function Keyword({ word, index, active, setActive, onMouseLeave, color, decorationColor }: KeywordProps) {
  const isActive = index === active
  
  return (
    <span
      onMouseEnter={() => setActive(index)}
      onMouseLeave={onMouseLeave}
      className={`transition-colors duration-300 underline underline-offset-4 decoration-2 cursor-pointer
        ${isActive ? `${color} ${decorationColor} font-semibold`
                   : 'text-sentra-midnight-deck decoration-transparent'}`}
    >
      {word}
    </span>
  )
} 