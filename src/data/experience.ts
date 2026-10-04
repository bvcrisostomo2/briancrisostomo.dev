export type Role = {
  title: string;
  start: string;
  end: string;
  summary: string;
};

export type Experience = {
  company: string;
  via?: string;
  logo: { text: string; color: string };
  url?: string;
  roles: Role[]; // newest first
};

export const experience: Experience[] = [
  {
    company: "Gladly",
    via: "Support Ninja Inc.",
    logo: { text: "G", color: "#1f6f5c" },
    url: "https://www.gladly.com",
    roles: [
      {
        title: "Developer Support Engineer",
        start: "Sep 2025",
        end: "Present",
        summary:
          "Helping customer developers integrate and troubleshoot APIs, SDKs and technical products — the bridge between customers' engineering teams and the internal product and engineering org.",
      },
      {
        title: "L2 Technical Support Engineer",
        start: "May 2025",
        end: "Sep 2025",
        summary:
          "Provided technical expertise and problem resolution, collaborating with Customer Success, Product and Engineering to deliver excellent customer service.",
      },
    ],
  },
  {
    company: "Airtable",
    via: "PartnerHero",
    logo: { text: "A", color: "#2d7ff9" },
    url: "https://www.airtable.com",
    roles: [
      {
        title: "Technical Team Lead",
        start: "Sep 2023",
        end: "May 2025",
        summary:
          "Led a team of technical support engineers assisting Airtable's enterprise customers.",
      },
      {
        title: "Enterprise Technical Support III",
        start: "Mar 2022",
        end: "Sep 2023",
        summary:
          "Assisted enterprise customers with scripting, automations and general inquiries across Salesforce, Zendesk and Jira.",
      },
    ],
  },
  {
    company: "Westpac",
    via: "Concentrix",
    logo: { text: "W", color: "#da1710" },
    url: "https://www.westpac.com.au",
    roles: [
      {
        title: "Home Loan Advisor",
        start: "Jan 2020",
        end: "Jan 2022",
        summary:
          "Handled and processed Westpac home loans for Australian customers using internal and external tools like Salesforce and Zendesk.",
      },
    ],
  },
  {
    company: "Red Tomato Design Studio",
    logo: { text: "R", color: "#d64545" },
    roles: [
      {
        title: "Software Engineer",
        start: "Jul 2018",
        end: "Mar 2019",
        summary:
          "Helped build the startup with ReactJS development, Illustrator design work and photography.",
      },
    ],
  },
  {
    company: "UnionBank of the Philippines",
    logo: { text: "U", color: "#f58220" },
    url: "https://www.unionbankph.com",
    roles: [
      {
        title: "Intern",
        start: "Jun 2017",
        end: "Aug 2017",
        summary:
          "Spearheaded the foundation of U:bot, a chatbot used by HR departments, and joined the Student Mentoring Program.",
      },
    ],
  },
];
