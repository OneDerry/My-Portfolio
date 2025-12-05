"use client";

import type { ReactNode } from "react";
import { Provider, useSelector } from "react-redux";
import { store, type RootState } from "../lib/store";
import { useEffect } from "react";

function ThemeWatcher({ children }: { children: ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  return children;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeWatcher>{children}</ThemeWatcher>
    </Provider>
  );
}
