"use client";

import { useState } from "react";
// import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Frontend Developer – Mesiri Olomu",
//   description:
//     "Portfolio of Mesiri Olomu, frontend developer focusing on React, TypeScript, Redux, and React Native.",
// };

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

export default function Home() {
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent(`Hi Mesiri,\n\n${message}`);
    window.location.href = `mailto:mesiri.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-[90%] sm:max-w-[70%] flex-col gap-20 px-6 py-20 md:px-8 md:py-24 lg:py-28">
        {/* Hero */}
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
              <p className="mt-2 font-medium text-foreground">
                React · TypeScript
              </p>
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

        {/* About */}
        <section
          id="about"
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:items-start animate-fade-in-up"
        >
          <div className="relative h-56 md:h-64 rounded-md border border-border bg-background/40 overflow-hidden">
            <Image
              src="/me.jpeg"
              alt="Mesiri Olomu"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              About
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              I&apos;m a frontend-focused engineer who enjoys turning product
              requirements into small, predictable UI building blocks. My work
              leans on TypeScript, React, Redux, and modern CSS utilities to
              keep codebases readable and scalable.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              When I&apos;m not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and staying up-to-date with
              the latest frontend trends. I believe in writing clean,
              well-documented code that other developers can easily understand
              and maintain.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section
          id="featured-projects"
          className="flex flex-col gap-6 animate-fade-in-up duration-1000 "
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              Featured projects
            </h2>
          </div>
          <div className="space-y-4">
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
                  <div className="flex flex-wrap gap-3 text-xs">
                    <a
                      href={project.demoUrl}
                      className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Live demo
                    </a>
                    <a
                      href={project.repoUrl}
                      className="rounded-md border border-border px-3 py-1.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      View code
                    </a>
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
                    src={project?.thumbnail || "/placeholder.png"}
                    alt={`${project?.title || "Project"} thumbnail`}
                    fill
                    className="object-cover"
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Additional Projects */}
        <section
          id="more-projects"
          className="flex flex-col gap-6 animate-fade-in-up"
        >
          <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            Additional projects
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Multi-step form",
              "API integration app",
              "Dashboard layout",
              "Design system playground",
            ].map((title) => (
              <article
                key={title}
                className="flex flex-col gap-2 rounded-md border border-border bg-card px-4 py-4"
              >
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                  Concise description placeholder for this smaller project.
                  Replace with real examples later.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section
          id="tech-stack"
          className="flex flex-col gap-6 animate-fade-in-up"
        >
          <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            Tech stack
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Core
              </p>
              <p className="text-sm text-foreground">
                React, TypeScript, Next.js
              </p>
            </div>
            <div className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                UI / styling
              </p>
              <p className="text-sm text-foreground">Tailwind CSS, shadcn/ui</p>
            </div>
            <div className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                State management
              </p>
              <p className="text-sm text-foreground">
                Redux Toolkit, React Query*
              </p>
            </div>
            <div className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Mobile
              </p>
              <p className="text-sm text-foreground">React Native, Expo</p>
            </div>
            <div className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Tools
              </p>
              <p className="text-sm text-foreground">
                Vite, Next.js, ESLint, Prettier
              </p>
            </div>
            <div className="space-y-2 rounded-md border border-border bg-card px-4 py-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Testing
              </p>
              <p className="text-sm text-foreground">
                Jest, React Testing Library*
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col gap-6 animate-fade-in-up"
        >
          <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            Contact
          </h2>
          <form className="grid gap-4 md:max-w-lg">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-muted-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-xs font-medium text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-md border border-border bg-background px-2 py-2 text-sm text-foreground outline-none ring-0 focus:border-ring"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleSendEmail}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send email
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
