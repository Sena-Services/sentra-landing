import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About Us' }
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 bg-sentra-travertine/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6">
        {/* logo block */}
        <Link href="#intro" className="flex items-center gap-2">
          <Image src="/logo.png" width={36} height={36} alt="Sentra logo" />
          <span className="text-xl font-semibold text-sentra-midnightDeck">Sentra</span>
        </Link>

        {/* links */}
        <ul className="hidden md:flex items-center gap-8 text-sentra-midnightDeck">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-sentra-apricotJet transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#book-demo"
          className="ml-4 rounded-lg bg-sentra-apricotJet px-5 py-2 text-sm font-medium text-sentra-travertine shadow
                     hover:brightness-110 active:brightness-90 transition-all"
        >
          Get a Demo
        </Link>
      </nav>
    </header>
  )
} 