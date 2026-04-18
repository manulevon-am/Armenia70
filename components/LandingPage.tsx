"use client";

import { useEffect, useMemo, useState } from "react";
import { AudienceQuick } from "@/components/AudienceQuick";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { HeroTop } from "@/components/HeroTop";
import { ProjectOverview } from "@/components/ProjectOverview";
import { getSiteContent, localeOptions, type Locale } from "@/lib/site-content";

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = useMemo(() => getSiteContent(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="a70-page relative min-h-screen overflow-x-clip">
      <div className="a70-wave a70-wave-1" aria-hidden="true" />
      <div className="a70-wave a70-wave-2" aria-hidden="true" />
      <div className="a70-wave a70-wave-3" aria-hidden="true" />

      <main className="relative z-10">
        <FadeIn>
          <HeroTop content={content.hero} locale={locale} onLocaleChange={setLocale} localeOptions={localeOptions} />
        </FadeIn>

        <FadeIn>
          <ProjectOverview content={content.project} />
        </FadeIn>

        <FadeIn>
          <AudienceQuick content={content.audience} />
        </FadeIn>
      </main>

      <FadeIn>
        <Footer content={content.footer} />
      </FadeIn>
    </div>
  );
}
