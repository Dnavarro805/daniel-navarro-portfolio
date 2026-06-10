"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact",  href: "/#contact" },
];
const MAILTO = "mailto:danielnavarrodesign@gmail.com";

// blend style applied to logo, links, and hamburger
const blend: React.CSSProperties = { mixBlendMode: "difference", color: "white" };

function NavLink({ label, href }: { label: string; href: string }) {
  const underlineRef = useRef<HTMLSpanElement>(null);
  return (
    <a
      href={href}
      className="relative py-1"
      onMouseEnter={() =>
        gsap.to(underlineRef.current, { scaleX: 1, duration: 0.3, ease: "power2.out" })
      }
      onMouseLeave={() =>
        gsap.to(underlineRef.current, { scaleX: 0, duration: 0.25, ease: "power2.in" })
      }
    >
      {label}
      <span
        ref={underlineRef}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-current"
        style={{ transform: "scaleX(0)", transformOrigin: "left" }}
      />
    </a>
  );
}

function CtaButton({ children, className = "", style, href }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
}) {
  const onEnter = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, { y: -3, boxShadow: "0 8px 28px rgba(26,96,168,0.6)", duration: 0.25, ease: "power2.out" });
  const onLeave = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, { y: 0, boxShadow: "0 0px 0px rgba(26,96,168,0)", duration: 0.25, ease: "power2.in" });
  const onDown = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, { scale: 0.96, y: 0, duration: 0.1 });
  const onUp = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: "back.out(2)" });

  const props = { className, style, onMouseEnter: onEnter, onMouseLeave: onLeave, onMouseDown: onDown, onMouseUp: onUp };
  return href
    ? <a href={href} {...props}>{children}</a>
    : <button {...props}>{children}</button>;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const animatingRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen || !overlayRef.current) return;

    const overlay = overlayRef.current;
    const links = linksRef.current.filter(Boolean);

    gsap.set(overlay, { opacity: 0, y: -20 });
    gsap.set(links, { opacity: 0, y: 40 });
    if (mobileCtaRef.current) gsap.set(mobileCtaRef.current, { opacity: 0, y: 16 });

    animatingRef.current = true;
    const tl = gsap.timeline({ onComplete: () => { animatingRef.current = false; } });
    tl.to(overlay, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
    tl.to(links, { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, ease: "power2.out" }, "-=0.15");
    if (mobileCtaRef.current)
      tl.to(mobileCtaRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.2");
  }, [menuOpen]);

  const handleClose = useCallback(() => {
    if (animatingRef.current || !overlayRef.current) return;

    const overlay = overlayRef.current;
    const links = linksRef.current.filter(Boolean);

    animatingRef.current = true;
    const tl = gsap.timeline({
      onComplete: () => { setMenuOpen(false); animatingRef.current = false; },
    });
    if (mobileCtaRef.current)
      tl.to(mobileCtaRef.current, { opacity: 0, y: 10, duration: 0.15, ease: "power2.in" });
    tl.to(links, { opacity: 0, y: -24, stagger: 0.05, duration: 0.22, ease: "power2.in" }, "<");
    tl.to(overlay, { opacity: 0, y: -16, duration: 0.28, ease: "power3.in" }, "-=0.05");
  }, []);

  return (
    <>
      {/* Fixed header — pointer-events-none so the transparent area doesn't eat scroll/clicks */}
      <header
        className="fixed top-0 inset-x-0 z-50 px-4 lg:px-8 py-6 flex items-center justify-between pointer-events-none"
        style={{
          backgroundColor: scrolled ? "rgba(5, 13, 26, 0.72)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
          transition: "background-color 0.5s ease, backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease",
        }}
      >

        {/* Logo — blend */}
        <span
          className="font-semibold text-[16px] capitalize tracking-normal pointer-events-auto"
          style={blend}
        >
          Daniel Navarro Design
        </span>

        {/* Desktop links — blend */}
        <div
          className="hidden lg:flex gap-14 font-semibold text-[16px] capitalize tracking-normal pointer-events-auto"
          style={blend}
        >
          {navLinks.map((link) => <NavLink key={link.label} label={link.label} href={link.href} />)}
        </div>

        {/* Desktop CTA — no blend, keeps its accent colour */}
        <CtaButton
          className="hidden lg:flex items-center justify-center text-white text-[14px] font-medium tracking-normal px-4 py-3 rounded-full pointer-events-auto"
          href={MAILTO}
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          Let&apos;s talk
        </CtaButton>

        {/* Mobile hamburger — short / long / short → × */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex lg:hidden flex-col items-center justify-between w-6 h-[14px] cursor-pointer pointer-events-auto"
          style={blend}
          onClick={() => (menuOpen ? handleClose() : setMenuOpen(true))}
        >
          <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${menuOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-[13px]"}`} />
          <span className={`block h-[1.5px] w-6 bg-current rounded-full transition-all duration-200 ease-in-out ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${menuOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-[13px]"}`} />
        </button>
      </header>

      {/* Mobile overlay — fixed, sits just below the header z-index */}
      {menuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 flex flex-col lg:hidden backdrop-blur-md"
          style={{ backgroundColor: "var(--color-bg-overlay)", color: "var(--color-text)" }}
        >
          <div className="flex items-center justify-between px-4 py-6">
            <span className="font-semibold text-[16px] capitalize tracking-normal">
              Daniel Navarro Design
            </span>
            <button
              aria-label="Close menu"
              className="flex flex-col items-center justify-between w-6 h-[14px] cursor-pointer"
              onClick={handleClose}
            >
              <span className="block h-[1.5px] w-6 bg-current rounded-full rotate-45 translate-y-[6px] origin-center" />
              <span className="block h-[1.5px] w-6 bg-current rounded-full opacity-0" />
              <span className="block h-[1.5px] w-6 bg-current rounded-full -rotate-45 -translate-y-[6px] origin-center" />
            </button>
          </div>

          <nav className="flex flex-col gap-8 px-4 pt-8">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                ref={(el) => { linksRef.current[i] = el; }}
                href={link.href}
                className="font-semibold text-[32px] capitalize tracking-normal"
                onClick={handleClose}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div ref={mobileCtaRef} className="mt-auto px-4 pb-10">
            <CtaButton
              className="text-white text-[14px] font-medium tracking-normal px-6 py-3 rounded-full"
              href={MAILTO}
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Let&apos;s talk
            </CtaButton>
          </div>
        </div>
      )}
    </>
  );
}
