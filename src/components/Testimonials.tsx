type Testimonial = {
  name: string;
  quote: string;
  logo: string;
  logoHeight: number;
  rotation: number;
  desktop: { left: number; top: number; width: number; height: number };
};

const testimonials: Testimonial[] = [
  {
    name: "Lukas Weber",
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "/testimonial-logo-1.png",
    logoHeight: 19,
    rotation: 2.9,
    desktop: { left: 676, top: 272, width: 362, height: 204 },
  },
  {
    name: "Marko Stojković",
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "/testimonial-logo-2.png",
    logoHeight: 19,
    rotation: -6.85,
    desktop: { left: 102, top: 142, width: 381, height: 295 },
  },
  {
    name: "Sarah Jenkins",
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "/testimonial-logo-3.png",
    logoHeight: 31,
    rotation: 2.23,
    desktop: { left: 305, top: 553, width: 363, height: 280 },
  },
  {
    name: "Sofia Martínez",
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "/testimonial-logo-4.png",
    logoHeight: 36,
    rotation: -4.15,
    desktop: { left: 987, top: 546, width: 367, height: 228 },
  },
];

function Card({
  name,
  quote,
  logo,
  logoHeight,
  rotation,
  width = 353,
}: Testimonial & { width?: number }) {
  return (
    <div
      className="rounded-[4px] p-6 flex flex-col gap-4 shrink-0"
      style={{
        backgroundColor: "var(--color-card)",
        border: "1px solid var(--color-accent)",
        transform: `rotate(${rotation}deg)`,
        width,
      }}
    >
      <img
        src={logo}
        alt=""
        className="object-contain object-left opacity-80"
        style={{ height: logoHeight }}
      />
      <p className="font-sans font-normal text-[18px] leading-[1.3] tracking-[-0.72px] text-white">
        {quote}
      </p>
      <p className="font-sans font-black text-[16px] leading-[1.1] tracking-[-0.64px] text-white/70 uppercase whitespace-nowrap">
        {name}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full relative"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >

      {/* ── MOBILE ── */}
      <div
        className="relative lg:hidden flex flex-col gap-8 px-4 py-16 overflow-hidden"
        style={{ color: "var(--color-text)" }}
      >
        <p className="font-sans font-medium text-[64px] leading-[0.8] tracking-[-4.48px] capitalize">
          Testimonials
        </p>
        <div className="overflow-x-auto">
          <div className="flex items-start gap-4 pb-4" style={{ width: "1060px" }}>
            {testimonials.map((t) => (
              <Card key={t.name} {...t} width={255} />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex min-h-[860px] items-center justify-center overflow-hidden">
        <p
          className="relative z-10 font-sans font-medium text-[198px] leading-[1.1] tracking-[-13.86px] capitalize whitespace-nowrap select-none"
          style={{ color: "var(--color-text)" }}
        >
          Testimonials
        </p>

        <div className="absolute flex items-center justify-center" style={{ left: 676, top: 272, width: 362, height: 204 }}>
          <Card {...testimonials[0]} />
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: 102, top: 142, width: 381, height: 295 }}>
          <Card {...testimonials[1]} />
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: 305, top: 553, width: 363, height: 280 }}>
          <Card {...testimonials[2]} />
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: 987, top: 546, width: 367, height: 228 }}>
          <Card {...testimonials[3]} />
        </div>
      </div>

    </section>
  );
}
