"use client";

import { useRef } from "react";
import gsap from "gsap";

const services = [
  {
    number: "[ 1 ]",
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-1.jpg",
  },
  {
    number: "[ 2 ]",
    title: "Web Design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-2.jpg",
  },
  {
    number: "[ 3 ]",
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-3.jpg",
  },
  {
    number: "[ 4 ]",
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-4.jpg",
    imagePosition: "object-[50%_62%]",
  },
];

function ServiceRow({ service }: { service: (typeof services)[number] }) {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const onEnter = () => {
    gsap.to(titleRef.current, { x: 14, duration: 0.35, ease: "power2.out" });
    gsap.to(imgRef.current,   { scale: 1.12, duration: 0.5, ease: "power2.out" });
  };

  const onLeave = () => {
    gsap.to(titleRef.current, { x: 0, duration: 0.4, ease: "power2.out" });
    gsap.to(imgRef.current,   { scale: 1, duration: 0.5, ease: "power2.out" });
  };

  return (
    <div
      className="flex flex-col gap-3 lg:gap-[9px] cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="flex flex-col gap-[9px]">
        <p
          className="font-mono text-[14px] leading-[1.1] uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          {service.number}
        </p>
        <div className="w-full h-px" style={{ backgroundColor: "var(--color-border-solid)" }} />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <p
          ref={titleRef}
          className="font-sans font-bold italic text-[36px] leading-[1.1] tracking-[-1.44px] uppercase whitespace-nowrap shrink-0"
        >
          {service.title}
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6 shrink-0">
          <p className="font-sans font-normal text-[14px] leading-[1.3] tracking-[-0.56px] lg:w-[393px]">
            {service.description}
          </p>
          <div className="relative size-[151px] shrink-0 overflow-hidden">
            <img
              ref={imgRef}
              src={service.image}
              alt={service.title}
              className={`absolute inset-0 w-full h-full object-cover ${service.imagePosition ?? "object-center"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="w-full px-4 py-12 flex flex-col gap-8 lg:px-8 lg:py-[80px] lg:gap-12"
      style={{ backgroundColor: "var(--color-bg-alt)", color: "var(--color-text)" }}
    >
      <p className="font-mono text-[14px] leading-[1.1] uppercase">
        [ services ]
      </p>

      <div className="flex items-center justify-between w-full font-sans font-light uppercase whitespace-nowrap text-[32px] tracking-[-2.56px] lg:text-[96px] lg:tracking-[-7.68px]">
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      <div className="flex flex-col gap-12">
        {services.map((service) => (
          <ServiceRow key={service.number} service={service} />
        ))}
      </div>
    </section>
  );
}
