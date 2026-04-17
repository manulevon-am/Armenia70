import Image from "next/image";
import type { ChangeEvent } from "react";
import logo from "@/public/Logo_armenia70.png";
import type { Locale, SiteContent } from "@/lib/site-content";

type HeroTopProps = {
  content: SiteContent["hero"];
  locale: Locale;
  localeOptions: ReadonlyArray<{ code: Locale; label: string }>;
  onLocaleChange: (locale: Locale) => void;
};

export function HeroTop({ content, locale, localeOptions, onLocaleChange }: HeroTopProps) {
  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onLocaleChange(event.target.value as Locale);
  };

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mb-8 flex w-full justify-end sm:mb-10">
        <label className="inline-flex items-center gap-3 rounded-full border border-[#e6dece] bg-white/88 px-4 py-2 shadow-[0_10px_24px_rgba(59,48,30,0.08)] backdrop-blur-sm">
          <span className="text-[13px] font-medium text-[#7b766d] sm:text-[14px]">{content.languageLabel}</span>
          <select
            value={locale}
            onChange={handleLocaleChange}
            className="bg-transparent text-[14px] font-semibold text-[#2f2f35] outline-none sm:text-[15px]"
            aria-label={content.languageLabel}
          >
            {localeOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-7 h-28 w-28 overflow-hidden rounded-full border border-[#d8c8a8] shadow-[0_14px_34px_rgba(80,58,21,0.16)] sm:mb-9 sm:h-32 sm:w-32">
          <Image src={logo} alt="Armenia70 emblem" width={160} height={160} className="h-full w-full object-cover" priority />
        </div>

        <p className="mb-6 text-[34px] font-bold leading-none tracking-[0.08em] text-[#343434] sm:mb-8 sm:text-[44px]">{content.brand}</p>

        <p className="font-display text-[29px] leading-[1.26] tracking-tight text-[#3f3f46] sm:text-[42px]">
          {content.line1}
          <br />
          {content.line2}
        </p>

        <p className="mt-10 text-[19px] font-semibold leading-[1.6] text-[#5f5f66] sm:mt-12 sm:text-[27px]">
          {content.turnoutLine1}
          <br />
          {content.turnoutLine2}
        </p>

        <a
          href="#project-overview"
          className="a70-btn-primary mt-10 min-h-[56px] min-w-[250px] px-8 py-3.5 text-[20px] font-bold uppercase tracking-[0.08em] sm:mt-12 sm:min-h-[62px] sm:min-w-[320px] sm:text-[26px]"
        >
          {content.more}
        </a>

        <div className="mt-7 flex items-center gap-2.5 sm:mt-9 sm:gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2c06f] sm:h-3.5 sm:w-3.5" />
          <span className="h-3.5 w-3.5 rounded-full bg-[#d2cfca] sm:h-[18px] sm:w-[18px]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2d7c0] sm:h-3.5 sm:w-3.5" />
        </div>
      </div>
    </section>
  );
}
