import Link from "next/link";
import { Mail, Send } from "lucide-react";
import type { LandingContent } from "@/lib/content";

type FooterProps = {
  content: LandingContent["footer"];
};

export function Footer({ content }: FooterProps) {
  return (
    <footer id="contacts" className="mt-16 border-t border-[#E9E2D7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-[#1F1F1F]">{content.brand}</p>
        </div>

        <nav className="flex flex-col gap-3 text-sm text-[#5F5B53]">
          <Link href="/white-paper" className="hover:text-[#1F1F1F] transition">
            {content.whitePaper}
          </Link>
          <a href="#contacts" className="hover:text-[#1F1F1F] transition">
            {content.contacts}
          </a>
        </nav>

        <div className="space-y-2 text-sm text-[#5F5B53]">
          <a href={`mailto:${content.email}`} className="inline-flex items-center gap-2 hover:text-[#1F1F1F] transition">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {content.email}
          </a>
          <a href="https://t.me/armenia70" className="inline-flex items-center gap-2 hover:text-[#1F1F1F] transition">
            <Send className="h-4 w-4" aria-hidden="true" />
            {content.telegram}
          </a>
        </div>
      </div>
    </footer>
  );
}
