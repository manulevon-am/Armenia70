import type { SiteContent } from "@/lib/site-content";

type FooterProps = {
  content: SiteContent["footer"];
};

export function Footer({ content }: FooterProps) {
  return (
    <footer id="footer" className="mx-auto mt-10 w-full max-w-6xl px-4 pb-8 sm:mt-12 sm:px-6 sm:pb-10 lg:px-8">
      <div className="mx-auto max-w-5xl border-t border-[#ece7de] pt-6 text-center">
        <p className="text-[14px] font-semibold tracking-[0.06em] text-[#96969d] sm:text-[17px]">{content.copyright}</p>
      </div>
    </footer>
  );
}
