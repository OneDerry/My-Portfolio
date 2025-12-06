import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:items-start animate-fade-in-up"
    >
      <div className="relative h-56 md:h-64 rounded-md border border-border bg-background/40 overflow-hidden">
        <Image
          src="/me.jpeg"
          alt="Mesiri Olomu"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
          About
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          I&apos;m a frontend-focused engineer who enjoys turning product
          requirements into small, predictable UI building blocks. My work leans
          on TypeScript, React, Redux, and modern CSS utilities to keep
          codebases readable and scalable.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          When I&apos;m not coding, I enjoy exploring new technologies,
          contributing to open-source projects, and staying up-to-date with the
          latest frontend trends. I believe in writing clean, well-documented
          code that other developers can easily understand and maintain.
        </p>
      </div>
    </section>
  );
}
