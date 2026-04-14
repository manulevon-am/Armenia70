import Link from "next/link";

export default function WhitePaperPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="panel space-y-6 rounded-[28px] p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B7A5C]">Armenia 70</p>
        <h1 className="font-display text-5xl leading-none tracking-tight text-[#1F1F1F]">White Paper</h1>
        <p className="text-base leading-relaxed text-[#5F5B53]">
          Документ в процессе финальной подготовки. Актуальная версия будет опубликована в официальном Telegram-канале и
          на этой странице.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://t.me/armenia70" className="btn-primary justify-center">
            Telegram
          </a>
          <Link href="/" className="btn-secondary justify-center">
            На главную
          </Link>
        </div>
      </section>
    </main>
  );
}
