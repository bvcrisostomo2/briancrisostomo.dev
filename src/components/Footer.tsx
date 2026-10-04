import { profile } from "@/data/profile";

const builtWith = [
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com" },
  { name: "GitHub Pages", href: "https://pages.github.com" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Built with{" "}
          {builtWith.map((b, i) => (
            <span key={b.name}>
              <a href={b.href} className="text-fg hover:text-accent">
                {b.name}
              </a>
              {i < builtWith.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
