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
      "Developed a Microsoft Word Add-In integrated with the NexLaw platform to help lawyers streamline contract review and drafting processes. Designed and managed the web application’s back-end, including database architecture and API integration within AWS infrastructure. Built and deployed the front-end interface to AWS, ensuring a responsive and user-friendly experience. Continuously debugged, maintained, and enhanced the application’s overall robustness, performance, and reliability to support seamless user operations.",
    technologies: ["Laravel", "MySQL", "Vue", "AWS", "Python", "Axios", "Nuxt"],
  },
  {
    title: "Full Stack Developer",
    company: "Nexlaw Pty Ltd",
    region: "Malaysia",
    description:
      "Developed the back-end APIs and front-end interface for the NexIntelligence Audience Intelligence feature within the NexMind platform. Designed and managed the web application’s back-end, including database architecture and API integration with AWS infrastructure. Built and deployed the front-end components to AWS, ensuring a responsive and intuitive user experience. Continuously debugged, optimized, and enhanced the application’s performance, stability, and reliability to support data-driven analytics and seamless functionality.",
    technologies: ["Laravel", "MySQL", "Vue", "AWS", "Python"],
  },
  {
    title: "Web Developer",
    company: "NexMind AI Sdn Bhd",
    region: "Malaysia",
    description:
      "Maintained and managed web hosting environments and DNS configurations for both the company and its clients. Oversaw and enhanced websites built on platforms such as WordPress, Shopify, OpenCart, and Wix, ensuring optimal performance and user experience. Managed user accounts and handled application configuration and troubleshooting through Office 365, supporting smooth day-to-day operations and client service delivery.",
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
