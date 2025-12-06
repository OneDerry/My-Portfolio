import { SlideSection } from "@/components/ui/slide_section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Mesiri Olomu",
  description:
    "Selected frontend and React Native projects highlighting React, TypeScript, Redux, and UI architecture.",
};

const projects = [
  {
    slug: "ecommerce-store",
    title: "E-commerce storefront",
    summary:
      "A minimal storefront focused on performance, predictable state management, and a clean checkout flow.",
    tags: ["React", "TypeScript", "Redux Toolkit"],
  },
  {
    slug: "admin-dashboard",
    title: "Admin dashboard",
    summary:
      "A compact dashboard surface for operations teams, with clear information hierarchy and table-heavy UI.",
    tags: ["React", "TypeScript", "Charts", "Redux"],
  },
  {
    slug: "react-native-app",
    title: "React Native app",
    summary:
      "A small mobile client that mirrors the web experience, reusing as much logic as possible.",
    tags: ["React Native", "TypeScript"],
  },
  {
    slug: "change-for-humanity",
    title: "Change For Humanity",
    summary:
      "A website for a non-profit organization focused on providing resources and support to those in need.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    slug: "riser-school",
    title: "Riser School",
    summary:
      "A website for a school focused on providing resources and support to those in need.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-20 md:px-8 md:py-24 lg:py-28">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Projects
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Selected work
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            This page lists a few representative projects. Each case study
            breaks down the problem, constraints, UI decisions, and how state is
            managed.
          </p>
        </header>

        <SlideSection className="grid gap-4 md:grid-cols-2 animate-fade-in-up">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="flex flex-col gap-2 rounded-md border border-border bg-card px-4 py-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <h2 className="text-sm font-semibold text-foreground md:text-base">
                {project.title}
              </h2>
              <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                {project.summary}
              </p>
              <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </SlideSection>
      </div>
    </main>
  );
}
