import NavBar from '@/components/NavBar'
import IntroSection from '@/components/IntroSection'

export default function Home() {
  return (
    <>
      <NavBar />
      <IntroSection />
      
      {/* Placeholder sections for navbar anchor links */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sentra-midnightDeck mb-8">Features</h2>
        <p className="text-sentra-midnightDeck">Features section coming soon...</p>
      </section>
      
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sentra-midnightDeck mb-8">About Us</h2>
        <p className="text-sentra-midnightDeck">About section coming soon...</p>
      </section>
      
      <section id="book-demo" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sentra-midnightDeck mb-8">Book a Demo</h2>
        <p className="text-sentra-midnightDeck">Demo booking section coming soon...</p>
      </section>
    </>
  )
}
