import FinalCTA from "./final";
import HeroSection from "./hero";
import HowItWorks from "./how-it-works";
import ProblemSection from "./problem";
import ServicesSection from "./services";
import SoundsLikeYouSection from "./sounds-like-you";

export default function LandingPage() {
  return (
    <section>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorks />
      <SoundsLikeYouSection />
      {/* //todo: Work section */}

      <FinalCTA />
    </section>
  );
}
