// src/data/projects/tiny-leaders/tiny-leaders.js
import layoutSnippet from './layout-snippet.astro?raw';

export const tinyLeadersProject = {
  id: "TINY_LEADERS_REBORN",
  category: "Community Infrastructure // Web Portal",
  title: "Tiny Leaders Reborn Platform",
  
  // Fills exactly half the grid
  span: "md:col-span-1", 
  status: "ACTIVE",
  
  role: "Lead Developer / Core Committee",
  
  description: `Architected and developed a static web portal using Astro, HTML, and CSS to serve as the official hub for the Tiny Leaders Reborn MTG format. Designed reusable, performant UI components to cleanly present complex rulesets, community announcements, and deep-dive design philosophy articles.`,
  
  impact: `Established a centralized, highly scalable platform hosted on Netlify to support a geographically distributed player base. Replaced fragmented social media governance with a unified, version-controlled source of truth.`,
         
  tags: ["ASTRO", "HTML/CSS", "JAVASCRIPT", "NETLIFY", "GIT"],
  
  // just one subsystem to show off front-end architecture
  subsystems: [
    {
      name: "Astro Component Architecture",
      description: "Engineered highly modular layouts utilizing Astro's 'Islands' architecture, ensuring zero-javascript overhead for static content while maintaining dynamic routing capabilities.",
      code: layoutSnippet,
      lang: "astro"
    }
  ],
  
  // urls
  repoUrl: "https://github.com/TinyLeadersCommittee/Official-TLR.com",
  liveUrl: "https://charming-fairy-527f9e.netlify.app/" // Update when I have a live staging link!!!!
};