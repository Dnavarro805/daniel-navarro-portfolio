export default function About() {
  return (
    <section
      id="about"
      className="w-full px-4 py-12 lg:px-8 lg:py-[120px]"
      style={{ color: "var(--color-text)" }}
    >

      {/* Header: label + rule */}
      <div className="flex flex-col gap-3 items-end w-full">
        <p className="font-mono text-[14px] leading-[1.1] uppercase">
          [ 8+ years in industry ]
        </p>
        <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
      </div>

      {/* Big type block */}
      <div className="mt-6 flex flex-col gap-2 items-center lg:items-start w-full">

        {/* Row 1 */}
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-3 w-full">
          <p className="font-mono text-[14px] leading-[1.1] uppercase lg:hidden">001</p>
          <p className="font-sans font-light text-[32px] leading-[0.84] tracking-[-2.56px] uppercase whitespace-pre lg:text-[96px] lg:tracking-[-7.68px]">
            {`A creative director   /`}
          </p>
          <p className="font-mono text-[14px] leading-[1.1] uppercase hidden lg:block lg:pt-1 shrink-0">001</p>
        </div>

        {/* Row 2 */}
        <div className="lg:pl-[214px]">
          <p className="font-sans font-light text-[32px] leading-[0.84] tracking-[-2.56px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
            Photographer
          </p>
        </div>

        {/* Row 3 */}
        <div className="lg:pl-[610px]">
          <p className="font-sans font-light text-[32px] leading-[0.84] tracking-[-2.56px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
            Born{" "}
            <span
              className="font-[family-name:var(--font-playfair)] font-normal italic normal-case"
              style={{ color: "var(--color-accent)" }}
            >
              &amp;
            </span>
            {" "}raised
          </p>
        </div>

        {/* Row 4 */}
        <p className="font-sans font-light text-[32px] leading-[0.84] tracking-[-2.56px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
          on the south side
        </p>

        {/* Row 5 */}
        <div className="flex flex-col items-center gap-3 w-full lg:flex-row lg:items-start lg:gap-4 lg:pl-[606px]">
          <p className="font-sans font-light text-[32px] leading-[0.84] tracking-[-2.56px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
            of chicago.
          </p>
          <p className="font-mono text-[14px] leading-[1.1] uppercase whitespace-nowrap shrink-0 lg:pt-6">
            [ creative freelancer ]
          </p>
        </div>

      </div>
    </section>
  );
}
