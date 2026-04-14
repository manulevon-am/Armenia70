export function AudienceQuick() {
  return (
    <section id="audience-quick" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[20px] font-semibold text-[#37373d] sm:text-[26px]">🇦🇲 Если вы в Армении</p>
          <p className="mt-2 text-[15px] leading-[1.45] text-[#7a7a81] sm:text-[18px]">Просто участвуйте. Мы сделаем остальное.</p>
          <a href="https://t.me/new_hayastan2026" className="a70-btn-primary mt-4 min-h-[46px] px-6 py-2.5 text-[15px] sm:text-[18px]">
            Перейти в канал
          </a>
        </article>

        <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[20px] font-semibold text-[#37373d] sm:text-[26px]">🌍 Если вы вне Армении</p>
          <p className="mt-2 text-[15px] leading-[1.45] text-[#7a7a81] sm:text-[18px]">Поддержите крупнейшую инициативу по вовлечению граждан</p>
          <ul className="mt-3 space-y-1 text-[15px] leading-[1.4] text-[#7a7a81] sm:text-[18px]">
            <li>• охват всей страны</li>
            <li>• прозрачная система</li>
            <li>• измеримый результат</li>
          </ul>
          <a href="#footer" className="a70-btn-secondary mt-4 min-h-[46px] px-6 py-2.5 text-[15px] sm:text-[18px]">
            Поддержать
          </a>
        </article>
      </div>
    </section>
  );
}
