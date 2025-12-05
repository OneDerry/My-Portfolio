"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store";
import { toggleTheme } from "../lib/themeSlice";
import Image from "next/image";

export function Header() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[70%] items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span className="h-8 relative w-8 rounded-full border border-border">
            <Image
              src="/me.jpeg"
              alt="Mesiri Olomu"
              fill
              className="rounded-full"
            />
          </span>
          <span>Mesiri Olomu</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#featured-projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className={`ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md shadow-2xl border border-border bg-background text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground`}
            aria-label="Toggle theme"
          >
            {mode !== "dark" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}
