export function Metrics() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="a70-surface mx-auto grid max-w-5xl gap-0 overflow-hidden p-0 md:grid-cols-2">
        <article className="px-6 py-6 text-center sm:px-8 sm:py-7 md:border-r md:border-[#ebe4d8]">
          <p className="text-[16px] text-[#85858d] sm:text-[20px]">Общий призовой фонд:</p>
          <p className="mt-1.5 text-[30px] font-semibold tracking-tight text-[#3a3a40] sm:text-[40px]">$3,740,000</p>
        </article>

        <article className="px-6 py-6 text-center sm:px-8 sm:py-7">
          <p className="text-[16px] text-[#85858d] sm:text-[20px]">Участников:</p>
          <p className="mt-1.5 text-[30px] font-semibold tracking-tight text-[#3a3a40] sm:text-[40px]">376,482</p>
        </article>
      </div>
    </section>
  );
}
