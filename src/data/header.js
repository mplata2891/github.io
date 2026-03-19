// src/data/header.js
// Centralized registry for top-level navigation nodes
import { SYS_LINKS } from './sys_config.js';

export const HEADER = {
  initials: "M.P.",
  systemName: "System_Root",
  
  // Array mapping for standard text links
  navLinks: [
    { label: "// GitHub", url: SYS_LINKS.github },
    { label: "// LinkedIn", url: SYS_LINKS.linkedin }
  ],
  
  // Isolated object for the bordered action button
  actionButton: {
    label: "[ RESUME.PDF ]",
    url: SYS_LINKS.resume
  }
};