"use client";

import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store";
import { toggleTheme } from "../lib/themeSlice";
import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex sm:grid max-w-[90%] sm:max-w-[70%] justify-between sm:grid-cols-3 items-center gap-4 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
        >
          <div className="bg-blue-500 relative rounded-full flex items-center p-[1.5px]">
            <span className="relative h-8 w-8 rounded-full border border-border overflow-hidden">
              <Image
                src="/me.jpeg"
                alt="Mesiri Olomu"
                fill
                sizes="32px"
                className="rounded-full object-cover"
              />
            </span>
            <div className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full"></div>
          </div>
          <span>Mesiri Olomu</span>
        </Link>

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
            href="/#experience"
            className="transition-colors hover:text-foreground"
          >
            Experience
          </Link>
          <Link
            href="/#contact"
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
            className="inline-flex items-center justify-center rounded-md border border-blue-500/60 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-black dark:text-blue-300 transition-colors hover:bg-yellow-500/20 hover-cta"
          >
            Buy me a coffee
          </a>
          <a
            href="https://t.me/grangle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500/90 px-3 py-1.5 text-xs font-medium text-emerald-50 transition-colors hover:bg-emerald-500 hover-cta"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-xs text-muted-foreground shadow-2xl transition-colors hover:bg-accent hover:text-foreground hover-cta"
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
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
              className="w-64 h-fit sheet-slide-in-right ease-in-out duration-300 mt-8 border-2 rounded-md border-accent-foreground shadow-accent-foreground"
            >
              <SheetTitle className="sr-only">Main navigation</SheetTitle>
              <nav className="p-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <Link
                  href="/"
                  onClick={() => setIsSheetOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setIsSheetOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Projects
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setIsSheetOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Contact
                </Link>
                <a
                  href="https://t.me/grangle"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Hire Me
                </a>
                <a
                  href="https://buymeacoffee.com/mesiri.olomu"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  Buy me a coffee
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
