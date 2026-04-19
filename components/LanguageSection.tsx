import { Globe, Send } from "lucide-react";

const links = [
  { flag: "🇷🇺", url: "t.me/new_hayastan2026" },
  { flag: "🇬🇧", url: "t.me/election_arm2025" },
  { flag: "🇫🇷", url: "t.me/election_2025arm" },
  { flag: "🇪🇸", url: "t.me/new_hayastan2026_esp" },
  { flag: "🇸🇦", url: "t.me/new_hayastan2026_arabia" },
  { flag: "🇮🇷", url: "t.me/new_hayastan2026farsi" },
  { flag: "🇮🇷", url: "t.me/mirin2026farsi" },
  { flag: "🇹🇷", url: "t.me/new_hayastan2026tur" },
];

export function LanguageSection() {
  return (
    <section id="language-section" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="a70-surface mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-wrap items-center justify-center gap-3 text-[#4a4a4a] sm:gap-6">
          <div className="a70-chip">
            <span className="a70-chip-icon">🇦🇲</span>
            <span>Армения</span>
          </div>
          <span className="text-[#d7d2c9]">•</span>
          <div className="a70-chip">
            <span className="a70-chip-icon">
              <Globe className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
            </span>
            <span>Языки</span>
          </div>
          <span className="text-[#d7d2c9]">•</span>
          <div className="a70-chip">
            <span className="a70-chip-icon">
              <Globe className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
            </span>
            <span>Диаспора</span>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:mt-6 md:grid-cols-2 md:gap-x-6 md:gap-y-2.5 md:divide-x md:divide-[#ece7dd]">
          {links.map((item, index) => (
            <a
              key={`${item.url}-${index}`}
              href={`https://${item.url}`}
              className="group inline-flex items-center gap-2 rounded-xl px-2 py-1.5 text-[13px] text-[#717171] transition hover:bg-white/70 hover:text-[#585858] sm:gap-2.5 sm:px-2.5 sm:text-[17px]"
            >
              <span className="text-[16px] sm:text-[22px]" aria-hidden="true">
                {item.flag}
              </span>
              <Send className="h-3.5 w-3.5 text-[#b8b8b8] transition group-hover:text-[#9b9b9b] sm:h-4 sm:w-4" />
              <span>{item.url}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
