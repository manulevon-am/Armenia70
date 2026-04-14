"use client";

import { useMemo, useState } from "react";
import { AudienceCards } from "@/components/AudienceCards";
import { FAQ } from "@/components/FAQ";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LanguageGrid } from "@/components/LanguageGrid";
import { WhyItWorks } from "@/components/WhyItWorks";
import { getContent, type Locale } from "@/lib/content";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ru");
  const content = useMemo(() => getContent(locale), [locale]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F9F7F4] text-[#1F1F1F]">
      <Header content={content.header} locale={locale} onLocaleChange={setLocale} />
      <main>
        <FadeIn>
          <Hero content={content.hero} />
        </FadeIn>

        <FadeIn>
          <AudienceCards content={content.audience} />
        </FadeIn>

        <FadeIn>
          <HowItWorks content={content.howItWorks} />
        </FadeIn>

        <FadeIn>
          <WhyItWorks content={content.whyItWorks} />
        </FadeIn>

        <FadeIn>
          <LanguageGrid content={content.languages} />
        </FadeIn>

        <FadeIn>
          <FAQ content={content.faq} />
        </FadeIn>
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
