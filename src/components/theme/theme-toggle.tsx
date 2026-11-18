"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button className="theme-toggle icon-control" type="button"
      aria-label="Toggle between light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <Sun size={18} className="theme-icon-sun" aria-hidden="true" />
      <Moon size={18} className="theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
