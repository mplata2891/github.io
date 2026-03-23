// src/data/labs/numerical-analysis/numerical-analysis.js
import snippet from './snippet.cpp?raw';
import fullCode from './full-code.cpp?raw';

export const numericalAnalysisLab = {
  id: "ECE3310_RECURSION",
  type: "software",
  courseName: "Data Structures & Algorithms",
  professor: "Prof. Meng Lai Yin",
  tags: ["C++", "RECURSION", "DATA_STRUCTURES", "FILE_I/O"],
  
  problem: `Process 2020 US Census data using a custom Array ADT and compute
  the national population mean through a purely recursive algorithm.`,

  solution: `C++ program that ingests state populations from an external text
  file into a custom Array ADT. A pure recursive function computes the
  national average, translating formal mathematical proof into executable
  logic without iteration.`,

  primaryLanguage: "cpp",
  repoUrl: "https://github.com/mplata2891/ECE3310_Project1_NumericalAnalysis/tree/main",
  
  codeSnippet: snippet,
  fullCode: fullCode
};