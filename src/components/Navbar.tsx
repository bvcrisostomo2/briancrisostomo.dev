"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { ThemeControls } from "./ThemeControls";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
];

function normalise(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function Navbar() {
  const pathname = normalise(usePathname());

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-bg">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.shortName.toLowerCase()}.dev</span>
        </Link>
        <ul className="flex items-center gap-1 text-sm">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-2.5 py-1.5 transition-colors sm:px-3 ${
                    active ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeControls />
      </nav>
    </header>
  );
}
