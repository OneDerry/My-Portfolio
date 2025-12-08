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
import { getTagBorderColor, getTagTextColor } from "@/lib/helpers";
import { SlideSection } from "../ui/slide_section";

type AdditionalProject = {
  slug: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  image?: string;
  tech?: string[];
  timeline?: string;
};

const additionalProjects: AdditionalProject[] = [
  {
    slug: "Multi-step form",
    description:
      "A focused multi-step flow with clear progress and validation for complex inputs.",
    demoUrl: "",
    repoUrl: "",
    image: "/window.svg",
    tech: ["React", "TypeScript"],
    timeline: "Ongoing",
  },
  {
    slug: "API integration app",
    description:
      "Small client for exploring third-party APIs with loading states and error handling.",
    demoUrl: "",
    repoUrl: "",
    image: "/window.svg",
    tech: ["React", "Next.js"],
    timeline: "Ongoing",
  },
  {
    slug: "Coffee website",
    description:
      "A coffee webite showcasing different coffee types and their prices.",
    demoUrl: "https://coffee-shop-zeta-ruddy.vercel.app/",
    repoUrl: "https://github.com/OneDerry/coffee-shop",
    image: "/coffee.png",
    tech: ["React", "Next.js", "TypeScript"],
    timeline: "2025",
  },
  {
    slug: "Design system playground",
    description:
      "Sandbox for testing typography, spacing, and reusable components across screens.",
    demoUrl: "",
    repoUrl: "",
    image: "/globe.svg",
    tech: ["React"],
    timeline: "Ongoing",
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
    <SlideSection
      from="left"
      id="more-projects"
      className="flex flex-col gap-6"
    >
      <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        Additional projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {additionalProjects.map((project, index) => (
          <Card
            key={project.slug}
            className={`dark:bg-card/90 shadow-accent-foreground hover-card ${
              index === 0
                ? "border border-blue-500/60 shadow-[0_0_2px_rgba(59,130,246,0.3)]"
                : index === 1
                ? "border border-emerald-500/60 shadow-[0_0_2px_rgba(16,185,129,0.3)]"
                : index === 2
                ? "border border-violet-500/60 shadow-[0_0_2px_rgba(139,92,246,0.3)]"
                : "border border-amber-500/60 shadow-[0_0_2px_rgba(245,158,11,0.3)]"
            } ${index === 0 || index === 3 ? "lg:col-span-2" : ""}`}
          >
            {project.image && (
              <div className="relative mx-6 mb-4 h-32 overflow-hidden rounded-lg border border-border/70 bg-background/40 md:h-40">
                <Image
                  src={project.image}
                  alt={project.slug}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader className="pb-3">
              <CardTitle className="text-sm md:text-base">
                {project.slug}
              </CardTitle>
              {project.timeline && (
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/80">
                  {project.timeline}
                </p>
              )}
              <CardDescription className="text-xs md:text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex flex-col gap-3 px-6 pt-3 text-xs">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                {project.tech?.map((tag) => {
                  const Icon = getTechIcon(tag);
                  const border = getTagBorderColor(tag);
                  const text = getTagTextColor(tag);

                  return (
                    <span
                      key={tag}
                      className={`flex h-6 w-6 items-center justify-center rounded-full border bg-background/60 ${border} ${text} hover-icon`}
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
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                {project.demoUrl && project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    className="rounded-md border border-border px-2.5 py-1 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Live demo
                  </a>
                )}
                {project.demoUrl && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[11px] font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Case study
                  </Link>
                )}
                {project.repoUrl && project.repoUrl !== "#" && (
                  <a
                    href={project.repoUrl}
                    className="rounded-md border border-border px-2.5 py-1 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Repo
                  </a>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SlideSection>
  );
}
