// src/data/footer.js
import { SYS_LINKS } from './sys_config.js';

export const FOOTER = {
  statusText: "// END_OF_LOG",
  
  // Array mapping for external communication links
  commLinks: [
    { label: "[ GITHUB ]", url: SYS_LINKS.github },
    { label: "[ LINKEDIN ]", url: SYS_LINKS.linkedin }, // <-- Fixed routing
    { label: "[ OPEN_COMMLINK ]", url: SYS_LINKS.email } // (Assuming you have email in your SYS_LINKS too!)
  ],
  
  // Versioning and Identity
  copyrightInitials: "M.P.",
  systemVersion: "SYS_VER_1.0.0"
};