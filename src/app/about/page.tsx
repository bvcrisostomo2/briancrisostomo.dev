import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { Timeline } from "@/components/Timeline";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/assetPath";
import { education, skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="grid gap-10 pb-20 pt-16 sm:pt-24 md:grid-cols-[1fr_260px] md:items-start">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            I&apos;m {profile.shortName}. I build tools that help support teams move faster.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="order-first md:order-none">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
          <img
            src={assetPath(profile.photo)}
            alt={profile.name}
            width={512}
            height={512}
            className="aspect-square w-40 rounded-3xl border border-border object-cover md:w-full"
          />
          <p className="mt-3 text-sm text-muted">{profile.location}</p>
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading title="My journey" description="How I got from a CS classroom to building support tooling." />
        <div className="max-w-2xl">
          <Timeline />
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading title="Skills & tools" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.name} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{group.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md bg-bg px-2 py-1 text-sm text-fg/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Education" />
        {education.map((e) => (
          <div key={e.school} className="rounded-2xl border border-border bg-card p-5">
            <p className="font-semibold">{e.degree}</p>
            <p className="mt-1 text-muted">{e.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{e.years}</p>
          </div>
        ))}
      </section>
    </>
  );
}
