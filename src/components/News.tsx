const posts = [
  {
    image: "/news-1.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
    desktopOffset: false,
  },
  {
    image: "/news-2.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
    desktopOffset: true,
  },
  {
    image: "/news-3.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
    desktopOffset: false,
  },
];

function ReadMore({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 py-1 self-start"
      style={{ borderBottom: "1px solid var(--color-text)" }}
    >
      <span className="font-sans font-medium text-[14px] tracking-[-0.56px] whitespace-nowrap">
        Read more
      </span>
      <div className="-rotate-90 size-[18px] shrink-0">
        <img src="/arrow-icon.svg" alt="" className="size-full" />
      </div>
    </a>
  );
}

function NewsCard({
  image,
  excerpt,
  href,
  desktopOffset,
  mobileWidth = "w-[300px]",
}: (typeof posts)[number] & { mobileWidth?: string }) {
  return (
    <div
      className={`flex flex-col gap-4 shrink-0 ${mobileWidth} lg:w-auto lg:flex-1 ${
        desktopOffset ? "lg:pt-[120px]" : ""
      }`}
    >
      <div className="relative w-full h-[398px] lg:h-[469px] overflow-hidden">
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <p className="font-sans font-normal text-[14px] leading-[1.3] tracking-[-0.56px]">
        {excerpt}
      </p>
      <ReadMore href={href} />
    </div>
  );
}

export default function News() {
  return (
    <section
      className="w-full px-4 py-16 lg:px-8 lg:py-[120px]"
      style={{ backgroundColor: "var(--color-bg-alt)", color: "var(--color-text)" }}
    >

      {/* Mobile */}
      <div className="flex flex-col gap-8 lg:hidden">
        <p className="font-sans font-light text-[32px] leading-[0.86] tracking-[-2.56px] uppercase">
          Keep up with my latest news &amp; achievements
        </p>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4" style={{ width: "960px" }}>
            {posts.map((post) => (
              <NewsCard key={post.image} {...post} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-end justify-between w-full">
        <div className="flex items-center justify-center shrink-0 w-[110px] h-[706px]">
          <div className="-rotate-90 flex-none">
            <p className="font-sans font-light text-[64px] leading-[0.86] tracking-[-5.12px] uppercase whitespace-nowrap">
              Keep up with my latest
              <br />
              news &amp; achievements
            </p>
          </div>
        </div>

        <div className="flex flex-1 ml-8 items-start">
          <NewsCard {...posts[0]} />
          <div className="w-px self-stretch mx-8 shrink-0" style={{ backgroundColor: "var(--color-border)" }} />
          <NewsCard {...posts[1]} />
          <div className="w-px self-stretch mx-8 shrink-0" style={{ backgroundColor: "var(--color-border)" }} />
          <NewsCard {...posts[2]} />
        </div>
      </div>

    </section>
  );
}
