import type { SiteContent } from "@/lib/site-content";

type AudienceQuickProps = {
  content: SiteContent["audience"];
};

const bulletClassName = "mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a45b]";
const linkClassName = "font-semibold text-[#2563eb] underline decoration-[#2563eb]/60 underline-offset-4";

export function AudienceQuick({ content }: AudienceQuickProps) {
  return (
    <section id="audience-quick" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[20px] font-semibold text-[#37373d] sm:text-[26px]">{content.inTitle}</p>
          <ol className="mt-4 space-y-3 text-[15px] leading-[1.6] text-[#6f7077] sm:text-[17px]">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">1</span>
              <span>
                {content.step1Prefix}{" "}
                <a href="https://t.me/miasin_new2025" className={linkClassName} target="_blank" rel="noreferrer">
                  {content.step1Link}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">2</span>
              <span>{content.step2}</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">3</span>
              <span>{content.step3}</span>
            </li>
          </ol>
        </article>

        <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[20px] font-semibold text-[#37373d] sm:text-[26px]">{content.outTitle}</p>
          <ol className="mt-4 space-y-4 text-[15px] leading-[1.6] text-[#6f7077] sm:text-[17px]">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">1</span>
              <div>
                <p>{content.outIntro}</p>
                <ul className="mt-3 space-y-2">
                  {content.channels.map((item) => (
                    <li key={item.href} className="flex gap-2.5">
                      <span className={bulletClassName} />
                      <a href={item.href} className={linkClassName} target="_blank" rel="noreferrer">
                        <span className="mr-2">{item.flag}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">2</span>
              <span>{content.support}</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">3</span>
              <span>{content.travel}</span>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
