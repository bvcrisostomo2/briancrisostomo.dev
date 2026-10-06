export type Project = {
  name: string;
  glyph: string; // short monospace mark shown in the card icon
  tagline: string;
  description: string;
  tech: string[];
  links: { demo?: string; source?: string };
  featured?: boolean;
  /** Year the project was built, shown as a badge on the card. */
  year?: string;
};

export const projects: Project[] = [
  {
    name: "Coins.ph Crypto Prices",
    glyph: "₿",
    tagline: "Live buy and sell prices from Coins.ph.",
    description:
      "A price tracker for BTC, ETH, BCH and XRP on Coins.ph, built when I first got into crypto and wanted a quick way to check buy and sell rates.",
    tech: ["React", "Coins.ph API", "React-MDL"],
    links: {
      demo: "https://coinsphprices.netlify.app/",
      source: "https://github.com/bvcrisostomo2/react-coinsph-cryptoprices",
    },
    featured: true,
    year: "2019",
  },
  {
    name: "React Weather App",
    glyph: "°C",
    tagline: "Current weather for any city, from the OpenWeather API.",
    description:
      "Enter a city and country to get the temperature, humidity and conditions. One of my first React apps, built to learn components, state and calling a third-party API.",
    tech: ["React", "OpenWeather API", "React-MDL"],
    links: {
      demo: "https://bvcrisostomo2.github.io/react-weather-app/",
      source: "https://github.com/bvcrisostomo2/react-weather-app",
    },
    featured: true,
    year: "2019",
  },
  {
    name: "React Portfolio",
    glyph: "</>",
    tagline: "My first portfolio site.",
    description:
      "A single-page portfolio with resume, projects and contact pages, built with React, React Router and the React-MDL Material Design components.",
    tech: ["React", "React Router", "React-MDL", "Bootstrap"],
    links: {
      demo: "https://bvcrisostomo2.github.io/react-portfolio/",
      source: "https://github.com/bvcrisostomo2/react-portfolio",
    },
    year: "2019",
  },
  {
    name: "Red Tomato Design Studio",
    glyph: "RT",
    tagline: "Website for a branding and design studio.",
    description:
      "The studio's site, built while I worked at Red Tomato: services, a portfolio of client work, an about page and contact details.",
    tech: ["React"],
    links: { demo: "https://redtomatodesignstudio.netlify.app/" },
    featured: true,
    year: "2018",
  },
  {
    name: "U:bot",
    glyph: "U:",
    tagline: "HR chatbot foundation built at UnionBank.",
    description:
      "Built the foundation of U:bot during my internship at UnionBank of the Philippines: a chatbot used by the HR departments to answer employee questions.",
    tech: ["PHP", "AIML", "Program O", "MySQL"],
    links: { source: "https://github.com/bvcrisostomo2/UPB_Chatbot" },
    year: "2017",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
