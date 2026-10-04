export type SkillGroup = {
  name: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "Groovy"] },
  { name: "Frameworks & tooling", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Docker", "Tilt"] },
  { name: "APIs & integrations", items: ["REST APIs", "Webhooks", "SDKs", "Postman", "MCP", "Claude Code"] },
  { name: "Support platforms", items: ["Salesforce", "Zendesk", "Jira", "Shortcut", "Snowflake"] },
  { name: "Design & photo", items: ["Illustrator", "Photoshop", "Lightroom"] },
];

export const education = [
  {
    school: "University of Santo Tomas",
    degree: "BS Computer Science, major in Data Science",
    years: "2014 – 2018",
  },
];
