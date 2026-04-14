import { Send } from "lucide-react";

export function CardsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-12 pb-6 sm:px-6 sm:pt-14 lg:px-8">
      <h2 className="text-center font-display text-[32px] leading-none tracking-tight text-[#33343a] sm:text-[44px]">
        Если вы в Армении
      </h2>

      <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
        <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[20px] text-[#37373d] sm:text-[26px]">🇦🇲 Если вы в Армении</p>

          <h3 className="mt-3 font-display text-[30px] leading-[1.2] tracking-tight text-[#303039] sm:text-[38px]">
            Просто участвуйте. Мы сделаем остальное.
          </h3>

          <ul className="mt-3 space-y-1.5 text-[17px] text-[#7a7a81] sm:mt-4 sm:text-[22px]">
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-2 w-2 rounded-full bg-[#e3c988] sm:mt-3 sm:h-2.5 sm:w-2.5" />
              <span>12:00 — простое объяснение</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-2 w-2 rounded-full bg-[#e3c988] sm:mt-3 sm:h-2.5 sm:w-2.5" />
              <span>20:00 — ежедневный розыгрыш</span>
            </li>
          </ul>

          <p className="mt-3 text-[18px] leading-[1.36] text-[#7a7a81] sm:mt-4 sm:text-[24px]">
            Реальные призы. Реальные победители. Каждый день.
          </p>

          <a
            href="https://t.me/new_hayastan2026"
            className="a70-btn-primary mt-4 min-h-[50px] px-7 py-3 text-[16px] sm:mt-5 sm:min-h-[56px] sm:text-[20px]"
          >
            Присоединиться к каналу
          </a>

          <p className="mt-4 text-center text-[16px] text-[#888890] sm:mt-5 sm:text-[20px]">Без приложений. Только Telegram</p>
        </article>

        <div className="grid gap-4 md:grid-cols-2 sm:gap-5">
          <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-[20px] text-[#37373d] sm:text-[26px]">🌍 Если вы вне Армении</p>

            <h3 className="mt-3 font-display text-[30px] leading-[1.15] tracking-tight text-[#303039] sm:text-[36px]">
              Не учить. Не советовать.
              <br />
              Просто поддержать.
            </h3>

            <p className="mt-4 text-[18px] leading-[1.34] text-[#7a7a81] sm:mt-5 sm:text-[24px]">
              Впервые у вас есть возможность помочь, не вмешиваясь
            </p>

            <a href="https://t.me/miasin_new2025" className="a70-btn-secondary mt-4 min-h-[50px] px-6 py-3 text-[16px] sm:mt-5 sm:min-h-[56px] sm:text-[20px]">
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              Telegram ссылка
            </a>
          </article>

          <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-[20px] text-[#37373d] sm:text-[26px]">🤝 Для спонсоров</p>

            <h3 className="mt-3 font-display text-[30px] leading-[1.15] tracking-tight text-[#303039] sm:text-[36px]">
              Поддержите крупнейшую инициативу по вовлечению граждан
            </h3>

            <ul className="mt-4 space-y-1.5 text-[17px] leading-[1.3] text-[#7a7a81] sm:mt-5 sm:text-[22px]">
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-2 w-2 rounded-full bg-[#e3c988] sm:mt-3 sm:h-2.5 sm:w-2.5" />
                <span>охват всей страны</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-2 w-2 rounded-full bg-[#e3c988] sm:mt-3 sm:h-2.5 sm:w-2.5" />
                <span>прозрачная система</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 h-2 w-2 rounded-full bg-[#e3c988] sm:mt-3 sm:h-2.5 sm:w-2.5" />
                <span>измеримый результат</span>
              </li>
            </ul>

            <a href="#footer" className="a70-btn-secondary mt-4 min-h-[50px] px-7 py-3 text-[16px] sm:mt-5 sm:min-h-[56px] sm:text-[20px]">
              Стать спонсором
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
