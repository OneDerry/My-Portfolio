import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative grid gap-10 grid-cols-1 sm:grid-cols-2 md:items-center animate-fade-in-up"
    >
      <div className="pointer-events-none absolute inset-y-0 -left-70 hidden h-full w-20 -translate-x-6 flex-col items-center justify-between md:flex lg:-translate-x-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/60 bg-sky-400/10 shadow-[0_0_40px_rgba(56,189,248,0.55)] backdrop-blur-sm animate-[bounce_7s_infinite]">
          <span className="text-sky-300">⚛︎</span>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/60 bg-yellow-400/10 shadow-[0_0_40px_rgba(250,204,21,0.55)] backdrop-blur-sm animate-[bounce_8s_infinite]">
          <span className="text-yellow-300 text-xs font-semibold">JS</span>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/60 bg-sky-500/10 shadow-[0_0_40px_rgba(59,130,246,0.55)] backdrop-blur-sm animate-[bounce_9s_infinite]">
          <span className="text-sky-200 text-xs font-semibold">TS</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 -right-70 hidden h-full w-20 translate-x-6 flex-col items-center justify-between md:flex lg:translate-x-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-500/60 bg-zinc-900/80 shadow-[0_0_40px_rgba(24,24,27,0.9)] backdrop-blur-sm animate-[bounce_7s_infinite]">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/60 bg-emerald-400/10 shadow-[0_0_40px_rgba(52,211,153,0.55)] backdrop-blur-sm animate-[bounce_8s_infinite]">
          <span className="text-emerald-300 text-[11px] font-semibold">RN</span>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/60 bg-indigo-400/10 shadow-[0_0_40px_rgba(129,140,248,0.6)] backdrop-blur-sm animate-[bounce_9s_infinite]">
          <span className="text-indigo-200 text-[11px] font-semibold">RTK</span>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Frontend Engineer
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Frontend Developer — React, TypeScript, React Native
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          I design and build focused, maintainable UIs with modern React
          tooling, strong type-safety, and clear state management. This
          portfolio is a snapshot of how I approach real-world frontend
          problems.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#featured-projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href="/Mesiri_Olomu_CV.pdf"
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
        <div className="rounded-md border border-border bg-card px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Core
          </p>
          <p className="mt-2 font-medium text-foreground">React · TypeScript</p>
        </div>
        <div className="rounded-md border border-border bg-card px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            State
          </p>
          <p className="mt-2 font-medium text-foreground">Redux Toolkit</p>
        </div>
        <div className="rounded-md border border-border bg-card px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Mobile
          </p>
          <p className="mt-2 font-medium text-foreground">React Native</p>
        </div>
        <div className="rounded-md border border-border bg-card px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Approach
          </p>
          <p className="mt-2 font-medium text-foreground">
            Minimal, testable UIs
          </p>
        </div>
      </div>
    </section>
  );
}
