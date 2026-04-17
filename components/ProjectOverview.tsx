export function ProjectOverview() {
  return (
    <section id="project-overview" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="a70-card mx-auto max-w-5xl px-5 py-6 sm:px-7 sm:py-8">
        <div className="space-y-6">
          <div>
            <p className="text-[17px] leading-[1.55] text-[#595a61] sm:text-[20px]">
              Проект Armenia 70 — это <span className="font-semibold text-[#34353b]">просветительская гражданская инициатива.</span>
            </p>
          </div>

          <div className="rounded-[22px] border border-[#eadfca] bg-[linear-gradient(180deg,rgba(249,238,210,0.72)_0%,rgba(250,245,235,0.9)_100%)] px-4 py-4 sm:px-5">
            <p className="text-[17px] font-semibold tracking-tight text-[#4a4133] sm:text-[19px]">ВАЖНО</p>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
              Мы не поддерживаем и не критикуем ни одну политическую партию.
            </p>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
              Проект не занимается агитацией и не влияет на выбор граждан. Наша задача — повышение вовлечённости и
              участия в выборах.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Цель проекта</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
                Обеспечить явку избирателей на парламентских выборах в Армении <span className="font-semibold text-[#34353b]">7 июня 2026 года</span> —
                не ниже <span className="font-semibold text-[#34353b]">70%</span>.
              </p>
            </article>

            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Как это работает</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
                Мы создали Telegram-канал, в котором ежедневно публикуются:
              </p>
              <ul className="mt-3 space-y-1.5 text-[15px] leading-[1.55] text-[#5d5f66] sm:text-[17px]">
                <li>простые и понятные материалы о выборах</li>
                <li>информация о процессе голосования</li>
                <li>напоминания о важности участия</li>
              </ul>
            </article>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Участие и розыгрыши</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
                Чтобы сделать участие более интересным, каждый вечер в нашем Telegram-канале проходят розыгрыши призов
                среди подписчиков.
              </p>
            </article>

            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Условия участия</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">Всего два условия:</p>
              <ul className="mt-3 space-y-1.5 text-[15px] leading-[1.55] text-[#5d5f66] sm:text-[17px]">
                <li>Вы подписаны на основной канал: @miasin_new2025</li>
                <li>Вы находитесь в Армении (армянский номер в Telegram)</li>
              </ul>
            </article>
          </div>

          <div className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
            <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Организация проекта</p>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
              Организатор проекта и розыгрышей:{" "}
              <a href="https://miasinglobal.org/" className="font-semibold text-[#3d3e45] underline underline-offset-4">
                Miasin Global
              </a>
              .
            </p>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
              Спонсоры розыгрышей — представители армянской диаспоры, поддерживающие инициативу повышения участия
              граждан.
            </p>
          </div>

          <div className="rounded-[22px] border border-[#eadfca] bg-[linear-gradient(180deg,rgba(249,238,210,0.72)_0%,rgba(250,245,235,0.9)_100%)] px-4 py-4 sm:px-5">
            <p className="text-[16px] font-semibold leading-[1.55] text-[#4a4133] sm:text-[18px]">
              Без давления. Без сложностей. Без указаний, за кого голосовать.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
