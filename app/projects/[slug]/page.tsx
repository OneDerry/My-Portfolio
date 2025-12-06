import { ArrowLeftToLine } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const projects = {
  "ecommerce-store": {
    title: "E-commerce storefront",
    tagline: "Fast, predictable storefront with a focused checkout path.",
    tech: ["React", "TypeScript", "Redux Toolkit"],
    demoUrl: "https://e-commerce-4idffu9cd-onederrys-projects.vercel.app/",
    repoUrl: "https://github.com/OneDerry/E-Commerce",
    thumbnail: "/thumbnail/ecommerce-thumbnail.png",
    img1: "/ecomm1.png",
    img2: "/ecomm2.png",
    img3: "/ecomm3.png",
    learning:
      "Improved understanding of React state management and Next.js routing patterns.",
    solution: [
      "Fixing the next/image redirect / weird behavior — I discovered that the real problem wasn’t routing at all, it was layout. next/image with fill must have a parent with position: relative and explicit width/height (or Tailwind utilities like relative, w-…, h-…). Once every Image using fill was wrapped in a correctly sized, relatively positioned container (for example in ProductCard, the hero carousel and side cards in homeContent, and the cart thumbnails), the ‘redirecting to home’ and other weird behavior stopped.",
      "Structuring global state and API calls — I used Redux Toolkit slices for clear responsibilities: cartSlice for items, totals, and localStorage sync (loadCartFromStorage, addToCart, updateQuantity, etc.), and authSlice for user, token, and loading/error state with RTK Query matchers wired to login, signup, and getCurrentUser. All network logic lives in apiSlice (auth, products, orders, reviews, analytics) with a baseQueryWithReauth handler to deal with 401s and backend failures.",
      "Persistent cart and initial app setup — A small storage helper and calculateCartTotal keep cart items and totals in sync with localStorage. In the root Providers component, the app is wrapped with <Provider store={store}>, and an AppInitializer hydrates the cart from storage and triggers useGetCurrentUserQuery whenever a token exists, so the app boots with a consistent cart and auth state.",
      "Auth forms and validation — Login and signup pages use react-hook-form plus Zod schemas (loginSchema and signupSchema) together with shadcn form components. On submit, they call login or signup from useAuth, track loading and error states, and redirect to / on success, giving a smooth, validated auth flow on top of the Redux + RTK Query stack.",
    ],
    overview:
      "Aisle 3 is a modern e‑commerce web application built with the Next.js App Router.It focuses on selling gadgets and electronics, with a clean, product‑first UI and a smooth shopping experience.",
    problem: [
      "next/image causing unexpected navigation (redirecting to home) — Using the Next.js Image component (especially with fill) sometimes caused subtle, unexpected navigation. In a few layouts it behaved like an invisible link and would send me back to the home page, which at first looked like a routing bug rather than a layout issue.",
      "Layout and positioning issues with Image + fill — Across components like ProductCard (components/products/ProductCard.tsx), the hero carousel and side cards (app/homeContent.tsx), and cart thumbnails (app/cart/page.tsx), Image with fill depended heavily on a correctly sized, relatively positioned parent. When that wasn’t set up, images would overflow, collapse, or render inconsistently.",
      "State and data flow complexity — Coordinating Redux slices (cartSlice, authSlice, productSlice, orderSlice), the RTK Query API layer (apiSlice), and custom hooks (useAuth, useProducts, useProduct) made data flow non-trivial. Tracking down wrong data or empty lists often meant debugging both the API layer and the slice logic at the same time.",
      "Auth flow and token persistence — Designing a reliable auth flow with validated login/sign-up forms (Zod + React Hook Form), localStorage-based token persistence, and auto-verifying the current user on app load (useGetCurrentUserQuery in Providers and authSlice extraReducers) took several iterations to avoid inconsistent or out-of-sync auth state.",
    ],
  },
  "admin-dashboard": {
    title: "Admin dashboard",
    tagline:
      "Operational dashboard with table-first layout and subtle analytics.",
    tech: ["React", "TypeScript"],
    demoUrl: "https://h-cube-dashboard.vercel.app/",
    repoUrl: "https://github.com/OneDerry/landing-dashboard",
    thumbnail: "/thumbnail/dashboard-thumbnail.png",
    img1: "/land1.png",
    img2: "/land2.png",
    img3: "/land3.png",
    learning:
      "Gained experience with dashboard design patterns and data visualization.",
    solution:
      "Designed a table-first layout with filtering and sorting capabilities for efficient data management.",
    overview:
      "A comprehensive admin interface for managing products, orders, and user accounts with real-time data visualization.",
    problem:
      "The client needed a centralized admin interface to efficiently manage their growing product catalog, process orders, and monitor user activity across multiple channels.",
  },
  "react-native-app": {
    title: "React Native app",
    tagline: "Mobile client mirroring the web experience with shared logic.",
    tech: ["React Native", "TypeScript"],
    demoUrl: "https://e-commerce-4idffu9cd-onederrys-projects.vercel.app/",
    repoUrl: "https://github.com/OneDerry/E-Commerce",
    thumbnail: "/thumbnail/ecommerce-thumbnail.png",
    img1: "/ecommm1.png",
    img2: "/ecommm2.png",
    img3: "/ecommm3.png",
    solution:
      "Implemented shared business logic between web and mobile platforms to reduce maintenance overhead.",
    learning:
      "Explored cross-platform development patterns and shared code architecture.",
    overview:
      "A cross-platform mobile application that mirrors the web experience while sharing business logic for consistency and reduced maintenance.",
    problem:
      "The client needed a mobile presence that provided the same functionality as their web platform while maintaining a consistent user experience across devices.",
  },
  "sample-project": {
    title: "Sample project",
    tagline: "Placeholder case study wired from the homepage featured section.",
    tech: ["React", "TypeScript"],
    demoUrl: "https://e-commerce-4idffu9cd-onederrys-projects.vercel.app/",
    repoUrl: "https://github.com/OneDerry/E-Commerce",
    thumbnail: "/thumbnail/ecommerce-thumbnail.png",
    img1: "/ecommm1.png",
    img2: "/ecommm2.png",
    img3: "/ecommm3.png",
    solution:
      "Created a reusable case study template with consistent structure and responsive design.",
    learning:
      "Used this as an opportunity to practice case study writing and layout design.",
    overview:
      "A placeholder project used to demonstrate the case study layout and structure.",
    problem:
      "This placeholder project demonstrates the structure and components of a full case study page.",
  },
} as const;

