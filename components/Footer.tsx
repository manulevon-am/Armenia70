import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="mx-auto mt-14 w-full max-w-6xl px-4 pb-10 sm:mt-16 sm:px-6 sm:pb-14 lg:px-8">
      <div className="mx-auto max-w-5xl border-t border-[#ece7de] pt-7 text-center text-[24px] text-[#7f7f86] sm:pt-10 sm:text-[36px]">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          <Link href="/white-paper" className="transition hover:text-[#66666d]">
            White Paper
          </Link>
          <span className="text-[#d8d3c9]">|</span>
          <a href="#footer" className="transition hover:text-[#66666d]">
            Контакты
          </a>
          <span className="text-[#d8d3c9]">|</span>
          <a href="mailto:contact@armenia70.org" className="transition hover:text-[#66666d]">
            contact@armenia70.org
          </a>
        </div>

        <p className="mt-7 text-[22px] text-[#96969d] sm:mt-9 sm:text-[32px]">© Armenia 70 2024</p>
      </div>
    </footer>
  );
}
