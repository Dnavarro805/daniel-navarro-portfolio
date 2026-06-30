"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const danielGroupRef = useRef<HTMLDivElement>(null);
  const navarroRef = useRef<HTMLSpanElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      };

      gsap.to(danielGroupRef.current, { x: "-38vw", ease: "none", scrollTrigger: trigger });
      gsap.to(navarroRef.current,    { x:  "38vw", ease: "none", scrollTrigger: trigger });
      gsap.to(portraitRef.current,   { scale: 1.22, ease: "none", scrollTrigger: trigger });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">

      <div className="absolute inset-0" style={{ backgroundColor: "var(--color-bg)" }} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-hero-glow), transparent 60%)" }}
      />

      <div ref={portraitRef} className="absolute inset-0 flex items-end justify-center">
        <img
          alt="Daniel Navarro"
          src="/hero.png"
          fetchPriority="high"
          className="h-[90%] w-auto object-contain object-bottom pointer-events-none"
        />
      </div>

      <div
        className="relative flex flex-col h-full px-4 pb-8 justify-end lg:px-8 lg:pb-12"
        style={{ color: "var(--color-text)" }}
      >
        <div className="flex flex-col w-full items-center lg:items-start">

          {/* "Hello I'm" + "Daniel" move left */}
          <div ref={danielGroupRef} className="w-full flex flex-col items-center lg:items-start">
            <p className="font-mono text-[14px] font-normal leading-[1.1] uppercase opacity-60 mb-[-15px] px-[18px]">
              [ Hello I&apos;m ]
            </p>
            <span className="block w-full text-center capitalize font-medium text-[96px] leading-[0.8] tracking-[-0.03em] sm:text-[130px] sm:leading-[0.85] lg:text-[198px] lg:leading-[1.1] lg:text-left">
              Daniel
            </span>
          </div>

          {/* "Navarro" moves right */}
          <span
            ref={navarroRef}
            className="block w-full text-center capitalize font-medium text-[96px] leading-[0.8] tracking-[-0.03em] sm:text-[130px] sm:leading-[0.85] lg:text-[198px] lg:leading-[1.1] lg:text-right"
          >
            Navarro
          </span>

        </div>
      </div>
    </section>
  );
}
