import { ArrowRight, Handshake, MapPinned, UsersRound } from "lucide-react";
import type { LandingContent } from "@/lib/content";

type AudienceCardsProps = {
  content: LandingContent["audience"];
};

const iconMap = {
  armenia: MapPinned,
  diaspora: UsersRound,
  partners: Handshake,
} as const;

export function AudienceCards({ content }: AudienceCardsProps) {
  return (
    <section className="section-wrap" aria-labelledby="audience-title">
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h3 id="audience-title" className="section-title">
          {content.title}
        </h3>

        <div className="grid gap-5 md:grid-cols-3">
          {content.cards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];

            return (
              <article key={card.id} id={card.id} className="panel flex h-full flex-col gap-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2E6CF] text-[#6E4B12]">
                  {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold tracking-tight text-[#1F1F1F]">{card.title}</h4>
                  <p className="text-sm leading-relaxed text-[#6B6B6B] sm:text-base">{card.description}</p>
                </div>

                {card.points.length > 0 ? (
                  <ul className="space-y-2 text-sm text-[#4E4A44]">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C89B4A]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <a href={card.href} className="btn-secondary mt-auto justify-center">
                  {card.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
