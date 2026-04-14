export function Metrics() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="a70-surface mx-auto grid max-w-5xl gap-0 overflow-hidden p-0 md:grid-cols-2">
        <article className="px-6 py-7 text-center sm:px-10 sm:py-10 md:border-r md:border-[#ebe4d8]">
          <p className="text-[28px] text-[#85858d] sm:text-[42px]">Общий призовой фонд:</p>
          <p className="mt-2 font-semibold tracking-tight text-[#3a3a40] text-[44px] sm:text-[64px]">$3,740,000</p>
        </article>

        <article className="px-6 py-7 text-center sm:px-10 sm:py-10">
          <p className="text-[28px] text-[#85858d] sm:text-[42px]">Участников:</p>
          <p className="mt-2 font-semibold tracking-tight text-[#3a3a40] text-[44px] sm:text-[64px]">376,482</p>
        </article>
      </div>
    </section>
  );
}
