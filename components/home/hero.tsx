"use client";

import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import {
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandReactNative,
  TbBrandNextjs,
} from "react-icons/tb";

export function Hero() {
  const [stackText, setStackText] = useState("");

  useEffect(() => {
    const fullText = "React, TypeScript, React Native";
    let index = 0;

    const interval = setInterval(() => {
      setStackText(fullText.slice(0, index + 1));
      index += 1;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[700px] grid gap-10 grid-cols-1 sm:grid-cols-2 md:items-center animate-fade-in-up"
    >
      <div className="pointer-events-none absolute inset-y-0 -left-70 hidden h-full w-20 -translate-x-6 flex-col items-center justify-between md:flex lg:-translate-x-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/60 bg-sky-400/10 text-sky-300 shadow-[0_0_40px_rgba(56,189,248,0.4)] backdrop-blur-sm animate-[bounce_7s_infinite]">
          <FaReact className="h-7 w-7" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/60 bg-yellow-400/10 text-yellow-300 shadow-[0_0_40px_rgba(250,204,21,0.4)] backdrop-blur-sm animate-[bounce_8s_infinite]">
          <DiJavascript className="h-7 w-7" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/60 bg-sky-500/10 text-sky-200 shadow-[0_0_40px_rgba(59,130,246,0.4)] backdrop-blur-sm animate-[bounce_9s_infinite]">
          <BiLogoTypescript className="h-7 w-7" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 -right-70 hidden h-full w-20 translate-x-6 flex-col items-center justify-between md:flex lg:translate-x-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-500/60 bg-zinc-900/80 shadow-[0_0_40px_rgba(24,24,27,0.7)] backdrop-blur-sm animate-[bounce_7s_infinite]">
          <TbBrandNextjs className="h-7 w-7" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/60 bg-sky-400/10 text-sky-300 shadow-[0_0_40px_rgba(56,189,248,0.4)] backdrop-blur-sm animate-[bounce_8s_infinite]">
          <TbBrandTailwind className="h-7 w-7" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/60 bg-emerald-400/10 text-emerald-300 shadow-[0_0_40px_rgba(52,211,153,0.4)] backdrop-blur-sm animate-[bounce_9s_infinite]">
          <TbBrandReactNative className="h-7 w-7" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/60 bg-indigo-400/10 text-indigo-200 shadow-[0_0_40px_rgba(129,140,248,0.45)] backdrop-blur-sm animate-[bounce_10s_infinite]">
          <TbBrandRedux className="h-7 w-7" />
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Frontend Engineer
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Frontend Developer —
          <span className="ml-1 align-baseline text-primary">{stackText}</span>
          <span className="ml-1 inline-block h-5 w-[1px] translate-y-[2px] bg-primary/80 align-middle animate-pulse" />
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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 hover-cta"
          >
            View Projects
          </a>
          <a
            href="/Mesiri_Olomu_CV.pdf"
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover-cta"
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
          <p className="mt-2 font-medium text-foreground">React · TypeScript</p>
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
  );
}
