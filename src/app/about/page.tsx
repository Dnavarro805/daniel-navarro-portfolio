"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "8+",   label: "Years in industry" },
  { value: "100+", label: "Projects delivered" },
  { value: "20+",  label: "Brands built" },
  { value: "001",  label: "City — Chicago" },
];

const expertise = [
  { number: "01", title: "Brand & Creative Direction", description: "Leading visual identity systems, art direction, and creative strategy from concept through execution." },
  { number: "02", title: "Photography & Visual Storytelling", description: "Editorial and commercial photography that communicates your brand's story with clarity and emotion." },
  { number: "03", title: "Web Design & Development", description: "Designing and building digital experiences that are beautiful, fast, and built to convert." },
  { number: "04", title: "Marketing & Strategy", description: "Campaigns and content strategies that connect with audiences and drive measurable growth." },
];

export default function AboutPage() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const imgRef     = useRef<HTMLImageElement>(null);
  const bioRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const expertiseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero on load
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
      );

      // Portrait fade in
      gsap.fromTo(imgRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 85%", once: true } }
      );

      // Bio text
      gsap.fromTo(bioRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: bioRef.current, start: "top 82%", once: true } }
      );

      // Stats
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true } }
      );

      // Expertise rows stagger
      expertiseRefs.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(row,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: i * 0.08,
            scrollTrigger: { trigger: row, start: "top 84%", once: true } }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>

        {/* ── Hero ── */}
        <section className="w-full px-4 pt-32 pb-12 lg:px-8 lg:pt-44 lg:pb-20">
          <div ref={heroRef}>
            <div className="flex flex-col gap-3 items-end w-full mb-8">
              <p className="font-mono text-[14px] leading-[1.1] uppercase">[ 8+ years in industry ]</p>
              <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-start lg:gap-3 w-full">
                <p className="font-sans font-light text-[44px] leading-[0.84] tracking-[-3.52px] uppercase whitespace-pre lg:text-[96px] lg:tracking-[-7.68px]">
                  {`A creative director   /`}
                </p>
                <p className="font-mono text-[14px] leading-[1.1] uppercase hidden lg:block lg:pt-1 shrink-0">001</p>
              </div>
              <div className="lg:pl-[214px]">
                <p className="font-sans font-light text-[44px] leading-[0.84] tracking-[-3.52px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
                  Photographer
                </p>
              </div>
              <div className="lg:pl-[610px]">
                <p className="font-sans font-light text-[44px] leading-[0.84] tracking-[-3.52px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
                  Born{" "}
                  <span className="font-[family-name:var(--font-playfair)] font-normal italic normal-case" style={{ color: "var(--color-accent)" }}>
                    &amp;
                  </span>
                  {" "}raised
                </p>
              </div>
              <p className="font-sans font-light text-[44px] leading-[0.84] tracking-[-3.52px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
                on the south side
              </p>
              <div className="flex flex-col items-start gap-3 w-full lg:flex-row lg:items-start lg:gap-4 lg:pl-[606px]">
                <p className="font-sans font-light text-[44px] leading-[0.84] tracking-[-3.52px] uppercase whitespace-nowrap lg:text-[96px] lg:tracking-[-7.68px]">
                  of chicago.
                </p>
                <p className="font-mono text-[14px] leading-[1.1] uppercase whitespace-nowrap shrink-0 lg:pt-6">
                  [ creative freelancer ]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Portrait + Bio ── */}
        <section className="w-full px-4 py-12 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

            <div className="relative w-full overflow-hidden aspect-[3/4] lg:w-[480px] lg:aspect-auto lg:h-[620px] shrink-0">
              <img
                ref={imgRef}
                src="/about-photo.jpg"
                alt="Daniel Navarro"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div ref={bioRef} className="flex flex-col gap-8 lg:pt-4 lg:flex-1">
              <div className="flex flex-col gap-3">
                <p className="font-mono text-[14px] leading-[1.1] uppercase" style={{ color: "var(--color-accent)" }}>
                  [ my story ]
                </p>
                <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
              </div>

              <div className="flex flex-col gap-6">
                <p className="font-sans font-normal text-[16px] leading-[1.6] tracking-[-0.64px] opacity-80">
                  My passion for artistic expression and the creative process drives me to bring together all the pieces of the puzzle — whether that&apos;s a complex brand system, a digital experience, or a single striking photograph. I believe great creative work lives at the intersection of art and intention, and I&apos;m constantly seeking that balance in everything I make.
                </p>
                <p className="font-sans font-normal text-[16px] leading-[1.6] tracking-[-0.64px] opacity-80">
                  I take pride in crafting solutions that make a real, positive impact — for my clients, their audiences, and the communities around them. It&apos;s this commitment to meaningful work that pushes me to constantly grow, experiment, and evolve in an industry that never stops moving.
                </p>
              </div>

              <a
                href="mailto:danielnavarrodesign@gmail.com"
                className="font-sans font-medium text-[14px] tracking-[-0.56px] px-5 py-3 rounded-full self-start text-white"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Get in touch
              </a>
            </div>

          </div>
        </section>

        {/* ── Stats ── */}
        <section
          className="w-full px-4 py-14 lg:px-8 lg:py-20"
          style={{ backgroundColor: "var(--color-bg-alt)" }}
        >
          <div ref={statsRef} className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-2 lg:px-10 ${i > 0 ? "lg:border-l" : ""}`}
                style={{ borderColor: "var(--color-border-solid)" }}
              >
                <p
                  className="font-sans font-light text-[48px] leading-[0.88] tracking-[-3.84px] lg:text-[72px] lg:tracking-[-5.76px]"
                  style={{ color: "var(--color-accent)" }}
                >
                  {stat.value}
                </p>
                <p className="font-mono text-[12px] leading-[1.3] uppercase opacity-60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Expertise ── */}
        <section className="w-full px-4 py-16 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-3 items-end w-full mb-10">
            <p className="font-mono text-[14px] leading-[1.1] uppercase">[ areas of expertise ]</p>
            <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
          </div>

          <div className="flex flex-col">
            {expertise.map((item, i) => (
              <div
                key={item.number}
                ref={(el) => { expertiseRefs.current[i] = el; }}
                className="flex flex-col gap-3 py-8 border-t lg:flex-row lg:items-start lg:gap-16 lg:py-10"
                style={{ borderColor: "var(--color-border-solid)" }}
              >
                <p className="font-mono text-[14px] leading-[1.1] uppercase shrink-0 lg:w-[80px]" style={{ color: "var(--color-accent)" }}>
                  [ {item.number} ]
                </p>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:flex-1 lg:gap-16">
                  <h3 className="font-sans font-bold italic text-[28px] leading-[1.05] tracking-[-1.12px] uppercase whitespace-nowrap lg:text-[40px] lg:tracking-[-1.6px]">
                    {item.title}
                  </h3>
                  <p className="font-sans font-normal text-[14px] leading-[1.6] tracking-[-0.56px] opacity-70 lg:max-w-[400px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="w-full px-4 py-20 lg:px-8 lg:py-32"
          style={{ backgroundColor: "var(--color-bg-alt)" }}
        >
          <div className="flex flex-col items-center text-center gap-5">
            <p className="font-mono text-[14px] leading-[1.1] uppercase opacity-50">
              [ let&apos;s work together ]
            </p>
            <h2 className="font-sans font-light text-[44px] leading-[0.88] tracking-[-3.52px] uppercase lg:text-[96px] lg:tracking-[-7.68px]">
              Have a project<br />in mind?
            </h2>
            <a
              href="mailto:danielnavarrodesign@gmail.com"
              className="font-sans font-medium text-[14px] tracking-[-0.56px] px-6 py-3 rounded-full text-white mt-2"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Let&apos;s talk
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
