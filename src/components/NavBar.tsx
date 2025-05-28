import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About Us' }
]

export default function NavBar() {
  // 🎯 NAVBAR MANUAL CONTROLS - Adjust these values to control navbar positioning and spacing
  const NAVBAR_CONTROLS = {
    // NAVBAR POSITIONING & SPACING
    navbarPadding: 'py-3',                         // Navbar height: 'py-1' (smaller), 'py-6' (taller)
    navbarHorizontal: 'px-6 lg:px-8',             // Navbar side padding: 'px-4', 'px-12', etc.
    
    // LOGO CONTROLS
    logoGap: 'gap-2',                              // Space between logo and text: 'gap-1', 'gap-4', etc.
    logoSize: 'width={44} height={44}',           // Logo image size (change both width and height)
    logoTextSize: 'text-2xl',                     // Logo text size: 'text-xl', 'text-3xl', etc.
    
    // NAVIGATION SPACING
    navLinksGap: 'gap-10',                        // Space between nav links: 'gap-6', 'gap-12', etc.
    navToButtonGap: 'gap-10',                     // Space between nav and CTA button: 'gap-6', 'gap-12', etc.
    
    // BUTTON STYLING
    buttonPadding: 'py-2.5 px-6',                 // CTA button size: 'py-2 px-4' (smaller), 'py-3 px-8' (larger)
    buttonTextSize: 'text-base',                  // Button text size: 'text-sm', 'text-lg', etc.
  }

  return (
    <header className="sticky top-0 z-30 bg-sentra-travertine/90 backdrop-blur">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between ${NAVBAR_CONTROLS.navbarPadding} ${NAVBAR_CONTROLS.navbarHorizontal}`}>
        {/* logo block */}
        <Link href="#intro" className={`flex items-center ${NAVBAR_CONTROLS.logoGap}`}>
          <Image src="/logo.png" width={44} height={44} alt="Sentra logo" />
          <span className={`${NAVBAR_CONTROLS.logoTextSize} font-semibold text-sentra-midnight-deck`}>Sentra</span>
        </Link>

        {/* RIGHT SIDE */}
        <div className={`flex items-center ${NAVBAR_CONTROLS.navToButtonGap}`}>
          <ul className={`hidden md:flex items-center ${NAVBAR_CONTROLS.navLinksGap} text-sentra-midnight-deck`}>
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sentra-apricot-jet transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* CTA */}
          <Link
            href="#book-demo"
            className={`rounded-md bg-sentra-apricot-jet ${NAVBAR_CONTROLS.buttonPadding} ${NAVBAR_CONTROLS.buttonTextSize} font-medium
                       text-sentra-travertine shadow hover:brightness-110 active:brightness-95
                       transition`}
          >
            Get a Demo
          </Link>
        </div>
      </nav>
    </header>
  )
} 