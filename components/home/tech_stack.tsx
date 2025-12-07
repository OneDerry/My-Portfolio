import { Cpu, FlaskConical, PanelsTopLeft, Smartphone } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiVite,
  SiEslint,
  SiPrettier,
  SiExpo,
} from "react-icons/si";
import { SlideSection } from "../ui/slide_section";

export function TechStack() {
  const tools = [
    { name: "React", level: "4yrs", icon: SiReact },
    { name: "Next.js", level: "3yrs", icon: SiNextdotjs },
    { name: "TypeScript", level: "3yrs", icon: SiTypescript },
    { name: "Node.js", level: "3yrs", icon: SiNodedotjs },
    { name: "Redux Toolkit", level: "3yrs", icon: SiRedux },
    { name: "React Query", level: "2yrs", icon: FlaskConical },
    { name: "Tailwind CSS", level: "3yrs", icon: SiTailwindcss },
    { name: "shadcn/ui", level: "1yr", icon: PanelsTopLeft },
    { name: "React Native", level: "2yrs", icon: Smartphone },
    { name: "Expo", level: "2yrs", icon: SiExpo },
    { name: "Jest", level: "2yrs", icon: SiJest },
    { name: "React Testing Library", level: "2yrs", icon: Cpu },
    { name: "Vite", level: "1yr", icon: SiVite },
    { name: "ESLint", level: "3yrs", icon: SiEslint },
    { name: "Prettier", level: "3yrs", icon: SiPrettier },
  ];

  const categories = [
    { label: "Frontend", color: "bg-emerald-500/10 text-emerald-300" },
    { label: "Backend", color: "bg-sky-500/10 text-sky-300" },
    { label: "DevOps", color: "bg-indigo-500/10 text-indigo-300" },
    { label: "Mobile", color: "bg-pink-500/10 text-pink-300" },
  ];

  return (
    <section
      id="tech-stack"
      className="flex flex-col items-center gap-8 rounded-xl border border-border/50 bg-linear-to-b from-background via-background/80 to-background/40 px-4 py-10 md:px-8 lg:px-12"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
          Tech Arsenal
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Tools I Master
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          Technologies I use to build scalable, beautiful and performant
          applications.
        </p>
      </div>

      <div className="sm:grid max-h-[400px] overflow-y-auto overflow-x-hidden flex flex-col sm:h-full w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          const isOddPosition = (index + 1) % 2 === 1;
          return (
            <SlideSection
              key={tool.name}
              from={isOddPosition ? "left" : undefined}
              className="flex flex-col items-center justify-between rounded-xl border border-border/60 bg-card/60 px-5 py-5 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/60 hover:bg-card/80 hover:shadow-[0_18px_45px_rgba(15,23,42,0.85)]"
            >
              <div className="flex-1">
                {Icon && (
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
              </div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                <p className="text-sm font-medium text-foreground">
                  {tool.name}
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{tool.level}</span>
              </div>
            </SlideSection>
          );
        })}
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => (
          <span
            key={category.label}
            className={`rounded-full px-3 py-1 text-[11px] font-medium ${category.color} border border-border/40`}
          >
            {category.label}
          </span>
        ))}
      </div>
    </section>
  );
}
