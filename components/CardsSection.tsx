import { Send } from "lucide-react";

export function CardsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20 lg:px-8">
      <h2 className="text-center font-display text-[48px] leading-none tracking-tight text-[#33343a] sm:text-[74px]">
        Если вы в Армении
      </h2>

      <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
        <article className="a70-card px-5 py-6 sm:px-8 sm:py-9">
          <p className="text-[28px] text-[#37373d] sm:text-[45px]">🇦🇲 Если вы в Армении</p>

          <h3 className="mt-4 font-display text-[42px] leading-[1.2] tracking-tight text-[#303039] sm:text-[60px]">
            Просто участвуйте. Мы сделаем остальное.
          </h3>

          <ul className="mt-4 space-y-2.5 text-[28px] text-[#7a7a81] sm:mt-6 sm:text-[42px]">
            <li className="flex items-start gap-3">
              <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#e3c988] sm:mt-5 sm:h-3.5 sm:w-3.5" />
              <span>12:00 — простое объяснение</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#e3c988] sm:mt-5 sm:h-3.5 sm:w-3.5" />
              <span>20:00 — ежедневный розыгрыш</span>
            </li>
          </ul>

          <p className="mt-4 text-[30px] leading-[1.36] text-[#7a7a81] sm:mt-7 sm:text-[44px]">
            Реальные призы. Реальные победители. Каждый день.
          </p>

          <a
            href="https://t.me/new_hayastan2026"
            className="a70-btn-primary mt-6 min-h-[62px] px-8 py-4 text-[22px] sm:mt-8 sm:min-h-[74px] sm:text-[40px]"
          >
            Присоединиться к каналу
          </a>

          <p className="mt-6 text-center text-[26px] text-[#888890] sm:mt-8 sm:text-[40px]">Без приложений. Только Telegram</p>
        </article>

        <div className="grid gap-5 md:grid-cols-2 sm:gap-6">
          <article className="a70-card px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-[28px] text-[#37373d] sm:text-[44px]">🌍 Если вы вне Армении</p>

            <h3 className="mt-4 font-display text-[42px] leading-[1.15] tracking-tight text-[#303039] sm:text-[58px]">
              Не учить. Не советовать.
              <br />
              Просто поддержать.
            </h3>

            <p className="mt-5 text-[30px] leading-[1.34] text-[#7a7a81] sm:mt-6 sm:text-[42px]">
              Впервые у вас есть возможность помочь, не вмешиваясь
            </p>

            <a href="https://t.me/miasin_new2025" className="a70-btn-secondary mt-6 min-h-[60px] px-6 py-4 text-[22px] sm:mt-8 sm:min-h-[72px] sm:text-[38px]">
              <Send className="h-5 w-5 sm:h-7 sm:w-7" />
              Telegram ссылка
            </a>
          </article>

          <article className="a70-card px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-[28px] text-[#37373d] sm:text-[44px]">🤝 Для спонсоров</p>

            <h3 className="mt-4 font-display text-[42px] leading-[1.15] tracking-tight text-[#303039] sm:text-[58px]">
              Поддержите крупнейшую инициативу по вовлечению граждан
            </h3>

            <ul className="mt-5 space-y-2.5 text-[30px] leading-[1.3] text-[#7a7a81] sm:mt-6 sm:text-[40px]">
              <li className="flex items-start gap-3">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#e3c988] sm:mt-5 sm:h-3.5 sm:w-3.5" />
                <span>охват всей страны</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#e3c988] sm:mt-5 sm:h-3.5 sm:w-3.5" />
                <span>прозрачная система</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#e3c988] sm:mt-5 sm:h-3.5 sm:w-3.5" />
                <span>измеримый результат</span>
              </li>
            </ul>

            <a href="#footer" className="a70-btn-secondary mt-6 min-h-[60px] px-8 py-4 text-[22px] sm:mt-8 sm:min-h-[72px] sm:text-[40px]">
              Стать спонсором
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
