import type { LandingContent } from "@/lib/content";

type HeroProps = {
  content: LandingContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#F4DDAA_0%,rgba(244,221,170,0)_72%)] blur-2xl" />
        <div className="absolute -right-16 top-32 h-56 w-56 rounded-full bg-[radial-gradient(circle,#E6C98E_0%,rgba(230,201,142,0)_70%)] blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,#EFE3CC_0%,rgba(239,227,204,0)_72%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 rounded-[32px] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.93)_0%,rgba(255,249,238,0.86)_100%)] px-6 py-10 shadow-[0_28px_70px_rgba(32,24,12,0.1)] sm:px-10 sm:py-14 lg:px-14">
        <div className="space-y-4">
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-[#1F1F1F] sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <h2 className="max-w-2xl text-xl font-semibold leading-tight text-[#2A2A2A] sm:text-2xl lg:text-[2rem]">
            {content.subtitle}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#6B6B6B] sm:text-lg">{content.description}</p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <a href={content.primaryCta.href} className="btn-primary justify-center">
            {content.primaryCta.label}
          </a>
          {content.secondaryCtas.map((button) => (
            <a key={button.label} href={button.href} className="btn-secondary justify-center">
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
