// src/data/identity.js
// Centralized registry for personal identity, professional summary, and narrative biography

/* ==========================================================================
   IDENTITY DATA TEMPLATE
   ==========================================================================

  export const IDENTITY = {
    // The top-level system status indicator
    statusText: "[ System_Ready ]",
    
    // my professional name
    name: "FIRST LAST",
    
    // my primary credential or role
    title: "> CREDENTIAL_OR_TITLE_",
    
    // The 1-2 sentence executive summary
    shortBio: "High-impact summary of your technical focus.",
    
    // The longer narrative
    fullBio: [
      "Paragraph one detailing your background.",
      "Paragraph two detailing your operational philosophy."
    ]
  };

========================================================================== */

export const IDENTITY = {
  // The top-level system status indicator
  statusText: "[ System_Ready ]",
  
  // my professional name
  name: "MIKE PLATA",
  
  // my primary credential or role
  title: "> COMPUTER ENGINEER_",
  
  // The 1-2 sentence executive summary
  shortBio: [
    "Recent Computer Engineering graduate building systems across FPGA,", 
    " embedded software, and robotics."
  ],
  
  // The longer narrative
  fullBio: [
    "Experience includes FPGA-based design, embedded C on microcontrollers, and" +
    " ROS2-based robotics systems, along with a deployed web platform for a" +
    " live community",
    
    "Focused on  practical system integration from low-level hardware to" +
    " higher-level software, with an emphasis on building functional systems," +
    " clear documentation, and working within team-based environments."
  ]
};