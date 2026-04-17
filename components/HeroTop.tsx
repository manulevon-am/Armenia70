import Image from "next/image";
import logo from "@/public/Logo_armenia70.png";

export function HeroTop() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 h-20 w-20 overflow-hidden rounded-full border border-[#d8c8a8] shadow-[0_10px_26px_rgba(80,58,21,0.16)] sm:mb-8 sm:h-24 sm:w-24">
          <Image src={logo} alt="Golden emblem" width={144} height={144} className="h-full w-full object-cover" />
        </div>

        <p className="text-[22px] font-semibold leading-none tracking-[0.08em] text-[#343434] sm:text-[28px]">АРМЕНИЯ70</p>

        <h1 className="font-display text-[34px] leading-[1.04] tracking-tight text-[#2f2f35] sm:text-[48px]">Один народ. Одно дело.</h1>

        <p className="mt-4 font-display text-[28px] leading-[1.2] tracking-tight text-[#3f3f46] sm:text-[40px]">
          Армения — идёт голосовать.
          <br />
          Диаспора — поддерживает.
        </p>

        <p className="mt-4 text-[18px] leading-[1.5] text-[#7f7f86] sm:text-[26px]">
          Когда явка превышает 70% — результат принимают все.
          <br />
          Стань частью Армения 70
        </p>

        <p className="mt-5 text-[18px] leading-[1.35] text-[#7f7f86] sm:text-[26px]">
          Глобальная инициатива для
          <br />
          достижения 70% явки на выборах
        </p>

        <a
          href="#project-overview"
          className="a70-btn-primary mt-6 min-h-[50px] min-w-[240px] px-8 py-3 text-[18px] sm:min-h-[58px] sm:min-w-[300px] sm:text-[24px]"
        >
          Подробнее
        </a>

        <div className="mt-6 flex items-center gap-2.5 sm:mt-8 sm:gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2c06f] sm:h-3.5 sm:w-3.5" />
          <span className="h-3.5 w-3.5 rounded-full bg-[#d2cfca] sm:h-[18px] sm:w-[18px]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2d7c0] sm:h-3.5 sm:w-3.5" />
        </div>
      </div>
    </section>
  );
}
