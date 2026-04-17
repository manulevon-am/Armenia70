import type { SiteContent } from "@/lib/site-content";

type ProjectOverviewProps = {
  content: SiteContent["project"];
};

export function ProjectOverview({ content }: ProjectOverviewProps) {
  const bulletClassName = "mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a45b]";
  const linkClassName = "font-semibold text-[#2563eb] underline decoration-[#2563eb]/60 underline-offset-4";

  return (
    <section id="project-overview" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="a70-card mx-auto max-w-5xl px-5 py-6 sm:px-7 sm:py-8">
        <div className="space-y-6">
          <div>
            <p className="text-[20px] leading-[1.6] text-[#595a61] sm:text-[24px]">{content.intro}</p>
          </div>

          <div className="rounded-[22px] border border-[#eadfca] bg-[linear-gradient(180deg,rgba(249,238,210,0.72)_0%,rgba(250,245,235,0.9)_100%)] px-4 py-4 sm:px-5">
            <p className="text-[17px] font-semibold tracking-tight text-[#4a4133] sm:text-[19px]">{content.importantTitle}</p>
            <ul className="mt-3 space-y-2 text-[15px] leading-[1.65] text-[#5d5f66] sm:text-[17px]">
              {content.importantPoints.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">{content.goalTitle}</p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#5d5f66] sm:text-[17px]">{content.goalText}</p>
            </article>

            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">{content.howTitle}</p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#5d5f66] sm:text-[17px]">{content.howIntro}</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
                {content.howPoints.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className={bulletClassName} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">{content.prizesTitle}</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-[1.65] text-[#5d5f66] sm:text-[17px]">
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>
                    {content.prizesLeadPrefix}{" "}
                    <span className="font-semibold text-[#34353b]">{content.prizesLeadBold}</span>
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>
                    {content.prizesChannelPrefix}{" "}
                    <a href="https://t.me/miasin_new2025" className={linkClassName} target="_blank" rel="noreferrer">
                      {content.prizesChannelLink}
                    </a>{" "}
                    {content.prizesChannelSuffix}
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span className="font-semibold text-[#34353b]">{content.prizesComingSoon}</span>
                </li>
              </ul>
            </article>

            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">{content.participationTitle}</p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#5d5f66] sm:text-[17px]">{content.participationIntro}</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>
                    {content.participationChannelPrefix}{" "}
                    <a href="https://t.me/miasin_new2025" className={linkClassName} target="_blank" rel="noreferrer">
                      {content.participationChannelLink}
                    </a>
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>{content.participationPlace}</span>
                </li>
              </ul>
            </article>
          </div>

          <div className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
            <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">{content.organizationTitle}</p>
            <ul className="mt-3 space-y-2 text-[15px] leading-[1.65] text-[#5d5f66] sm:text-[17px]">
              <li className="flex gap-2.5">
                <span className={bulletClassName} />
                <span>
                  {content.organizationPrefix}{" "}
                  <a href="https://miasinglobal.org/" className={linkClassName} target="_blank" rel="noreferrer">
                    {content.organizationLink}
                  </a>
                  .
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className={bulletClassName} />
                <span>{content.organizationSponsors}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-[22px] border border-[#eadfca] bg-[linear-gradient(180deg,rgba(249,238,210,0.72)_0%,rgba(250,245,235,0.9)_100%)] px-4 py-4 sm:px-5">
            <p className="text-[16px] font-semibold leading-[1.6] text-[#4a4133] sm:text-[18px]">{content.finalNote}</p>
          </div>

          <div className="flex justify-center">
            <a
              href="#audience-quick"
              className="a70-btn-primary min-h-[56px] px-8 py-3.5 text-[20px] font-bold uppercase tracking-[0.08em] sm:min-h-[62px] sm:text-[26px]"
            >
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
