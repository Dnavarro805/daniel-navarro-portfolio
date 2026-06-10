"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Brand Discovery",
    description:
      "A deep-dive into who you are and where you're going. We craft brand strategy, visual identity, and positioning systems that give your business a clear, compelling voice in a crowded market.",
    deliverables: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines", "Tone of Voice"],
    image: "/service-1.jpg",
    imagePosition: "object-center",
  },
  {
    number: "02",
    title: "Web Design & Dev",
    description:
      "From concept to code. We design and build digital experiences that are beautiful, fast, and purposeful — connecting your brand to your audience through every scroll and interaction.",
    deliverables: ["UX / UI Design", "Frontend Development", "CMS Integration", "Motion & Animation", "Performance Optimization"],
    image: "/service-2.jpg",
    imagePosition: "object-center",
  },
  {
    number: "03",
    title: "Marketing",
    description:
      "Strategy-driven creative that moves people. We develop campaigns, content, and messaging that resonate with your audience and drive measurable results across every channel.",
    deliverables: ["Campaign Strategy", "Content Creation", "Social Media", "Email Marketing", "Analytics & Reporting"],
    image: "/service-3.jpg",
    imagePosition: "object-center",
  },
  {
    number: "04",
    title: "Photography",
    description:
      "Visual storytelling at its finest. From editorial portraits to commercial campaigns, we capture moments that elevate your brand and connect with audiences on a human level.",
    deliverables: ["Portrait Photography", "Commercial Shoots", "Editorial", "Brand Content", "Post-Production"],
    image: "/service-4.jpg",
    imagePosition: "object-[50%_62%]",
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
      );

      rowRefs.current.forEach((row) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 82%", once: true },
          }
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
        <section className="w-full px-4 pt-32 pb-16 lg:px-8 lg:pt-44 lg:pb-24">
          <div ref={heroRef}>

            <div className="flex flex-col gap-3 items-end w-full mb-8">
              <p className="font-mono text-[14px] leading-[1.1] uppercase">[ services ]</p>
              <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[14px] leading-[1.1] uppercase mb-3" style={{ color: "var(--color-accent)" }}>
                  004 deliverables
                </p>
                <h1 className="font-sans font-light text-[52px] leading-[0.88] tracking-[-3.64px] uppercase lg:text-[120px] lg:tracking-[-9.6px]">
                  Creative<br />Deliverables.
                </h1>
              </div>
              <p className="font-sans font-normal text-[14px] leading-[1.5] tracking-[-0.56px] opacity-70 lg:w-[300px] lg:pb-2">
                Full-service creative direction, photography, and digital strategy — built for brands that want to stand out.
              </p>
            </div>

          </div>
        </section>

        {/* ── Service rows ── */}
        <section className="w-full px-4 pb-24 flex flex-col gap-0 lg:px-8 lg:pb-40">
          {services.map((service, i) => (
            <div
              key={service.number}
              ref={(el) => { rowRefs.current[i] = el; }}
              className="flex flex-col gap-8 py-12 lg:py-16 border-t"
              style={{ borderColor: "var(--color-border-solid)" }}
            >

              <div className="flex items-center justify-between">
                <p className="font-mono text-[14px] leading-[1.1] uppercase" style={{ color: "var(--color-accent)" }}>
                  [ {service.number} ]
                </p>
                <p className="font-mono text-[12px] leading-[1.1] uppercase opacity-40">
                  {service.deliverables.length} deliverables
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">

                {/* Text */}
                <div className="flex flex-col gap-6 lg:flex-1">
                  <h2 className="font-sans font-bold italic text-[40px] leading-[1.0] tracking-[-1.6px] uppercase lg:text-[72px] lg:tracking-[-2.88px]">
                    {service.title}
                  </h2>
                  <p className="font-sans font-normal text-[14px] leading-[1.6] tracking-[-0.56px] opacity-75 max-w-[440px]">
                    {service.description}
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-mono text-[11px] leading-[1.1] uppercase opacity-40 mb-1">
                      Deliverables
                    </p>
                    {service.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-3">
                        <span
                          className="w-[5px] h-[5px] rounded-full shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span className="font-sans font-normal text-[14px] leading-[1.3] tracking-[-0.56px]">
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="mailto:danielnavarrodesign@gmail.com"
                    className="font-sans font-medium text-[14px] tracking-[-0.56px] px-5 py-3 rounded-full self-start text-white mt-2"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    Start a project
                  </a>
                </div>

                {/* Image */}
                <div
                  className={`relative w-full overflow-hidden rounded-sm aspect-[4/3] lg:w-[420px] lg:aspect-[3/4] shrink-0`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover ${service.imagePosition}`}
                  />
                </div>

              </div>
            </div>
          ))}
          {/* Bottom rule */}
          <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
        </section>

        {/* ── CTA ── */}
        <section
          className="w-full px-4 py-20 lg:px-8 lg:py-32"
          style={{ backgroundColor: "var(--color-bg-alt)" }}
        >
          <div className="flex flex-col items-center text-center gap-5">
            <p className="font-mono text-[14px] leading-[1.1] uppercase opacity-50">
              [ ready to start? ]
            </p>
            <h2 className="font-sans font-light text-[44px] leading-[0.88] tracking-[-3.52px] uppercase lg:text-[96px] lg:tracking-[-7.68px]">
              Let&apos;s make<br />something great.
            </h2>
            <a
              href="mailto:danielnavarrodesign@gmail.com"
              className="font-sans font-medium text-[14px] tracking-[-0.56px] px-6 py-3 rounded-full text-white mt-2"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Get in touch
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
