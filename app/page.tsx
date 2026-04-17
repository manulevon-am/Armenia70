import { AudienceQuick } from "@/components/AudienceQuick";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { HeroTop } from "@/components/HeroTop";
import { LanguageSection } from "@/components/LanguageSection";
import { ProjectOverview } from "@/components/ProjectOverview";
import { RoadmapSlide } from "@/components/RoadmapSlide";

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
          <ProjectOverview />
        </FadeIn>

        <FadeIn>
          <AudienceQuick />
        </FadeIn>

        <FadeIn>
          <LanguageSection />
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
