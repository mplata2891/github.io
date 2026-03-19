// src/data/coursework.js
// Centralized registry for academic coursework and foundational modules

// Section Context
export const COURSEWORK_DESCRIPTION = "A curated selection of my academic " +
  "coursework, outlining the theoretical foundation behind my engineering " +
  "practice. These modules cover core computer science, electrical engineering," +
  " and low-level system design principles.";

export const COURSEWORK = [
  {
    cluster: "SYSTEMS_&_ARCHITECTURE",
    logs: [
      "Computer Architecture",
      "Op Sys for Embedded Apps",
      "Adv Digital Design (Verilog HDL)",
      "Microprocessor Assembly",
      "Microcontrollers & Embedded Systems",
      "Computer Networks"
    ]
  },
  {
    cluster: "SOFTWARE_&_ALGORITHMS",
    logs: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++, Java, C#)",
      "Database Design & Programming",
      "Python Programming",
      "Intelligence Systems for Engineering",
      "Machine Learning"
    ]
  },
  {
    cluster: "HARDWARE_&_THEORY",
    logs: [
      "Digital / Electrical Circuit Analysis",
      "Digital Logic Design",
      "Signals & Systems",
      "Linear Algebra & Applied Statistics"
    ]
  }
];