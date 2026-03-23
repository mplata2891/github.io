// src/data/labs/last-laugh/last-laugh.js
import snippet from './snippet.java?raw';
import fullCode from './main.java?raw';

export const lastLaughLab = {
  id: "COSCI_290",
  type: "software",
  courseName: "Introduction to Java",
  professor: "Prof. Sina Tuy",
  tags: ["JAVA", "OOP", "FILE_I/O", "PROBABILITY"],
  
  // The Problem
  problem: `Build a text-based adventure game with persistent save states,
  multidimensional map traversal, and dynamic probability mechanics.`,

  solution: `Java escape room game with modular OOP architecture separating
  game logic, file I/O, and input handling. Failed puzzles and wrong
  riddle answers escalate the player's death probability each attempt.`,
  
  primaryLanguage: "java",
  repoUrl: "https://github.com/mplata2891/last-laugh",
  
  codeSnippet: snippet,
  fullCode: fullCode
};