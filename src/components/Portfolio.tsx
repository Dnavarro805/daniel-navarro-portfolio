function CornerBracket({ className }: { className?: string }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16.5 16.5"
      fill="none" overflow="visible"
      className={`shrink-0 ${className ?? ""}`}
    >
      <path d="M16.5 0.5H0.5V16.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center size-8 shrink-0 -rotate-90">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="backdrop-blur-[10px] bg-white/10 px-2 py-1 rounded-full font-sans font-medium text-[14px] tracking-[-0.56px] text-white whitespace-nowrap">
      {label}
    </span>
  );
}

type Project = {
  title: string;
  image: string;
  tags: string[];
  tallOnDesktop?: boolean;
};

function ProjectCard({ title, image, tags, tallOnDesktop }: Project) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div
        className={`relative w-full overflow-hidden h-[390px] ${
          tallOnDesktop ? "lg:h-[744px]" : "lg:h-[699px]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-sans font-black text-[24px] lg:text-[36px] leading-[1.1] tracking-[-0.96px] lg:tracking-[-1.44px] uppercase whitespace-nowrap">
          {title}
        </p>
        <ArrowIcon />
      </div>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="flex items-stretch gap-3 w-full lg:w-[465px]">
      <div className="flex flex-col justify-between w-6 shrink-0">
        <CornerBracket />
        <CornerBracket className="-rotate-90" />
      </div>
      <div className="flex-1 py-3 flex flex-col gap-[10px]">
        <p className="font-sans italic font-normal text-[14px] leading-[1.3] tracking-[-0.56px]">
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button
          className="text-white font-sans font-medium text-[14px] tracking-[-0.56px] px-4 py-3 rounded-full self-start"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col justify-between items-end w-6 shrink-0">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}

const leftProjects: Project[] = [
  {
    title: "Surfers Paradise",
    image: "/project-1.jpg",
    tags: ["Social Media", "Photography"],
    tallOnDesktop: true,
  },
  {
    title: "Cyberpunk Caffe",
    image: "/project-2.jpg",
    tags: ["Social Media", "Photography"],
  },
];

const rightProjects: Project[] = [
  {
    title: "Agency 976",
    image: "/project-3.jpg",
    tags: ["Social Media", "Photography"],
  },
  {
    title: "Minimal Playground",
    image: "/project-4.jpg",
    tags: ["Social Media", "Photography"],
    tallOnDesktop: true,
  },
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="w-full px-4 py-12 flex flex-col gap-8 lg:px-8 lg:py-[80px] lg:gap-[61px]"
      style={{ color: "var(--color-text)" }}
    >

      {/* Mobile header */}
      <div className="flex flex-col gap-4 uppercase lg:hidden">
        <p className="font-mono text-[14px] leading-[1.1]">[ portfolio ]</p>
        <div className="flex items-start justify-between w-full">
          <div className="font-sans font-light text-[32px] tracking-[-2.56px] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-[14px] leading-[1.1]">004</p>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex gap-[10px] items-start uppercase">
          <div className="font-sans font-light text-[96px] tracking-[-7.68px] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-[14px] leading-[1.1] mt-1">004</p>
        </div>
        <div className="flex h-[110px] w-[15px] items-center justify-center overflow-visible">
          <p className="font-mono text-[14px] leading-[1.1] uppercase whitespace-nowrap -rotate-90">
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="flex flex-col gap-6 lg:hidden">
        {[...leftProjects, ...rightProjects].map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
        <CtaBox />
      </div>

      {/* Desktop: staggered two-column */}
      <div className="hidden lg:flex gap-6 items-end w-full">
        <div className="flex-1 flex flex-col gap-10 justify-between">
          {leftProjects.map((p) => <ProjectCard key={p.title} {...p} />)}
          <CtaBox />
        </div>
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          {rightProjects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>

    </section>
  );
}
