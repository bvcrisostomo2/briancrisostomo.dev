export type SkillGroup = {
  name: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["JavaScript", "TypeScript", "Go", "Python", "Java", "SQL", "Groovy"] },
  { name: "Frameworks & tooling", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Git", "VS Code", "Docker", "Tilt", "Vercel"] },
  { name: "APIs & integrations", items: ["REST APIs", "JSON", "Webhooks", "SDKs", "Postman", "Twilio", "Mailgun"] },
  { name: "AI, data & monitoring", items: ["Claude", "Claude Code", "MCP", "Snowflake", "Datadog"] },
  { name: "Support & collaboration", items: ["Salesforce", "Zendesk", "Gorgias", "Jira", "Shortcut", "Notion", "Document360", "Trello", "Slack"] },
  { name: "Design & photo", items: ["Illustrator", "Photoshop", "Lightroom"] },
];

export const education = [
  {
    school: "University of Santo Tomas",
    degree: "BS Computer Science, major in Data Science",
    years: "2014 - 2018",
  },
];
