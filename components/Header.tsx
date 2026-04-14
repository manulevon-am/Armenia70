"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";
import Image from "next/image";
import type { Locale, LandingContent } from "@/lib/content";

type HeaderProps = {
  content: LandingContent["header"];
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Header({ content, locale, onLocaleChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/30 transition-all duration-300 ${
        scrolled ? "bg-[rgba(249,247,244,0.82)] shadow-[0_12px_32px_rgba(17,17,17,0.08)] backdrop-blur-xl" : "bg-[rgba(249,247,244,0.6)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-[#E4D4B8] bg-white shadow-[0_10px_24px_rgba(201,150,56,0.2)]">
              <Image
                src="/Logo_armenia70.png"
                alt="Armenia 70 logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-[#1F1F1F] transition-opacity group-hover:opacity-80">
              {content.brand}
            </span>
          </Link>

          <div className="inline-flex items-center gap-1 rounded-2xl border border-[#E7DED0] bg-white/85 p-1 shadow-[0_10px_22px_rgba(17,17,17,0.05)]">
            <Globe2 className="ml-2 h-4 w-4 text-[#8B7A5C]" aria-hidden="true" />
            <span className="sr-only">{content.language}</span>
            <button
              type="button"
              onClick={() => onLocaleChange("ru")}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                locale === "ru" ? "bg-[#1F1F1F] text-white" : "text-[#5F5B53] hover:bg-[#F2EDE4]"
              }`}
              aria-label="Switch language to Russian"
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                locale === "en" ? "bg-[#1F1F1F] text-white" : "text-[#5F5B53] hover:bg-[#F2EDE4]"
              }`}
              aria-label="Switch language to English"
            >
              EN
            </button>
          </div>
        </div>

        <nav className="flex items-center gap-4 overflow-x-auto pb-1 text-sm font-medium text-[#4F4A43] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link href="/white-paper" className="hover:text-[#1F1F1F] transition">
            {content.whitePaper}
          </Link>
          <a href="#faq" className="hover:text-[#1F1F1F] transition">
            {content.faq}
          </a>
          <a href="#contacts" className="hover:text-[#1F1F1F] transition">
            {content.contacts}
          </a>
        </nav>
      </div>
    </header>
  );
}
