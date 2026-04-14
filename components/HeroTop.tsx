import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroTop() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pt-7 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between pb-12 sm:pb-16">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 overflow-hidden rounded-full border border-[#d8c8a8] shadow-[0_8px_24px_rgba(80,58,21,0.18)] sm:h-16 sm:w-16">
            <Image src="/Logo_armenia70.png" alt="Armenia 70" width={64} height={64} priority className="h-full w-full object-cover" />
          </div>
          <span className="font-display text-[40px] leading-none tracking-tight text-[#343434] sm:text-[46px]">Armenia 70</span>
        </div>

        <Link
          href="/white-paper"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[20px] text-[#8b8b8b] transition hover:text-[#6f6f6f] sm:text-[34px]"
        >
          White Paper
          <ChevronDown className="h-5 w-5 sm:h-7 sm:w-7" />
        </Link>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 h-28 w-28 overflow-hidden rounded-full border border-[#d8c8a8] shadow-[0_10px_26px_rgba(80,58,21,0.16)] sm:mb-10 sm:h-36 sm:w-36">
          <Image src="/Logo_armenia70.png" alt="Golden emblem" width={144} height={144} className="h-full w-full object-cover" />
        </div>

        <h1 className="font-display text-[50px] leading-[1.04] tracking-tight text-[#2f2f35] sm:text-[66px]">Один народ. Одно дело.</h1>

        <p className="mt-6 font-display text-[40px] leading-[1.2] tracking-tight text-[#3f3f46] sm:text-[56px]">
          Армения — идёт голосовать.
          <br />
          Диаспора — поддерживает.
        </p>

        <p className="mt-8 text-[28px] leading-[1.5] text-[#7f7f86] sm:text-[42px]">
          Без давления. Без сложностей.
          <br />
          Только единство.
        </p>

        <a
          href="#language-section"
          className="a70-btn-primary mt-10 min-h-[60px] min-w-[300px] px-10 py-4 text-[22px] sm:min-h-[72px] sm:min-w-[430px] sm:text-[42px]"
        >
          Присоединиться сейчас
        </a>

        <div className="mt-10 flex items-center gap-3 sm:mt-12 sm:gap-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2c06f] sm:h-3.5 sm:w-3.5" />
          <span className="h-4 w-4 rounded-full bg-[#d2cfca] sm:h-5 sm:w-5" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2d7c0] sm:h-3.5 sm:w-3.5" />
        </div>
      </div>
    </section>
  );
}
