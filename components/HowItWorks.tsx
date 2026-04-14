import type { LandingContent } from "@/lib/content";

type HowItWorksProps = {
  content: LandingContent["howItWorks"];
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section className="section-wrap" aria-labelledby="how-it-works-title">
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h3 id="how-it-works-title" className="section-title">
          {content.title}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <article key={step} className="panel relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-[linear-gradient(90deg,#E9C988_0%,#C8963B_100%)]" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E3D4BB] bg-[#FFF9ED] text-sm font-semibold text-[#6E4B12]">
                {index + 1}
              </div>
              <p className="text-base font-medium leading-snug text-[#2A2A2A]">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
