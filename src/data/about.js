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
  "Born and raised in Los Angeles, with roots deep in Ciudad México. Proudly" +
  " Chicano. I've always moved between worlds, and that's shaped how I think" +
  " about systems: nothing exists in isolation.",

  "My B.S. in Computer Engineering is the result of a 14-year effort built" +
  " alongside a full-time career, raising two kids, and navigating deep personal" +
  " loss. That context isn't an excuse. It's the environment where I developed" +
  " the discipline to finish hard things.",

  "I work at the intersection of hardware and software because that's where the" +
  " interesting problems live. The low-level stuff, the timing constraints, the" +
  " register maps, the things that break in ways a debugger can't catch. . ." +
  " that's where I want to be.",

  "There is no going back. Only execution."
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