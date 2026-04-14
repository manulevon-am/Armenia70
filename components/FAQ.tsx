"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { LandingContent } from "@/lib/content";

type FAQProps = {
  content: LandingContent["faq"];
};

export function FAQ({ content }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="section-wrap" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h3 id="faq-title" className="section-title text-center">
          {content.title}
        </h3>

        <div className="space-y-3">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className="panel p-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#1F1F1F] sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#8E7A59] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#5F5B53] sm:px-6 sm:pb-6 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
