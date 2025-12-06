import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto flex max-w-[90%] sm:max-w-[70%] flex-col gap-6 px-4 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">
              Let&apos;s work together
            </p>
            <p className="text-xs text-muted-foreground">
              Always happy to chat about frontend architecture and design
              systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 hover-cta"
            >
              Contact section
            </a>
            <a
              href="mailto:mesiri.dev@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover-cta"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>Based in Lagos, working remotely Abuja</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/60 md:inline-block" />
            <span>Built with Next.js, TypeScript, Tailwind CSS</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://github.com/OneDerry"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/mesiri-olomu-0a4403153/"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 text-xs text-muted-foreground">
          <p>© {year} Mesiri Olomu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
