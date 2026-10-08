/** A link opens `href`; a copy button puts `copy` on the clipboard instead. */
export type SocialLink = {
  label: string;
  icon: "github" | "linkedin" | "mail";
} & ({ href: string; copy?: never } | { copy: string; href?: never });

export const profile = {
  name: "Brian Paul Crisostomo",
  shortName: "Brian",
  initials: "BC",
  domain: "briancrisostomo.dev",
  photo: "/images/brian.webp",
  role: "Customer Success Engineer",
  currentCompany: "Gladly",
  currentCompanyUrl: "https://www.gladly.com",
  location: "Metro Manila, Philippines",
  headline: "Customer Success Engineer building tools that help support teams move faster.",
  /** Short summary for search results and link previews, which cut text off at around 155 characters. */
  metaDescription:
    "Customer Success Engineer at Gladly, building tools and automation that help support teams move faster. Computer Science graduate and weekend photographer.",
  intro:
    "I scope, build and ship tooling and automation for Gladly's Support Engineering team, using what I see in the ticket queue and hear from customers to decide what to build next. Computer Science graduate, former Developer Support Engineer and Team Lead, and weekend photographer.",
  bio: [
    "I'm Brian, a Computer Science graduate from the University of Santo Tomas (major in Data Science) who has spent the last several years at the point where customers' code meets the product.",
    "Today I'm a Customer Success Engineer at Gladly. I build internal tools for support managers and engineers, automate repetitive ticket work, and fix issues in Gladly's products so fewer tickets get filed in the first place. I partner with Product Engineering on fixes and API improvements, and mentor the Support team on where they get stuck.",
    "Before that I was a Developer Support Engineer at Gladly, helping customer developers get their integrations working, and a Technical Team Lead on the Airtable enterprise account.",
    "I like building small tools that make support faster and writing things down so the next person doesn't have to rediscover them. Away from the keyboard, I shoot and edit photos in Lightroom.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/bvcrisostomo2", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/brian-crisostomo-653144185/", icon: "linkedin" },
    { label: "Email", copy: "bvcrisostomo2@gmail.com", icon: "mail" },
  ] satisfies SocialLink[] as SocialLink[],
};
