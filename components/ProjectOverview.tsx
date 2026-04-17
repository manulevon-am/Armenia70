export function ProjectOverview() {
  const bulletClassName = "mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a45b]";
  const linkClassName = "font-semibold text-[#2563eb] underline decoration-[#2563eb]/60 underline-offset-4";

  return (
    <section id="project-overview" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="a70-card mx-auto max-w-5xl px-5 py-6 sm:px-7 sm:py-8">
        <div className="space-y-6">
          <div>
            <p className="text-[20px] leading-[1.55] text-[#595a61] sm:text-[24px]">
              Проект АРМЕНИЯ70 — это <span className="font-semibold text-[#34353b]">просветительская гражданская инициатива.</span>
            </p>
            <a
              href="#audience-quick"
              className="a70-btn-primary mt-5 min-h-[48px] px-6 py-3 text-[15px] font-semibold uppercase tracking-[0.06em] sm:min-h-[54px] sm:text-[17px]"
            >
              Присоединиться к проекту
            </a>
          </div>

          <div className="rounded-[22px] border border-[#eadfca] bg-[linear-gradient(180deg,rgba(249,238,210,0.72)_0%,rgba(250,245,235,0.9)_100%)] px-4 py-4 sm:px-5">
            <p className="text-[17px] font-semibold tracking-tight text-[#4a4133] sm:text-[19px]">ВАЖНО</p>
            <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
              <li className="flex gap-2.5">
                <span className={bulletClassName} />
                <span>Мы не поддерживаем и не критикуем ни одну политическую партию.</span>
              </li>
              <li className="flex gap-2.5">
                <span className={bulletClassName} />
                <span>Проект не занимается агитацией и не влияет на выбор граждан.</span>
              </li>
              <li className="flex gap-2.5">
                <span className={bulletClassName} />
                <span>Наша задача — повышение вовлечённости и участия в выборах.</span>
              </li>
            </ul>
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
              <ul className="mt-3 space-y-2 text-[15px] leading-[1.55] text-[#5d5f66] sm:text-[17px]">
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>простые и понятные материалы о выборах</span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>информация о процессе голосования</span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>напоминания о важности участия</span>
                </li>
              </ul>
            </article>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Розыгрыши и ценные призы</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>
                    Чтобы сделать участие более интересным,{" "}
                    <span className="font-semibold text-[#34353b]">каждый вечер проходят розыгрыши призов.</span>
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>
                    Розыгрыши проходят в нашем{" "}
                    <a href="https://t.me/@miasin_new2025" className={linkClassName} target="_blank" rel="noreferrer">
                      Telegram-канале
                    </a>{" "}
                    среди подписчиков.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span className="font-semibold text-[#34353b]">Скоро будут очень ценные призы 🎁.</span>
                </li>
              </ul>
            </article>

            <article className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
              <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Условия участия</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">Всего два условия:</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-[1.55] text-[#5d5f66] sm:text-[17px]">
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>
                    Вы подписаны на{" "}
                    <a href="https://t.me/@miasin_new2025" className={linkClassName} target="_blank" rel="noreferrer">
                      основной канал
                    </a>
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className={bulletClassName} />
                  <span>Вы находитесь в Армении (армянский номер в Telegram)</span>
                </li>
              </ul>
            </article>
          </div>

          <div className="rounded-[22px] border border-[#ece2d4] bg-white/70 px-4 py-4 sm:px-5">
            <p className="text-[17px] font-semibold tracking-tight text-[#34353b] sm:text-[19px]">Организация проекта</p>
            <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-[#5d5f66] sm:text-[17px]">
              <li className="flex gap-2.5">
                <span className={bulletClassName} />
                <span>
                  Организатор проекта и розыгрышей:{" "}
                  <a href="https://miasinglobal.org/" className={linkClassName} target="_blank" rel="noreferrer">
                    Miasin Global
                  </a>
                  .
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className={bulletClassName} />
                <span>
                  Спонсоры розыгрышей — представители армянской диаспоры, поддерживающие инициативу повышения участия
                  граждан.
                </span>
              </li>
            </ul>
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
