export type Role = {
  title: string;
  start: string;
  end: string;
  summary: string;
};

export type Experience = {
  company: string;
  via?: string;
  /** `src` is a path under /public; `text` + `color` is the fallback badge. */
  logo: { text: string; color: string; src?: string };
  url?: string;
  roles: Role[]; // newest first
};

export const experience: Experience[] = [
  {
    company: "Gladly",
    via: "Support Ninja Inc.",
    logo: { text: "G", color: "#1f6f5c", src: "/logos/gladly.svg" },
    url: "https://www.gladly.com",
    roles: [
      {
        title: "Customer Success Engineer, Support",
        start: "Sep 2026",
        end: "Present",
        summary:
          "Scoping, building, deploying and training on tooling and automation that helps the support engineering team run more efficiently: internal tools for support managers and engineers, ticket automation, and fixes to Gladly products that reduce support tickets. Partnering with Product Engineering on fixes, architecture and API improvements.",
      },
      {
        title: "Developer Support Engineer",
        start: "Sep 2025",
        end: "Sep 2026",
        summary:
          "Helped customer developers integrate and troubleshoot APIs, SDKs and technical products, acting as the bridge between customers' engineering teams and the internal product and engineering org.",
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
    logo: { text: "A", color: "#2d7ff9", src: "/logos/airtable.svg" },
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
    logo: { text: "W", color: "#da1710", src: "/logos/westpac.svg" },
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
    logo: { text: "R", color: "#d64545", src: "/logos/redtomato.svg" },
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
    logo: { text: "U", color: "#f58220", src: "/logos/unionbank.svg" },
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
