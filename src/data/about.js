// src/data/about.js
// Centralized registry for personal background and offline metrics

// Section Context
export const ABOUT_DESCRIPTION = "A brief overview of my background, engineering " +
  "philosophy, and offline pursuits. This section provides context on who I am " +
  "beyond the code and hardware.";

export const ABOUT = {
  header: "OPERATOR_PROFILE",
  sys_id: "M1-K3",
  
  background: [
    "Born and raised in Los Angeles with a deep cultural heritage " +
    "rooted in Ciudad Mexico. Proudly Chicano, reclaiming " +
    "the term 'pocho' as a badge of honor.",
    "I operate at the exact intersection of creative vision and " +
    "strict engineering discipline. I am built for uncomfortability, " +
    "sacrifice, and the grit required to solve complex problems.",
    "My B.S. in Computer Engineering is the result of a 14-year " +
    "marathon. I built this foundation while working full-time, " +
    "raising two children, and pushing forward through profound " +
    "personal loss.",
    "There is no going back, only execution."
  ],
  
  // creative outlets here
  offline_metrics: [
    {
      category: "Analog_Rhythms",
      details: "Playing the drums to maintain mechanical precision " +
               "and creative timing."
    },
    {
      category: "Culinary_Experimentation",
      details: "Developing custom beef marinades and adobos for " +
               "an exquisite grilling experience."
    },
    {
      category: "Tabletop_Strategy",
      details: "Rules stewardship and format architecture for " + 
      "'Tiny Leaders Reborn' as a Core Member of the Committee."
    }
  ]
};