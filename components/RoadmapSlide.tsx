export function RoadmapSlide() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8">
      <div className="a70-card mx-auto max-w-[1320px] px-4 py-5 sm:px-6 sm:py-7">
        <div className="text-center">
          <p className="font-display text-[28px] leading-none tracking-tight text-[#31323a] sm:text-[42px]">ARMENIA 70</p>
          <p className="mt-2 text-[14px] leading-[1.35] text-[#696a72] sm:text-[20px]">
            Массовое вовлечение → ежедневное участие → явка на выборах
          </p>
        </div>

        <div className="mt-5 sm:mt-6">
          <p className="text-[15px] font-semibold text-[#4c4d53] sm:text-[20px]">📅 ROADMAP</p>

          <div className="mt-3 grid gap-2.5 lg:grid-cols-4">
            <article className="rounded-[16px] border border-[#ece5d9] bg-white/70 px-3 py-3 sm:px-3.5 sm:py-3.5">
              <p className="text-[14px] font-semibold text-[#3f4047] sm:text-[16px]">🚀 Запуск (сейчас)</p>
              <ul className="mt-1.5 space-y-1 text-[12px] leading-[1.3] text-[#6f7078] sm:text-[14px]">
                <li>✅ Telegram-инфраструктура</li>
                <li>✅ старт ежедневных розыгрышей</li>
                <li>⬜ запуск сайта (MVP)</li>
                <li>⬜ запуск рекламы</li>
              </ul>
            </article>

            <article className="rounded-[16px] border border-[#ece5d9] bg-white/70 px-3 py-3 sm:px-3.5 sm:py-3.5">
              <p className="text-[14px] font-semibold text-[#3f4047] sm:text-[16px]">📈 Рост (до конца мая)</p>
              <ul className="mt-1.5 space-y-1 text-[12px] leading-[1.3] text-[#6f7078] sm:text-[14px]">
                <li>⬜ масштабирование рекламы</li>
                <li>⬜ листовки + офлайн охват</li>
                <li>⬜ блогеры и партнёры</li>
              </ul>
            </article>

            <article className="rounded-[16px] border border-[#ece5d9] bg-white/70 px-3 py-3 sm:px-3.5 sm:py-3.5">
              <p className="text-[14px] font-semibold text-[#3f4047] sm:text-[16px]">🔥 Масштаб (последние 2 недели)</p>
              <ul className="mt-1.5 space-y-1 text-[12px] leading-[1.3] text-[#6f7078] sm:text-[14px]">
                <li>⬜ увеличение бюджетов</li>
                <li>⬜ усиление коммуникации</li>
                <li>⬜ рост призового фонда</li>
              </ul>
            </article>

            <article className="rounded-[16px] border border-[#ece5d9] bg-white/70 px-3 py-3 sm:px-3.5 sm:py-3.5">
              <p className="text-[14px] font-semibold text-[#3f4047] sm:text-[16px]">📍 Финал (последние дни)</p>
              <ul className="mt-1.5 space-y-1 text-[12px] leading-[1.3] text-[#6f7078] sm:text-[14px]">
                <li>⬜ ежедневные напоминания</li>
                <li>⬜ инструкции по голосованию</li>
                <li>⬜ максимальная активность</li>
              </ul>
            </article>
          </div>

          <div className="mt-2.5 rounded-[16px] border border-[#e8decc] bg-[linear-gradient(180deg,rgba(249,238,210,0.66)_0%,rgba(250,245,235,0.88)_100%)] px-4 py-2.5 text-center">
            <p className="text-[12px] font-medium text-[#5b5c63] sm:text-[14px]">
              🔄 Финансирование — привлекается постоянно, охватывая 4 этапа.
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-2.5 lg:grid-cols-2">
          <article className="rounded-[16px] border border-[#ece5d9] bg-white/78 px-3 py-3 sm:px-4 sm:py-3.5">
            <p className="text-[14px] font-semibold text-[#4c4d53] sm:text-[16px]">🔁 КЛЮЧЕВАЯ МЕХАНИКА</p>
            <p className="mt-1 text-[12px] text-[#6f7078] sm:text-[14px]">Каждый день:</p>
            <p className="mt-1 text-[12px] leading-[1.35] text-[#6f7078] sm:text-[14px]">
              12:00 — объяснение
              <br />
              20:00 — розыгрыш
            </p>
            <p className="mt-1 text-[12px] text-[#595a61] sm:text-[14px]">👉 формируется привычка участия</p>
          </article>

          <article className="rounded-[16px] border border-[#ece5d9] bg-white/78 px-3 py-3 sm:px-4 sm:py-3.5">
            <p className="text-[14px] font-semibold text-[#4c4d53] sm:text-[16px]">🤝 КАК ПОМОЧЬ</p>
            <p className="mt-1 text-[12px] font-medium text-[#585961] sm:text-[14px]">💰 Финансирование</p>
            <p className="mt-1 text-[12px] leading-[1.35] text-[#6f7078] sm:text-[14px]">→ больше рекламы → больше охват → выше явка</p>
            <p className="mt-2 text-[12px] font-medium text-[#585961] sm:text-[14px]">👥 Волонтёры (Армения)</p>
            <p className="mt-1 text-[12px] leading-[1.35] text-[#6f7078] sm:text-[14px]">
              → листовки, офлайн охват, локальная поддержка
            </p>
          </article>
        </div>

        <div className="mt-4 rounded-[18px] border border-[#e8decc] bg-[linear-gradient(180deg,rgba(249,238,210,0.72)_0%,rgba(250,245,235,0.9)_100%)] px-4 py-3 text-center sm:mt-5 sm:px-6 sm:py-4">
          <p className="text-[14px] font-semibold text-[#4c4d53] sm:text-[16px]">⚡ КЛЮЧЕВАЯ ИДЕЯ</p>
          <p className="mt-1 text-[14px] font-semibold leading-[1.3] text-[#3f4047] sm:text-[19px]">
            👉 Ежедневный контакт с аудиторией = реальное влияние на явку
          </p>
        </div>
      </div>
    </section>
  );
}
