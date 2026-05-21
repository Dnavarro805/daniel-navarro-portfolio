function CornerBracket({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16.5 16.5"
      fill="none"
      overflow="visible"
      className={`shrink-0 ${className ?? ""}`}
    >
      <path d="M16.5 0.5H0.5V16.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function Bio() {
  return (
    <section
      id="about"
      className="w-full px-4 py-12 lg:px-8 lg:py-[80px]"
      style={{ color: "var(--color-text)" }}
    >

      {/* Mobile-only top labels */}
      <div className="flex flex-col gap-5 mb-5 lg:hidden">
        <p className="font-mono text-[14px] leading-[1.1] uppercase">002</p>
        <p className="font-mono text-[14px] leading-[1.1] uppercase">[ About ]</p>
      </div>

      {/* Main layout row */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

        {/* Desktop-only far-left label */}
        <p className="font-mono text-[14px] leading-[1.1] uppercase hidden lg:block shrink-0">
          [ About ]
        </p>

        {/* Right section: text block + photo */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-8 lg:flex-1 lg:max-w-[983px]">

          {/* Bracketed text block */}
          <div className="flex items-stretch flex-1">
            <div className="flex flex-col justify-between shrink-0 w-6">
              <CornerBracket />
              <CornerBracket className="-rotate-90" />
            </div>
            <div className="flex-1 py-3 px-1">
              <p className="font-sans font-normal text-[14px] leading-[1.3] tracking-[-0.56px]">
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
            </div>
            <div className="flex flex-col justify-between items-end shrink-0 w-6">
              <CornerBracket className="rotate-90" />
              <CornerBracket className="rotate-180" />
            </div>
          </div>

          {/* 002 label + portrait photo */}
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-start lg:gap-6">
            <p className="font-mono text-[14px] leading-[1.1] uppercase hidden lg:block shrink-0">002</p>
            <div className="w-full aspect-[422/594] lg:w-[436px] lg:h-[614px] lg:aspect-auto relative overflow-hidden">
              <img
                src="/about-photo.jpg"
                alt="Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
