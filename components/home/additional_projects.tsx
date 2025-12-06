const additionalProjects = [
  "Multi-step form",
  "API integration app",
  "Dashboard layout",
  "Design system playground",
];

export function AdditionalProjects() {
  return (
    <section
      id="more-projects"
      className="flex flex-col gap-6 animate-fade-in-up"
    >
      <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        Additional projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {additionalProjects.map((title) => (
          <article
            key={title}
            className="flex flex-col gap-2 rounded-md border border-border bg-card px-4 py-4"
          >
            <h3 className="text-sm font-semibold text-foreground md:text-base">
              {title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
              Concise description placeholder for this smaller project. Replace
              with real examples later.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
