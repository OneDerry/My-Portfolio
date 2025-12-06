import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

type AdditionalProject = {
  title: string;
  description: string;
  href?: string;
  image?: string;
  tech?: string[];
};

const additionalProjects: AdditionalProject[] = [
  {
    title: "Multi-step form",
    description:
      "A focused multi-step flow with clear progress and validation for complex inputs.",
    href: "#",
    image: "/land1.png",
    tech: ["React", "TypeScript"],
  },
  {
    title: "API integration app",
    description:
      "Small client for exploring third-party APIs with loading states and error handling.",
    href: "#",
    image: "/land2.png",
    tech: ["React", "Next.js"],
  },
  {
    title: "Coffee website",
    description: "A coffee webite showcasing different coffee types and their prices.",
    href: "#",
    image: "/land3.png",
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Design system playground",
    description:
      "Sandbox for testing typography, spacing, and reusable components across screens.",
    href: "#",
    image: "/land4.png",
    tech: ["React"],
  },
];

function getTechIcon(tag: string) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("next"))
    return <TbBrandNextjs className="h-3.5 w-3.5" />;
  if (normalized.includes("type"))
    return <BiLogoTypescript className="h-3.5 w-3.5" />;
  if (normalized.includes("react")) return <FaReact className="h-3.5 w-3.5" />;

  return null;
}

export function AdditionalProjects() {
  return (
    <section
      id="more-projects"
      className="flex flex-col gap-6 animate-fade-in-up"
    >
      <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        Additional projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {additionalProjects.map((project, index) => (
          <Card
            key={project.title}
            className={`dark:bg-card/90 shadow-accent-foreground/10 shadow-sm hover-card ${
              index === 0
                ? "border border-blue-500/60"
                : index === 1
                ? "border border-emerald-500/60"
                : index === 2
                ? "border border-violet-500/60"
                : "border border-amber-500/60"
            } ${index === 0 || index === 3 ? "lg:col-span-2" : ""}`}
          >
            {project.image && (
              <div className="relative mx-6 mb-4 h-32 overflow-hidden rounded-lg border border-border/70 bg-background/40 md:h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader className="pb-3">
              <CardTitle className="text-sm md:text-base">
                {project.title}
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex items-center justify-between px-6 pt-3 text-xs">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                {project.tech?.map((tag) => {
                  const Icon = getTechIcon(tag);

                  return (
                    <span
                      key={tag}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background/60 hover-icon"
                      aria-label={tag}
                      title={tag}
                    >
                      {Icon ?? (
                        <span className="text-[9px] font-medium">{tag[0]}</span>
                      )}
                    </span>
                  );
                })}
              </div>
              {project.href && project.href !== "#" && (
                <Link
                  href={project.href}
                  className="text-xs font-medium text-primary underline-offset-4 hover:underline"
                >
                  View
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
