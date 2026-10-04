export type Project = {
  name: string;
  glyph: string; // short monospace mark shown in the card icon
  tagline: string;
  description: string;
  tech: string[];
  links: { demo?: string; source?: string };
  featured?: boolean;
  /** Placeholder project: shows a "Sample" badge until replaced. */
  sample?: boolean;
};

export const projects: Project[] = [
  {
    name: "Webhook Inspector",
    glyph: "{ }",
    tagline: "Capture, replay and diff webhook payloads.",
    description:
      "A small CLI for debugging integrations: records incoming webhooks, replays them against a local endpoint and highlights what changed between two deliveries.",
    tech: ["TypeScript", "Node.js", "CLI"],
    links: { source: "#" },
    featured: true,
    sample: true,
  },
  {
    name: "API Error Decoder",
    glyph: "4xx",
    tagline: "Paste an HTTP error, get likely causes and fixes.",
    description:
      "A web tool that turns raw API responses into plain-language explanations with a checklist of the usual suspects: auth, rate limits and payload shape.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { demo: "#", source: "#" },
    featured: true,
    sample: true,
  },
  {
    name: "Support Runbook MCP",
    glyph: ">_",
    tagline: "Expose support runbooks to AI coding agents.",
    description:
      "A Model Context Protocol server that lets Claude Code search and follow troubleshooting runbooks, so investigations start from the documented path.",
    tech: ["TypeScript", "MCP", "Claude Code"],
    links: { source: "#" },
    featured: true,
    sample: true,
  },
  {
    name: "Airtable Script Snippets",
    glyph: "fx",
    tagline: "Scripting & automation recipes from enterprise support.",
    description:
      "A searchable collection of Airtable scripting extension and automation snippets that came up again and again in enterprise tickets.",
    tech: ["JavaScript", "Airtable"],
    links: { source: "#" },
    sample: true,
  },
  {
    name: "U:bot",
    glyph: "U:",
    tagline: "HR chatbot foundation built at UnionBank.",
    description:
      "Built the foundation of U:bot during my internship at UnionBank of the Philippines: a chatbot used by the HR departments to answer employee questions.",
    tech: ["JavaScript", "Chatbot"],
    links: {},
  },
  {
    name: "EXIF Sorter",
    glyph: "f/2",
    tagline: "Organise photo shoots by camera, lens and date.",
    description:
      "A Python script that reads EXIF metadata and files photos into folders before importing them into Lightroom.",
    tech: ["Python"],
    links: { source: "#" },
    sample: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
