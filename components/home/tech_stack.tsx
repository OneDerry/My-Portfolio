import { SlideSection } from "../ui/slide_section";

export function TechStack() {
  return (
    <section id="tech-stack" className="flex flex-col gap-6 animate-fade-in-up">
      <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        Tech stack
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        <SlideSection
          from="left"
          className="space-y-2 rounded-md border border-border bg-card px-4 py-4"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Core
          </p>
          <p className="text-sm text-foreground">React, TypeScript, Next.js</p>
        </SlideSection>
        <SlideSection className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            UI / styling
          </p>
          <p className="text-sm text-foreground">Tailwind CSS, shadcn/ui</p>
        </SlideSection>
        <SlideSection
          from="left"
          className="space-y-2 rounded-md border border-border bg-card px-4 py-4"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            State management
          </p>
          <p className="text-sm text-foreground">Redux Toolkit, React Query*</p>
        </SlideSection>
        <SlideSection className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Mobile
          </p>
          <p className="text-sm text-foreground">React Native, Expo</p>
        </SlideSection>
        <SlideSection
          from="left"
          className="space-y-2 rounded-md border border-border bg-card px-4 py-4"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Tools
          </p>
          <p className="text-sm text-foreground">
            Vite, Next.js, ESLint, Prettier
          </p>
        </SlideSection>
        <SlideSection className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Testing
          </p>
          <p className="text-sm text-foreground">
            Jest, React Testing Library*
          </p>
        </SlideSection>
      </div>
    </section>
  );
}
