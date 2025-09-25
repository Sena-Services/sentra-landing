import Image from "next/image";
import Link from "next/link";

const links: { href: string; label: string }[] = [
  // { href: "#features", label: "Features" },
  // { href: "#about", label: "About Us" },
];

export default function NavBar() {
  // 🎯 NAVBAR MANUAL CONTROLS - Adjust these values to control navbar positioning and spacing
  const NAVBAR_CONTROLS = {
    // NAVBAR POSITIONING & SPACING
    navbarPadding: "py-0.5", // Navbar height: 'py-0.5' (smaller), 'py-6' (taller)

    // LOGO CONTROLS
    logoGap: "gap-[.005rem]", // Space between logo and text: 'gap-1', 'gap-4', etc.
    logoSize: "width={40} height={40}", // Logo image size (change both width and height)
    logoTextSize: "text-xl", // Logo text size: 'text-xl', 'text-3xl', etc.

    // NAVIGATION SPACING
    navLinksGap: "gap-10", // Space between nav links: 'gap-6', 'gap-12', etc.
    navToButtonGap: "gap-10", // Space between nav and CTA button: 'gap-6', 'gap-12', etc.

    // BUTTON STYLING
    buttonPadding: "py-1.5 px-4", // CTA button size: 'py-2 px-4' (smaller), 'py-3 px-8' (larger)
    buttonTextSize: "text-sm", // Button text size: 'text-sm', 'text-lg', etc.
  };

  return (
    <header className="sticky top-0 z-30 w-full">
      <nav
        className={`flex items-center justify-between ${NAVBAR_CONTROLS.navbarPadding} px-6 lg:px-8 bg-waygent-light-blue border border-waygent-light-blue border-t-0 rounded-b-3xl shadow-lg backdrop-blur-sm`}
        style={{
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          margin: '0 1rem 0 1rem'
        }}
      >
        {/* logo block */}
        <Link
          href="#intro"
          className={`flex items-center ${NAVBAR_CONTROLS.logoGap} px-3 py-1.5 rounded-lg transition-all duration-300 ease-out hover:bg-white/20 hover:shadow-sm`}
        >
          <Image src="/logo.png" width={40} height={40} alt="Waygent logo" />
          <span
            className={`${NAVBAR_CONTROLS.logoTextSize}  font-rockwell text-waygent-text-primary`}
          >
            Waygent
          </span>
        </Link>

        {/* RIGHT SIDE */}
        <div className={`flex items-center ${NAVBAR_CONTROLS.navToButtonGap}`}>
          <ul
            className={`hidden md:flex items-center ${NAVBAR_CONTROLS.navLinksGap} text-waygent-text-primary`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-3 py-1.5 rounded-lg transition-all duration-300 ease-out hover:text-waygent-orange hover:bg-orange-50 hover:shadow-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Login Button */}
            <Link
              href="#login"
              className={`inline-flex items-center justify-center px-4 py-2 h-8 rounded-lg transition-all duration-300 ease-out
                         whitespace-nowrap text-sm font-medium border border-gray-300
                         bg-transparent text-gray-600 cursor-pointer outline-none relative transform translate-y-0
                         shadow-none leading-none font-sans hover:bg-gray-50 hover:text-gray-800
                         hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-gray-100
                         active:bg-gray-100 active:text-gray-900 active:border-gray-500 active:translate-y-0
                         active:scale-95 active:shadow-sm active:shadow-gray-200
                         focus-visible:shadow-md focus-visible:shadow-gray-200 focus-visible:outline-none`}
              style={{
                boxShadow: 'none'
              }}
            >
              <span className="leading-none">Log In</span>
            </Link>

            {/* Sign Up Button */}
            <Link
              href="#signup"
              className={`inline-flex items-center justify-center px-4 py-2 h-8 rounded-lg transition-all duration-300 ease-out
                         whitespace-nowrap text-sm font-medium border-2 border-waygent-orange
                         bg-waygent-orange text-white cursor-pointer outline-none relative transform translate-y-0
                         shadow-sm leading-none font-sans hover:bg-waygent-orange hover:border-waygent-orange
                         hover:-translate-y-0.5 hover:shadow-md hover:shadow-orange-200
                         active:bg-waygent-orange active:border-waygent-orange active:translate-y-0
                         active:scale-95 active:shadow-sm active:shadow-orange-300
                         focus-visible:shadow-lg focus-visible:shadow-orange-300 focus-visible:outline-none`}
              style={{
                boxShadow: '0 1px 3px 0 rgba(245, 158, 11, 0.1), 0 1px 2px 0 rgba(245, 158, 11, 0.06)'
              }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 flex-shrink-0 transition-all duration-300 ease-out">
                  <svg className="w-4 h-4 transition-all duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="leading-none">Sign Up</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
