import { profile } from "@/data/profile";
import { socialIcons } from "./icons";

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {profile.socials.map(({ label, href, icon }) => {
        const Icon = socialIcons[icon];
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
            >
              <Icon width={16} height={16} />
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
