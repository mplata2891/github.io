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
  blurb: `Design and implement a text-based adventure game that fulfills strict
  architectural requirements, including persistent save states written to a file,
  multidimensional arrays for map traversal, and dynamic probability mechanics.`,
  
  // The Solution
  readme: `Developed "LastLaugh," a Java-based escape room game. Engineered a 
  modular, object-oriented architecture utilizing dedicated utility classes 
  (FileUtility, GameDriver, InputUtility) to separate game logic from state 
  management. Implemented a dynamic risk calculator where failing puzzle 
  manipulations or riddles progressively increases the player's probability 
  of death utilizing random number generation.`,
  
  primaryLanguage: "java",
  repoUrl: "https://github.com/mplata2891/last-laugh",
  
  codeSnippet: snippet,
  fullCode: fullCode
};