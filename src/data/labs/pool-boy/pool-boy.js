// src/data/labs/pool-boy/pool-boy.js
import snippet from './snippet.cs?raw';
import fullCode from './full-code.cs?raw';

export const poolBoyLab = {
  id: "ECE2310",
  type: "software",
  courseName: "Object-Oriented Programming",
  professor: "Prof. Mei Klein",
  tags: ["C#", "WINDOWS FORMS", "OOP", "PATHFINDING"],
  
  problem: `Design a Windows Form application that models a pool maintenance
  routing system using object-oriented principles and an efficient
  pathfinding strategy.`,

  solution: `C# Windows Form app with modular OOP classes for Pool, Location,
  Temperature, and MaintenanceCrew. A nearest-neighbor algorithm calculates
  the optimal Euclidean route across coordinate-based pool locations,
  updating each pool's properties dynamically in the GUI.`,
  
  primaryLanguage: "csharp",
  repoUrl: "https://github.com/mplata2891/ECE2310_FinalProject_PoolBoyIndustries/tree/main",
  
  codeSnippet: snippet,
  fullCode: fullCode
};