export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const profile = {
  name: "Brian Paul Crisostomo",
  shortName: "Brian",
  initials: "BC",
  role: "Customer Success Engineer",
  currentCompany: "Gladly",
  location: "Metro Manila, Philippines",
  headline: "Customer success engineer building tools that help support teams move faster.",
  intro:
    "I scope, build and ship tooling and automation for Gladly's support engineering team, using what I see in the ticket queue and hear from customers to decide what to build next. Computer Science grad, former developer support engineer and team lead, and weekend photographer.",
  bio: [
    "I'm Brian, a Computer Science graduate from the University of Santo Tomas (major in Data Science) who has spent the last several years at the point where customers' code meets the product.",
    "Today I'm a Customer Success Engineer at Gladly. I build internal tools for support managers and engineers, automate repetitive ticket work, and fix issues in Gladly's products so fewer tickets get filed in the first place. I partner with Product Engineering on fixes and API improvements, and mentor the support team on where they get stuck.",
    "Before that I was a Developer Support Engineer at Gladly, helping customer developers get their integrations working, and I led a team of enterprise technical support engineers on the Airtable account.",
    "I like building small tools that make support faster and writing things down so the next person doesn't have to rediscover them. Away from the keyboard, I shoot and edit photos in Lightroom.",
  ],
  // TODO: replace with your personal accounts before publishing.
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", icon: "linkedin" },
    { label: "Email", href: "mailto:bvcrisostomo2@gmail.com", icon: "mail" },
  ] satisfies SocialLink[],
};
