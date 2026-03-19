// src/data/labs/numerical-analysis/numerical-analysis.js
import snippet from './snippet.cpp?raw';
import fullCode from './full-code.cpp?raw';

export const numericalAnalysisLab = {
  id: "ECE3310_RECURSION",
  type: "software",
  courseName: "Data Structures & Algorithms",
  professor: "Prof. Meng Lai Yin",
  tags: ["C++", "RECURSION", "DATA_STRUCTURES", "FILE_I/O"],
  
  blurb: `Developed a C++ application utilizing an Array Abstract Data Type (ADT) to process 2020 US Census data and recursively calculate the national population mean.`,
  
  readme: `Engineered a numerical analysis program to ingest state names and populations from external text files into a custom Array ADT ('UsaPopulations'). Implemented a pure recursive algorithm to compute the national population average, demonstrating strong memory stack management and the ability to translate formal mathematical proofs into executable C++ logic.`,
  
  primaryLanguage: "cpp",
  codeSnippet: snippet,
  fullCode: fullCode
};