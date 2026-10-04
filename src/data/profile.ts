export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const profile = {
  name: "Brian Paul Crisostomo",
  shortName: "Brian",
  initials: "BC",
  role: "Developer Support Engineer",
  currentCompany: "Gladly",
  location: "Metro Manila, Philippines",
  headline: "Developer support engineer, API troubleshooter & team lead.",
  intro:
    "I help customer developers integrate and debug APIs, SDKs and technical products — acting as the bridge between their engineering teams and our product and engineering org. Computer Science grad, former support team lead, and weekend photographer.",
  bio: [
    "I'm Brian, a Computer Science graduate from the University of Santo Tomas (major in Data Science) who has spent the last several years at the point where customers' code meets the product.",
    "Today I'm a Developer Support Engineer at Gladly, where I help customer developers get their integrations working — reading payloads, reproducing bugs, and turning messy edge cases into clear reports for engineering. Before that I led a team of enterprise technical support engineers on the Airtable account, helping customers with scripting, automations and everything in between.",
    "I like building small tools that make support faster, writing things down so the next person doesn't have to rediscover them, and — away from the keyboard — shooting and editing photos in Lightroom.",
  ],
  // TODO: replace with your personal accounts before publishing.
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", icon: "linkedin" },
    { label: "Email", href: "mailto:bvcrisostomo2@gmail.com", icon: "mail" },
  ] satisfies SocialLink[],
};
