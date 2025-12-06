export function Hero() {
  return (
    <section
      id="hero"
      className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:items-center animate-fade-in-up"
    >
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
