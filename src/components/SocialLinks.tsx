import { profile } from "@/data/profile";
import { CopyButton } from "./CopyButton";
import { socialIcons } from "./icons";

const itemClass =
  "flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-fg";

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {profile.socials.map((social) => {
        const Icon = socialIcons[social.icon];
        const icon = <Icon width={16} height={16} />;

        if (social.copy !== undefined) {
          return (
            <li key={social.label}>
              <CopyButton text={social.copy} label={social.label} icon={icon} className={itemClass} />
            </li>
          );
        }

        const external = social.href.startsWith("http");
        return (
          <li key={social.label}>
            <a
              href={social.href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className={itemClass}
            >
              {icon}
              {social.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
