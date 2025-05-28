interface KeywordProps {
  word: string
  definition: string
  index: number
  active: number
  setActive: (i: number) => void
}

export function Keyword({ word, definition, index, active, setActive }: KeywordProps) {
  const isActive = index === active
  
  return (
    <span
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(-1)}
      className={`transition-colors duration-300 underline underline-offset-4 decoration-2 cursor-pointer
        ${isActive ? 'text-sentra-apricotJet decoration-sentra-apricotJet font-semibold'
                   : 'text-sentra-midnightDeck decoration-transparent'}`}
    >
      {word}
    </span>
  )
} 