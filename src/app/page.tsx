import NavBar from "@/components/NavBar";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { GridPattern } from "@/components/magicui/grid-pattern";

//   | Prefix | Min Width (px) |
// | :----: | :------------: |
// |   sm   |      640px     |
// |   md   |      768px     |
// |   lg   |     1024px     |
// |   xl   |     1280px     |
// |   2xl  |     1536px     |
const PAGE_MANUAL_CONTROLS = {
  featuresSectionVerticalOffset:
    "mt-[-15rem] lg:mt-[-10rem] xl:mt-[-5rem] 2xl:mt-[-15rem]", // Adjust to control gap: e.g., "mt-0", "mt-[-4rem]", "mt-[-10vh]"
};

export default function Home() {
  return (
    <main className="relative">
      <GridPattern
        width={40}
        height={40}
        x={-5}
        y={-5}
        className="absolute inset-0 h-full w-full fill-gray-900/30 stroke-gray-400/7 pointer-events-none z-15"
      />
      <NavBar />
      <IntroSection />

      <div
        className={`${PAGE_MANUAL_CONTROLS.featuresSectionVerticalOffset}  max-w-7xl mx-[1rem] lg:mx-[1rem] xl:mx-[1rem] 2xl:mx-[5rem]`}
      >
        <FeaturesSection />
      </div>

      {/* <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sentra-midnight-deck mb-8">About Us</h2>
        <p className="text-sentra-midnight-deck">About section coming soon...</p>
      </section>
      
      <section id="book-demo" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sentra-midnight-deck mb-8">Book a Demo</h2>
        <p className="text-sentra-midnight-deck">Demo booking section coming soon...</p>
      </section> */}
    </main>
  );
}
