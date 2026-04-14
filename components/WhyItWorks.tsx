import { Languages, MessageCircleMore, RefreshCcw, Sparkles } from "lucide-react";
import type { LandingContent } from "@/lib/content";

type WhyItWorksProps = {
  content: LandingContent["whyItWorks"];
};

const icons = [Sparkles, MessageCircleMore, RefreshCcw, Languages] as const;

export function WhyItWorks({ content }: WhyItWorksProps) {
  return (
    <section className="section-wrap" aria-labelledby="why-it-works-title">
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h3 id="why-it-works-title" className="section-title">
          {content.title}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[index] ?? Sparkles;

            return (
              <article key={item.title} className="panel space-y-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5E8D2] text-[#69450C]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-[#1F1F1F]">{item.title}</h4>
                <p className="text-sm leading-relaxed text-[#6B6B6B] sm:text-base">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
