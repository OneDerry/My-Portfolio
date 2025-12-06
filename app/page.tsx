import type { Metadata } from "next";
import { Hero } from "../components/home/hero";
import { About } from "../components/home/about";
import { FeaturedProjects } from "../components/home/featured_projects";
import { AdditionalProjects } from "../components/home/additional_projects";
import { TechStack } from "../components/home/tech_stack";
import { Contact } from "../components/home/contact";

export const metadata: Metadata = {
  title: "Frontend Developer – Mesiri Olomu",
  description:
    "Portfolio of Mesiri Olomu, frontend developer focusing on React, TypeScript, Redux, and React Native.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-[90%] sm:max-w-[70%] flex-col gap-20 px-6 py-20 md:px-8 md:py-24 lg:py-28">
        <Hero />
        <About />
        <FeaturedProjects />
        <AdditionalProjects />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}
