import { CardsSection } from "@/components/CardsSection";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { HeroTop } from "@/components/HeroTop";
import { LanguageSection } from "@/components/LanguageSection";
import { Metrics } from "@/components/Metrics";
import { RoadmapSlide } from "@/components/RoadmapSlide";
import { SecondaryHero } from "@/components/SecondaryHero";

export default function Home() {
  return (
    <div className="a70-page relative min-h-screen overflow-x-clip">
      <div className="a70-wave a70-wave-1" aria-hidden="true" />
      <div className="a70-wave a70-wave-2" aria-hidden="true" />
      <div className="a70-wave a70-wave-3" aria-hidden="true" />

      <main className="relative z-10">
        <FadeIn>
          <HeroTop />
        </FadeIn>

        <FadeIn>
          <LanguageSection />
        </FadeIn>

        <FadeIn>
          <CardsSection />
        </FadeIn>

        <FadeIn>
          <SecondaryHero />
        </FadeIn>

        <FadeIn>
          <Metrics />
        </FadeIn>

        <FadeIn>
          <RoadmapSlide />
        </FadeIn>
      </main>

      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}
