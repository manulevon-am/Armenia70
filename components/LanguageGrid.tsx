import { ExternalLink } from "lucide-react";
import type { LandingContent } from "@/lib/content";

type LanguageGridProps = {
  content: LandingContent["languages"];
};

export function LanguageGrid({ content }: LanguageGridProps) {
  return (
    <section className="section-wrap" aria-labelledby="language-grid-title">
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h3 id="language-grid-title" className="section-title">
          {content.title}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <article key={item.name} className="panel flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {item.flag}
                </span>
                <span className="text-base font-medium text-[#1F1F1F]">{item.name}</span>
              </div>
              <a href={item.href} className="btn-secondary px-4 py-2 text-sm" aria-label={`${content.cta}: ${item.name}`}>
                {content.cta}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