type Slug = keyof typeof projects;

interface CaseStudyPageProps {
  // Next 16: params is a Promise
  params: Promise<{ slug: Slug }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Project · Frontend case study",
    };
  }

  return {
    title: `${project.title} · Frontend case study`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-20 md:px-8 md:py-24 lg:py-28">
          <h1 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            Project not found
          </h1>
          <p className="text-sm text-muted-foreground">
            This slug is not wired to a case study yet. Replace the placeholder
            data or add a new entry to the map.
          </p>
          <Link
            href="/projects"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-[90%] sm:max-w-[70%] flex-col gap-16 px-6 py-20 md:px-8 md:py-24 lg:py-28">
        {/* Navigation footer */}
        <div className="flex items-center justify-between border-b border-border pb-6 text-sm text-muted-foreground">
          <Link
            href="/projects"
            className="text-sm font-medium text-primary flex items-center gap-2 group underline-offset-4 hover:underline"
          >
            <ArrowLeftToLine className="group-hover:-translate-x-1 transition-all" />{" "}
            Back to projects
          </Link>
          <span className="text-xs text-muted-foreground">
            Next project · placeholder
          </span>
        </div>
        {/* Header */}
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Case study
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {project.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="relative h-40 md:h-96 rounded-md border border-border bg-background/40 overflow-hidden">
            <Image
              src={project?.thumbnail || "/file.svg"}
              alt={`${project?.title || "Project"} thumbnail`}
              fill
              className="object-cover"
            />
          </div>
        </header>

        {/* Overview */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Overview
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Problem
          </h2>
          {Array.isArray(project.problem) ? (
            <ul className="grid max-w-3xl gap-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.problem.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.problem ||
                "No problem statement available for this project."}
            </p>
          )}
        </section>

        {/* Solution */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Solution
          </h2>
          {Array.isArray(project.solution) ? (
            <ul className="grid max-w-3xl gap-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.solution ||
                "No solution details available for this project."}
            </p>
          )}
        </section>

        {/* Key features */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Key features
          </h2>
          <ul className="grid gap-2 text-sm text-muted-foreground md:text-base">
            <li>
              Clear, minimal layout that highlights the primary user task.
            </li>
            <li>Predictable state management with explicit data flows.</li>
            <li>Responsive design tuned for desktop, tablet, and mobile.</li>
            <li>Meaningful empty states and loading states.</li>
            <li>
              Accessibility-first details such as keyboard navigation and
              labels.
            </li>
          </ul>
        </section>

        {/* Tech stack */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Tech stack
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground">
              UI layer: React, TypeScript, Next.js
            </div>
            <div className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground">
              State: Redux Toolkit, local component state
            </div>
            <div className="rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground">
              Styling: Tailwind CSS, shadcn/ui
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Screenshots
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden">
              <Image
                src={project?.img1 || "/file.svg"}
                alt={`${project?.title || "Project"} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden">
              <Image
                src={project?.img2 || "/file.svg"}
                alt={`${project?.title || "Project"} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 md:h-56 rounded-md border border-border bg-background/40 overflow-hidden">
              <Image
                src={project?.img3 || "/file.svg"}
                alt={`${project?.title || "Project"} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* What I learned */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            What I learned
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.learning ||
              "No learning reflections available for this project."}
          </p>
        </section>

        {/* Links */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
            Links
          </h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href={project?.demoUrl}
              className="rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Live demo
            </Link>
            <Link
              href={project?.repoUrl}
              className="rounded-md border border-border px-4 py-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              GitHub repo
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
