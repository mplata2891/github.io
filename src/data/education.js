// src/data/education.js
// Centralized registry for formal education credentials and academic achievements

// Section Context
export const EDUCATION_DESCRIPTION = "Formal academic training and degrees earned," + 
  " establishing the theoretical and mathematical foundation for my engineering career.";

export const EDUCATION = [
  {
    id: "CREDENTIAL_01",
    degrees: [
      "B.S. Computer Engineering"
    ],
    institution: "California State Polytechnic University, Pomona",
    date: "MAY 2025",
    status: "STATUS: VERIFIED",
    description: "Core coursework covering embedded systems, data architecture, and hardware/software integration protocols.",
    metrics: [
      { label: "Academic Standing", value: "Good Standing" },
      { label: "Honors", value: "Dean's List (Final Semester)"}
    ]
  },
  {
    id: "CREDENTIAL_02",
    degrees: [
      "A.A. Computer Science Information Technology",
      "A.S. Mathematics"
    ],
    institution: "East Los Angeles College",
    date: "JUN 2021",
    status: "STATUS: VERIFIED",
    description: "Foundational computation logic, advanced calculus series, and physics (Mechanics, Electricity & Magnetism).",
    metrics: [
      { label: "Academic Standing", value: "Good Standing" },
      { label: "Honors", value: "Dean's List (4 Semesters)" }
    ]
  }
];