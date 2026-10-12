import { profile } from "@/data/profile";
import { education } from "@/data/skills";

const siteUrl = `https://${profile.domain}`;

/** schema.org Person for the site owner, shared by the homepage and the About page. */
export const person = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: profile.name,
  url: `${siteUrl}/`,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: profile.role,
  description: profile.intro,
  worksFor: { "@type": "Organization", name: profile.currentCompany, url: profile.currentCompanyUrl },
  alumniOf: education.map((entry) => ({ "@type": "CollegeOrUniversity", name: entry.school })),
  homeLocation: { "@type": "Place", name: profile.location },
  sameAs: profile.socials.flatMap((social) => (social.href ? [social.href] : [])),
};

/** schema.org ProfilePage for /about/, which tells search engines the profile photo is the page's main image. */
export const aboutProfilePage = {
  "@type": "ProfilePage",
  url: `${siteUrl}/about/`,
  primaryImageOfPage: { "@type": "ImageObject", url: person.image },
  mainEntity: person,
};
