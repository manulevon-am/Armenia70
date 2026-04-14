export function SecondaryHero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="font-display text-[34px] leading-none tracking-tight text-[#32333a] sm:text-[48px]">Armenia 70</h2>

        <p className="mt-4 font-display text-[28px] leading-[1.18] tracking-tight text-[#3d3e45] sm:text-[40px]">
          Армения идёт голосовать.
          <br />
          Мир — поддерживает.
        </p>

        <p className="mt-4 text-[18px] leading-[1.45] text-[#7f7f86] sm:text-[26px]">
          Без давления. Без политики.
          <br />
          Только участие.
        </p>

        <p className="mt-5 text-[19px] leading-[1.3] text-[#7f7f86] sm:mt-6 sm:text-[27px]">
          Глобальная инициатива для
          <br />
          достижения 70% явки на выборах
        </p>

        <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-7 sm:flex-row sm:justify-center sm:gap-3">
          <a href="https://t.me/new_hayastan2026" className="a70-btn-primary min-h-[50px] px-6 py-3 text-[16px] sm:min-h-[56px] sm:text-[20px]">
            Я в Армении
          </a>
          <a href="https://t.me/miasin_new2025" className="a70-btn-secondary min-h-[50px] px-6 py-3 text-[16px] sm:min-h-[56px] sm:text-[20px]">
            Я в диаспоре
          </a>
          <a href="#footer" className="a70-btn-secondary min-h-[50px] px-6 py-3 text-[16px] sm:min-h-[56px] sm:text-[20px]">
            Стать спонсором
          </a>
        </div>
      </div>
    </section>
  );
}
