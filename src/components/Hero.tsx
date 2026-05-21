"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "Contact"];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Dark base */}
      <div className="absolute inset-0" style={{ backgroundColor: "var(--color-bg)" }} />

      {/* Blue-palette glow rising from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-hero-glow), transparent 60%)" }}
      />

      {/* Portrait */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          alt="Daniel Navarro"
          src="/hero.png"
          className="h-[90%] w-auto object-contain object-bottom pointer-events-none"
        />
      </div>

      {/* Page content */}
      <div
        className="relative flex flex-col h-full px-4 pb-6 justify-between lg:px-8 lg:pb-0 lg:gap-[240px] lg:justify-start"
        style={{ color: "var(--color-text)" }}
      >

        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between w-full py-6">
          <span className="font-semibold text-[16px] capitalize tracking-normal">
            Navarro.Design
          </span>

          <div className="hidden lg:flex gap-14 font-semibold text-[16px] capitalize tracking-normal">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:opacity-60 transition-opacity">
                {link}
              </a>
            ))}
          </div>

          <button
            className="hidden lg:flex items-center justify-center text-white text-[14px] font-medium tracking-normal px-4 py-3 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Let&apos;s talk
          </button>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile nav overlay */}
        {menuOpen && (
          <div
            className="absolute inset-0 z-20 flex flex-col lg:hidden backdrop-blur-md"
            style={{ backgroundColor: "var(--color-bg-overlay)", color: "var(--color-text)" }}
          >
            <div className="flex items-center justify-between px-4 py-6">
              <span className="font-semibold text-[16px] capitalize tracking-normal">
                Navarro.Design
              </span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-8 px-4 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-semibold text-[32px] capitalize tracking-normal"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="mt-auto px-4 pb-10">
              <button
                className="text-white text-[14px] font-medium tracking-normal px-6 py-3 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        )}

        {/* ── Hero body ── */}
        <div className="flex flex-col w-full h-[341px] items-center justify-between sm:h-[420px] lg:h-auto lg:items-start">

          <div className="flex flex-col w-full items-center lg:items-start">
            <div className="flex items-center justify-center px-[18px] mb-[-15px] w-full lg:justify-start">
              <p className="font-mono text-[14px] font-normal leading-[1.1] uppercase opacity-60">
                [ Hello I&apos;m ]
              </p>
            </div>
            <h1 className="w-full text-center capitalize font-medium whitespace-pre-wrap text-[96px] leading-[0.8] tracking-[-0.03em] sm:text-[130px] sm:leading-[0.85] lg:text-[198px] lg:leading-[1.1]">
              {`Daniel   Navarro`}
            </h1>
          </div>

          <div className="flex flex-col gap-[17px] items-start w-[293px] sm:w-[360px] lg:w-[294px] lg:self-end">
            <p className="font-bold italic text-[14px] leading-[1.1] tracking-normal uppercase w-full">
              Navarro.Design is a{" "}
              <span className="font-normal not-italic">full-service</span>
              {" "}creative studio creating beautiful digital experiences and products. We are an{" "}
              <span className="font-normal not-italic">award winning</span>
              {" "}design and art group specializing in branding, web design and engineering.
            </p>
            <button
              className="text-white text-[14px] font-medium tracking-normal px-4 py-3 rounded-full overflow-hidden"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Let&apos;s talk
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
