import jobIconRaw from "../assets/icons/job-title-icon.svg?raw";
import companyIconRaw from "../assets/icons/company-icon.svg?raw";
import locationIconRaw from "../assets/icons/location-icon.svg?raw";
import { sanitizeToOutline } from "../lib/svg";

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Full Stack Developer",
    company: "Nexlaw Pty Ltd",
    region: "Malaysia",
    description:
      "Developed Microsoft Word Add-In integrated with NexLaw platform, which helps lawyers to streamline contract review and drafting processes. Design and manage the web application back-end including database and API integration with AWS infrastructure. Design and build the web application front-end including deployment to AWS infrastructure. Debug, maintain and enhance the web application robustness, performance, and reliability",
    technologies: ["Laravel", "MySQL", "Vue", "AWS", "Python", "Axios", "Nuxt"],
  },
  {
    title: "Full Stack Developer",
    company: "Nexlaw Pty Ltd",
    region: "Malaysia",
    description:
      "Developed backend API & frontend view for audience intelligence feature - NexIntelligence - for NexMind platform. Design and manage the web application back-end including database and API integration with AWS infrastructure. Design and build the web application front-end including deployment to AWS infrastructure. Debug, maintain and enhance the web application robustness, performance, and reliability",
    technologies: ["Laravel", "MySQL", "Vue", "AWS", "Python"],
  },
  {
    title: "Web Developer",
    company: "NexMind AI Sdn Bhd",
    region: "Malaysia",
    description:
      "Maintain and manage web hosting and DNS for the company and clients. Debug, maintain and enhance websites for the company and clients via WordPress, Shopify, OpenCart and Wix. Manage user accounts and configuring and troubleshooting applications via Office 365.",
    technologies: [
      "WHM/cPanel",
      "WordPress",
      "Shopify",
      "Cloudflare",
      "Google Analytics",
      "Google Tag Manager",
      "Google Search Console",
    ],
  },
];

export type WorkItem = (typeof work)[number];
