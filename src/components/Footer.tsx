export default function Footer() {
  return (
    <footer
      className="w-full pt-12 px-4 lg:px-8 flex flex-col gap-12 lg:gap-[120px]"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >

      {/* ── MOBILE ── */}
      <div className="flex flex-col gap-6 lg:hidden">
        <div className="flex flex-col gap-3">
          <p className="font-sans font-light italic text-[24px] leading-[1.1] tracking-[-0.96px] uppercase">
            Have a{" "}
            <span className="font-black not-italic" style={{ color: "var(--color-accent)" }}>
              project
            </span>{" "}
            in mind?
          </p>
          <a
            href="mailto:danielnavarrodesign@gmail.com"
            className="font-sans font-medium text-[14px] tracking-[-0.56px] px-4 py-3 rounded-full self-start"
            style={{ border: "1px solid var(--color-border-solid)" }}
          >
            Let&apos;s talk
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://www.linkedin.com/in/meet-daniel-navarro/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-normal text-[18px] leading-[1.1] tracking-[-0.72px] uppercase"
          >
            LinkedIn
          </a>
        </div>
        <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex flex-col gap-12">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-3 w-[298px]">
            <p className="font-sans font-light italic text-[24px] leading-[1.1] tracking-[-0.96px] uppercase">
              Have a{" "}
              <span className="font-black not-italic" style={{ color: "var(--color-accent)" }}>
                project
              </span>{" "}
              in mind?
            </p>
            <button
              className="font-sans font-medium text-[14px] tracking-[-0.56px] px-4 py-3 rounded-full self-start"
              style={{ border: "1px solid var(--color-border-solid)" }}
            >
              Let&apos;s talk
            </button>
          </div>
          <div className="font-sans font-normal text-[18px] leading-[1.1] tracking-[-0.72px] text-right uppercase w-[298px]">
            <a
              href="https://www.linkedin.com/in/meet-daniel-navarro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
      </div>

      {/* ── Bottom mobile ── */}
      <div className="flex flex-col gap-4 items-center lg:hidden">
        <div className="flex gap-[34px] items-center pb-8">
          <a href="#" className="font-sans font-normal text-[12px] leading-[1.1] tracking-[-0.48px] uppercase underline">
            Licences
          </a>
          <a href="#" className="font-sans font-normal text-[12px] leading-[1.1] tracking-[-0.48px] uppercase underline">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col gap-3 items-start w-full overflow-hidden">
          <p className="font-sans font-semibold text-[91px] leading-[0.8] tracking-[-5.49px] capitalize whitespace-nowrap">
            H.Studio
          </p>
        </div>
      </div>

      {/* ── Bottom desktop ── */}
      <div className="hidden lg:flex items-end justify-between w-full">
        <div className="relative h-[219px] overflow-hidden w-[1093px] shrink-0">
          <p className="absolute left-1 top-1/2 -translate-y-1/2 font-sans font-semibold text-[290px] leading-[0.8] tracking-[-17.4px] capitalize whitespace-nowrap">
            H.Studio
          </p>
        </div>
        <div className="flex gap-[34px] items-center pb-8 shrink-0">
          <a href="#" className="font-sans font-normal text-[12px] leading-[1.1] tracking-[-0.48px] uppercase underline">
            Licences
          </a>
          <a href="#" className="font-sans font-normal text-[12px] leading-[1.1] tracking-[-0.48px] uppercase underline">
            Privacy Policy
          </a>
        </div>
      </div>

    </footer>
  );
}
