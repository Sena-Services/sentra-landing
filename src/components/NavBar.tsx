import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About Us' }
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 bg-sentra-travertine/90 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 lg:px-8">
        {/* logo block */}
        <Link href="#intro" className="flex items-center gap-2">
          <Image src="/logo.png" width={44} height={44} alt="Sentra logo" />
          <span className="text-2xl font-semibold text-sentra-midnightDeck">Sentra</span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-10 text-sentra-midnightDeck">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sentra-apricotJet transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link
            href="#book-demo"
            className="rounded-md bg-sentra-apricotJet py-2.5 px-6 text-base font-medium
                       text-sentra-travertine shadow hover:brightness-110 active:brightness-95
                       transition"
          >
            Get a Demo
          </Link>
        </div>
      </nav>
    </header>
  )
} 