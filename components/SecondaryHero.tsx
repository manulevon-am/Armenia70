export function SecondaryHero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="font-display text-[52px] leading-none tracking-tight text-[#32333a] sm:text-[78px]">Armenia 70</h2>

        <p className="mt-6 font-display text-[42px] leading-[1.18] tracking-tight text-[#3d3e45] sm:text-[60px]">
          Армения идёт голосовать.
          <br />
          Мир — поддерживает.
        </p>

        <p className="mt-6 text-[28px] leading-[1.45] text-[#7f7f86] sm:text-[42px]">
          Без давления. Без политики.
          <br />
          Только участие.
        </p>

        <p className="mt-8 text-[30px] leading-[1.3] text-[#7f7f86] sm:mt-10 sm:text-[44px]">
          Глобальная инициатива для
          <br />
          достижения 70% явки на выборах
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
          <a href="https://t.me/new_hayastan2026" className="a70-btn-primary min-h-[60px] px-8 py-4 text-[22px] sm:min-h-[72px] sm:text-[38px]">
            Я в Армении
          </a>
          <a href="https://t.me/miasin_new2025" className="a70-btn-secondary min-h-[60px] px-8 py-4 text-[22px] sm:min-h-[72px] sm:text-[38px]">
            Я в диаспоре
          </a>
          <a href="#footer" className="a70-btn-secondary min-h-[60px] px-8 py-4 text-[22px] sm:min-h-[72px] sm:text-[38px]">
            Стать спонсором
          </a>
        </div>
      </div>
    </section>
  );
}
