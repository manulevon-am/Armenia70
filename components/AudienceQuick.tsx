const diasporaLinks = [
  { label: "Канал на арабском языке", href: "https://t.me/new_hayastan2026_arabia" },
  { label: "Канал на фарси", href: "https://t.me/new_hayastan2026farsi" },
  { label: "Канал на французском языке", href: "https://t.me/election_2025arm" },
  { label: "Канал на русском языке", href: "https://t.me/new_hayastan2026" },
  { label: "Канал на английском языке", href: "https://t.me/election_arm2025" },
  { label: "Канал на испанском языке", href: "https://t.me/new_hayastan2026_esp" },
  { label: "Канал на турецком языке", href: "https://t.me/new_hayastan266turk" },
];

const bulletClassName = "mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a45b]";
const linkClassName = "font-semibold text-[#2563eb] underline decoration-[#2563eb]/60 underline-offset-4";

export function AudienceQuick() {
  return (
    <section id="audience-quick" className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[20px] font-semibold text-[#37373d] sm:text-[26px]">Я в Армении</p>
          <ol className="mt-4 space-y-3 text-[15px] leading-[1.55] text-[#6f7077] sm:text-[17px]">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">
                1
              </span>
              <span>
                Подписывайтесь на главный канал{" "}
                <a href="https://t.me/@miasin_new2025" className={linkClassName} target="_blank" rel="noreferrer">
                  @miasin_new2025
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">
                2
              </span>
              <span>Участвуйте в розыгрыше каждый день в 20:00</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">
                3
              </span>
              <span>Зовите друзей и родственников</span>
            </li>
          </ol>
        </article>

        <article className="a70-card px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[20px] font-semibold text-[#37373d] sm:text-[26px]">Я не в Армении</p>
          <ol className="mt-4 space-y-4 text-[15px] leading-[1.55] text-[#6f7077] sm:text-[17px]">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">
                1
              </span>
              <div>
                <p>Подписывайтесь на канал на удобном языке. Следите за ходом событий:</p>
                <ul className="mt-3 space-y-2">
                  {diasporaLinks.map((item) => (
                    <li key={item.href} className="flex gap-2.5">
                      <span className={bulletClassName} />
                      <a href={item.href} className={linkClassName} target="_blank" rel="noreferrer">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">
                2
              </span>
              <span>Окажите спонсорскую поддержку, если у вас есть возможность</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e3bd] text-[13px] font-semibold text-[#7b6134]">
                3
              </span>
              <span>Если вы гражданин Армении - обязательно приезжайте на выборы 7 июня!</span>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
