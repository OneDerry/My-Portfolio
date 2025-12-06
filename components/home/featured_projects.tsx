import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    slug: "ecommerce-store",
    title: "E-commerce storefront",
    summary:
      "A minimal storefront focused on performance, predictable state management, and a clean checkout flow.",
    tags: ["React", "Next.js", "TypeScript", "Redux"],
    demoUrl: "https://e-commerce-4idffu9cd-onederrys-projects.vercel.app/",
    repoUrl: "https://github.com/OneDerry/E-Commerce",
    thumbnail: "/thumbnail/ecommerce-thumbnail.png",
  },
  {
    slug: "admin-dashboard",
    title: "Admin dashboard",
    summary:
      "A compact dashboard surface for operations teams, with clear information hierarchy and table-heavy UI.",
    tags: ["React", "TypeScript"],
    demoUrl: "https://h-cube-dashboard.vercel.app/",
    repoUrl: "https://github.com/OneDerry/landing-dashboard",
    thumbnail: "/thumbnail/dashboard-thumbnail.png",
  },
  {
    slug: "react-native-app",
    title: "React Native app",
    summary:
      "A small mobile client that mirrors the web experience, reusing as much logic as possible.",
    tags: ["React Native", "TypeScript"],
    demoUrl: "#",
  },
];

const liveProjects = [
  {
    slug: "change-for-humanity",
    title: "Change For Humanity",
    summary:
      "A minimal storefront focused on performance, predictable state management, and a clean checkout flow.",
    tags: ["React", "Next.js", "TypeScript", "Redux"],
    demoUrl: "https://changeforhumanity.org/",
    repoUrl: "https://github.com/OneDerry/Change-For-Humanity",
    thumbnail: "/c1.png",
  },
  {
    slug: "riser-school",
    title: "Riser School",
    summary:
      "A compact dashboard surface for operations teams, with clear information hierarchy and table-heavy UI.",
    tags: ["React", "TypeScript"],
    demoUrl: "https://riser-kohl.vercel.app/",
    repoUrl: "https://github.com/OneDerry/landing-dashboard",
    thumbnail: "/riser.png",
  },
];

export function FeaturedProjects() {
  return (
    <main id="featured-projects" className=" animate-fade-in-up duration-1000 ">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Live Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        <section className="border-r-2 border-border p-2">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              Production projects
            </h2>
          </div>
          <div className="space-y-4 mt-2">
            {liveProjects.map((project) => (
              <article
                key={project.slug}
                className="grid gap-4 rounded-md shadow-accent-foreground shadow-inner border border-border bg-card px-4 py-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] md:px-6 md:py-5"
              >
                <div className="space-y-5">
                  <h3 className="text-sm font-semibold text-foreground md:text-base">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center flex-wrap gap-3 text-xs">
                    <a
                      href={project.demoUrl}
                      className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Live demo
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        View code
                      </a>
                    )}
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-xs font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Read case study
                    </a>
                  </div>
                </div>
                <Link
                  href={project.demoUrl}
                  className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden"
                >
                  <Image
                    src={project?.thumbnail || "/file.svg"}
                    alt={`${project?.title || "Project"} thumbnail`}
                    fill
                    className="object-cover"
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-l-2 border-border p-2">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              Featured projects
            </h2>
          </div>
          <div className="space-y-4 mt-2">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="grid gap-4 rounded-md shadow-accent-foreground shadow-inner border border-border bg-card px-4 py-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] md:px-6 md:py-5"
              >
                <div className="space-y-5">
                  <h3 className="text-sm font-semibold text-foreground md:text-base">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center flex-wrap gap-3 text-xs">
                    <a
                      href={project.demoUrl}
                      className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Live demo
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        View code
                      </a>
                    )}
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-xs font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Read case study
                    </a>
                  </div>
                </div>
                <Link
                  href={project.demoUrl}
                  className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden"
                >
                  <Image
                    src={project?.thumbnail || "/file.svg"}
                    alt={`${project?.title || "Project"} thumbnail`}
                    fill
                    className="object-cover"
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
