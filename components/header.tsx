"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store";
import { toggleTheme } from "../lib/themeSlice";
import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export function Header() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto grid max-w-[90%] sm:max-w-[70%] sm:grid-cols-3 items-center gap-4 px-4 py-4 md:px-8">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span className="relative h-8 w-8 rounded-full border border-border overflow-hidden">
            <Image
              src="/me.jpeg"
              alt="Mesiri Olomu"
              fill
              sizes="32px"
              className="rounded-full object-cover"
            />
          </span>
          <span>Mesiri Olomu</span>
        </div>

        {/* Desktop nav (center column) */}
        <nav className="hidden items-center justify-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop actions (right column) */}
        <div className="hidden items-center justify-end gap-3 md:flex">
          <a
            href="https://buymeacoffee.com/mesiri.olomu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-yellow-500/60 bg-yellow-500/10 px-3 py-1.5 text-xs font-medium text-black dark:text-yellow-300 transition-colors hover:bg-yellow-500/20"
          >
            Support Me
          </a>
          <a
            href="https://t.me/grangle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500/90 px-3 py-1.5 text-xs font-medium text-emerald-50 transition-colors hover:bg-emerald-500"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-xs text-muted-foreground shadow-2xl transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mode !== "dark" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-xs text-muted-foreground shadow-2xl transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mode !== "dark" ? "🌙" : "☀️"}
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-sm text-muted-foreground shadow-2xl transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Open navigation menu"
              >
                <span className="space-y-1">
                  <span className="block h-[2px] w-4 rounded bg-current" />
                  <span className="block h-[2px] w-4 rounded bg-current" />
                </span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 h-fit animate-ease-in-out mt-8 border-2 rounded-md border-accent-foreground shadow-accent-foreground shadow-inner"
            >
              <SheetTitle className="sr-only">Main navigation</SheetTitle>
              <nav className="p-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <Link
                  href="/"
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="#featured-projects"
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Projects
                </Link>
                <a
                  href="https://t.me/grangle"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Hire Me
                </a>
                <a
                  href="https://buymeacoffee.com/mesiri.olomu"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Support Me
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
