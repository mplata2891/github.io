// src/data/labs/pool-boy/pool-boy.js
import snippet from './snippet.cs?raw';
import fullCode from './full-code.cs?raw';

export const poolBoyLab = {
  id: "ECE2310",
  type: "software",
  courseName: "Object-Oriented Programming",
  professor: "Prof. Mei Klein",
  tags: ["C#", "WINDOWS FORMS", "OOP", "PATHFINDING"],
  
  blurb: `A Windows Form application simulating a pool maintenance routing system using object-oriented principles and nearest-neighbor pathfinding.`,
  
  readme: `Developed a C# Windows Form application utilizing strict Object-Oriented Programming (OOP) principles. Architected modular classes for Pool, Temperature, Location, and MaintenanceCrew. Implemented a Nearest Neighbor pathfinding algorithm to calculate the most efficient Euclidean route for a maintenance crew to traverse and service multiple coordinate-based pool locations, updating their properties dynamically in the GUI.`,
  
  primaryLanguage: "csharp",
  repoUrl: "https://github.com/mplata2891/ECE2310_FinalProject_PoolBoyIndustries/tree/main",
  
  codeSnippet: snippet,
  fullCode: fullCode
};