"use client";

import { useEffect, useRef, useState } from "react";
import { MoonIcon, PaletteIcon, SunIcon } from "./icons";

export const ACCENTS = {
  green: "#4ade80",
  blue: "#60a5fa",
  violet: "#a78bfa",
  orange: "#fb923c",
  pink: "#f472b6",
} as const;

type Accent = keyof typeof ACCENTS;

// Runs in <head> before paint so the saved theme/accent never flashes.
export const themeInitScript = `(function(){try{var d=document.documentElement;d.dataset.theme=localStorage.getItem('theme')||'dark';d.dataset.accent=localStorage.getItem('accent')||'green';}catch(e){}})();`;

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage blocked (private mode etc.), so the choice just won't persist.
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  save("theme", next);
}

function setAccent(accent: Accent) {
  document.documentElement.dataset.accent = accent;
  save("accent", accent);
}

const buttonClass =
  "grid size-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-fg hover:bg-card-hover";

export function ThemeControls() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-2">
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          className={buttonClass}
          aria-label="Choose accent colour"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <PaletteIcon width={18} height={18} />
        </button>
        {open && (
          <div className="absolute right-0 top-11 z-20 flex gap-2 rounded-xl border border-border bg-card p-3 shadow-xl">
            {(Object.keys(ACCENTS) as Accent[]).map((accent) => (
              <button
                key={accent}
                type="button"
                data-swatch={accent}
                aria-label={`${accent} accent`}
                className="size-6 rounded-full transition-transform hover:scale-110"
                style={{ background: ACCENTS[accent] }}
                onClick={() => {
                  setAccent(accent);
                  setOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </div>
      <button
        type="button"
        className={buttonClass}
        aria-label="Toggle light and dark theme"
        onClick={toggleTheme}
      >
        <SunIcon width={18} height={18} className="hidden dark:block" />
        <MoonIcon width={18} height={18} className="block dark:hidden" />
      </button>
    </div>
  );
}
