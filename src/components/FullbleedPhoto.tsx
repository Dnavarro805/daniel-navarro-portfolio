"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FullbleedPhoto() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Blur clears as you scroll the section to 50% of the viewport
      gsap.fromTo(
        imgRef.current,
        { filter: "blur(18px)" },
        {
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1.5,
          },
        }
      );

      // Parallax — image drifts slightly slower than the section
      gsap.fromTo(
        imgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-[565px] lg:h-[900px] overflow-hidden relative">
      <img
        ref={imgRef}
        src="/fullbleed-photo.jpg"
        alt="Daniel Navarro speaking at Yardi REACH"
        className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
      />
    </section>
  );
}
