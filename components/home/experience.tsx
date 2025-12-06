import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { getTagBorderColor, getTagTextColor } from "@/lib/helpers";
import { SlideSection } from "../ui/slide_section";

const roles = [
  {
    company: "Freelance",
    role: "Frontend Engineer",
    period: "2022 – Present",
    summary:
      "Shipping React and Next.js interfaces for small businesses and non-profits, with a focus on performance and predictable state.",
    tech: ["React", "Next.js", "TypeScript", "Redux Toolkit"],
  },
  {
    company: "Fourcore Integrated Services",
    role: "Frontend Developer (full-time)",
    period: "2023 - till date",
    summary:
      "Helped teams refactor legacy UIs, introduce typed APIs, and tighten up design systems.",
    tech: ["React", "TypeScript", "REST APIs", "Redux Toolkit"],
  },
  {
    company: "Personal projects",
    role: "Builder",
    period: "Ongoing",
    summary:
      "Experimenting with dashboards, multi-step forms, and small mobile clients to explore new patterns.",
    tech: ["React", "Next.js", "React Native"],
  },
];

function getTagIcon(tag: string) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("next"))
    return <TbBrandNextjs className="h-3.5 w-3.5" />;
  if (normalized.includes("react native"))
    return <TbBrandReactNative className="h-3.5 w-3.5" />;
  if (normalized.includes("react")) return <FaReact className="h-3.5 w-3.5" />;
  if (normalized.includes("type"))
    return <BiLogoTypescript className="h-3.5 w-3.5" />;

  return null;
}

export function Experience() {
  return (
    <SlideSection from="left" id="experience" className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
          Experience
        </h2>
        <p className="max-w-xl text-xs leading-relaxed text-muted-foreground md:text-sm">
          A quick snapshot of how I&apos;ve been using React, TypeScript, and
          related tools in real projects.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <article
            key={`${role.company}-${role.period}`}
            className="flex flex-col gap-3 rounded-md border border-border bg-card px-4 py-4 shadow-accent-foreground hover-card"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-foreground md:text-base">
                {role.role}
              </h3>
              <p className="text-xs font-medium text-muted-foreground">
                {role.company}
              </p>
              <p className="text-[11px] text-muted-foreground">{role.period}</p>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
              {role.summary}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 text-[11px] text-muted-foreground">
              {role.tech.map((tag) => {
                const Icon = getTagIcon(tag);
                const border = getTagBorderColor(tag);
                const text = getTagTextColor(tag);

                return (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 rounded-full border bg-background/60 px-2 py-0.5 ${border} ${text}`}
                  >
                    {Icon && Icon}
                    <span className="whitespace-nowrap">{tag}</span>
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </SlideSection>
  );
}

export default Experience;
